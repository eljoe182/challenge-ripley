import express from 'express';
import morgan from 'morgan';
import routes from './routes';
import initSetup from './libs/initSetup';

require('./config/database');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// initialize
initSetup();

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1', routes);

export default app;
