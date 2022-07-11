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
  selector: 'bh-toolbar',
  templateUrl: './toolbar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class toolbarComponent {
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
      this.sd_plBRezOeIZFfYsGD(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_plBRezOeIZFfYsGD(bh) {
    try {
      bh = this.sd_01uWBFUD8noaLAkU(bh);
      //appendnew_next_sd_plBRezOeIZFfYsGD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_plBRezOeIZFfYsGD');
    }
  }

  //appendnew_flow_toolbarComponent_start

  sd_01uWBFUD8noaLAkU(bh) {
    try {
      this.page.routerVal = undefined;
      bh = this.sd_zGxcqRBN5GClLJcL(bh);
      //appendnew_next_sd_01uWBFUD8noaLAkU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_01uWBFUD8noaLAkU');
    }
  }

  sd_zGxcqRBN5GClLJcL(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      this.page.navigationEnd = NavigationEnd;
      this.page.navigationStart = NavigationStart;
      bh = this.sd_YwxVNFGjd7gqxxL1(bh);
      //appendnew_next_sd_zGxcqRBN5GClLJcL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zGxcqRBN5GClLJcL');
    }
  }

  sd_YwxVNFGjd7gqxxL1(bh) {
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

      //appendnew_next_sd_YwxVNFGjd7gqxxL1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YwxVNFGjd7gqxxL1');
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
  //appendnew_flow_toolbarComponent_Catch
}
