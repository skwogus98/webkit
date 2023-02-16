console.log("node ex01")

function task(success){
    console.log("task")
    success("result")
}

function success(result){
    console.log("success", result)
}

function rejected(e){
    console.log("rejected", e)
}


new Promise(task).then(success,rejected)