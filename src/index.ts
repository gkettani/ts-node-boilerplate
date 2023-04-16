import { createServer, IncomingMessage, ServerResponse } from 'http';
import { Logger } from '~/lib/Logger';

const logger = Logger(process.env.NODE_ENV, process.env.LOG_DIR);

const server = createServer((_req: IncomingMessage, res: ServerResponse) => {
  logger.debug('Request received');
  res.end('Hello world!');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});
