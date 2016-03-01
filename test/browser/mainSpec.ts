import * as TestUtils from 'react-addons-test-utils';

import LoginShowEvent from "../../src/timekeeper/login/controller/event/LoginShowEvent";
import A_Test from "../../src/A_Test";
import LoginModel from "../../src/timekeeper/login/model/LoginModel";


describe("Basic Test", function() {
    beforeEach((done) => {
        this.container = document.createElement('div');
        document.body.appendChild(this.container);

        new A_Test();
        setTimeout(() => {
            new LoginShowEvent(this.container).dispatch();
            done();
        }, 200);

    });

    it("Click Login Button", (done) => {
        var h = document.querySelector(".loginBt");
        TestUtils.Simulate.click(h);
        console.log(LoginModel.getInstance().userName);
        setTimeout(() =>{
            expect(LoginModel.getInstance().userName).toBe("Super");

            done();
        },10);

    });

});