// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML = navbar()

document.querySelector("query").addEventListener("search_input", function(){
    debounce(cSearch, 1000)
})

import { getData , append } from "./fetch.js";

JSON.parse(localStorage.getItem("news"))

document.getElementById("query").addEventListener("click",cSearch)

function cSearch () {
    // let query = document.getElementById("query").value;
    let query = document.getElementById("query").querySelector("keydown", cSearch)
    window.location.href ="search.html"
    console.log(query)

    let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`


    let results = document.getElementById("results");

    getData(url).then((res) => {
        append(res, results)
    })
}

let id;

function debounce(func ,delay){
    if(id)
    {
        clearTimeout
    }
    id = setTimeout(function(){
        func()
    },delay)

}


localStorage.setItem("news", JSON.stringify(data))