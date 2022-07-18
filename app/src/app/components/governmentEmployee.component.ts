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
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'; //_splitter_
import { shareformService } from 'app/services/shareform/shareform.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-governmentEmployee',
  templateUrl: './governmentEmployee.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class governmentEmployeeComponent implements AfterContentChecked {
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
      this.sd_yI5QjaQksmkg6IqU(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_yI5QjaQksmkg6IqU(bh) {
    try {
      bh = this.sd_248EJjl1Ewvu7VyT(bh);
      //appendnew_next_sd_yI5QjaQksmkg6IqU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yI5QjaQksmkg6IqU');
    }
  }

  yesFun(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_WDBxXNZCiADVnoB2(bh);
      //appendnew_next_yesFun
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xNUSdv1L3wmvXohW');
    }
  }

  noFunc(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_oSK7BtSLZA6DWTxS(bh);
      //appendnew_next_noFunc
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kecWXLQIvHQhn1Y0');
    }
  }

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_8TaIirQOcsrBYUr0(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2cnt5zg2dkdDDduv');
    }
  }

  //appendnew_flow_governmentEmployeeComponent_start

  sd_248EJjl1Ewvu7VyT(bh) {
    try {
      bh = this.sd_71lDPQfZiBra6ZrZ(bh);
      //appendnew_next_sd_248EJjl1Ewvu7VyT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_248EJjl1Ewvu7VyT');
    }
  }

  sd_71lDPQfZiBra6ZrZ(bh) {
    try {
      bh = this.sd_74Cw0Qrqa3nLCFnG(bh);
      //appendnew_next_sd_71lDPQfZiBra6ZrZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_71lDPQfZiBra6ZrZ');
    }
  }

  sd_74Cw0Qrqa3nLCFnG(bh) {
    try {
      const page = this.page;
      page.governmentForm = new FormGroup({
        governmentEmployee: new FormControl('', [Validators.required]),
      });
      console.log('form', page.governmentForm);
      //appendnew_next_sd_74Cw0Qrqa3nLCFnG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_74Cw0Qrqa3nLCFnG');
    }
  }

  sd_WDBxXNZCiADVnoB2(bh) {
    try {
      const page = this.page;
      page.yes = true;
      page.no = false;

      //appendnew_next_sd_WDBxXNZCiADVnoB2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WDBxXNZCiADVnoB2');
    }
  }

  sd_oSK7BtSLZA6DWTxS(bh) {
    try {
      const page = this.page;
      page.no = true;
      page.yes = false;

      //appendnew_next_sd_oSK7BtSLZA6DWTxS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_oSK7BtSLZA6DWTxS');
    }
  }

  sd_8TaIirQOcsrBYUr0(bh) {
    try {
      this.page.shareform = this.__page_injector__.get(shareformService);
      bh = this.sd_kNcgjCg5QfuovAPQ(bh);
      //appendnew_next_sd_8TaIirQOcsrBYUr0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8TaIirQOcsrBYUr0');
    }
  }

  sd_kNcgjCg5QfuovAPQ(bh) {
    try {
      const page = this.page;
      page.shareform.myForm = page.governmentForm.status;
      page.shareform.data.governmentEmployee =
        page.governmentForm.controls.governmentEmployee.value;
      console.log(page.shareform.data.government);
      //appendnew_next_sd_kNcgjCg5QfuovAPQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kNcgjCg5QfuovAPQ');
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
  //appendnew_flow_governmentEmployeeComponent_Catch
}
