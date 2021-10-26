import express, { Express } from 'express';
import router from './routes/routes';

const app: Express = express();
app.use(router);

const port = 3002;

app.listen(port, 'api.main.application.com', () => {
	console.log(`Application running on port ${port}`);
});
