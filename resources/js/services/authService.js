import axios from 'axios';

const API_URL = '/api'; // Base URL para suas APIs do Laravel

const authService = {
    async register(name, cpf, phone, email, birth_date, password, password_confirmation) {
        try {
            const response = await axios.post(`${API_URL}/register`, {
                name,
                cpf,
                phone,
                email,
                birth_date,
                password,
                password_confirmation,
            });
            return response.data;
        } catch (error) {
            throw error; // Propaga o erro para ser tratado no componente
        }
    },

    async login(email, password) {
        try {
            // Garante que o cookie CSRF esteja disponível antes do login
            await axios.get("/sanctum/csrf-cookie"); 

            const response = await axios.post(`${API_URL}/login`, {
                email,
                password,
            });
            // Armazena o token se ele for retornado (opcional, dependendo da sua estratégia)
            if (response.data.token) {
                localStorage.setItem("auth_token", response.data.token);
            }
            return response.data;
        } catch (error) {
            throw error; // Propaga o erro para ser tratado no componente
        }
    },

    async logout() {
        try {
            const response = await axios.post(`${API_URL}/logout`);
            localStorage.removeItem("auth_token"); // Remove o token ao fazer logout
            return response.data;
        } catch (error) {
            throw error; // Propaga o erro para ser tratado no componente
        }
    },

    // Você pode adicionar mais funções relacionadas à autenticação aqui, como:
    // async getUser() { ... },
    // async refreshToken() { ... },
};

export default authService;
