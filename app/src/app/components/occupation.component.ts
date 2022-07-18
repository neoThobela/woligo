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
} from '@angular/forms'; //_splitter_
import { shareformService } from 'app/services/shareform/shareform.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-occupation',
  templateUrl: './occupation.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class occupationComponent implements AfterContentChecked {
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
      this.sd_G5CDUZ5rS5N1hsNJ(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_G5CDUZ5rS5N1hsNJ(bh) {
    try {
      bh = this.sd_9cEvbhoYdmTB3EJl(bh);
      //appendnew_next_sd_G5CDUZ5rS5N1hsNJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_G5CDUZ5rS5N1hsNJ');
    }
  }

  ngAfterContentChecked() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_hFjItBTKUqp0g9SD(bh);
      //appendnew_next_ngAfterContentChecked
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ur9FZvLLn6VOoeU2');
    }
  }

  show(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_YoivaSpXCksL88o5(bh);
      //appendnew_next_show
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4F5rc1FDrDBP6d4K');
    }
  }

  //appendnew_flow_occupationComponent_start

  sd_9cEvbhoYdmTB3EJl(bh) {
    try {
      this.page.mySelect = undefined;
      bh = this.sd_GRw2VbS9cDjvGcsQ(bh);
      //appendnew_next_sd_9cEvbhoYdmTB3EJl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9cEvbhoYdmTB3EJl');
    }
  }

  sd_GRw2VbS9cDjvGcsQ(bh) {
    try {
      const page = this.page;
      page.mySelect = [
        { viewValue: 'Artist' },
        { viewValue: 'Business analyst' },
        { viewValue: 'Designer' },
        { viewValue: 'Entrepreneur' },
        { viewValue: 'IT specialist' },
        { viewValue: 'Freelancer' },
        { viewValue: 'Social Worker' },
      ];
      bh = this.sd_a7K76CDySppC55W8(bh);
      //appendnew_next_sd_GRw2VbS9cDjvGcsQ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GRw2VbS9cDjvGcsQ');
    }
  }

  sd_a7K76CDySppC55W8(bh) {
    try {
      bh = this.sd_Iw2J0gCjxNAHY25L(bh);
      //appendnew_next_sd_a7K76CDySppC55W8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_a7K76CDySppC55W8');
    }
  }

  sd_Iw2J0gCjxNAHY25L(bh) {
    try {
      const page = this.page;
      page.occupationForm = new FormGroup({
        occupation: new FormControl('', [Validators.required]),
      });
      console.log('form', page.occupationForm);
      //appendnew_next_sd_Iw2J0gCjxNAHY25L
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Iw2J0gCjxNAHY25L');
    }
  }

  sd_hFjItBTKUqp0g9SD(bh) {
    try {
      this.page.shareform = this.__page_injector__.get(shareformService);
      bh = this.sd_KSyZ7Pny284fddWn(bh);
      //appendnew_next_sd_hFjItBTKUqp0g9SD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hFjItBTKUqp0g9SD');
    }
  }

  sd_KSyZ7Pny284fddWn(bh) {
    try {
      const page = this.page;
      page.shareform.myForm = page.occupationForm.status;
      page.shareform.data.occupation =
        page.occupationForm.controls.occupation.value;
      console.log(page.shareform.data.occupation);
      //appendnew_next_sd_KSyZ7Pny284fddWn
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KSyZ7Pny284fddWn');
    }
  }

  sd_YoivaSpXCksL88o5(bh) {
    try {
      //appendnew_next_sd_YoivaSpXCksL88o5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YoivaSpXCksL88o5');
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
  //appendnew_flow_occupationComponent_Catch
}
