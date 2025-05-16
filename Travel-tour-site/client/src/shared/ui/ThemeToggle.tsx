import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@shared/store/themeSlice';
import { RootState } from '@shared/store';
import './shared_styles.css';
export const ThemeToggle = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleTheme())} className="theme-toggle">
      {theme === 'light' ? '🌙 Тёмная тема' : '☀️ Светлая тема'}
    </button>
  );
};