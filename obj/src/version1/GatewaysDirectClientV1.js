"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
class GatewaysDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor("iqs-services-gateways", "controller", "*", "*", "*"));
    }
    getGateways(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'gateways.get_gateways');
        this._controller.getGateways(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }
    getGatewayById(correlationId, id, callback) {
        let timing = this.instrument(correlationId, 'gateways.get_gateway_by_id');
        this._controller.getGatewayById(correlationId, id, (err, gateway) => {
            timing.endTiming();
            callback(err, gateway);
        });
    }
    getGatewayByUdi(correlationId, udi, callback) {
        let timing = this.instrument(correlationId, 'gateways.get_gateway_by_udi');
        this._controller.getGatewayByUdi(correlationId, udi, (err, gateway) => {
            timing.endTiming();
            callback(err, gateway);
        });
    }
    getOrCreateGateway(correlationId, orgId, udi, callback) {
        let timing = this.instrument(correlationId, 'gateways.get_or_create_gateway');
        this._controller.getOrCreateGateway(correlationId, orgId, udi, (err, gateway) => {
            timing.endTiming();
            callback(err, gateway);
        });
    }
    createGateway(correlationId, gateway, callback) {
        let timing = this.instrument(correlationId, 'gateways.create_gateway');
        this._controller.createGateway(correlationId, gateway, (err, gateway) => {
            timing.endTiming();
            callback(err, gateway);
        });
    }
    updateGateway(correlationId, gateway, callback) {
        let timing = this.instrument(correlationId, 'gateways.update_gateway');
        this._controller.updateGateway(correlationId, gateway, (err, gateway) => {
            timing.endTiming();
            callback(err, gateway);
        });
    }
    deleteGatewayById(correlationId, gatewayId, callback) {
        let timing = this.instrument(correlationId, 'gateways.delete_gateway_by_id');
        this._controller.deleteGatewayById(correlationId, gatewayId, (err, gateway) => {
            timing.endTiming();
            callback(err, gateway);
        });
    }
}
exports.GatewaysDirectClientV1 = GatewaysDirectClientV1;
//# sourceMappingURL=GatewaysDirectClientV1.js.map