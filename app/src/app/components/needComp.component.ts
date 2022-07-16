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
  selector: 'bh-needComp',
  templateUrl: './needComp.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class needCompComponent {
  @Input('selection')
  public selection: any = undefined;
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
      this.sd_cA2NOpzG8y0IZ6ZO(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_cA2NOpzG8y0IZ6ZO(bh) {
    try {
      bh = this.sd_68VLm4zp4rvk7eDo(bh);
      //appendnew_next_sd_cA2NOpzG8y0IZ6ZO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cA2NOpzG8y0IZ6ZO');
    }
  }

  changeIcon(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_9NFZdZ9WA9zpxEGl(bh);
      //appendnew_next_changeIcon
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jTXzo5rcSz9qP4ie');
    }
  }

  //appendnew_flow_needCompComponent_start

  sd_68VLm4zp4rvk7eDo(bh) {
    try {
      this.page.icons = [];
      this.page.iconColor = undefined;
      this.page.checked = undefined;
      this.page.icon = undefined;
      this.page.checkedBox = false;
      bh = this.sd_9QIpXwUe9DvfBJBT(bh);
      //appendnew_next_sd_68VLm4zp4rvk7eDo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_68VLm4zp4rvk7eDo');
    }
  }

  sd_9QIpXwUe9DvfBJBT(bh) {
    try {
      const page = this.page;
      console.log('child', this.selection);
      page.icons = [
        // { "icon":"Web/Images/family.png","iconColor":"Web/Images/colorFamily.png","paragraph":"I need protect my income  or family"},
        {
          icon: 'Web/Images/health.png',
          paragraph: 'I need health insurance            ',
        },
        {
          icon: 'Web/Images/business.png',
          paragraph: 'I need to protect my business ',
        },
      ]; //my income or family
      bh = this.sd_qv9zZAMgFkgsDrx3(bh);
      //appendnew_next_sd_9QIpXwUe9DvfBJBT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9QIpXwUe9DvfBJBT');
    }
  }

  sd_qv9zZAMgFkgsDrx3(bh) {
    try {
      bh = this.sd_vD3hGXvlfChplmqA(bh);
      //appendnew_next_sd_qv9zZAMgFkgsDrx3
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qv9zZAMgFkgsDrx3');
    }
  }

  sd_vD3hGXvlfChplmqA(bh) {
    try {
      const page = this.page;
      page.needForm = new FormGroup({
        need: new FormControl('', [Validators.required]),
      });
      console.log('form', page.needForm);
      //appendnew_next_sd_vD3hGXvlfChplmqA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vD3hGXvlfChplmqA');
    }
  }

  sd_9NFZdZ9WA9zpxEGl(bh) {
    try {
      const page = this.page;
      page.checkedBox = !page.checkedBox;
      //appendnew_next_sd_9NFZdZ9WA9zpxEGl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9NFZdZ9WA9zpxEGl');
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
  //appendnew_flow_needCompComponent_Catch
}
