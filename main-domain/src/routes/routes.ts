import path from 'path';
import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) => {
	return response.sendFile(path.join(__dirname, '../html/form.html'));
});

router.post('/login', (request: Request, response: Response) => {
	return response
		.cookie('access_token', '123456789', { domain: '.application.com', secure: false })
		.sendFile(path.join(__dirname, '../html/auth.html'));
});

export default router;