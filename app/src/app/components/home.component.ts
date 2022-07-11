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
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_iAVh6Z4jwKdDnEsA(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_iAVh6Z4jwKdDnEsA(bh) {
    try {
      bh = this.sd_NaYbrgkWzl2wcsqx(bh);
      //appendnew_next_sd_iAVh6Z4jwKdDnEsA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_iAVh6Z4jwKdDnEsA');
    }
  }

  changeText(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_1L8tX4tHZtJVc4qD(bh);
      //appendnew_next_changeText
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ZSg2zzPnQehh7CSa');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_NaYbrgkWzl2wcsqx(bh) {
    try {
      this.page.btnVal = 'Preview';
      this.page.routerVal = "''";
      bh = this.sd_oHMuuP1rJGuZeSHc(bh);
      //appendnew_next_sd_NaYbrgkWzl2wcsqx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NaYbrgkWzl2wcsqx');
    }
  }

  sd_oHMuuP1rJGuZeSHc(bh) {
    try {
      const page = this.page;
      page.btnVal = 'Preview';
      bh = this.sd_nd5sMjlINfEqQitf(bh);
      //appendnew_next_sd_oHMuuP1rJGuZeSHc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oHMuuP1rJGuZeSHc');
    }
  }

  sd_nd5sMjlINfEqQitf(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      this.page.navigationEnd = NavigationEnd;
      this.page.navigationStart = NavigationStart;
      bh = this.sd_tN5FhXzwFVquRgkS(bh);
      //appendnew_next_sd_nd5sMjlINfEqQitf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nd5sMjlINfEqQitf');
    }
  }

  sd_tN5FhXzwFVquRgkS(bh) {
    try {
      const page = this.page; // console.log('page.router', page.router.url);
      page.routerVal = page.router.url;
      page.router.events.subscribe((event) => {
        if (event instanceof page.navigationEnd) {
          // Hide loading indicator
          console.log(event);
          page.routerVal = event.url;
        }
      });
      console.log('page.router', page.routerVal);

      //appendnew_next_sd_tN5FhXzwFVquRgkS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tN5FhXzwFVquRgkS');
    }
  }

  sd_1L8tX4tHZtJVc4qD(bh) {
    try {
      const page = this.page;
      if (page.btnVal === 'Preview') {
        page.btnVal = 'Apply Now';
      } else {
        page.btnVal = 'Preview';
      }

      //appendnew_next_sd_1L8tX4tHZtJVc4qD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1L8tX4tHZtJVc4qD');
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
  //appendnew_flow_homeComponent_Catch
}
