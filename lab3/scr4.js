alert("Есть 2 сту... числа 9 и 3. Чтовы хотите сделать")
let a= prompt("Введите нужное вам действие с помощью танца")
let b=9;
let c=3;
function func1(n1,n2){alert(n1+n2)};
function func2(n1,n2){alert(n1-n2)};
function func3(n1,n2){alert(n1*n2)};
function func4(n1,n2){alert(n1/n2)};
if (a==="+") {
    func1(b,c);
} else if (a==="-"){
    func2(b,c)
} else if (a==="*"){
    func3(b,c)
} else if (a==="/"){
    func4(b,c)
} else {
  alert("Ничего не понятно но очень интересно")
}
