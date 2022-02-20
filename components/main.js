

const fetchData = async (url) => {
    let res = await url;
    let data = await res.json()
    return data;
}




const appendData = (data, parent) => {
    data.map(el => {
        let div = document.createElement("div")
        div.addEventListener("click", () => {
            localStorage.setItem("item", JSON.stringify(el))
            window.location.href = "./data.html"
        })

        let image = document.createElement("img")
        image.setAttribute("src", el.urls.small)

        let name = document.createElement("p")
        name.innerText = el.user.username

        div.append(image, name)

        parent.append(div)
    })
}

export { fetchData, appendData }