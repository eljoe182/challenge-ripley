import express from 'express';
import accountBook from './accountBook.routes';
import transactions from './transactions.routes';
import transfer from './transfer.routes';

const app = express();

app.use('/account/book', [accountBook]);
app.use('/transactions', [transactions]);
app.use('/transfer', [transfer]);

export default app;
