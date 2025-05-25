import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
interface User {
  id?: number;
  name: string;
  email?: string;
}

interface UserState {
  user: User | null;
  isAuth: boolean;
}

const getUserFromCookie = (): User | null => {
  const cookie = Cookies.get('user');
  return cookie ? JSON.parse(cookie) : null;
};

const initialUser = getUserFromCookie();

const initialState: UserState = {
  user: initialUser,
  isAuth: !!initialUser,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isAuth = true;
      Cookies.set('user', JSON.stringify(action.payload), { expires: 7 }); // хранится 7 дней
    },
    logout(state) {
      state.user = null;
      state.isAuth = false;
      Cookies.remove('user');
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;






