

console.log("workings")
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
document.getElementById("btn").addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("click")
    let load = document.getElementById("load")
    load.style.display = "block"
    setInterval(() => {
        load.style.display = "none"
    }, 1000);
    let email = document.getElementById("email").value
    const show = document.getElementById("result")
    let key = "ema_live_HxmRsADNQFZb6gV049otCGs6pdqESmyJ7C2zbx5V"
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    document.getElementById("head").style.display = "block"
    let str = ``
    for (key of Object.keys(result)) {
        if (result[key] !== "") {
            str = str + `<div> ${key} : ${result[key]}</div>`
            show.innerHTML = str
        }
    }
})

