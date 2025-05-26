
        async function Add(){
            const Name=document.getElementById("name").value
            const Age=document.getElementById("age").value
            const Grade=document.getElementById("grade").value
            const Score=document.getElementById("score").value
            const Section=document.getElementById("section").value

            if(Name.length<3 || Age<10|| Age>20 || Score<0||Score>100){
                let Error=document.getElementById("error")
                Error.innerHTML=""
                let p=document.createElement("p")
                p.innerText=`Please enter valid student data.`
                Error.appendChild(p)
                return
            }


            let obj={
                name:document.getElementById("name").value,
                age:document.getElementById("age").value,
                grade:document.getElementById("grade").value,
                score:document.getElementById("score").value,
                section:document.getElementById("section").value
            }

            let res=await fetch("https://evaluation-60755-default-rtdb.asia-southeast1.firebasedatabase.app/students.json",{
                method:'POST',
                headers:{
                    "Content-Type":'application/json',
                },
                body:JSON.stringify(obj)
            })
            document.getElementById("name").value=""
            document.getElementById("age").value=""
            document.getElementById("grade").value=""
            document.getElementById("score").value=""
            document.getElementById("section").value=""
        }
        
        async function Display(){
            
            let List=document.getElementById("list")
            List.innerHTML=""
            let res=await fetch("https://evaluation-60755-default-rtdb.asia-southeast1.firebasedatabase.app/students.json")
            let data=await res.json()
            let arr=Object.entries(data).map(([id,student])=>({id,...student}))
            
            arr.forEach((student)=>{
                let p=document.createElement("p")
                p.innerText=`Name : ${student.name}
                             Age : ${student.age}
                             Grade : ${student.age}
                             Score : ${student.score}
                             Section : ${student.section}`

                List.appendChild(p)
            })
        }
        Display()
        // async function Edit(){
        //     let res=await fetch("https://evaluation-60755-default-rtdb.asia-southeast1.firebasedatabase.app/students.json")
        //     let data=await res.json()

        //     let students=Object.entries(data).map(([id,student])=<Add({id, ...student}))
        //     console.log(students)
        // }
