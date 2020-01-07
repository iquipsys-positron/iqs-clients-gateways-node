"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_commons_node_2 = require("pip-services3-commons-node");
const pip_services3_commons_node_3 = require("pip-services3-commons-node");
class GatewaysMemoryClientV1 {
    constructor() {
        this._gateways = [];
    }
    matchString(value, search) {
        if (value == null && search == null)
            return true;
        if (value == null || search == null)
            return false;
        return value.toLowerCase().indexOf(search) >= 0;
    }
    matchSearch(item, search) {
        search = search.toLowerCase();
        if (this.matchString(item.id, search))
            return true;
        if (this.matchString(item.label, search))
            return true;
        return false;
    }
    contains(array1, array2) {
        if (array1 == null || array2 == null)
            return false;
        for (let i1 = 0; i1 < array1.length; i1++) {
            for (let i2 = 0; i2 < array2.length; i2++)
                if (array1[i1] == array2[i1])
                    return true;
        }
        return false;
    }
    composeFilter(filter) {
        filter = filter || new pip_services3_commons_node_1.FilterParams();
        let search = filter.getAsNullableString('search');
        let id = filter.getAsNullableString('id');
        let org_id = filter.getAsNullableString('org_id');
        let udi = filter.getAsNullableString('udi');
        let label = filter.getAsNullableString('label');
        let active = filter.getAsNullableBoolean('active');
        return (item) => {
            if (id && item.id != id)
                return false;
            if (org_id && item.org_id != org_id)
                return false;
            if (label && item.label != label)
                return false;
            if (udi && item.udi != udi)
                return false;
            if (active && item.active != active)
                return false;
            if (search && !this.matchSearch(item, search))
                return false;
            return true;
        };
    }
    getGateways(correlationId, filter, paging, callback) {
        let gateways = _.filter(this._gateways, this.composeFilter(filter));
        callback(null, new pip_services3_commons_node_2.DataPage(gateways, gateways.length));
    }
    getGatewayById(correlationId, id, callback) {
        let gateway = _.find(this._gateways, (d) => d.id == id);
        callback(null, gateway);
    }
    getGatewayByUdi(correlationId, udi, callback) {
        let gateway = _.find(this._gateways, (d) => d.udi == udi);
        callback(null, gateway);
    }
    getOrCreateGateway(correlationId, orgId, udi, callback) {
        let gateway = {
            id: pip_services3_commons_node_3.IdGenerator.nextLong(),
            org_id: orgId,
            udi: udi.toLocaleLowerCase(),
            create_time: new Date(),
            model: null,
            active: true
        };
        this._gateways.push(gateway);
        callback(null, gateway);
    }
    createGateway(correlationId, gateway, callback) {
        gateway.id = gateway.id || pip_services3_commons_node_3.IdGenerator.nextLong();
        gateway.create_time = new Date();
        gateway.active = gateway.active != null || true;
        gateway.udi = gateway.udi ? gateway.udi.toLocaleLowerCase() : null;
        this._gateways.push(gateway);
        callback(null, gateway);
    }
    updateGateway(correlationId, gateway, callback) {
        gateway.udi = gateway.udi ? gateway.udi.toLocaleLowerCase() : null;
        this._gateways = _.filter(this._gateways, (d) => d.id != gateway.id);
        this._gateways.push(gateway);
        callback(null, gateway);
    }
    deleteGatewayById(correlationId, id, callback) {
        let gateway = _.find(this._gateways, (d) => d.id == id);
        if (gateway) {
            this._gateways = _.filter(this._gateways, (d) => d.id != id);
        }
        callback(null, gateway);
    }
}
exports.GatewaysMemoryClientV1 = GatewaysMemoryClientV1;
//# sourceMappingURL=GatewaysMemoryClientV1.js.map