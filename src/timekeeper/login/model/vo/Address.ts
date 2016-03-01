import FabaValueObject from "fabalous/core/FabaValueObject";
import FabaCore from "fabalous/FabaServer";

export default class Address extends FabaValueObject {

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

FabaCore.vos['Address'] = Address;