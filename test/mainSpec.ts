import * as TestUtils from 'react-addons-test-utils';
import LoginShowEvent from "../src/de/js/timekeeper/login/controller/event/LoginShowEvent";
import A_Test from "../src/A_Test";
import LoginModel from "../src/de/js/timekeeper/login/model/LoginModel";
var assert = require('assert');

describe("A suite", function() {
    beforeEach(() => {
        this.body = document.createElement('div');
        document.body.appendChild(this.body);

        this.container = document.createElement('div');
        this.body.appendChild(this.container);

        var h:A_Test = new A_Test();
        assert.equal(h.sup,"tester");

        var ev:LoginShowEvent = new LoginShowEvent(this.container);
        ev.dispatch();
    });

    it("contains spec with an expectation", () => {
        TestUtils.Simulate.click(this.container.querySelector("button"));
        this.container.querySelector("input").value = "test";
        TestUtils.Simulate.change(this.container.querySelector("input"));
        LoginModel.getInstance().passWord = "test";

        console.log(document.querySelectorAll("input")[1].value);

        console.log(LoginModel.getInstance().userName);
        console.log(LoginModel.getInstance().passWord);
        assert(LoginModel.getInstance().userName, "Super");
    });
});