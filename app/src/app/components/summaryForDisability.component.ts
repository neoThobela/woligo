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
  selector: 'bh-summaryForDisability',
  templateUrl: './summaryForDisability.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class summaryForDisabilityComponent {
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
      this.sd_rsbIklhA4kpLH4Pd(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_rsbIklhA4kpLH4Pd(bh) {
    try {
      bh = this.sd_SVZvMc2YRt7OThtl(bh);
      //appendnew_next_sd_rsbIklhA4kpLH4Pd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rsbIklhA4kpLH4Pd');
    }
  }

  //appendnew_flow_summaryForDisabilityComponent_start

  sd_SVZvMc2YRt7OThtl(bh) {
    try {
      this.page.priceDisability = undefined;
      bh = this.sd_X4zaEuPvLEGzvifn(bh);
      //appendnew_next_sd_SVZvMc2YRt7OThtl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SVZvMc2YRt7OThtl');
    }
  }

  sd_X4zaEuPvLEGzvifn(bh) {
    try {
      const page = this.page;
      page.priceDisability = [
        {
          title: 'Benefit Amount',
          description: '$1,200',
          color: '#B9B9C3',
        },
        {
          title: 'Benefit Period',
          description: '5 years',
          color: '#B9B9C3',
        },
        {
          title: 'Waiting Period',
          description: '30 days',
          color: '#B9B9C3',
        },
        {
          title: 'Monthly Premium',
          description: '$17',
          color: '#DD601E',
          titleColor: '#4B4B4B',
        },
      ];

      page.button = [
        {
          buttonName: 'Well-Being',
          link: 'Brochure ',
          description: '$14.95 / month',
        },
        {
          buttonName: 'Safeguard (Individual Plan)',
          link: 'Brochure ',
          description: '$16.95 / month',
        },
      ];
      bh = this.sd_Ibb60nX6MmDCWl1X(bh);
      //appendnew_next_sd_X4zaEuPvLEGzvifn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X4zaEuPvLEGzvifn');
    }
  }

  sd_Ibb60nX6MmDCWl1X(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      this.page.navigationEnd = NavigationEnd;
      this.page.navigationStart = NavigationStart;
      bh = this.sd_9IJ5y3D13dFhipBu(bh);
      //appendnew_next_sd_Ibb60nX6MmDCWl1X
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ibb60nX6MmDCWl1X');
    }
  }

  sd_9IJ5y3D13dFhipBu(bh) {
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

      //appendnew_next_sd_9IJ5y3D13dFhipBu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9IJ5y3D13dFhipBu');
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
  //appendnew_flow_summaryForDisabilityComponent_Catch
}
