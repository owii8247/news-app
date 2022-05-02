
let getData = async (url) => {
    let res = await fetch (url)
    let data = await res.json()
    console.log(data)
    return data;
}

let append = (data, results) => {
    data.forEach((el) => {
        let div = document.createElement("div")

        let img = document.createElement("img");
        img.src =`${el.image}`
        img.setAttribute("id" , "img");

        let title = document.createElement("h3")
        title.innerText =`Title :- ${el.title}`

        let description = document.createElement("p")
        description.innerText =`Description :- ${el.description}`

        div.append(img,title,description)
        results.append(div)


    })
}

export {getData , append}