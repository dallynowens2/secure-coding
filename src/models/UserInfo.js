export default class UserInfo{
    id=0;
    userName;
    password;
    salt='';

    constructor(userName, password){
        this.userName= userName;
        this.password=password;
    }
}