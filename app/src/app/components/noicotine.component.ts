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
  selector: 'bh-noicotine',
  templateUrl: './noicotine.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class noicotineComponent implements AfterContentChecked {
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
      this.sd_hpoFiCsov4jYrZA4(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_hpoFiCsov4jYrZA4(bh) {
    try {
      bh = this.sd_DzCcjuSyZ0I2i9tc(bh);
      //appendnew_next_sd_hpoFiCsov4jYrZA4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hpoFiCsov4jYrZA4');
    }
  }

  yesFun(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_48hXRcXZJwOk3IbR(bh);
      //appendnew_next_yesFun
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Gt4p070xJFXHPCG3');
    }
  }

  noFunction(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_x1jqio7XVv4YmILd(bh);
      //appendnew_next_noFunction
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KiA2YlMLQWRoins8');
    }
  }

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_1ikr0LAswBBYyf9L(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nBxxgTolB4kc0Lyl');
    }
  }

  //appendnew_flow_noicotineComponent_start

  sd_DzCcjuSyZ0I2i9tc(bh) {
    try {
      bh = this.sd_VTCOWEZvwIT4Qjui(bh);
      //appendnew_next_sd_DzCcjuSyZ0I2i9tc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DzCcjuSyZ0I2i9tc');
    }
  }

  sd_VTCOWEZvwIT4Qjui(bh) {
    try {
      bh = this.sd_8olGAiryYMTlTLXi(bh);
      //appendnew_next_sd_VTCOWEZvwIT4Qjui
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VTCOWEZvwIT4Qjui');
    }
  }

  sd_8olGAiryYMTlTLXi(bh) {
    try {
      const page = this.page;
      page.nicotineForm = new FormGroup({
        nicotine: new FormControl('', [Validators.required]),
      });
      console.log('form', page.nicotineForm);
      //appendnew_next_sd_8olGAiryYMTlTLXi
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8olGAiryYMTlTLXi');
    }
  }

  sd_48hXRcXZJwOk3IbR(bh) {
    try {
      const page = this.page;
      page.yes = true;
      page.no = false;

      //appendnew_next_sd_48hXRcXZJwOk3IbR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_48hXRcXZJwOk3IbR');
    }
  }

  sd_x1jqio7XVv4YmILd(bh) {
    try {
      const page = this.page;
      page.yes = false;
      page.no = true;

      //appendnew_next_sd_x1jqio7XVv4YmILd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_x1jqio7XVv4YmILd');
    }
  }

  sd_1ikr0LAswBBYyf9L(bh) {
    try {
      this.page.shareform = this.__page_injector__.get(shareformService);
      bh = this.sd_s2HlvjAos5h3E4Sm(bh);
      //appendnew_next_sd_1ikr0LAswBBYyf9L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1ikr0LAswBBYyf9L');
    }
  }

  sd_s2HlvjAos5h3E4Sm(bh) {
    try {
      const page = this.page;
      page.shareform.myForm = page.nicotineForm.status;
      page.shareform.data.nicotine = page.nicotineForm.controls.nicotine.value;
      console.log(page.shareform.data.nicotine);
      //appendnew_next_sd_s2HlvjAos5h3E4Sm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s2HlvjAos5h3E4Sm');
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
  //appendnew_flow_noicotineComponent_Catch
}
