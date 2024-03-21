<script setup>
import {useStore} from "vuex";
import {useRoute} from "vue-router";
import {ref, watch} from "vue";

const store = useStore()
const props = defineProps(["submissions"])
const result = {
    "NUN": "Проверка",
    "CE": "Ошибка компиляции",
    "Nu": "Тестируется",
    "WA": "Неправильный ответ",
    "OK": "Полное решение"
}
</script>

<template>
    <h5>Решения:</h5>
    <table class="table" v-show="submissions.lenght !== 0">
        <thead>
        <tr>
            <th scope="col" style="width: 30%" class="border-end">Тест</th>
            <th scope="col">Вердикт</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="submission in submissions">
            <td class="border-end">{{ submission.test === -1 ? ' ' : submission.test }}</td>
            <td>{{ result[submission.verdict] === undefined ? submission.verdict : result[submission.verdict] }}</td>
        </tr>
        </tbody>
    </table>
    <p class="text-secondary">Для того что бы обновить состояние тестов обновите страницу</p>
</template>


<style scoped>

</style>