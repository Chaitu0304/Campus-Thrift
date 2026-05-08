import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-primary-100">404</h1>
        <h2 className="text-3xl font-bold text-foreground mt-4 mb-2">Page Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 shadow-md transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
