import React from 'react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
const DashboardPage = async() => {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    return (
        <div className='flex flex-col items-center justify-center mt-24'>
            <p className='text-2xl font-bold text-blue-600'>Hi {user?.given_name}, Welcome To Your Profile</p>
            
        </div>
    );
};

export default DashboardPage;