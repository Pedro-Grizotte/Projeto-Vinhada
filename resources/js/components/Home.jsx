import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FormUser from './FormUser';
import OurTeam from './OurTeam';

function Home() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="bg-rose-900">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg viewBox="0 0 1024 1024" aria-hidden="true" className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
                        <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                            Role do vinho? <br/> É com o nosso app!
                        </h2>
                        <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                            Aqui você pode gerenciar seus eventos de degustação de vinhos,
                            marcar presença, e deixar deixar com que imprevistos não atrapalhem.
                        </p>
                    </div>
                    {/* Formulário de Log In */}
                    {showForm && <FormUser onClose={() => setShowForm(false)} />}

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#" onClick={() => setShowForm(true)} className="rounded-md bg-rose-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Sign In
                        </a>
                        <a href="#" className="text-sm/6 font-semibold text-white hover:text-indigo-500">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img alt="App screenshot" src="https://cdn.prod.website-files.com/67859049c02d67b2cfcceebf/67859049c02d67b2cfccf84c_reclaim-google-calendar-comparison-calsync.svg" width={1824} height={1080} className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"/>
                    </div>
                </div>
            </div>

            {/* Sessão de Comentários */}

            <section className="relative isolate overflow-hidden bg-rose-300 px-6 py-24 sm:py-32 lg:px-8">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <img alt="" src="/logo.svg" className="mx-auto h-12" />
                    <figure className="mt-10">
                        <blockquote className="text-center text-xl/8 font-semibold text-rose-900 sm:text-2xl/9">
                            <p>
                            “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                            molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                            </p>
                        </blockquote>
                        <figcaption className="mt-10">
                            <img alt="" src="/carol.png" className="mx-auto size-10 rounded-full" />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div className="font-semibold text-rose-900">Carolzinha</div>
                                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                                    <circle r={1} cx={1} cy={1} />
                                </svg>
                                <div className="text-gray-600">Estudante</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>

            {/* Nosso time */}
            <OurTeam />

            <script src='../scripts/Forms.js'></script>
        </div>
    );
}

export default Home;