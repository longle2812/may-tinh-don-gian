let num2 = 0;
let num1 = 0;
let math = 0;
function input1() {
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML.concat('1');
    num1 = 1;
}function input2() {
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML.concat("2");
    num1 = 2;
}
function input3() {
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML.concat("3");
    num1 = 3;
}
function input4() {
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML.concat("4");
    num1 = 4;
}
function input5() {
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML.concat("5");
    num1 = 5;
}
function input6() {
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML.concat("6");
    num1 = 6;
}
function input7() {
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML.concat("7");
    num1 = 7;
}
function input8() {
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML.concat("8");
    num1 = 8;
}
function input9() {
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML.concat("9");
    num1 = 9;
}
function input0() {
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML.concat("0");
    num1 = 0;
}
function inputadd() {
    num2= num1;
    math= 1;
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML.concat("+");
}
function inputsub() {
    num2= num1;
    math = 2;
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML.concat("-");
}
function inputmul() {
    num2= num1;
    math = 3;
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML.concat("*");
}
function inputdiv() {
    num2= num1;
    math = 4;
    document.getElementById("output").innerHTML= document.getElementById("output").innerHTML.concat("/");
}
function inputresult() {
    switch (math) {
        case 1:
            num2 = num2 + num1;
            num1 = num2;
            document.getElementById("output").innerHTML= num2;
            break;

        case 2:
            num2 = num2 - num1;
            num1 = num2;
            document.getElementById("output").innerHTML= num2;
            break;
        case 3:
            num2 = num2 * num1;
            num1 = num2;
            document.getElementById("output").innerHTML= num2;
            break;
        case 4:
            debugger
            num2 = num2 / num1;
            num1 = num2;
            document.getElementById("output").innerHTML= num2;
            break;
    }
}
function inputC() {
    num1 = 0;
    num2 = 0;
    document.getElementById("output").innerHTML=("");
}