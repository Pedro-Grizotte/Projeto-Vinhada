import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FormRegister() {
    return (
        <div id='form-register' className="mt-8 bg-white/5 sm:rounded-3xl sm:border sm:border-gray-200 sm:bg-white/10">
            <div className="icon-close relative flex justify-end p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white cursor-pointer bg-rose-900 rounded-tr-2xl rounded-bl-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => document.getElementById('form-register').style.display = 'none'}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img class="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/7801/wine-glass.svg" alt="Your Company" />
                    <h2 class="mt-8 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
                </div>

                <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" class="block text-sm/6 font-medium text-white">Email address</label>
                            <div class="mt-2">
                            <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                            <label for="password" class="block text-sm/6 font-medium text-white">Password</label>
                            <div class="text-sm">
                                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                            </div>
                            </div>
                            <div class="mt-2">
                            <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" class="flex w-full justify-center rounded-md bg-rose-900 px-3 py-1.5 text-sm/6 font-semibold text-rose-200 shadow-xs hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p class="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?
                        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FormRegister;