
fetch("https://api.open-meteo.com/v1/forecast?latitude=52.37&longitude=4.89&hourly=temperature_2m")
    .then(response => {
        response.json().then(data => {
            document.getElementById('weather').innerHTML = data.hourly.temperature_2m[0];
        })
})
const overOns = () => {
    alert('Over ons');
}
const reserveer = () => {
    window.location.href = 'reserveer.html';
}
const contact = () => {
    alert('Contact');
}
