import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { GatewaysNullClientV1 } from '../version1/GatewaysNullClientV1';
import { GatewaysMemoryClientV1 } from '../version1/GatewaysMemoryClientV1';
import { GatewaysDirectClientV1 } from '../version1/GatewaysDirectClientV1';
import { GatewaysHttpClientV1 } from '../version1/GatewaysHttpClientV1';
import { GatewaysLambdaClientV1 } from '../version1/GatewaysLambdaClientV1';

export class GatewaysClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('iqs-services-gateways', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('iqs-services-gateways', 'client', 'null', 'default', '1.0');
	public static MemoryClientV1Descriptor = new Descriptor('iqs-services-gateways', 'client', 'memory', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('iqs-services-gateways', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('iqs-services-gateways', 'client', 'http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('iqs-services-gateways', 'client', 'lambda', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(GatewaysClientFactory.NullClientV1Descriptor, GatewaysNullClientV1);
		this.registerAsType(GatewaysClientFactory.MemoryClientV1Descriptor, GatewaysMemoryClientV1);
		this.registerAsType(GatewaysClientFactory.DirectClientV1Descriptor, GatewaysDirectClientV1);
		this.registerAsType(GatewaysClientFactory.HttpClientV1Descriptor, GatewaysHttpClientV1);
		this.registerAsType(GatewaysClientFactory.LambdaClientV1Descriptor, GatewaysLambdaClientV1);
	}
	
}
