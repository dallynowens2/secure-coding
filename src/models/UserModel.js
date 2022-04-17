export default class UserModel{
    id=0;
    userName;
    topping;
    icecream;
    visit;
    nickname;
    profilePictureName;
    profilePicture;

    constructor(userName, topping, icecream, visit, nickname, profilePicture){
        this.userName= userName;
        this.topping= topping;
        this.icecream= icecream;
        this.visit= visit;
        this.nickname= nickname;
        this.profilePictureName = profilePicture.name;
        this.profilePicture= profilePicture;
    }
}