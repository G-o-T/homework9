// Задание 1
let cleanerSalary = 40000,
    vocalTeacherSalary = 22000,
    totalSalary = cleanerSalary + vocalTeacherSalary;
console.log(totalSalary);

// Задание 2
let cityName = 'Владивосток',
    n = 2000;
    songName = `${cityName} ${n}`;
console.log(songName);

// Задание 3
let messageТime = 128,
    likesTime = 254,
    vkTime = 137,
    youTubeTime = 201;
    totalProcrastinationTimeInMinutes = messageТime + likesTime + vkTime + youTubeTime;
    totalProcrastinationTimeInHours = totalProcrastinationTimeInMinutes / 60;
    console.log(totalProcrastinationTimeInHours);   

// Задание 4
2**5;

// Задание 5
console.log(`"Нужно бежать со всех ног, чтобы только оставаться на месте, а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!"`);
Для вывода внутри кавычек, использовала двойные кавычки. Если надо вывести просто как фразу - console.log('Нужно...быстрее!');.

// Задание 6
const greetings = "Привет";
const name = "Кот";
console.log(`${greetings}, ${name}`);

// Задание 7
let time;
    time = 34;
console.log('Старт поездки. Осталось минут: ' + time);
    time -= 15;
console.log('Немного сториз в соцсетях. Осталось минут: ' + time);
    time -= 10;
console.log('Немного не новостей, но событий. Осталось минут: ' + time);        
    time = 0;
console.log('Вы приехали. Добро пожаловать в Москву!');    

// Задание 8

let fahrenheit = 451,
    celsius = (fahrenheit - 32) / 1.8;
console.log(`${fahrenheit} градуса по Фаренгейту - это ${celsius} градуса по Цельсию.`);

// или так))
let fahrenheit = 451,
    celsius = ((fahrenheit - 32) / 1.8).toFixed(2);
console.log(`${fahrenheit} градуса по Фаренгейту - это ${celsius} градуса по Цельсию.`);