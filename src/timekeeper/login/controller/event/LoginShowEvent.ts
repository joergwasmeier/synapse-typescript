import FabaEvent from "fabalous/core/FabaEvent";

export default class LoginShowEvent extends FabaEvent{
    target:any;

    constructor(target:any) {
        super();

        this.target = target;
    }
}