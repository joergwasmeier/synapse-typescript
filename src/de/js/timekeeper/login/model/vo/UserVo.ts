import {trace} from "../../../../../jw/synapse/utils/Logger";
import SynapseValueObject from "../../../../../jw/synapse/core/SynapseValueObject";
import SynapseApplication from "../../../../../jw/synapse/core/SynapseApplication";
import Address from "./Address";

export default class UserVo extends SynapseValueObject {

    username:string;
    password:string;

    address:Address;

    constructor(){
        super();

        this.address = new Address();


        this.className = "UserVo";

        this.schema = {
            username:'String',
            password:'String'
        }

    }

    validate():Boolean{
        if (!this.username) return false;
        if (!this.password) return false;
        return true;
    }

    clone():UserVo{
        var rt = new UserVo();
        rt.username = this.username;
        rt.password = this.password;

        return rt;
    }
}

SynapseApplication.vos['UserVo'] = UserVo;

function MyClassDecorator(target: any) {

    // save a reference to the original constructor
    var original = target;

    // a utility function to generate instances of a class
    function construct(constructor, args) {
        var c : any = function () {
            return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();
    }

    // the new constructor behaviour
    var f : any = function (...args) {
        console.log("New: " + original.name);
        trace(original);


        return construct(original, args);
    }

    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;

    // return new constructor (will override original)
    return f;
}