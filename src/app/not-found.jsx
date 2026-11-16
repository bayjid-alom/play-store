import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>

            <div className='space-y-3 text-center'>
                <h2 className="text-5xl text-center text-extrabold text-red-500">404!</h2>
                <p className='text-2xl font-bold'>Page is not found!</p>
                <Link className='btn btn-primary btn-sm' href="/">Go home</Link>

            </div>
        </div>
    );
};

export default NotFoundPage;