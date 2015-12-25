import WebApplication from "./de/jw/synapse/WebApplication";
import LoginMediator from "./de/js/timekeeper/login/controller/LoginMediator";


class S_Main extends WebApplication {
    constructor() {
        super();

        this.addMediator(new LoginMediator());

        var express = require('express');
        var app = express();

        var bodyParser = require('body-parser');

        app.use(this.rawBody);



        app.all('/api/', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            next();
        });

        app.post('/api/', function (req, res) {
            res.send('Api');
            console.log('RB: ' + req.rawBody);
        });

        app.listen(3000);
    }

    private rawBody(req, res, next) {
        req.setEncoding('utf8');
        req.rawBody = '';
        req.on('data', function(chunk) {
            req.rawBody += chunk;
        });
        req.on('end', function(){
            next();
        });
    }
}

new S_Main();