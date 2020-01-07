import { DataPage } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';

import { GatewayV1 } from './GatewayV1';

export interface IGatewaysClientV1 {
    getGateways(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<GatewayV1>) => void): void;

    getGatewayById(correlationId: string, id: string, 
        callback: (err: any, gateway: GatewayV1) => void): void;

    getGatewayByUdi(correlationId: string, udi: string, 
        callback: (err: any, gateway: GatewayV1) => void): void;

    getOrCreateGateway(correlationId: string, org_id: string, udi: string,
        callback: (err: any, gateway: GatewayV1) => void): void;

    createGateway(correlationId: string, gateway: GatewayV1, 
        callback: (err: any, gateway: GatewayV1) => void): void;

    updateGateway(correlationId: string, gateway: GatewayV1, 
        callback: (err: any, gateway: GatewayV1) => void): void;

    deleteGatewayById(correlationId: string, id: string,
        callback: (err: any, gateway: GatewayV1) => void): void;
}
