const userName = prompt(`Введите имя: `);
greeting(userName);

function greeting(name) {
    console.log(`Привет, ${userName}`);
}