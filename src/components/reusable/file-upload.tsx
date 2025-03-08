import { Upload } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Accept, useDropzone } from 'react-dropzone';

interface FileUploadProps {
  value?: File;
  error?: { message: string };
  onChange?: (file: File | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ value, error, onChange }) => {
  const [fileState, setFileState] = useState<File | null>(value || null);

  useEffect(() => {
    setFileState(value || null);
  }, [value]);

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    validateFile(file);
  };

  const validateFile = (file: File) => {
    if (file.type === 'application/pdf' && file.size > 0) {
      setFileState(file);
      onChange?.(file);
    } else {
      setFileState(null);
      onChange?.(null);
    }
  };

  const accept: Accept = { 'application/pdf': [] };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept });

  return (
    <div className="w-full p-5">
      <div
        className={`block cursor-pointer rounded-xl border-2 border-dashed p-8 transition-all ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        {...getRootProps()}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <Upload className="mb-4 size-8 text-gray-400" />
          <p className="mb-1 text-gray-600">Upload a PDF</p>
          <p className="text-sm text-gray-500">
            {fileState ? (
              <span className="text-green-600">{fileState.name}</span>
            ) : (
              <>
                Drop file here or{' '}
                <span className="text-orange-500 hover:text-orange-600">
                  browse
                </span>{' '}
                from your device
              </>
            )}
          </p>
        </div>
        <input {...getInputProps()} className="hidden" />
      </div>
    </div>
  );
};

export default FileUpload;
