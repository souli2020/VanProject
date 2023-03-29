import React from 'react';

function NotFound() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh'
        }}>
            <h1 style={{
                fontSize: '2rem',
                marginBottom: '1rem'
            }}>
                Sorry, the page you're looking for doesn't exist or was removed.
            </h1>
            <p style={{
                fontSize: '1.2rem',
                textAlign: 'center'
            }}>
                Please check the URL or navigate back to the homepage.
            </p>
        </div>
    );
}

export default NotFound;
