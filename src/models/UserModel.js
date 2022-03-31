export default class UserModel{
    id=0;
    userName;
    topping;
    icecream;
    visit;
    nickname;

    constructor(userName, topping, icecream, visit, nickname){
        this.userName= userName;
        this.topping= topping;
        this.icecream= icecream;
        this.visit= visit;
        this.nickname= nickname;
    }
}