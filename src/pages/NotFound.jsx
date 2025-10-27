// src/pages/NotFound.jsx
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

// 404 page for unknown routes 
const NotFound = () => {
  // useRouteError hook provides error details
  const error = useRouteError();
  console.error(error);

  return (
    <div className="not-found-container">
      <h1>Oops! 404 - Page Not Found</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* Display proper error details on the UI */}
      <div className="error-details">
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <Link to="/" className="btn">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
