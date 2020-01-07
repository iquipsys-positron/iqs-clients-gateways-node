"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
class GatewaysNullClientV1 {
    getGateways(correlationId, filter, paging, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage([], 0));
    }
    getGatewayById(correlationId, id, callback) {
        callback(null, null);
    }
    getGatewayByUdi(correlationId, udi, callback) {
        callback(null, null);
    }
    getOrCreateGateway(correlationId, orgId, udi, callback) {
        let gateway = {
            id: pip_services3_commons_node_2.IdGenerator.nextLong(),
            org_id: orgId,
            udi: udi,
            create_time: new Date(),
            model: null,
            active: true
        };
        callback(null, gateway);
    }
    createGateway(correlationId, gateway, callback) {
        callback(null, gateway);
    }
    updateGateway(correlationId, gateway, callback) {
        callback(null, gateway);
    }
    deleteGatewayById(correlationId, id, callback) {
        callback(null, null);
    }
}
exports.GatewaysNullClientV1 = GatewaysNullClientV1;
//# sourceMappingURL=GatewaysNullClientV1.js.map