export function CreateMessage(data, type){
    if (localStorage.getItem("messages") != null) {
        let old_messages = JSON.parse(localStorage.getItem("messages"));
        old_messages.push({
            data: data,
            type: type
        })
        localStorage.setItem("messages", JSON.stringify(old_messages))
    }else{
        localStorage.setItem("messages", JSON.stringify([{data: data, type: type}]))
    }
}