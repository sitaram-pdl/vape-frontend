import React from 'react';

interface ViewerProps {
  currentResume: string;
  closeViewer: () => void;
}

const PdfViewer: React.FC<ViewerProps> = ({ closeViewer, currentResume }) => {
  return (
    <button
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/35"
      onClick={closeViewer}
    >
      <button
        className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-lg bg-white p-4 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-2 top-2 text-2xl text-gray-500 hover:text-black"
          onClick={closeViewer}
        >
          ✖
        </button>
        {currentResume.endsWith('.pdf') ? (
          <iframe
            src={currentResume}
            className="h-[80vh] w-full"
            title="Resume"
          />
        ) : (
          <img src={currentResume} alt="Resume" className="w-full" />
        )}
      </button>
    </button>
  );
};

export default PdfViewer;
