/** yggdrasil imports */
import {
	Bootstrap,
	YGLogger
} from '@yggdrasilts/core';

/**
 * @class YggdrasilServer
 */
export class YggdrasilServer extends Bootstrap {

	/** YggdrasilServer logger */
	public logger: YGLogger;

	/** Default constructor */
	constructor() {
		super();
		this.logger = new YGLogger(YggdrasilServer.name);
	}

}
