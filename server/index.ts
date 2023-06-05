import express, { Express, Request, Response } from 'express';
import * as path from 'path';
const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('client', 'dist')));
app.use(express.json());

const port = 8080; // default port to listen

// define a route handler for the default home page
app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'dist', 'index.html'));
  });

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );