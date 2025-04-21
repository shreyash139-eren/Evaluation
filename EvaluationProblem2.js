fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{
    let data=res.json()
    return data
})
.then((data)=>{
    data=data.filter((ele)=>{
        if(ele.name.length>15){
            return ele
        }
    }).map((ele)=>{
        return ele.email
    }).reduce((acc,cur)=>{
        return acc+cur+"| "
    },"|")
    console.log(data)
    setTimeout(()=>{
        console.log("✅ User processing complete")
    },2000)
})