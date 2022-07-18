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
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { dialogBoxComponent } from './dialogBox.component'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-fourIcons',
  templateUrl: './fourIcons.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class fourIconsComponent implements AfterContentChecked {
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
      this.sd_Iq5QMTRKbppo44yf(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_Iq5QMTRKbppo44yf(bh) {
    try {
      bh = this.sd_s4nP5fljZq4gP5qr(bh);
      //appendnew_next_sd_Iq5QMTRKbppo44yf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Iq5QMTRKbppo44yf');
    }
  }

  changeColor(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_mySwMU8D3TtIrOj7(bh);
      //appendnew_next_changeColor
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UTwjUcMWRxcIFYUj');
    }
  }

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_pPMYr9IyU7DSpdu2(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aGVRYNMAwl1XH4CL');
    }
  }

  sd_G6zVN8ZQ7buWO36w(data: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { data: data };
      bh.local = {};
      bh = this.sd_bSFnTPY1Ak5rXWYM(bh);
      //appendnew_next_sd_G6zVN8ZQ7buWO36w
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G6zVN8ZQ7buWO36w');
    }
  }

  //appendnew_flow_fourIconsComponent_start

  sd_s4nP5fljZq4gP5qr(bh) {
    try {
      this.page.checkedInsure = false;
      bh = this.sd_F5cNgZRiBkkvELE0(bh);
      //appendnew_next_sd_s4nP5fljZq4gP5qr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_s4nP5fljZq4gP5qr');
    }
  }

  sd_F5cNgZRiBkkvELE0(bh) {
    try {
      bh = this.sd_UvMwhkGHK2D4nFEx(bh);
      //appendnew_next_sd_F5cNgZRiBkkvELE0
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_F5cNgZRiBkkvELE0');
    }
  }

  sd_UvMwhkGHK2D4nFEx(bh) {
    try {
      const page = this.page;
      page.icons = [
        {
          icon: 'Web/Images/injuredMan.png',
          paragraph: 'Accident insurance',
          width: 20,
        },
        {
          icon: 'Web/Images/moniter.png',
          paragraph: 'Life insurance',
          width: 30,
        },
        {
          icon: 'Web/Images/discountPlans.png',
          paragraph: 'Discount plans',
          width: 30,
        },
      ]; //my income or family
      bh = this.sd_hUKgHqZ6h6knVYKk(bh);
      //appendnew_next_sd_UvMwhkGHK2D4nFEx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UvMwhkGHK2D4nFEx');
    }
  }

  sd_hUKgHqZ6h6knVYKk(bh) {
    try {
      const page = this.page;
      page.insuranceTypeForm = new FormGroup({
        DisabilityInsurance: new FormControl('', [Validators.required]),
      });
      console.log('form', page.insuranceTypeForm);
      //appendnew_next_sd_hUKgHqZ6h6knVYKk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hUKgHqZ6h6knVYKk');
    }
  }

  sd_mySwMU8D3TtIrOj7(bh) {
    try {
      const page = this.page;
      page.checkedInsure = !page.checkedInsure;
      //appendnew_next_sd_mySwMU8D3TtIrOj7
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_mySwMU8D3TtIrOj7');
    }
  }

  sd_pPMYr9IyU7DSpdu2(bh) {
    try {
      this.page.shareform = this.__page_injector__.get(shareformService);
      bh = this.sd_SfpspZIOeG3qWdlr(bh);
      //appendnew_next_sd_pPMYr9IyU7DSpdu2
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_pPMYr9IyU7DSpdu2');
    }
  }

  sd_SfpspZIOeG3qWdlr(bh) {
    try {
      const page = this.page;
      page.shareform.myForm = page.insuranceTypeForm.status;
      // page.shareform.data.insuranceType=page.insuranceTypeForm.controls.insuranceType
      // console.log(page.shareform.data.insuranceType)
      //appendnew_next_sd_SfpspZIOeG3qWdlr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SfpspZIOeG3qWdlr');
    }
  }

  sd_bSFnTPY1Ak5rXWYM(bh) {
    try {
      const dialogBoxDialog = this.__page_injector__.get(MatDialog);
      const dialogBoxDialogRef = dialogBoxDialog.open(dialogBoxComponent, {});

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bSFnTPY1Ak5rXWYM');
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
  //appendnew_flow_fourIconsComponent_Catch
}
