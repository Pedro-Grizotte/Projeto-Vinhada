import React, { useState, useEffect } from 'react';
import authService from '../services/authService';

function FormUser({ onClose }) {
    const [showLogin, setShowLogin] = useState(true);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [error, setError] = useState(null); 

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const data = await authService.register(
                name, 
                cpf,
                phone,
                email, 
                birthDate,
                password, 
                passwordConfirmation
            );
            console.log("Registro bem-sucedido:", data);
            setShowLogin(true); // Volta para a tela de login após o registro
            alert("Usuário registrado com sucesso! Faça login.");
        } catch (err) {
            console.error("Erro no registro:", err.response ? err.response.data : err.message);
            if (err.response && err.response.data && err.response.data.errors) {
                setError(Object.values(err.response.data.errors).flat().join("\n"));
            } else if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("Ocorreu um erro inesperado durante o registro.");
            }
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            const data = await authService.login(email, password);
            console.log("Login bem-sucedido:", data);
            alert("Login realizado com sucesso!");
            onClose(); // Fecha o formulário após o login
            // Redirecionar para o dashboard ou outra página
            // window.location.href = "; // Exemplo de redirecionamento
        } catch (err) {
            console.error("Erro no login:", err.response ? err.response.data : err.message);
            if (err.response && err.response.data && err.response.data.errors) {
                setError(Object.values(err.response.data.errors).flat().join("\n"));
            } else if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError("Ocorreu um erro inesperado durante o login.");
            }
        } 
    };

    return (
        <>
            <div id='form-login' className="mt-8 bg-white/5 sm:rounded-3xl sm:border sm:border-gray-200 sm:bg-white/10">
                <div className="icon-close relative flex justify-end p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white cursor-pointer bg-rose-900 rounded-tr-2xl rounded-bl-2xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={onClose}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>

                {error && <div className='text-red-500 text-center mb-4'>{error}</div>}

                {/* Formulário de Login */}
                {showLogin ? (
                    <div id='formLogin' class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img class="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/7801/wine-glass.svg" alt="Your Company" />
                            <h2 class="mt-8 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
                        </div>

                        <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" onSubmit={handleLogin}>
                                <div>
                                    <label for="email" class="block text-sm/6 font-medium text-white">Email address</label>
                                    <div class="mt-2">
                                        <input type="email" name="email" id="email" autocomplete="email" required value={email} onChange={(e ) => setEmail(e.target.value)} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
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
                                        <input type="password" name="password" id="password" autocomplete="current-password" required value={password} onChange={(e ) => setPassword(e.target.value)} class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" class="flex w-full justify-center rounded-md bg-rose-900 px-3 py-1.5 text-sm/6 font-semibold text-rose-200 shadow-xs hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                                </div>
                            </form>

                            <p class="mt-10 text-center text-sm/6 text-gray-500">
                                Not a member?
                                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500" onClick={() => setShowLogin(false)}>
                                Create an account</a>
                            </p>
                        </div>
                    </div>
                ) : (
                    <div id='formRegister' class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img class="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/7801/wine-glass.svg" alt="Your Company" />
                            <h2 class="mt-8 text-center text-2xl/9 font-bold tracking-tight text-white">Create your account</h2>
                        </div>
                        <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form class="space-y-6" onSubmit={handleRegister}>
                                <div>
                                    <label for="name" class="block text-sm/6 font-medium text-white">Full name</label>
                                    <div class="mt-2">
                                        <input type="text" name="name" id="name" placeholder='insira seu nome...' autocomplete="name" required value={name} onChange={(e ) => setName(e.target.value)} class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2'> 
                                    <div>
                                        <label for="cpf" class="block text-sm/6 font-medium text-white">CPF</label>
                                        <div class="mt-2">
                                            <input type="text" name="cpf" id="cpf" placeholder='insira seu CPF...' autocomplete="cpf" required value={cpf} onChange={(e) => setCpf(e.target.value)} class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="phone" class="block text-sm/6 font-medium text-white">Phone number</label>
                                        <div class="mt-2">
                                            <input type="tel" name="phone" id="phone" placeholder='insira seu telefone...' autocomplete="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label for="email" class="block text-sm/6 font-medium text-white">Email address</label>
                                    <div class="mt-2">
                                        <input type="email" name="email" id="email" placeholder='insira seu e-mail...' autocomplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    </div>
                                </div>
                                <div>
                                    <label for="date" class="block text-sm/6 font-medium text-white">Date of Birth</label>
                                    <div class="mt-2">
                                        <input type="date" name="date" id="date" placeholder='insira sua data de nascimento...' required value={birthDate} onChange={(e) => setBirthDate(e.target.value)} class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    </div>
                                </div>
                                <div>
                                    <div class="flex items-center justify-between">
                                    <label for="password" class="block text-sm/6 font-medium text-white">Password</label>
                                    </div>
                                    <div class="mt-2">
                                        <input type="password" name="password" id="password" placeholder='insira sua senha...' autocomplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)} class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    </div>
                                </div>
                                <div>
                                    <div class="flex items-center justify-between">
                                    <label for="password_confirmation" class="block text-sm/6 font-medium text-white">Confirm Password</label>
                                    </div>
                                    <div class="mt-2">
                                        <input type="password" name="password_confirmation" id="password_confirmation" placeholder='confirme sua senha...' autocomplete="new-password" required value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" class="flex w-full justify-center rounded-md bg-rose-900 px-3 py-1.5 text-sm/6 font-semibold text-rose-200 shadow-xs hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign Up</button>
                                </div>
                            </form>
                            <p class="mt-10 text-center text-sm/6 text-gray-500">
                                Already have an account?
                                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500" onClick={() => setShowLogin(true)}>
                                Log in</a>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default FormUser;