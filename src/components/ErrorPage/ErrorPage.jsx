import PropTypes from "prop-types";

ErrorPage.propTypes = {
  error: PropTypes.instanceOf(Error),
};

function ErrorPage({ error }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4 text-center text-gray-200">
        Oops! Something went wrong
      </h2>
      <p className="text-red-400 mb-2">{error.message}</p>
      <p className="text-gray-300">
        Please try again later or refresh the page.
      </p>
    </div>
  );
}

export default ErrorPage;
