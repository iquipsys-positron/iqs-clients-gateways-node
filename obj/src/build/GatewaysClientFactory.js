"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const GatewaysNullClientV1_1 = require("../version1/GatewaysNullClientV1");
const GatewaysMemoryClientV1_1 = require("../version1/GatewaysMemoryClientV1");
const GatewaysDirectClientV1_1 = require("../version1/GatewaysDirectClientV1");
const GatewaysHttpClientV1_1 = require("../version1/GatewaysHttpClientV1");
const GatewaysLambdaClientV1_1 = require("../version1/GatewaysLambdaClientV1");
class GatewaysClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(GatewaysClientFactory.NullClientV1Descriptor, GatewaysNullClientV1_1.GatewaysNullClientV1);
        this.registerAsType(GatewaysClientFactory.MemoryClientV1Descriptor, GatewaysMemoryClientV1_1.GatewaysMemoryClientV1);
        this.registerAsType(GatewaysClientFactory.DirectClientV1Descriptor, GatewaysDirectClientV1_1.GatewaysDirectClientV1);
        this.registerAsType(GatewaysClientFactory.HttpClientV1Descriptor, GatewaysHttpClientV1_1.GatewaysHttpClientV1);
        this.registerAsType(GatewaysClientFactory.LambdaClientV1Descriptor, GatewaysLambdaClientV1_1.GatewaysLambdaClientV1);
    }
}
exports.GatewaysClientFactory = GatewaysClientFactory;
GatewaysClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-gateways', 'factory', 'default', 'default', '1.0');
GatewaysClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-gateways', 'client', 'null', 'default', '1.0');
GatewaysClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-gateways', 'client', 'memory', 'default', '1.0');
GatewaysClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-gateways', 'client', 'direct', 'default', '1.0');
GatewaysClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-gateways', 'client', 'http', 'default', '1.0');
GatewaysClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('iqs-services-gateways', 'client', 'lambda', 'default', '1.0');
//# sourceMappingURL=GatewaysClientFactory.js.map