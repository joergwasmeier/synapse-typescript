import FabaWebApplication from "fabalous/dist/FabaWebApplication";
import LoginMediator from "./timekeeper/login/controller/LoginMediator";

export default class A_Test extends FabaWebApplication {
    constructor() {
        super();

        this.addMediator(new LoginMediator());

    }
}