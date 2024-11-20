import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-primary-bg">
      <h1 className="text-9xl font-bold text-heading">404</h1>
      <h2 className="text-3xl text-primary-text font-poppins mt-4">
        Page Not Found
      </h2>
      <p className="text-lg text-slate-gray mt-2 text-center">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <button
        className="mt-6 px-6 py-3 bg-ice-blue text-primary-text font-bold rounded-lg shadow-lg hover:bg-frost-green transition-all duration-300"
        onClick={handleGoHome}
      >
        Go Back to Home
      </button>
    </div>
  );
}

export default ErrorPage;
