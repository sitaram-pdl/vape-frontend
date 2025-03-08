import { Upload, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDropzone, Accept } from 'react-dropzone';

interface FileUploadProps {
  value?: File[];
  error?: string;
  onChange?: (files: File[] | null) => void;
}

const ImageUpload: React.FC<FileUploadProps> = ({
  value = [],
  error,
  onChange,
}) => {
  const [files, setFiles] = useState<File[]>(value);

  useEffect(() => {
    setFiles(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value.length]);

  const onDrop = (acceptedFiles: File[]) => {
    const validFiles = acceptedFiles;

    setFiles((prevFiles) => [...prevFiles, ...validFiles]);
    onChange?.([...files, ...validFiles]);
  };

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onChange?.(newFiles);
  };

  const accept: Accept = {
    'image/jpeg': [],
    'image/png': [],
    'image/gif': [],
    'image/tiff': [],
    'image/avif': [],
    'image/webp': [],
    'image/heic': [],
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    multiple: true,
  });

  return (
    <div className="mt-2 w-full">
      <div
        className={`block cursor-pointer rounded-xl border-2 border-dashed bg-white  p-8 transition-all ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        {...getRootProps()}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <Upload className="mb-4 size-8 text-gray-400" />
          <p className="mb-1 text-gray-600">Upload Images</p>
          <p className="text-sm text-gray-500">
            Drop files here or{' '}
            <span className="text-orange-500 hover:text-orange-600">
              browse
            </span>{' '}
            from your device
          </p>
        </div>
        <input {...getInputProps()} className="hidden" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {files.map((file, index) => (
          <div key={index} className="relative size-24">
            <img
              src={URL.createObjectURL(file)}
              alt={file.name}
              className="size-full rounded-lg object-cover"
            />
            <button
              className="absolute right-1 top-1 rounded-full bg-red-500 p-1 text-white"
              onClick={() => removeFile(index)}
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
