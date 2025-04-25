import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import app from './app' // наше приложение (Express instance)
import { sequelize } from './shared/db/sequelize'; // подключение к БД
import { initModels } from './app/init-models'; // инициализация моделей

dotenv.config();

const PORT = process.env.PORT || 3001;

const start = async () => {
  try {
    // Инициализация всех моделей и связей
    initModels();

    // Проверка подключения к БД
    await sequelize.authenticate();
    await sequelize.sync();

    console.log('DB connected & models synced');

    // Запуск сервера
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error while starting server:', error);
  }
};

start();

const app = express();
const port = 3001;

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true         
}));
app.use(express.json());

const users = [
  { email: 'test@example.com', password: '123456' },
];

app.post('/api/signup', (req, res) => {
  const { email, password } = req.body;
  console.log('Регистрация:', email);

  res.json({ message: 'Регистрация прошла успешно!' });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.json({ message: 'Успешный вход!', token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Неверный email или пароль' });
  }
});
