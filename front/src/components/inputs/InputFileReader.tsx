import { useGpxDataContext } from "../../hooks/useGpxDataContext";

interface FileInputProps {
  onFileRead: (fileData: string, title: string) => void;
}

const InputFileReader: React.FC<FileInputProps> = ({ onFileRead }) => {
  const { gpxData } = useGpxDataContext();
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (fileInput?.files?.length) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const fileData = event.target.result;
        if (event.target) {
          onFileRead(fileData);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <input
      id="file_input"
      type="file"
      onChange={handleFileChange}
      className="bg-black p-1"
    />
  );
};

export default InputFileReader;
