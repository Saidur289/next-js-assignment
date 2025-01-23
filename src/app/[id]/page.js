import getAllBlog from '@/hooks/getAllBlog';
import getBlog from '@/hooks/getBlog';
import React from 'react';

export async function generateStaticParams(){
    const posts = await getAllBlog()
    return posts.map(post => ({
        id: post.id.toString()
    }))
}

const SingleBlog = async({params}) => {

    const id = (await params).id 
    console.log(id)
    const singleBlog = await getBlog(id)
    
    return (
        <div className='mt-10 p-10 border-2 m-5'>
            <h1 className='text-xl font-bold'>Blog {id}</h1>
            <p className='text-blue-600 py-3 font-bold'>{singleBlog.title}</p>
            <p className='pb-3'>{singleBlog.body}</p>
            
        </div>
    );
};

export default SingleBlog;