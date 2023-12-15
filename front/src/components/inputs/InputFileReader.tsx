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
    <div className="flex flex-col items-center">
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        Upload file
      </label>
      <input
        className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-purple-50
"
        id="file_input"
        type="file"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default InputFileReader;
