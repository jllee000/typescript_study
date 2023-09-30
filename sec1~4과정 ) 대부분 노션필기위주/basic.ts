function add (n1 : number, n2 : number, showResult:boolean, phrase:string) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true; //바꾸지 않을 변수는 const로
const resultPhrase = 'Result is : ';

const result = add(number1, number2, printResult, resultPhrase);
