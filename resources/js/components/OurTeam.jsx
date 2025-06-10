import React, { useState, useEffect } from 'react';

function OurTeam() {
    const peoples = [
        {
            name: 'Pedro Henrique',
            role: 'Full Stack Developer',
            imageUrl: '/images/pedro.png',
            liinkedinUrl: 'https://www.linkedin.com/in/pedro-grizotte/',
            githubUrl: 'https://github.com/Pedro-Grizotte',
        },
        {
            name: 'Pedro Henrique',
            role: 'UX/UI Designer',
            imageUrl: '/images/pedroHenrique.png',
            liinkedinUrl: 'https://www.linkedin.com/in/pedro-grizotte/',
            githubUrl: 'https://github.com/Pedro-Grizotte',
        }
    ]

    return (
        <>
            <div className='py-32 bg-gray-900'>
                <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-3xl font-bold tracking-tight text-teal-500 sm:text-4xl">
                            Meet Our Team
                        </h3>
                        <p className='mt-4 text-lg leading-8 text-white'>
                            Our team is comprised of experienced professionals who are passionate about delivering exceptional results.
                        </p>
                    </div>
                    <ul className="mx-auto max-w-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gay-y-16 lg:max-0 lg:max-w-none">
                        {peoples.map((person) => (
                            <li key={person.name}>
                                <img src={person.imageUrl} className='w-56 h-56 mx-auto my-8 rounded-full' alt={person.name} />
                                <h3 className='mt-4 text-white font-semibold leading-7 tracking-light text-base'>{person.name}</h3>
                                <p className='mt-4 leading-6 text-teal-500 tracking-tight text-lg'>
                                    {person.role}
                                </p>
                                <ul className='mt-3 flex justify-center gap-x-3'>
                                    <li>
                                        <a href={person.liinkedinUrl} className='text-teal-500 hover:text-white'>
                                            <ion-icon name="logo-linkedin"></ion-icon>
                                        </a>
                                        <a href={person.githubUrl} className='text-teal-500 hover:text-white ml-4'>
                                            <ion-icon name="logo-github"></ion-icon>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default OurTeam;