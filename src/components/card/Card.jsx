import React from 'react';
import Img from '../../assets/anujpandey.jpg';

export default function Card() {
    return (
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl rounded-lg overflow-hidden shadow-xl mx-auto mt-8 bg-white">
            <img className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover object-center" src={Img} alt="Anuj Pandey" />
            <div className="p-6">
                <h1 className="text-3xl font-semibold text-gray-800 text-center">Anuj Pandey</h1>
                <p className="text-lg text-gray-600 text-center mt-1">Software Engineer</p>
                <p className="text-sm text-gray-500 text-center mt-1">Mumbai, India</p>
                <div className="mt-6 flex justify-center">
                    <a 
                        href="your-cv-link.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white text-lg font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition ease-in-out duration-300"
                    >
                        View CV
                    </a>
                </div>
            </div>
        </div>
    );
}
