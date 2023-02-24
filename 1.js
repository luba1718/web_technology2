const t = parseFloat(prompt("Введите температуру в градусах цельсия"));
function convert(x) {
    return ((9 / 5) * x + 32);
}
alert(`Температура по Цельсию = ${t.toFixed(1)}, температура по Фаренгейту = ${convert(t).toFixed(1)}`);
