export const moves = {
    state: () => ({
        journals: [],
        selected: {},
    }),
    mutations:{
        set_multi_journals(state, journals){
            state.journals = journals
            console.log("now")
        },
        set_selected(state, selected) {
            state.selected = selected
        },
    }
}