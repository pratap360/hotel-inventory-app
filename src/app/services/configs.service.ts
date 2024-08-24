import { Inject, Injectable } from '@angular/core';
import { RouteConfigsToken } from './routeConfigs.service';
import { RouteConfigs } from './rotueConfigs';

@Injectable({
  providedIn: 'any'
})
export class ConfigsService {

  constructor(@Inject(RouteConfigsToken) private configsToken:RouteConfigs ) {
    console.log('ConfigsService initiated');
    console.log(this.configsToken); 
  }
}
