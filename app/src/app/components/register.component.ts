/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { Router, NavigationEnd, NavigationStart } from '@angular/router'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-register',
  templateUrl: './register.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class registerComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_60rUZYNpU0jPCwr2(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_60rUZYNpU0jPCwr2(bh) {
    try {
      bh = this.sd_NxeWX6CgNB3jOYgp(bh);
      //appendnew_next_sd_60rUZYNpU0jPCwr2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_60rUZYNpU0jPCwr2');
    }
  }

  register(register: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { register: register };
      bh.local = {};
      bh = this.sd_jU9jG1OVwpliAKO2(bh);
      //appendnew_next_register
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dSR3NrOmoYali3VH');
    }
  }

  //appendnew_flow_registerComponent_start

  sd_NxeWX6CgNB3jOYgp(bh) {
    try {
      this.page.mySelect = [];
      this.page.registerForm = undefined;
      bh = this.sd_wHediAURJbNM3Irf(bh);
      //appendnew_next_sd_NxeWX6CgNB3jOYgp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NxeWX6CgNB3jOYgp');
    }
  }

  sd_wHediAURJbNM3Irf(bh) {
    try {
      const page = this.page;
      page.registerForm = {
        email: '',
        firstName: '',
        lastName: '',
        gender: '',
        dob: null,
        state: '',
      };

      page.mySelect = [
        { viewValue: 'Mpumalanga' },
        { viewValue: 'Gauteng' },
        { viewValue: 'Limpopo' },
        { viewValue: 'Western Cape' },
        { viewValue: 'Eastern Cape' },
        { viewValue: 'Northern Cape' },
        { viewValue: 'North West' },
        { viewValue: 'Free State' },
        { viewValue: 'Kwa-Zulu Natal' },
      ];
      bh = this.sd_NjFCI12Ja1D9L3uZ(bh);
      //appendnew_next_sd_wHediAURJbNM3Irf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wHediAURJbNM3Irf');
    }
  }

  sd_NjFCI12Ja1D9L3uZ(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      this.page.navigationEnd = NavigationEnd;
      this.page.navigationStart = NavigationStart;
      bh = this.sd_HvHT1dWNK7pYdud5(bh);
      //appendnew_next_sd_NjFCI12Ja1D9L3uZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NjFCI12Ja1D9L3uZ');
    }
  }

  sd_HvHT1dWNK7pYdud5(bh) {
    try {
      const page = this.page; // console.log('page.router', page.router.url);
      page.routerVal = page.router.url;
      page.router.events.subscribe((event) => {
        if (event instanceof page.navigationEnd) {
          // Hide loading indicator
          console.log(event);
        }
      });
      console.log('page.router', page.routerVal);

      //appendnew_next_sd_HvHT1dWNK7pYdud5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HvHT1dWNK7pYdud5');
    }
  }

  sd_jU9jG1OVwpliAKO2(bh) {
    try {
      const page = this.page;
      console.log(bh.input.register);
      //appendnew_next_sd_jU9jG1OVwpliAKO2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jU9jG1OVwpliAKO2');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_registerComponent_Catch
}
