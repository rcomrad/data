import {CreateMessage} from "@/components/messages/utils";

export const login_required = () =>{
    try {
        let user_data = JSON.parse(localStorage.getItem("user"));
        if (!user_data) {
            CreateMessage("Для доступа к этой странице требуется авторизация", "danger")
            return {name: "login"};
        }
    }catch (e){
        CreateMessage("Для доступа к этой странице требуется авторизация", "danger")
        return {name: "login"};
    }
}

export const only_teacher = () =>{
    try {
        let user_data = JSON.parse(localStorage.getItem("user"));
        if (!user_data.role.includes("teacher")) {
            CreateMessage("Только учителя имеют доступ к этой странице", "danger")
            return {name: "homepage"};
        }
    }catch (e){
        CreateMessage("Для доступа к этой странице требуется авторизация", "danger")
        return {name: "login"};
    }
}

export const login_before = (to, from) =>{
    try {
        let user_data = JSON.parse(localStorage.getItem("user"));
        if (user_data) {
            return from;
        }
    }catch (e){
        return {name: "login"};
    }
}