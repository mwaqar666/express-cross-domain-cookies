import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import router from './routes/routes';

const app: Express = express();
app.use(cookieParser());
app.use(router);

const port = 3000;

app.listen(port, 'auth.beyondant.com', () => {
	console.log(`Application running on port ${port}`);
});
