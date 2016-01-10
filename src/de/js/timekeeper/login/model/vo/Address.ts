import SynapseValueObject from "../../../../../jw/synapse/core/SynapseValueObject";
import SynapseApplication from "../../../../../jw/synapse/core/SynapseApplication";

export default class Address extends SynapseValueObject {

  street:string = "test";
  zip:string = "test2";
  city:string = "tes3";

  constructor(){
    super();
    this.className = 'Address';
  }

  fullAdress(){
    return this.street +''+ this.zip  +''+ this.city;
  }
}

SynapseApplication.vos['Address'] = Address;