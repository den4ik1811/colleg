let pop = 5

const s = Math.round(Math.random(0,1) * 100);
for(pop = 4;pop >= 0;pop--){
    let chislo = +prompt("Введите число от 1 до 100");


    if (chislo >100||chislo<0) {
    alert("Читайте внимательно условия, пишите числа от 1 до 100")
    pop++
}


if(chislo == 0 ) {
    break;
}
    if(chislo==s) 


{
    alert("Вы угадали")
    break;
    
}
else if 
    (chislo < s) {
        alert("Загаданное число больше")
        alert("осталось попыток" +  " " + pop)
    }
    else {
        alert("Загаданное число меньше")
        alert("осталось попыток" + " " + pop)
    }
if(pop == 0) {
    alert("Вы проиграли")
    break;
}
    


}