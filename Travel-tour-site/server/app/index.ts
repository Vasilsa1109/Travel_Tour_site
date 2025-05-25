import express from 'express';
import cors from 'cors';
import reviewRoutes from '../entities/reviews/routes/review.routes';
import { errorHandler } from '../shared/middleware/errorHandler';
import registrationRoutes from '../features/auth/routes/registration.routes';
import LoginRouter from '../features/auth/routes/login.routes';

const app = express();

//Middleware
app.use(cors());
app.use(express.json());

//Роуты
app.use('/api/reviews', reviewRoutes);
app.use('/api/registration', registrationRoutes);
app.use('/api/login', LoginRouter);

//Обработка ошибок
app.use(errorHandler);

export default app;