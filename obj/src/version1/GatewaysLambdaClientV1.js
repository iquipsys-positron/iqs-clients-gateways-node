"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
class GatewaysLambdaClientV1 extends pip_services3_aws_node_1.CommandableLambdaClient {
    constructor(config) {
        super('gateways');
        if (config != null)
            this.configure(pip_services3_commons_node_1.ConfigParams.fromValue(config));
    }
    getGateways(correlationId, filter, paging, callback) {
        this.callCommand('get_gateways', correlationId, {
            filter: filter,
            paging: paging
        }, callback);
    }
    getGatewayById(correlationId, id, callback) {
        this.callCommand('get_gateway_by_id', correlationId, {
            gateway_id: id
        }, callback);
    }
    getGatewayByUdi(correlationId, udi, callback) {
        this.callCommand('get_gateway_by_udi', correlationId, {
            gateway_udi: udi
        }, callback);
    }
    getOrCreateGateway(correlationId, orgId, udi, callback) {
        this.callCommand('get_or_create_gateway', correlationId, {
            org_id: orgId,
            udi: udi
        }, callback);
    }
    createGateway(correlationId, gateway, callback) {
        this.callCommand('create_gateway', correlationId, {
            gateway: gateway
        }, callback);
    }
    updateGateway(correlationId, gateway, callback) {
        this.callCommand('update_gateway', correlationId, {
            gateway: gateway
        }, callback);
    }
    deleteGatewayById(correlationId, id, callback) {
        this.callCommand('delete_gateway_by_id', correlationId, {
            gateway_id: id
        }, callback);
    }
}
exports.GatewaysLambdaClientV1 = GatewaysLambdaClientV1;
//# sourceMappingURL=GatewaysLambdaClientV1.js.map