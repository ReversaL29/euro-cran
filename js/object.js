
let list = "";
let card =
"<a class='card' href='./obyeck2.html'<div class='card__box'><img src='./images/obyekt.imgs/kran.png' alt='kran'><p>Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе</p></div></a>";

for (i = 1; i <= 12; i++) {
    list += card;
}
document.getElementById("objects").innerHTML = list