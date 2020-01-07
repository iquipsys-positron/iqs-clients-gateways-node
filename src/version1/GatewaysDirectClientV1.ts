import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IGatewaysClientV1 } from './IGatewaysClientV1';
//import { IGatewaysController } from 'iqs-services-gateways-node';
import { GatewayV1 } from './GatewayV1';

export class GatewaysDirectClientV1 extends DirectClient<any> implements IGatewaysClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("iqs-services-gateways", "controller", "*", "*", "*"))
    }

    public getGateways(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<GatewayV1>) => void): void {
        let timing = this.instrument(correlationId, 'gateways.get_gateways');
        this._controller.getGateways(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getGatewayById(correlationId: string, id: string, 
        callback: (err: any, gateway: GatewayV1) => void): void {
        let timing = this.instrument(correlationId, 'gateways.get_gateway_by_id');
        this._controller.getGatewayById(correlationId, id, (err, gateway) => {
            timing.endTiming();
            callback(err, gateway);
        });
    }

    public getGatewayByUdi(correlationId: string, udi: string, 
        callback: (err: any, gateway: GatewayV1) => void): void {
        let timing = this.instrument(correlationId, 'gateways.get_gateway_by_udi');
        this._controller.getGatewayByUdi(correlationId, udi, (err, gateway) => {
            timing.endTiming();
            callback(err, gateway);
        });
    }

    public getOrCreateGateway(correlationId: string, orgId: string, udi: string,
        callback: (err: any, gateway: GatewayV1) => void): void {
        let timing = this.instrument(correlationId, 'gateways.get_or_create_gateway');
        this._controller.getOrCreateGateway(correlationId, orgId, udi, (err, gateway) => {
            timing.endTiming();
            callback(err, gateway);
        });
    }

    public createGateway(correlationId: string, gateway: GatewayV1, 
        callback: (err: any, gateway: GatewayV1) => void): void {
        let timing = this.instrument(correlationId, 'gateways.create_gateway');
        this._controller.createGateway(correlationId, gateway, (err, gateway) => {
            timing.endTiming();
            callback(err, gateway);
        });
    }

    public updateGateway(correlationId: string, gateway: GatewayV1, 
        callback: (err: any, gateway: GatewayV1) => void): void {
        let timing = this.instrument(correlationId, 'gateways.update_gateway');
        this._controller.updateGateway(correlationId, gateway, (err, gateway) => {
            timing.endTiming();
            callback(err, gateway);
        });
    }

    public deleteGatewayById(correlationId: string, gatewayId: string,
        callback: (err: any, gateway: GatewayV1) => void): void {
        let timing = this.instrument(correlationId, 'gateways.delete_gateway_by_id');
        this._controller.deleteGatewayById(correlationId, gatewayId, (err, gateway) => {
            timing.endTiming();
            callback(err, gateway);
        });
    }

}