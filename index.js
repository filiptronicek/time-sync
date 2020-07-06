const fetch = require("node-fetch");

async function get() {
    const url = `http://worldtimeapi.org/api/ip`;
    const response = await fetch(url);
    const now = new Date().getTime();

    return await response.json().unixtime - now;
}
console.log(get());