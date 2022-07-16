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
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dateOfBirth',
  templateUrl: './dateOfBirth.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dateOfBirthComponent {
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
      this.sd_fu8rUxxyJfPaP6hF(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_fu8rUxxyJfPaP6hF(bh) {
    try {
      bh = this.sd_72pIuvLMX3qRrrEK(bh);
      //appendnew_next_sd_fu8rUxxyJfPaP6hF
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fu8rUxxyJfPaP6hF');
    }
  }

  date(dob: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { dob: dob };
      bh.local = {};
      bh = this.sd_C4PQayqwlhKalz1H(bh);
      //appendnew_next_date
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UvWd9EbPG5gRKp7m');
    }
  }

  //appendnew_flow_dateOfBirthComponent_start

  sd_72pIuvLMX3qRrrEK(bh) {
    try {
      this.page.dobForm = undefined;
      bh = this.sd_BtdHckZVCV5498OL(bh);
      //appendnew_next_sd_72pIuvLMX3qRrrEK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_72pIuvLMX3qRrrEK');
    }
  }

  sd_BtdHckZVCV5498OL(bh) {
    try {
      bh = this.sd_cEm6zR4Xgj9BEX8O(bh);
      //appendnew_next_sd_BtdHckZVCV5498OL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BtdHckZVCV5498OL');
    }
  }

  sd_cEm6zR4Xgj9BEX8O(bh) {
    try {
      const page = this.page;
      page.dobForm = new FormGroup({
        dob: new FormControl('', [Validators.required]),
      });
      console.log('form', page.dobForm);
      //appendnew_next_sd_cEm6zR4Xgj9BEX8O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cEm6zR4Xgj9BEX8O');
    }
  }

  sd_C4PQayqwlhKalz1H(bh) {
    try {
      const page = this.page;
      //  page.year = new Date(dob).getFullYear();
      //     page.today = new Date().getFullYear();
      //     if(page.today - page.year >= 100){
      //       console.log('invalid')
      //     }

      //appendnew_next_sd_C4PQayqwlhKalz1H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C4PQayqwlhKalz1H');
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
  //appendnew_flow_dateOfBirthComponent_Catch
}
