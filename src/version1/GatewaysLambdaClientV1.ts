let _ = require('lodash');

import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { GatewayV1 } from './GatewayV1';
import { IGatewaysClientV1 } from './IGatewaysClientV1';

export class GatewaysLambdaClientV1 extends CommandableLambdaClient implements IGatewaysClientV1 {       

    constructor(config?: any) {
        super('gateways');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public getGateways(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<GatewayV1>) => void): void {
        this.callCommand( 
            'get_gateways', 
            correlationId,
            {
                filter: filter,
                paging: paging
            }, 
            callback
        );
    }

    public getGatewayById(correlationId: string, id: string,
        callback: (err: any, gateway: GatewayV1) => void): void {
        this.callCommand( 
            'get_gateway_by_id',
            correlationId,
            {
                gateway_id: id
            }, 
            callback
        );        
    }

    public getGatewayByUdi(correlationId: string, udi: string,
        callback: (err: any, gateway: GatewayV1) => void): void {
        this.callCommand( 
            'get_gateway_by_udi',
            correlationId,
            {
                gateway_udi: udi
            }, 
            callback
        );
    }

    public getOrCreateGateway(correlationId: string, orgId: string, udi: string,
        callback: (err: any, gateway: GatewayV1) => void): void {
        this.callCommand( 
            'get_or_create_gateway',
            correlationId,
            {
                org_id: orgId,
                udi: udi
            }, 
            callback
        );        
    }

    public createGateway(correlationId: string, gateway: GatewayV1,
        callback: (err: any, gateway: GatewayV1) => void): void {
        this.callCommand(
            'create_gateway',
            correlationId,
            {
                gateway: gateway
            }, 
            callback
        );
    }

    public updateGateway(correlationId: string, gateway: GatewayV1,
        callback: (err: any, gateway: GatewayV1) => void): void {
        this.callCommand(
            'update_gateway', 
            correlationId,
            {
                gateway: gateway
            }, 
            callback
        );
    }

    public deleteGatewayById(correlationId: string, id: string,
        callback: (err: any, gateway: GatewayV1) => void): void {
        this.callCommand(
            'delete_gateway_by_id', 
            correlationId,
            {
                gateway_id: id
            }, 
            callback
        );
    }

}
