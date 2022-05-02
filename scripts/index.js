// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js"

document.getElementById("navbar").innerHTML = navbar()

document.querySelector("query").addEventListener("search_input", function(){
    debounce(cSearch, 1000)
})

import { getData , append } from "./fetch.js";

document.getElementById("query").addEventListener("click",cSearch)

function cSearch () {
    // let query = document.getElementById("query").value;
    let query = document.getElementById("query").addEventListener("keydown", cSearch)
    console.log(query)

    let url = `https://masai-mock-api.herokuapp.com/news?q=${query}`


    let results = document.getElementById("results");

    getData(url).then((res) => {
        append(res, results)
    })
}

let url = fetch (`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)

let results = document.getElementById("results")

getData(url).then((res) => {
    append (res, results)
})

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



