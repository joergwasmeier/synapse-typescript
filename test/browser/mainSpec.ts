import * as TestUtils from 'react-addons-test-utils';

//import LoginShowEvent from "../../src/timekeeper/login/controller/event/LoginShowEvent";
import A_Test from "../../src/A_Test";
//import LoginModel from "../../src/timekeeper/login/model/LoginModel";


describe("Basic Test", function() {

    beforeEach((done) => {
        setTimeout(() => {
            done();
        }, 200);

    });

    it("Click Login Button", (done) => {
    //    var h = document.querySelector(".loginBt");
        //TestUtils.Simulate.click(h);
        //console.log(LoginModel.getInstance().userName);
        setTimeout(() =>{
          //  expect(LoginModel.getInstance().userName).toBe("Super");

            done();
        },10);

    });

});