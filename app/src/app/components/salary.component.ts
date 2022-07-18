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
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms'; //_splitter_
import { shareformService } from 'app/services/shareform/shareform.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-salary',
  templateUrl: './salary.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class salaryComponent implements AfterContentChecked {
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

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_kEx6uhOSz7ro7hU9(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pSTFpPA9nz0K9pD6');
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
        salary: new FormControl('', [
          Validators.required,
          Validators.min(1200),
          Validators.pattern('^(0|[1-9][0-9]*)$'),
        ]),
      });
      console.log('form', page.salaryForm);
      bh = this.sd_lAynT1LU71UrhDJX(bh);
      //appendnew_next_sd_B3ygWMJPX5CnVBRC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B3ygWMJPX5CnVBRC');
    }
  }

  sd_lAynT1LU71UrhDJX(bh) {
    try {
      //appendnew_next_sd_lAynT1LU71UrhDJX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lAynT1LU71UrhDJX');
    }
  }

  sd_kEx6uhOSz7ro7hU9(bh) {
    try {
      this.page.shareform = this.__page_injector__.get(shareformService);
      bh = this.sd_hnLrjtnCrURD7OA8(bh);
      //appendnew_next_sd_kEx6uhOSz7ro7hU9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kEx6uhOSz7ro7hU9');
    }
  }

  sd_hnLrjtnCrURD7OA8(bh) {
    try {
      const page = this.page; //assign my service form to the salary form
      page.shareform.myForm = page.salaryForm.status;
      //assign my object to the value from form
      page.shareform.data.salary = page.salaryForm.controls.salary.value;
      console.log(page.shareform.data.salary);

      //appendnew_next_sd_hnLrjtnCrURD7OA8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hnLrjtnCrURD7OA8');
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
