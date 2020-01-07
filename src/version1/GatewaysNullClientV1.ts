import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IdGenerator } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IGatewaysClientV1 } from './IGatewaysClientV1';
import { GatewayV1 } from './GatewayV1';

export class GatewaysNullClientV1 implements IGatewaysClientV1 {
            
    public getGateways(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<GatewayV1>) => void): void {
        callback(null, new DataPage<GatewayV1>([], 0));
    }

    public getGatewayById(correlationId: string, id: string, 
        callback: (err: any, gateway: GatewayV1) => void): void {
        callback(null, null);
    }

    public getGatewayByUdi(correlationId: string, udi: string, 
        callback: (err: any, gateway: GatewayV1) => void): void {
        callback(null, null);
    }

    public getOrCreateGateway(correlationId: string, orgId: string, udi: string,
        callback: (err: any, gateway: GatewayV1) => void): void {
        let gateway = <GatewayV1> {
            id: IdGenerator.nextLong(),
            org_id: orgId,
            udi: udi,
            create_time: new Date(),
            model: null,
            active: true
        };
        callback(null, gateway);
    }

    public createGateway(correlationId: string, gateway: GatewayV1, 
        callback: (err: any, gateway: GatewayV1) => void): void {
        callback(null, gateway);
    }

    public updateGateway(correlationId: string, gateway: GatewayV1, 
        callback: (err: any, gateway: GatewayV1) => void): void {
        callback(null, gateway);
    }

    public deleteGatewayById(correlationId: string, id: string,
        callback: (err: any, gateway: GatewayV1) => void): void {
        callback(null, null);
    }

}