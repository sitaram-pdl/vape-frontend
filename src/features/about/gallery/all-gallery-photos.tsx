import { SquareCheck } from 'lucide-react';
import Image from 'next/image';

interface ChildProps {
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  images?: string[];
  selected: string[];
}

const AllGalleryPhotos: React.FC<ChildProps> = ({
  images = [],
  selected = [],
  setSelected,
}) => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-12 gap-4">
        {images.map((img, index) => {
          return (
            <button
              className="relative col-span-6 md:col-span-4 lg:col-span-3"
              key={index}
              onClick={() => {
                setSelected((prev) => {
                  if (prev.includes(img)) {
                    return prev.filter((item) => item !== img);
                  }

                  return [img, ...prev];
                });
              }}
            >
              {selected.includes(img) && (
                // <input type="checkbox" checked={true} className="" />
                <div className="bg-black">
                  <SquareCheck className="absolute left-2 top-2 text-red-500" />
                </div>
              )}
              <Image
                src={img}
                alt="Image"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AllGalleryPhotos;
