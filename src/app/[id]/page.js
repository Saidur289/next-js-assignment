import React from 'react';

const SingleBlog = async({params}) => {
    const id = (await params).id 
    console.log(id)
    return (
        <div>
            <h1>Blog {id}</h1>
            
        </div>
    );
};

export default SingleBlog;