import {createStore} from "vuex";
import {tasks} from "@/store/tasks";
import {moves} from "@/store/moves";
export const store = createStore({
    modules: {
        tasks: tasks,
        moves: moves,
    },
    state: () => ({
        needReload: false
    }),
    mutations: {
        changeReload(state){
            state.needReload = !state.needReload
        }
    }
})