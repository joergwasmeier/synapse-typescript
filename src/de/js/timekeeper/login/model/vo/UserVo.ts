export default class UserVo{
    username:string;
    password:string;

    constructor(){}

    validate():Boolean{
        if (!this.username) return false;
        if (!this.password) return false;
        return true;
    }

    clone():UserVo{
        var rt = new UserVo();
        rt.username = this.username;
        rt.password = this.password;

        return rt;
    }
}
