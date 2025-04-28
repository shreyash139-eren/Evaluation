fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    let data =res.json()
    return data
})
