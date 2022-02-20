
const fetchData = async (url) => {
    try {
        let res = await url
        let data = await res.json()
        return data

    }
    catch (err) {
        console.log(err)
    }
}

export { fetchData };