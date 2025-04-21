let arr=[
    {
        name:"ALice",
        marks:80
    },
    {
        name:"BOb",
        marks:43
    },
    {
        name:"Charlie",
        marks:90
    }
]
let max=0
arr.filter((ele)=>{
    if(max<ele.marks){
      return  max=ele.marks
    }
})
let filtered=arr.filter((ele)=>{
    if(ele.marks>=max/2){
        return ele.normalized=(ele.marks/max*100)
    }
}).filter((ele)=>{
    return delete ele.marks
})
console.log(filtered)