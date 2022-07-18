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
  ValidationErrors,
} from '@angular/forms'; //_splitter_
import { NgxAgeValidator } from 'ngx-age-validator'; //_splitter_
import { shareformService } from 'app/services/shareform/shareform.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dateOfBirth',
  templateUrl: './dateOfBirth.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dateOfBirthComponent implements AfterContentChecked {
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

  sd_zkKwY7Eppd7zRX8K(dob: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { dob: dob };
      bh.local = {};
      bh = this.sd_Vz5Nd5Ir2x3gbzQm(bh);
      //appendnew_next_sd_zkKwY7Eppd7zRX8K
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zkKwY7Eppd7zRX8K');
    }
  }

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_OcXEx2uExoOFVBcm(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GITQTOhxGnvoYsv3');
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
      bh = this.sd_B7aF1oBUAUMfHKPc(bh);
      //appendnew_next_sd_BtdHckZVCV5498OL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BtdHckZVCV5498OL');
    }
  }

  sd_B7aF1oBUAUMfHKPc(bh) {
    try {
      bh = this.sd_AcP0HYzuCAafET7E(bh);
      //appendnew_next_sd_B7aF1oBUAUMfHKPc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_B7aF1oBUAUMfHKPc');
    }
  }

  sd_AcP0HYzuCAafET7E(bh) {
    try {
      bh = this.sd_cEm6zR4Xgj9BEX8O(bh);
      //appendnew_next_sd_AcP0HYzuCAafET7E
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AcP0HYzuCAafET7E');
    }
  }

  sd_cEm6zR4Xgj9BEX8O(bh) {
    try {
      const page = this.page;
      page.dobForm = new FormGroup({
        dob: new FormControl(null, [
          NgxAgeValidator(18, 60),
          Validators.required,
        ]),
      });
      console.log('form', page.dobForm);
      bh = this.sd_HJsKUlh6AW6s65yQ(bh);
      //appendnew_next_sd_cEm6zR4Xgj9BEX8O
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cEm6zR4Xgj9BEX8O');
    }
  }

  sd_HJsKUlh6AW6s65yQ(bh) {
    try {
      const page = this.page;
      page.dobForm.controls.dob.valueChanges.subscribe(() => {
        const controlErrors: ValidationErrors | null =
          page.dobForm.controls.dob.errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach((keyError) => {
            console.log(
              ' keyError: ' + keyError + ', err value: ',
              controlErrors[keyError]
            );
          });
        }
      });

      //appendnew_next_sd_HJsKUlh6AW6s65yQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_HJsKUlh6AW6s65yQ');
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

  sd_Vz5Nd5Ir2x3gbzQm(bh) {
    try {
      bh.pageOutput.emitValue.emit(this.page.dobForm.value);
      //appendnew_next_sd_Vz5Nd5Ir2x3gbzQm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Vz5Nd5Ir2x3gbzQm');
    }
  }

  sd_OcXEx2uExoOFVBcm(bh) {
    try {
      this.page.shareform = this.__page_injector__.get(shareformService);
      bh = this.sd_KXhwJGYqpAdYEHP6(bh);
      //appendnew_next_sd_OcXEx2uExoOFVBcm
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_OcXEx2uExoOFVBcm');
    }
  }

  sd_KXhwJGYqpAdYEHP6(bh) {
    try {
      const page = this.page;
      page.shareform.myForm = page.dobForm.status;
      page.shareform.data.dob = page.dobForm.controls.dob.value;
      console.log(page.shareform.data.dob);
      //appendnew_next_sd_KXhwJGYqpAdYEHP6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KXhwJGYqpAdYEHP6');
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
