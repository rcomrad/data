<script setup>
import {useStore} from "vuex";
import TasksList from "@/components/tasks/TasksList.vue";
import {URL} from "@/utils/config"
import axios from "axios";
import {useRoute} from "vue-router";
import {onMounted} from "vue";

const store = useStore();
const router = useRoute()
onMounted(()=>{
    axios.get(URL + "/get/if/competition_question/competition_id=" + router.params.c_id).then((response) => {
        // console.log("Response get me: ", response.data)
        if (store.state.tasks.questions_list.length === 0) {
            store.commit("set_questions_list", response.data.competition_questions)
        }
    })
    axios.get(URL + "/get/if/competition_problem/competition_id=" + router.params.c_id).then((response) => {
        // console.log("Response get me: ", response.data)
        if (store.state.tasks.problems_list.length === 0) {
            store.commit("set_problems_list", response.data.competition_problems)
        }
    })
})


</script>

<template>
    <div class="py-3 h-100">
        <div class="row h-100">
            <div class="col-2 border-end border-dark-subtle h-100">
                <h4 class="mb-3 px-3 pb-3 border-bottom">Kus.Olimp</h4>
                <TasksList/>
            </div>
            <div class="col-10 h-100">
                <div class="alert alert-info">
                    Для связи с организаторами пишите в <a href="https://t.me/kussystembot">техподдержку</a>
                </div>
                <!--        <div class="alert alert-info">-->
                <!--          Система может проверять задания достаточно долго-->
                <!--        </div>-->
                <router-view></router-view>
            </div>
        </div>
    </div>

</template>