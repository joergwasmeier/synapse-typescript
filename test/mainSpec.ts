import * as TestUtils from 'react-addons-test-utils';
import LoginShowEvent from "../src/de/js/timekeeper/login/controller/event/LoginShowEvent";
import A_Test from "../src/A_Test";
import LoginModel from "../src/de/js/timekeeper/login/model/LoginModel";

describe("Basic Test", function() {
    beforeEach(() => {
        this.container = document.createElement('div');
        document.body.appendChild(this.container);

        new A_Test();
        new LoginShowEvent(this.container).dispatch();
    });

    it("Click Login Button", (done) => {
        var h = document.querySelector(".loginBt");
        TestUtils.Simulate.click(h);

        //this.container.querySelector("input").value = "test";
        //TestUtils.Simulate.change(this.container.querySelector("input"));
        //LoginModel.getInstance().passWord = "test";

        setTimeout(() =>{
            //expect(LoginModel.getInstance().userName).toBe("Super");
            done();
        },10);

    });
});