import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div className="not-found-container">
            <h1>
                Sorry, the page you're looking for doesn't exist or was removed.
            </h1>
            <p >
                Please check the URL or navigate back to the homepage.
                <Link to="/" className="link-button">Return to Home</Link>

            </p>
        </div>
    );
}

export default NotFound;
