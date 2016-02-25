import S_Main from "../src/S_Main";
import LoginUserEvent from "../src/de/js/timekeeper/login/controller/event/LoginUserEvent";

var assert = require('assert');

describe("Basic Test", function() {
    beforeEach((done) => {
        new S_Main();

        setTimeout(function() {
            done();
        }, 200);
    });

    it("Click Login Button", () => {
        new LoginUserEvent("testsd", "test").dispatch((ev:LoginUserEvent) => {
            console.log(ev.loggedIn);
            assert.equal(ev.loggedIn, "true");
        });

    });
});