<script setup>
import {useRoute} from "vue-router";
import {onBeforeMount, ref, watch} from "vue";
import {URL} from "@/utils/config"
import axios from "axios";
import SubmissionList from "@/components/tasks/SubmissionList.vue";
import {useStore} from "vuex";
import SendSubmission from "@/components/tasks/SendSubmission.vue";

const router = useRoute()
const store = useStore()

const sort_by_date = (a, b) => {
    let f_date = Date(a.date)
    let s_date = Date(b.date)
    if (f_date > s_date) {
        return 1;
    } else {
        return 0;
    }
}


const GetCurrent = (force = false) => {
    let store_problem = store.state.tasks.problems_list.find((el) => {
        return el.id === Number(router.params.id)
    })
    if (!store_problem.legend || force) {
        axios.get(URL + "/get_problem/" + router.params.id + "/" + JSON.parse(localStorage.getItem("user")).id).then((response) => {
            task.value = response.data.problem[0]
            store.commit("update_single_problem", {id: task.value.id, "new_value": task.value})
        })
    } else {
        task.value = store_problem
    }
}
const updateProblemsList = () => {
    if (store.state.tasks.problems_list.length === 0) {
        axios.get(URL + "/get/if/competition_problem/competition_id=" + router.params.c_id).then((response) => {
            store.commit("set_problems_list", response.data.competition_problems)
            GetCurrent()
        })
    } else {
        GetCurrent()
    }
}
const task = ref();

onBeforeMount(() => {
    updateProblemsList();
})
watch(router, () => {
    if (router.name === "problem_page"){
        updateProblemsList()
    }

})


</script>

<template>
    <div class="ps-5" v-if="task">
        <div class="row">
            <div class="col-8">
                <h3 class="my-3">{{ task.name }}</h3>
                <p v-html="task.legend"></p>
                <h5>Входные данные</h5>
                <p v-html="task.input_format"></p>
                <h5>Выходные данные</h5>
                <p v-html="task.output_format"></p>
                <div class="row gx-2 mt-1">
                    <div class="col-6 text-secondary fw-light">
                        STDIN
                    </div>
                    <div class="col-6 text-secondary fw-light">
                        STDOUT
                    </div>
                </div>
                <div class="row gx-2 mt-1" v-for="example in task.tests">
                    <div class="col-6">
                        <div class="p-2 " style="background-color: #f8f8f8"
                             v-html="'<pre>'+example.input+'</pre>'"></div>
                    </div>
                    <div class="col-6">
                        <div class="p-2 " style="background-color: #f8f8f8"
                             v-html="'<pre>'+example.output+'</pre>'"></div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-3 d-grid gap-2 me-auto">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#send_submission">Послать
                        </button>
                    </div>
                    <div class="col-5 text-end">
                        Лимит времени: {{ task.time_limit }} c. <br>
                        Лимит памяти: {{ task.memory_limit }} MB
                    </div>
                </div>
            </div>
            <div class="col-4 my-3">
                <SubmissionList :submissions="task.submission"/>
            </div>
        </div>
    </div>
    <div v-else>
        Перезагрузите страницу что бы получить текст задачи
    </div>
    <SendSubmission :task_id="router.params.id" @reGet="GetCurrent(true)"/>
</template>

<style scoped>

</style>