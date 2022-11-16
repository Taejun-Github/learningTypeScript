"use strict";
// const User = {
//     name: "taejun",
//     email: "mcmoohyun@gmail.com",
//     isActive: true
// }
exports.__esModule = true;
var cardExample = {
    cardnumber: '1222-1334',
    cardDate: '11-15-2022',
    cvv: 123
};
var myUser = {
    _id: '1234',
    name: 'taejun',
    email: 'test@gmail.com',
    isActive: false
};
myUser.email = "new@gmail.com";
// myUser._id = '2';
function readUser(user) {
    return user;
}
readUser(myUser);
