"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ"] = 1] = "READ";
})(Role || (Role = {}));
; // 아예 enum으로 선언
const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    tup: [2, 'author'],
    role: Role.ADMIN
};
let favorite; // 자료형이 선택적으로 지정
favorite = ['sports'];
for (const hobby of person.hobbies) {
    console.log(hobby);
}
