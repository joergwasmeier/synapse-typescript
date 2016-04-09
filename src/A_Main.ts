import FabaApiConnection from "fabalous/transport/FabaApiConnection";
import FabaWebApplication from "fabalous/runtimes/FabaWebApplication";
import * as React from 'react';
import {rend} from "./R_Router";


declare var System;

class A_Main extends FabaWebApplication {
    
    constructor() {
        super();


        FabaWebApplication.addServerEndPoint(new FabaApiConnection("http://localhost:3000/"), "api");
        //this.addMediator(new LoginMediator());


/*
        System.import('fabalous-login/controller/LoginMediator').then((m) => {
            this.addMediator(new m.default());

           // new LoginShowEvent(document.getElementById("container")).dispatch();

//            System.import('fabalous-login/controller/event/LoginShowEvent').then((m) => {
  //              console.log(new m.default(document.getElementById("container")).dispatch());
    //        });
        });
        */
        rend();
    }
}

new A_Main();