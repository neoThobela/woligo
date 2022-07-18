/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable()
export class shareformService {

myForm:any;
data;

constructor(){
    this.initshareform();
}

initshareform(){
    this.data = {
        protectionType:'Protect income or family',
        insuranceType:'Disability Insurance',
        dob:'',
        gender:'',
        maternity:'',
        state:'',
        occupation:'',
        employed:'',
        salary:'',
        hours:'',
        governmentEmployee:'',
        nicotine:''
    }
}
}
