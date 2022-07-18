/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  AfterContentChecked,
  Pipe,
  PipeTransform,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { shareformService } from 'app/services/shareform/shareform.service'; //_splitter_
import { Router, NavigationEnd, NavigationStart } from '@angular/router'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-summary',
  templateUrl: './summary.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class summaryComponent {
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
      this.sd_2TU3MMHAsZWcr17b(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_2TU3MMHAsZWcr17b(bh) {
    try {
      bh = this.sd_5IJ7DiEuM1ybwDCH(bh);
      //appendnew_next_sd_2TU3MMHAsZWcr17b
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2TU3MMHAsZWcr17b');
    }
  }

  //appendnew_flow_summaryComponent_start

  sd_5IJ7DiEuM1ybwDCH(bh) {
    try {
      this.page.summary = undefined;
      bh = this.sd_0WRKsukb2tyhGbtu(bh);
      //appendnew_next_sd_5IJ7DiEuM1ybwDCH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5IJ7DiEuM1ybwDCH');
    }
  }

  sd_0WRKsukb2tyhGbtu(bh) {
    try {
      this.page.shareform = this.__page_injector__.get(shareformService);
      bh = this.sd_f1NdOgy88VuN0XXG(bh);
      //appendnew_next_sd_0WRKsukb2tyhGbtu
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0WRKsukb2tyhGbtu');
    }
  }

  sd_f1NdOgy88VuN0XXG(bh) {
    try {
      const page = this.page; // page.summary=[{
      //     title:"Protection type",
      //     content:"Protect income or family"
      // },
      // {
      //     title:"Insurance type",
      //     content:"Disability"
      // },
      // {
      //     title:"Date of birth",
      //     content:"01/01/1985"
      // },
      // {
      //     title:"Gender at birth",
      //     content:"Female"
      // },
      // {
      //     title:"Maternity leave coverage?",
      //     content:"No"
      // },
      // {
      //     title:"State",
      //     content:"Tennessee"
      // },
      // {
      //     title:"Occupation category",
      //     content:"Artist"
      // },
      // {
      //     title:"Are you employed full-time and work at least 30 hours per week?",
      //     content:"Yes"
      // },
      // {
      //     title:"Monthly Gross Income",
      //     content:"$1,200"
      // },
      // {
      //     title:"Government employee",
      //     content:"No"
      // },
      // {
      //     title:"Do you use nicotine?",
      //     content:"No"
      // }
      // ]
      page.summary = [
        { title: 'Protection type', content: 'Protect income or family' },
        { title: 'Insurance type', content: 'Disability Insurance' },
        { title: 'Date of birth', content: page.shareform.data.dob },
        { title: 'Gender at birth', content: page.shareform.data.gender },
        {
          title: 'Maternity leave coverage?',
          content: page.shareform.data.maternity,
        },
        { title: 'State', content: page.shareform.data.state },
        {
          title: 'Occupation category',
          content: page.shareform.data.occupation,
        },
        {
          title:
            'Are you employed full-time and work at least 30 hours per week?',
          content: page.shareform.data.hours,
        },
        {
          title: 'Monthly Gross Income',
          content: '$' + page.shareform.data.salary,
        },
        {
          title: 'Government employee',
          content: page.shareform.data.governmentEmployee,
        },
        {
          title: 'Do you use nicotine?',
          content: page.shareform.data.nicotine,
        },
      ];
      bh = this.sd_4E7S5LJSKKYQKqcc(bh);
      //appendnew_next_sd_f1NdOgy88VuN0XXG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_f1NdOgy88VuN0XXG');
    }
  }

  sd_4E7S5LJSKKYQKqcc(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      this.page.navigationEnd = NavigationEnd;
      this.page.navigationStart = NavigationStart;
      bh = this.sd_TgNYaPHqpTqfBCcs(bh);
      //appendnew_next_sd_4E7S5LJSKKYQKqcc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4E7S5LJSKKYQKqcc');
    }
  }

  sd_TgNYaPHqpTqfBCcs(bh) {
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

      //appendnew_next_sd_TgNYaPHqpTqfBCcs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_TgNYaPHqpTqfBCcs');
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
  //appendnew_flow_summaryComponent_Catch
}
