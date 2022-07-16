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
  selector: 'bh-employmentHours',
  templateUrl: './employmentHours.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class employmentHoursComponent {
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
      this.sd_eWBLzDveKN5V4Ruk(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_eWBLzDveKN5V4Ruk(bh) {
    try {
      bh = this.sd_Jykt9EsMVShHmfLU(bh);
      //appendnew_next_sd_eWBLzDveKN5V4Ruk
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eWBLzDveKN5V4Ruk');
    }
  }

  yesFun(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_VtGNkgcNuXphL3As(bh);
      //appendnew_next_yesFun
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PRu5IlLPPviprSFQ');
    }
  }

  noFunc(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_fhwcluh4NQDxP5hY(bh);
      //appendnew_next_noFunc
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7vjh71mqWHlgQWpB');
    }
  }

  //appendnew_flow_employmentHoursComponent_start

  sd_Jykt9EsMVShHmfLU(bh) {
    try {
      this.page.yes = false;
      this.page.no = false;
      bh = this.sd_k6oAeJeac85YQhCx(bh);
      //appendnew_next_sd_Jykt9EsMVShHmfLU
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Jykt9EsMVShHmfLU');
    }
  }

  sd_k6oAeJeac85YQhCx(bh) {
    try {
      bh = this.sd_eOC9MAwPFZfkUNRp(bh);
      //appendnew_next_sd_k6oAeJeac85YQhCx
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_k6oAeJeac85YQhCx');
    }
  }

  sd_eOC9MAwPFZfkUNRp(bh) {
    try {
      const page = this.page;
      page.hoursForm = new FormGroup({
        hours: new FormControl('', [Validators.required]),
      });
      console.log('form', page.hoursForm);
      //appendnew_next_sd_eOC9MAwPFZfkUNRp
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eOC9MAwPFZfkUNRp');
    }
  }

  sd_VtGNkgcNuXphL3As(bh) {
    try {
      const page = this.page;
      page.yes = true;
      page.no = false;

      //appendnew_next_sd_VtGNkgcNuXphL3As
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VtGNkgcNuXphL3As');
    }
  }

  sd_fhwcluh4NQDxP5hY(bh) {
    try {
      const page = this.page;
      page.no = true;
      page.yes = false;

      //appendnew_next_sd_fhwcluh4NQDxP5hY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fhwcluh4NQDxP5hY');
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
  //appendnew_flow_employmentHoursComponent_Catch
}
