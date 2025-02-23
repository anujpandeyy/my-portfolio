import React from 'react';
import { IoMdHome } from "react-icons/io";
import { FaFile } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { RiToolsFill } from "react-icons/ri";

export default function NavBar(){
    return(
        <>
        <div className="flex justify-center p-3">
            <ul className='flex space-x-6'>
                <li><a href="#"><IoMdHome style={{fontSize: '40px'}}/></a></li>
                <li><a href="#"><FaFile style={{fontSize: '40px'}}/></a></li>
                <li><a href="#"><GoProjectSymlink style={{fontSize: '40px'}}/></a></li>
                <li><a href="#"><RiToolsFill style={{fontSize: '40px'}}/></a></li>
            </ul>
        </div>
        </>
    );
}