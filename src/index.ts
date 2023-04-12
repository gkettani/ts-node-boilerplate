import { createServer, IncomingMessage, ServerResponse } from 'http';
import Logger from '~/lib/Logger';

const logger = Logger(process.env.NODE_ENV, process.env.LOG_DIR);

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  logger.info('Request received');
  res.end('Hello world!');
});

server.listen(process.env.PORT, () => {
  logger.info(`Server is listening on port ${process.env.PORT}`);
});
