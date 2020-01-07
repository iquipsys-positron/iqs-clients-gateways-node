let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-node';

import { GatewayV1 } from '../../src/version1/GatewayV1';
import { IGatewaysClientV1 } from '../../src/version1/IGatewaysClientV1';

let GATEWAY1: GatewayV1 = {
    id: '1',
    org_id: '1',
    model: 'MCTD',
    udi: '111',
    label: '3456',
    active: true
};
let GATEWAY2: GatewayV1 = {
    id: '2',
    org_id: '1',
    model: 'MCTD',
    udi: '222',
    label: '2334',
    active: true
};

export class GatewaysClientFixtureV1 {
    private _client: IGatewaysClientV1;
    
    constructor(client: IGatewaysClientV1) {
        this._client = client;
    }
        
    public testCrudOperations(done) {
        let gateway1, gateway2;

        async.series([
        // Create one gateway
            (callback) => {
                this._client.createGateway(
                    null,
                    GATEWAY1,
                    (err, gateway) => {
                        assert.isNull(err);

                        assert.isObject(gateway);
                        assert.equal(gateway.org_id, GATEWAY1.org_id);
                        assert.equal(gateway.model, GATEWAY1.model);
                        assert.equal(gateway.label, GATEWAY1.label);

                        gateway1 = gateway;

                        callback();
                    }
                );
            },
        // Create another gateway
            (callback) => {
                this._client.createGateway(
                    null,
                    GATEWAY2,
                    (err, gateway) => {
                        assert.isNull(err);

                        assert.isObject(gateway);
                        assert.equal(gateway.org_id, GATEWAY2.org_id);
                        assert.equal(gateway.model, GATEWAY2.model);
                        assert.equal(gateway.label, GATEWAY2.label);

                        gateway2 = gateway;

                        callback();
                    }
                );
            },
        // Get all gateways
            (callback) => {
                this._client.getGateways(
                    null,
                    null,
                    new PagingParams(0,5,false),
                    (err, gateways) => {
                        assert.isNull(err);

                        assert.isObject(gateways);
                        assert.isTrue(gateways.data.length >= 2);

                        callback();
                    }
                );
            },
        // Update the gateway
            (callback) => {
                gateway1.label = 'Updated gateway 1';

                this._client.updateGateway(
                    null,
                    gateway1,
                    (err, gateway) => {
                        assert.isNull(err);

                        assert.isObject(gateway);
                        assert.equal(gateway.label, 'Updated gateway 1');
                        assert.equal(gateway.id, gateway1.id);

                        gateway1 = gateway;

                        callback();
                    }
                );
            },
        // Delete gateway
            (callback) => {
                this._client.deleteGatewayById(
                    null,
                    gateway1.id,
                    (err) => {
                        assert.isNull(err);

                        callback();
                    }
                );
            },
        // Try to get delete gateway
            (callback) => {
                this._client.getGatewayById(
                    null,
                    gateway1.id,
                    (err, gateway) => {
                        assert.isNull(err);
                        
                        assert.isNull(gateway || null);

                        callback();
                    }
                );
            },
            (callback) => {
                this._client.getOrCreateGateway(
                    null, '1', 'ABC',
                    (err, gateway) => {
                        assert.isNull(err);
                        
                        assert.isNotNull(gateway);
                        assert.equal('1', gateway.org_id);
                        assert.equal('abc', gateway.udi);

                        callback();
                    }
                )
            }
        ], done);
    }
}
