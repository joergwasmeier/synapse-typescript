import WebApplication from "./de/jw/synapse/WebApplication";
import LoginMediator from "./de/js/timekeeper/login/controller/LoginMediator";


class S_Main extends WebApplication {
    constructor() {
        super();

        this.addMediator(new LoginMediator());

        var express = require('express');
        var app = express();

        app.all('/api/', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            next();
        });

        app.post('/api/', function (req, res) {
            res.send('Api')
        });

        app.listen(3000);
    }
}

new S_Main();