import { createServer, IncomingMessage, ServerResponse } from 'http';
import dotenv from 'dotenv';
import Logger from '~/lib/Logger';

dotenv.config({
  path: process.env.NODE_ENV === 'development' ? '.env.dev.local' : '.env.prod.local',
});

const logger = Logger(process.env.NODE_ENV, process.env.LOG_DIR);

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  logger.info('Request received');
  res.end('Hello world!');
});

server.listen(3000, () => {
  logger.info('Server is listening on port 3000');
});
