import S_Main from "../../src/S_Main";
import LoginUserEvent from "fabalous-login/controller/event/LoginUserEvent";

describe("Basic Test", function() {
    beforeEach(() => {
        new S_Main();
    });

    it("Login Wrong", (done) => {
        setTimeout(function() {
            new LoginUserEvent("testerre", "test").dispatch((ev:LoginUserEvent) => {
                expect(ev.loggedIn).toBe(false);
                done();
            });
        },1000);
    });

    it("Login Test", (done) => {
        setTimeout(function() {
            new LoginUserEvent("test", "test").dispatch((ev:LoginUserEvent) => {
                expect(ev.loggedIn).toBe(true);
                done();
            });
        },1200);
    });
});