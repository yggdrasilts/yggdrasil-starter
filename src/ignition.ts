/** yggdrasil imports */
import { Server } from '@yggdrasilts/mvc';

/** Application imports */
import { YggdrasilServer } from './server';

/**
 * Start yggdrasil application
 */
export const app: Promise<Server> = new YggdrasilServer().bootstrap();
