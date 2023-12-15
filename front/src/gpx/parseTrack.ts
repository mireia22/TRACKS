import gpxParser from "gpxparser";
import { GpxData } from "../types/Type";

export function parseTrack(gpxData: string): GpxData {
  const gpx = new gpxParser();
  gpx.parse(gpxData);

  const { points, distance, elevation } = gpx.tracks[0];

  const newGpxData = {
    points: points.map((point) => ({
      lat: point.lat,
      lon: point.lon,
      ele: point.ele,
      time: point.time.toISOString(),
    })),
    totalDistance: distance.total,
    elevation: {
      min: elevation.min,
      max: elevation.max,
      avg: elevation.avg,
    },
    personRecorder: extractNameFromXml(gpxData),
  };

  return newGpxData;
}

function extractNameFromXml(xmlString: string): string | null {
  const match = xmlString.match(/<name>([\s\S]*?)<\/name>/);
  return match ? match[1].trim() : null;
}
