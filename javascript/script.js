const $container = document.querySelector("#container");
const $links = document.querySelector(".links");
const urlAPI = "https://rickandmortyapi.com/api/character";

async function loadCharacters(url) {
    try {
        $container.innerHTML = `<div class='loader'></div>`;
        let res = await fetch(url);
        let json = await res.json();
        let $template = "",
            $prevLink = "",
            $nextLink = "";

        if (!res.ok) throw { status: res.status, statusText: res.statusText };

        for (let i = 0; i < json.results.length; i++) {
            console.log(json.results[i]);
        }
    } catch (fail) {
        console.log(fail);
        let message = fail.statusText || "Ocurrió un error";
        $container.innerHTML = `<p>Error ${fail.status}: ${message}</p>`;
    }
}

document.addEventListener("DOMContentLoaded", (e) => loadCharacters(urlAPI));
