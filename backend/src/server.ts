import express, { NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { TodoController } from './todo/todoController';
import vacancyRoutes from './Vacancy/Route/vacancyRoute';
import referentialRoutes from './Referential/referentialRoute';

export const app = express();
const PORT = 8080;

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', (req,res) => res.send('Express + TypeScript Server'));

app.post('/createtodo', async (req: Request, res: Response) => {
  const todo = req.body;
  console.log('server',todo);
  const result = await TodoController.createTodo(todo);
  res.status(200).json(result);
})

// app.get('/api/referential/:name', async (req:Request, res: Response) => {
//   const result = await repository.find(PAYS, ReferentialSchema)();
//   res.status(200).json(result);
// })

app.use('/', referentialRoutes);

app.use('/', vacancyRoutes);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
