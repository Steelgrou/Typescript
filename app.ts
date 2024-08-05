// ТИПЫ ДАННЫХ TYPESCRIPT....
console.log("__________________________________________________________________________");





// Async function

setTimeout(function () {

    console.log('ТИПЫ ДАННЫХ TYPESCRIPT....',);
    console.log('..........................................................................');

    setTimeout(function () {
        // Number
        const int: number = 77; console.log(int, '==> ЭТО ЦЕЛОЕ ЧИСЛО ТИП ДАННЫХ NUMBER');
        console.log('..........................................................................');
    }, 3000);
    setTimeout(function () {
        // Number
        const float: number = 77.7; console.log(float, "==> ЭТО НЕ ЦЕЛОЕ ЧИСЛО НО ТИП ДАННЫХ NUMBER");
        console.log('..........................................................................');
    }, 5000);
    setTimeout(function () {
        //String
        const message: string = 'It`s string message'; console.log(message, "==> ЭТО ПРОСТО STRING ИЛИ СТРОКА");
        console.log('..........................................................................');
    }, 7000);
    setTimeout(function () {
        // Array
        const numberArray: number[] = [1, 2, 3, 4, 5, 6]; console.log(numberArray, '==> ЭТО МАССИВ ОТ 1 до 6');
        console.log('..........................................................................'); console.log(numberArray[0], "ТУТ ИЗ 1-6 ВЗЯТО 0 МАССИВ");
        console.log('..........................................................................');
    }, 9000);
    setTimeout(function () {
        // Array generic
        const numberArray2: Array<number> = [1, 2, 3, 5, 8, 13]; console.log(numberArray2, "==> ЭТО МАССИВ GENERIC (обобщенные типы)");
        console.log('..........................................................................');
    }, 11000)
}, 2000);


// ТИПЫ ДАННЫХ UNION

setTimeout(function () {

    let language: "UZ" | "RU" | "ENG" = "ENG";

    const data: { id: number; value: "UZ" | "RU" | "ENG" }[] = [
        { id: 1, value: "UZ" },
        { id: 2, value: "RU" },
        { id: 3, value: "ENG" }
    ];

    data.map((lang) => {
        language = lang.value
    })
    console.log(language, '==> ЭТО ТИП ДАННЫХ UNION')
    console.log('..........................................................................');
}, 15000);




// let obj: { name: string } = { name: "Aziz" }
// obj = { name: "Hello Aziz"}
// console.log(obj);


// const words: string[] = ['Hello', 'World'];

// Tuple
let contact: [string, number, boolean];
contact = ['Hello', 77, true]
console.log(contact);


// //Any
// let varible: any = 42
// varible = 'Hello world'
// varible = []
// console.log(varible);

// // ===
// function sayMyName(name: string): void {
//     console.log(name);

// }
// sayMyName('Хаинзберг')


// const num: number = 3e10; console.log(num, "НУЖНО ДОПОЛНИТЬ !!!!!!");



