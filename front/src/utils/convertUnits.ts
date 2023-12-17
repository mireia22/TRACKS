import { format } from "date-fns";
import { differenceInHours, differenceInMinutes } from "date-fns";

export const toKM = (m: number | null) => m && (m / 1000).toFixed(2);

export const formatDate = (time, formatString = "HH:mm") => {
  return format(new Date(time), formatString);
};

export const totalTime = (initialTime, finishTime) => {
  const startDate = new Date(initialTime);
  const endDate = new Date(finishTime);

  const hoursDifference = differenceInHours(endDate, startDate);
  const minutesDifference = differenceInMinutes(endDate, startDate) % 60;

  return `${hoursDifference}h ${minutesDifference}m`;
};
