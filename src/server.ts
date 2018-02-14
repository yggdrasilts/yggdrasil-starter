/** yggdrasil imports */
import {
	Bootstrap,
	FileLogger
} from '@yggdrasilts/core';

/**
 * @class YggdrasilServer
 */
export class YggdrasilServer extends Bootstrap {

	/** YggdrasilServer logger */
	public logger: FileLogger;

	/** Default constructor */
	constructor() {
		super();
		this.logger = new FileLogger(YggdrasilServer.name);
	}

}
