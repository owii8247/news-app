// Ude Import export (MANDATORY)

import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML = navbar()

import { getData , append } from "./fetch.js"

document.getElementById("query").addEventListener("click",cSearch)

function cSearch () {
    // let query = document.getElementById("query").value;
    let query = document.getElementById("query").querySelector("keydown", cSearch)
    window.location.href ="news.html"
    console.log(query)

    let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`


    let news  = document.getElementsByClassName("news")

    getData(url).then((res) => {
        append(res, news)
    })
}
