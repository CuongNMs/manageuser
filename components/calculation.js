const taskA = (paramA)=> {
    return new Promise((resolve, reject) =>{
        console.log("Begin TaskA")
        if(paramA ===1){
            setTimeout(()=>{
                console.log("End TaskA")
                resolve({x:1, y:2})
            }, 2000)
        }else{
            setTimeout(()=>{
                console.log("End TaskA")
                JSON.stringify(error)
                reject({code:500, content: "Bug"})
            }, 1500)
        }
    })
}

const taskB = () =>{
    console.log("Begin TaskB")
    setTimeout(()=>{
        console.log("End TaskB")
    }, 1000)
}

function do2Task() {
    taskA(1)
    .then(({x,y})=>{
        console.log("success");
    }).catch(({}, {error})=>{
        console.log(`error code: ${error.code}, error content: ${error.content}`)
    })
    taskB()
    
}

export {
    do2Task
}