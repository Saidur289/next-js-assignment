import Link from 'next/link';
import React from 'react';
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar = async() => {
    const {getUser, isAuthenticated} = getKindeServerSession()
    const user = await getUser()
    return (
        <div className='flex justify-between items-center h-[8vh] p-5 py-8 border-b-2'>
            <div>
                <Link href={'/'} className='text-2xl font-bold'>Logo</Link>
            </div>
            <div className='flex items-center gap-x-5'>
                {/* <Link href = '/profile'>Profile</Link> */}
                <Link href = '/dashboard'>Profile</Link>
                {(await isAuthenticated())? <> <LogoutLink >
                <button className='px-3 py-1 bg-gray-200'>Log Out</button>
                </LogoutLink></>: <>  <LoginLink >
                <button className='px-3 py-1 bg-gray-200'>Login</button>
                </LoginLink>
                <RegisterLink>
                <button className='px-3 py-1 bg-gray-200'>Sign Up</button>
                </RegisterLink></>}
              
            </div>
            
        </div>
    );
};

export default Navbar;