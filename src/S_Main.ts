import WebApplication from "./de/jw/synapse/WebApplication";
import LoginMediator from "./de/js/timekeeper/login/controller/LoginMediator";
import LoginUserEvent from "./de/js/timekeeper/login/controller/event/LoginUserEvent";
import SynapseEvent from "./de/jw/synapse/core/SynapseEvent";


class S_Main extends WebApplication {
    constructor() {
        super();

        this.addMediator(new LoginMediator());

        var express = require('express');
        var app = express();
        var assign = require('object.assign').getPolyfill();
        var bodyParser = require('body-parser');

        app.use(this.rawBody);

        app.all('/api/', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            next();
        });

        app.post('/api/', function (req, res) {
            //res.send('Api');

            let body = JSON.parse(req.rawBody);
            let currentEvent = new WebApplication.events[body.identifyer]

            var h:any = assign(currentEvent, JSON.parse(req.rawBody));
            console.log(h);
            console.log(h.test());

            h.dispatch((event) => {
                console.log("fin");
                console.log(JSON.stringify(event));
                res.send(JSON.stringify(event));
            });

           // console.log(body);
           // console.log(Object.getPrototypeOf(body.identifyer));

            //var result = Reflect.construct(body.identifyer, []);
           // console.log(result);
           // console.log(this[body.identifyer]);

            //var instance = Object.create(LoginUserEvent);
            //instance.constructor.apply(instance, []);



            //var st = new this[body.identifyer]();
            //console.log("instance");
            //console.log(instance);


            //console.log(h.test());
            //console.log(h.user.validate());

            //console.log(h.user.validate());
           // console.log('RB: ' + req.rawBody);
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