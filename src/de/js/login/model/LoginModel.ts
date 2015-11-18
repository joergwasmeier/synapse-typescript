export default class LoginModel {

    private static _instance:LoginModel = new LoginModel();

    private _score:number = 0;

    constructor() {
        if(LoginModel._instance){
            throw new Error("Error: Instantiation failed: Use LoginModel.getInstance() instead of new.");
        }
        LoginModel._instance = this;
    }

    public static getInstance():LoginModel
    {
        return LoginModel._instance;
    }

    public setScore(value:number):void
    {
        this._score = value;
    }

    public getScore():number
    {
        return this._score;
    }

    public addPoints(value:number):void
    {
        this._score += value;
    }

    public removePoints(value:number):void
    {
        this._score -= value;
    }
  }
