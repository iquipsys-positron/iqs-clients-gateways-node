let _ = require('lodash');

import { IReferences } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams} from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { IdGenerator } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';

import { IGatewaysClientV1 } from './IGatewaysClientV1';
import { GatewayV1 } from './GatewayV1';

export class GatewaysMemoryClientV1 implements IGatewaysClientV1 {
    private _gateways: GatewayV1[] = [];
            
    private matchString(value: string, search: string): boolean {
        if (value == null && search == null)
            return true;
        if (value == null || search == null)
            return false;
        return value.toLowerCase().indexOf(search) >= 0;
    }

    private matchSearch(item: GatewayV1, search: string): boolean {
        search = search.toLowerCase();
        if (this.matchString(item.id, search))
            return true;
        if (this.matchString(item.label, search))
            return true;
        return false;
    }

    private contains(array1, array2) {
        if (array1 == null || array2 == null) return false;
        
        for (let i1 = 0; i1 < array1.length; i1++) {
            for (let i2 = 0; i2 < array2.length; i2++)
                if (array1[i1] == array2[i1]) 
                    return true;
        }
        
        return false;
    }
    
    private composeFilter(filter: FilterParams): any {
        filter = filter || new FilterParams();
        
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

    public getGateways(correlationId: string, filter: FilterParams, paging: PagingParams, 
        callback: (err: any, page: DataPage<GatewayV1>) => void): void {
        
        let gateways = _.filter(this._gateways, this.composeFilter(filter));
        callback(null, new DataPage<GatewayV1>(gateways, gateways.length));
    }

    public getGatewayById(correlationId: string, id: string, 
        callback: (err: any, gateway: GatewayV1) => void): void {

        let gateway = _.find(this._gateways, (d) => d.id == id);
        callback(null, gateway);
    }

    public getGatewayByUdi(correlationId: string, udi: string, 
        callback: (err: any, gateway: GatewayV1) => void): void {

        let gateway = _.find(this._gateways, (d) => d.udi == udi);
        callback(null, gateway);
    }

    public getOrCreateGateway(correlationId: string, orgId: string, udi: string,
        callback: (err: any, gateway: GatewayV1) => void): void {
        let gateway = <GatewayV1> {
            id: IdGenerator.nextLong(),
            org_id: orgId,
            udi: udi.toLocaleLowerCase(),
            create_time: new Date(),
            model: null,
            active: true
        };

        this._gateways.push(gateway);
        callback(null, gateway);
    }

    public createGateway(correlationId: string, gateway: GatewayV1, 
        callback: (err: any, gateway: GatewayV1) => void): void {

        gateway.id = gateway.id || IdGenerator.nextLong();
        gateway.create_time = new Date();
        gateway.active = gateway.active != null || true;
        gateway.udi = gateway.udi ? gateway.udi.toLocaleLowerCase() : null;

        this._gateways.push(gateway);
        callback(null, gateway);
    }

    public updateGateway(correlationId: string, gateway: GatewayV1, 
        callback: (err: any, gateway: GatewayV1) => void): void {

        gateway.udi = gateway.udi ? gateway.udi.toLocaleLowerCase() : null;

        this._gateways = _.filter(this._gateways, (d) => d.id != gateway.id);
        this._gateways.push(gateway);
        
        callback(null, gateway);
    }

    public deleteGatewayById(correlationId: string, id: string,
        callback: (err: any, gateway: GatewayV1) => void): void {

        let gateway = _.find(this._gateways, (d) => d.id == id);
        if (gateway) {
            this._gateways = _.filter(this._gateways, (d) => d.id != id)
        }
        
        callback(null, gateway);
    }

}