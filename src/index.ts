import express, {Express, Request, Response} from 'express';

const PORT = (process.env.PORT as unknown) as number| 8080; //Fix this
const app:Express = express();

app.get('/', (_req: Request, res:Response) => {
  res.send("<h1>Hello World</h1>");
})

app.listen(8080, ()=>{
  console.log("Server running on ")
})