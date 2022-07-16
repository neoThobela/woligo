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
  FormBuilder,
} from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-salary',
  templateUrl: './salary.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class salaryComponent {
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
      this.sd_mJSMrnB80lhRRqyr(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_mJSMrnB80lhRRqyr(bh) {
    try {
      bh = this.sd_AG0N4bDy3CA0o3a5(bh);
      //appendnew_next_sd_mJSMrnB80lhRRqyr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mJSMrnB80lhRRqyr');
    }
  }

  //appendnew_flow_salaryComponent_start

  sd_AG0N4bDy3CA0o3a5(bh) {
    try {
      bh = this.sd_nbb1lCUFh2V7lt3r(bh);
      //appendnew_next_sd_AG0N4bDy3CA0o3a5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AG0N4bDy3CA0o3a5');
    }
  }

  sd_nbb1lCUFh2V7lt3r(bh) {
    try {
      bh = this.sd_B3ygWMJPX5CnVBRC(bh);
      //appendnew_next_sd_nbb1lCUFh2V7lt3r
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nbb1lCUFh2V7lt3r');
    }
  }

  sd_B3ygWMJPX5CnVBRC(bh) {
    try {
      const page = this.page;
      page.salaryForm = new FormGroup({
        salary: new FormControl('', [Validators.required]),
      });
      console.log('form', page.salaryForm);
      //appendnew_next_sd_B3ygWMJPX5CnVBRC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B3ygWMJPX5CnVBRC');
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
  //appendnew_flow_salaryComponent_Catch
}
