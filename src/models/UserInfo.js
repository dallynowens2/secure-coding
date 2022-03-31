export default class UserInfo{
    id=0;
    userName;
    password;
    isValid = false;
    salt='';

    constructor(userName, password){
        this.userName= userName;
        this.password= password;
        if(this.userName.length < 5 || this.userName.includes(";")){
            this.isValid = false
        } 
        else{
            this.isValid = true
        }
    }
}