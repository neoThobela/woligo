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
  selector: 'bh-gender',
  templateUrl: './gender.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class genderComponent {
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
      this.sd_57WPRRadGHd1Xe20(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_57WPRRadGHd1Xe20(bh) {
    try {
      bh = this.sd_V8Cdw7sudscPXniK(bh);
      //appendnew_next_sd_57WPRRadGHd1Xe20
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_57WPRRadGHd1Xe20');
    }
  }

  changeGenderfunc(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_qpVGRmIDxagQsswP(bh);
      //appendnew_next_changeGenderfunc
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1Pk4OWYw6ojyWf58');
    }
  }

  changeFemaleFunct(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_VUINEU02vuAn1UGw(bh);
      //appendnew_next_changeFemaleFunct
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fzVzir0zmavPBRUh');
    }
  }

  yesFun(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_1Jh7cMZVHFwTSRLB(bh);
      //appendnew_next_yesFun
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bDeXLiQXqUM4Afxx');
    }
  }

  noFunc(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_AuWvKwuXQ74Fy7qA(bh);
      //appendnew_next_noFunc
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_WioTzGIBWOfod9D0');
    }
  }

  //appendnew_flow_genderComponent_start

  sd_V8Cdw7sudscPXniK(bh) {
    try {
      this.page.changeGender = false;
      this.page.changeFemale = false;
      this.page.yes = false;
      this.page.no = false;
      bh = this.sd_Nu2vX9iamQ5aMqIq(bh);
      //appendnew_next_sd_V8Cdw7sudscPXniK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V8Cdw7sudscPXniK');
    }
  }

  sd_Nu2vX9iamQ5aMqIq(bh) {
    try {
      bh = this.sd_ttnCryCq7m4yMkgz(bh);
      //appendnew_next_sd_Nu2vX9iamQ5aMqIq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Nu2vX9iamQ5aMqIq');
    }
  }

  sd_ttnCryCq7m4yMkgz(bh) {
    try {
      const page = this.page;
      page.genderForm = new FormGroup({
        gender: new FormControl('', [Validators.required]),
        maternity: new FormControl('n/a', [Validators.required]),
      });
      console.log('form', page.genderForm);
      //appendnew_next_sd_ttnCryCq7m4yMkgz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ttnCryCq7m4yMkgz');
    }
  }

  sd_qpVGRmIDxagQsswP(bh) {
    try {
      const page = this.page;
      page.changeGender = true;
      page.changeFemale = false;

      //appendnew_next_sd_qpVGRmIDxagQsswP
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qpVGRmIDxagQsswP');
    }
  }

  sd_VUINEU02vuAn1UGw(bh) {
    try {
      const page = this.page;
      page.changeFemale = true;
      page.changeGender = false;

      //appendnew_next_sd_VUINEU02vuAn1UGw
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VUINEU02vuAn1UGw');
    }
  }

  sd_1Jh7cMZVHFwTSRLB(bh) {
    try {
      const page = this.page;
      page.yes = true;
      page.no = false;

      //appendnew_next_sd_1Jh7cMZVHFwTSRLB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1Jh7cMZVHFwTSRLB');
    }
  }

  sd_AuWvKwuXQ74Fy7qA(bh) {
    try {
      const page = this.page;
      page.no = true;
      page.yes = false;

      //appendnew_next_sd_AuWvKwuXQ74Fy7qA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AuWvKwuXQ74Fy7qA');
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
  //appendnew_flow_genderComponent_Catch
}
