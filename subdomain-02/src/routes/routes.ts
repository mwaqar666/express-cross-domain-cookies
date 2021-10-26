import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) => {
	return response.json({ a: 1 });
});

export default router;