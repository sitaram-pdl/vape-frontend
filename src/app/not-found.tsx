import { Link } from '@/components/ui/link';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 text-center font-semibold">
      <h1 className="text-6xl text-blue-600">404</h1>
      <p className="mt-4 text-2xl text-gray-700">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="mt-6 text-lg text-blue-500 transition-colors hover:text-blue-700 hover:underline"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
