<script setup>
import {useRoute} from "vue-router";
import {computed, onBeforeMount, ref, watch} from "vue";
import {useStore} from "vuex";
import axios from "axios";
import {URL} from "@/utils/config"
import {CreateMessage} from "../../components/messages/utils";

const router = useRoute()
const store = useStore()

const question = ref('')

const getCurrent = () => {
    let store_question = store.state.tasks.questions_list.find((el) => {
        return el.id === Number(router.params.id)
    })
    if (store_question.legend === undefined && router.params.id) {
        axios.get(URL + "/get_question/" + router.params.id + "/" + JSON.parse(localStorage.getItem("user")).id).then((response) => {
            question.value = response.data.question
            if (question.value.answer) {
                question.value.answer = question.value.answer.slice(0, question.value.answer.length - 1)
                question_ans.value = question.value.answer
            }
            store.commit('update_singe_question', {'id': question.value.id, 'new_value': question.value})
        })
    } else {
        question.value = store_question
        question_ans.value = question.value.answer
    }
}

const question_ans = ref()
const updateQuestion = () => {
    if (store.state.tasks.questions_list.length === 0) {
        axios.get(URL + "/get/if/competition_question/competition_id=" + router.params.c_id).then((response) => {
            if (store.state.tasks.questions_list.length === 0) {
                store.commit("set_questions_list", response.data.competition_questions)
            }
            getCurrent()
        })
    } else {
        getCurrent()
    }
}
onBeforeMount(() => {
    updateQuestion()
});
watch(router, () => {
    if (router.name === "question_page"){
        updateQuestion()
    }

})
const question_label = computed(() => {
    switch (question.value.type) {
        case 0:
            return "Введите правильный ответ";
        case 1:
            return "Выберите правильный ответ";
        case 2:
            return "Выберите все правильные ответы"
        default:
            return "Загрузка...."
    }
})


const Submit = () => {
    axios({
        url: URL + "/post/answer",
        method: "POST",
        data: {
            "user_id": JSON.parse(localStorage.getItem("user")).id,
            "question_id": Number(router.params.id),
            "value": question_ans.value,
        }
    }).then((response) => {
        question.value.sent = true
        question.value.answer = question_ans.value
        store.commit('update_singe_question', {'id': question.value.id, 'new_value': question.value})
    })
}


window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = '';
});
</script>

<template>
    <div class="ps-5">
        <h3 class="my-3">{{ question.name }}</h3>
        <div v-html="question.legend" class="border-top pt-3"></div>
        <div class="my-3 border-top py-3">
            <form action="" onsubmit="return false">
                <label class="form-label">{{ question_label }}</label>
                <div class="row">
                    <div class="col-4">
                        <input class="form-control" maxlength="10" v-model="question_ans" required>
                    </div>
                    <div class="col-4">
                        <button class="btn btn-primary" type="submit" @click="Submit">
                            {{ question.verdict ? "Изменить ответ" : "Отправить" }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped>

</style>