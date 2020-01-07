import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { IGatewaysClientV1 } from './IGatewaysClientV1';
import { GatewayV1 } from './GatewayV1';
export declare class GatewaysDirectClientV1 extends DirectClient<any> implements IGatewaysClientV1 {
    constructor();
    getGateways(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<GatewayV1>) => void): void;
    getGatewayById(correlationId: string, id: string, callback: (err: any, gateway: GatewayV1) => void): void;
    getGatewayByUdi(correlationId: string, udi: string, callback: (err: any, gateway: GatewayV1) => void): void;
    getOrCreateGateway(correlationId: string, orgId: string, udi: string, callback: (err: any, gateway: GatewayV1) => void): void;
    createGateway(correlationId: string, gateway: GatewayV1, callback: (err: any, gateway: GatewayV1) => void): void;
    updateGateway(correlationId: string, gateway: GatewayV1, callback: (err: any, gateway: GatewayV1) => void): void;
    deleteGatewayById(correlationId: string, gatewayId: string, callback: (err: any, gateway: GatewayV1) => void): void;
}
