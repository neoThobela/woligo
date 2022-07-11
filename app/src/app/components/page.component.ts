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
  selector: 'bh-page',
  templateUrl: './page.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class pageComponent {
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
      this.sd_g4VVwTXC49sVtg1k(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_g4VVwTXC49sVtg1k(bh) {
    try {
      bh = this.sd_ypGMtm2VjPeDT43j(bh);
      //appendnew_next_sd_g4VVwTXC49sVtg1k
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_g4VVwTXC49sVtg1k');
    }
  }

  choosePlan(item = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { item: item };
      bh.local = {};
      bh = this.sd_1WbLgPiAqDiFyyP0(bh);
      //appendnew_next_choosePlan
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p4SuhEFhQGvI00vE');
    }
  }

  checkBox(clicked = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { clicked: clicked };
      bh.local = {};
      bh = this.sd_hMil3yOav3Q611dz(bh);
      //appendnew_next_checkBox
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DXxHn28h4pIIUcIe');
    }
  }

  radioBtn(radio = '', ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { radio: radio };
      bh.local = {};
      bh = this.sd_VzUBBBvu29GvMbOf(bh);
      //appendnew_next_radioBtn
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8Zn7nRZsoxR2MIsO');
    }
  }

  //appendnew_flow_pageComponent_start

  sd_ypGMtm2VjPeDT43j(bh) {
    try {
      this.page.safegruard = undefined;
      this.page.choosePlan = 'Choose Plan';
      this.page.options = [];
      this.page.clicked = false;
      this.page.radio = 'false';
      bh = this.sd_Dl1Uo3Qx0U50Bxmj(bh);
      //appendnew_next_sd_ypGMtm2VjPeDT43j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ypGMtm2VjPeDT43j');
    }
  }

  sd_Dl1Uo3Qx0U50Bxmj(bh) {
    try {
      const page = this.page;
      page.options = [
        {
          title: 'Option 1',
          price: '17',
          benefitAmount: '$1,221 ',
          benefitPeriod: '5 year',
          estimationPeriod: '30 days',
          value: 'Choose Plan',
        },
        {
          title: 'Option 2',
          price: '28',
          benefitAmount: '$11,221 ',
          benefitPeriod: '5 year',
          estimationPeriod: '90 days',
          value: 'Choose Plan',
        },
        {
          title: 'Option 3',
          price: '95',
          benefitAmount: '$21,221 ',
          benefitPeriod: 'To Age 65',
          estimationPeriod: '90 days',
          value: 'Choose Plan',
        },
      ];

      page.wellBegin = [
        {
          image: '/Web/Images/Dot.png',
          paragraph: 'Telehealth',
        },
        {
          image: '/Web/Images/Dot.png',
          paragraph: 'Teladoc Mental Health and Dermatology',
        },
        {
          image: '/Web/Images/Dot.png',
          paragraph: 'Health Advocate Solutions',
        },
        {
          image: '/Web/Images/Dot.png',
          paragraph: 'Dental Discount Plan',
        },
        {
          image: '/Web/Images/Dot.png',
          paragraph: 'Vision Discount Plan',
        },
        {
          image: '/Web/Images/Dot.png',
          paragraph: 'Retail and Mail-Order Pharmacy Discount',
        },
      ];
      page.safeguard = [
        {
          image: '/Web/Images/Dot.png',
          paragraph: 'ID Sanctuary',
        },
        {
          image: '/Web/Images/Dot.png',
          paragraph: 'Global Travel Assistance',
        },
        {
          image: '/Web/Images/Dot.png',
          paragraph: 'Roadside Assistance',
        },
        {
          image: '/Web/Images/Dot.png',
          paragraph: 'Legal Access Services',
        },
        {
          image: '/Web/Images/Dot.png',
          paragraph: 'Financial Services',
        },
      ];
      page.choosePlan = 'Choose Plan';
      bh = this.sd_zi2GqRbfOdB0Jo08(bh);
      //appendnew_next_sd_Dl1Uo3Qx0U50Bxmj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Dl1Uo3Qx0U50Bxmj');
    }
  }

  sd_zi2GqRbfOdB0Jo08(bh) {
    try {
      this.page.router = this.__page_injector__.get(Router);
      this.page.navigationEnd = NavigationEnd;
      this.page.navigationStart = NavigationStart;
      bh = this.sd_q87uHlWsAStTLH2N(bh);
      //appendnew_next_sd_zi2GqRbfOdB0Jo08
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zi2GqRbfOdB0Jo08');
    }
  }

  sd_q87uHlWsAStTLH2N(bh) {
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

      //appendnew_next_sd_q87uHlWsAStTLH2N
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q87uHlWsAStTLH2N');
    }
  }

  sd_1WbLgPiAqDiFyyP0(bh) {
    try {
      const page = this.page; // page.choosePlan = "Choose Plan"

      for (let i = 0; i < page.options.length; i++) {
        if (page.options[i].title === bh.input.item) {
          page.options[i].value = 'Selected';
        } else {
          page.options[i].value = 'Choose Plan';
        }
      }

      // if(page.choosePlan === "Choose Plan"){
      //     page.choosePlan = "Selected"
      // }
      // else{
      //     page.choosePlan = "Choose Plan"
      // }
      //appendnew_next_sd_1WbLgPiAqDiFyyP0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1WbLgPiAqDiFyyP0');
    }
  }

  sd_hMil3yOav3Q611dz(bh) {
    try {
      const page = this.page; // console.log(bh.input.clicked);
      if (page.clicked === 'true') {
        page.clicked = 'false';
      } else {
        page.clicked = 'true';
      }
      console.log(page.clicked);
      //appendnew_next_sd_hMil3yOav3Q611dz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hMil3yOav3Q611dz');
    }
  }

  sd_VzUBBBvu29GvMbOf(bh) {
    try {
      const page = this.page; // console.log(bh.input.clicked);
      if (page.radio === 'false') {
        page.radio = 'true';
      }
      console.log(page.radio);

      //appendnew_next_sd_VzUBBBvu29GvMbOf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VzUBBBvu29GvMbOf');
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
  //appendnew_flow_pageComponent_Catch
}
