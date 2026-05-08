import { create } from 'zustand';

interface User {
  _id: string;
  name: string;
  email: string;
  campus: string;
  token: string;
}

interface AuthState {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

const savedUser = localStorage.getItem('user');
const initialState = savedUser ? JSON.parse(savedUser) : null;

export const useAuthStore = create<AuthState>((set) => ({
  user: initialState,
  login: (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', userData.token);
    set({ user: userData });
  },
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    set({ user: null });
  },
}));
