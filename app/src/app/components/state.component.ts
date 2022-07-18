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
  selector: 'bh-state',
  templateUrl: './state.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class stateComponent implements AfterContentChecked {
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
      this.sd_ma5f0qm5awfQwTmK(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ma5f0qm5awfQwTmK(bh) {
    try {
      bh = this.sd_qANZEqMvR4fFiaBx(bh);
      //appendnew_next_sd_ma5f0qm5awfQwTmK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ma5f0qm5awfQwTmK');
    }
  }

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_MBDcr98NXT9UdSLY(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IGgIdjhsOgntwKAy');
    }
  }

  //appendnew_flow_stateComponent_start

  sd_qANZEqMvR4fFiaBx(bh) {
    try {
      this.page.provinces = [];
      bh = this.sd_4gsybZxSUMDbGPiP(bh);
      //appendnew_next_sd_qANZEqMvR4fFiaBx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qANZEqMvR4fFiaBx');
    }
  }

  sd_4gsybZxSUMDbGPiP(bh) {
    try {
      const page = this.page;
      page.mySelect = [
        { viewValue: 'Mpumalanga' },
        { viewValue: 'Gauteng' },
        { viewValue: 'Limpopo' },
        { viewValue: 'Western Cape' },
        { viewValue: 'Eastern Cape' },
        { viewValue: 'Northern Cape' },
        { viewValue: 'North West' },
        { viewValue: 'Free State' },
        { viewValue: 'Kwa-Zulu Natal' },
      ];
      bh = this.sd_ovZ5am30utUPr3Wg(bh);
      //appendnew_next_sd_4gsybZxSUMDbGPiP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4gsybZxSUMDbGPiP');
    }
  }

  sd_ovZ5am30utUPr3Wg(bh) {
    try {
      bh = this.sd_vJaQpznwwMLGuHcw(bh);
      //appendnew_next_sd_ovZ5am30utUPr3Wg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ovZ5am30utUPr3Wg');
    }
  }

  sd_vJaQpznwwMLGuHcw(bh) {
    try {
      const page = this.page;
      page.stateForm = new FormGroup({
        state: new FormControl('', [Validators.required]),
      });
      console.log('form', page.stateForm);
      //appendnew_next_sd_vJaQpznwwMLGuHcw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vJaQpznwwMLGuHcw');
    }
  }

  sd_MBDcr98NXT9UdSLY(bh) {
    try {
      this.page.shareform = this.__page_injector__.get(shareformService);
      bh = this.sd_xj135eBWL2U6887S(bh);
      //appendnew_next_sd_MBDcr98NXT9UdSLY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MBDcr98NXT9UdSLY');
    }
  }

  sd_xj135eBWL2U6887S(bh) {
    try {
      const page = this.page;
      page.shareform.myForm = page.stateForm.status;
      page.shareform.data.state = page.stateForm.controls.state.value;
      console.log(page.shareform.data.state);
      //appendnew_next_sd_xj135eBWL2U6887S
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xj135eBWL2U6887S');
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
  //appendnew_flow_stateComponent_Catch
}
