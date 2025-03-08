const NoDataComponent = () => {
  return (
    <div className="py-10 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="mx-auto size-16 text-gray-500"
      >
        <path
          d="M12 4v16m8-8H4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p className="mt-4 text-gray-500">No data available to display</p>
    </div>
  );
};

export default NoDataComponent;
