import React from 'react';

const AppDetailsPage = async({params}) => {
    const {id} = await params;
    console.log(id, "from details page");


    return (
        <div>
            This is app details page
            <p>{id}</p>

        </div>
    );
};

export default AppDetailsPage;