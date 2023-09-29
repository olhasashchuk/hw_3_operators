// 1. Треба реалізувати просту програму з наступними умовами:
// За допомогою prompt запитати “ім'я користувача”.
// За допомогою alert вивести "Hello, John! How are you?" , де “John” це те, що ввів користувач

function inputName() {
    let name = prompt ('What is your name?');
    alert(`Hello, ${name}! How are you?`);
}
inputName();

// 2. Дано тризначне число, яке надае користувач, потрибно визначити:
//     Чи правда, що всі цифри однакові?
//     Чи є серед цифр цифри однакові?
function inputNumber() {
    let number = prompt('Enter tree-digit number');
    let firstSym = number.charAt(0);
    let secondSym = number.charAt(1);
    let thirdSym = number.charAt(2);
    if (firstSym===secondSym && firstSym===thirdSym && secondSym===thirdSym) {
            alert('All digits are the same');
        } else if (firstSym===secondSym || firstSym===thirdSym || secondSym===thirdSym) {
            alert('Some digits are the same');
        } else {
            alert('digits are not the same')
        }
}
inputNumber();

// 3.Портрет користувача
// -Основне завдання, cтворити скрипт яки повинен виконувати наступне:
// запитати у користувача рік народження;
// запитати в нього, в якому місті він живе;
// запитати його улюблений вид спорту.
//
// Після останнього питання показуємо вікно, де має бути відображена наступна інформація:
//      його вік;
//      якщо користувач вкаже "Київ", "Вашингтон" чи "Лондон", то показати йому повідомлення -
// "Ти живеш у столиці ..." і на місце точок підставляємо країну, столицею якої є місто.
//      Інакше показуємо йому “ти живеш у місті…”, де місце точок – введене місто.
//
// -Додаткове завдання
// Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати,
// показати йому повідомлення – “Шкода, що Ви не захотіли ввести свій(ю) …”
// і вказуємо, що він не захотів вводити – дату народження, місто чи вид спорту .

function inputInfo() {
    let year = prompt('What year were you born?');
    let city = prompt('What city do you live?');
    let sport = prompt('What kind of sport do you like?');
    let age = 2023 - year;

    if (year === null) {
        alert(`
            Sorry you didn't want to enter your year when you were born
        `);
    } else if (city === null) {
        alert(`
            Sorry you didn't want to enter your city
        `);
    } else if (sport === null) {
        alert(`
            Sorry you didn't want to enter your favorite sport
        `);
    } else if (city==='Kyiv') {
        alert(`
            You are ${age} years old.
            You live in the capital of Ukraine.
        `);
    } else if (city==='London') {
        alert(`
            You are ${age} years old.
            You live in the capital of The United Kingdom of Great Britain and Northern Ireland.
        `);
    } else if (city==='Washington') {
        alert(`
            You are ${age} years old.
            You live in the capital of The United States of America.
        `);
    } else {
        alert(`
            You are ${age} years old.
            You live in the ${city}.
        `);
    }
}
inputInfo();