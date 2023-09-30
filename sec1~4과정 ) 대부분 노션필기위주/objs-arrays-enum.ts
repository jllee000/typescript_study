enum Role {
    ADMIN, READ
}; // 아예 enum으로 선언


const person: {
    name: string,
    age: number,
    hobbies : string[],
    tup : [number, string],
    role : number
} = {
    name : "Maximilian",
    age : 30,
    hobbies : ['Sports', 'Cooking'],
    tup : [2,'author'],
    role : Role.ADMIN
};



let favorite : any[]; // 자료형이 선택적으로 지정
favorite = ['sports']

for (const hobby of person.hobbies) {
    console.log(hobby);
}