import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { GatewayV1 } from './GatewayV1';
import { IGatewaysClientV1 } from './IGatewaysClientV1';
export declare class GatewaysHttpClientV1 extends CommandableHttpClient implements IGatewaysClientV1 {
    constructor(config?: any);
    getGateways(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<GatewayV1>) => void): void;
    getGatewayById(correlationId: string, id: string, callback: (err: any, gateway: GatewayV1) => void): void;
    getGatewayByUdi(correlationId: string, udi: string, callback: (err: any, gateway: GatewayV1) => void): void;
    getOrCreateGateway(correlationId: string, orgId: string, udi: string, callback: (err: any, gateway: GatewayV1) => void): void;
    createGateway(correlationId: string, gateway: GatewayV1, callback: (err: any, gateway: GatewayV1) => void): void;
    updateGateway(correlationId: string, gateway: GatewayV1, callback: (err: any, gateway: GatewayV1) => void): void;
    deleteGatewayById(correlationId: string, gatewayId: string, callback: (err: any, gateway: GatewayV1) => void): void;
}
