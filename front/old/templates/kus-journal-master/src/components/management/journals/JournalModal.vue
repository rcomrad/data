<script setup xmlns="http://www.w3.org/1999/html">
import {ref, watch} from "vue";
import axios from "axios";
import {URL} from "@/utils/config";
import {useStore} from "vuex";

const props = defineProps(['currentJournal'])
const groups = ref([])
const grades = ref([])
const teachers = ref([])
const plans = ref([])
const subjects = ref([])
const store = useStore()

axios.get(URL + '/get/all/grade[*]').then(response => {
  grades.value = response.data.grades
})
axios.get(URL + '/get/all/subject[*]').then(response => {
  subjects.value = response.data.subjects
})

axios.get(URL + '/get/all/user[*]').then(response => {
  teachers.value = response.data.users.filter(user => {
    return !user.role.includes("student")
  })
})

axios.get(URL + '/get/all/group[*]').then(response => {
  groups.value = response.data.groups
})

axios.get(URL + '/get/all/plan[*]').then(response => {
  plans.value = response.data.plans
})
const schedule = ref([0, 0, 0, 0, 0, 0, 0])

const current_journal = ref({})
watch(props, () => {
  current_journal.value = props.currentJournal
  if (current_journal.value.id === undefined) {
    current_journal.value.id = 0
  }
  if (current_journal.value.is_group === undefined) {
    current_journal.value.is_group = false
  }
  if (current_journal.value.schedule !== undefined){
    for (let el of current_journal.value.schedule){

      schedule.value[el-1] += 1
    }
  }
})



const Send = () => {
  let user = JSON.parse(localStorage.getItem("user"))
  let days = ''
  for (let i = 1; i<7; i++){
    for (let j = 0; j<schedule.value[i-1]; j++){
      days += i+' '
    }
  }
  days = days.slice(0, -1)
  let data = {
    id: current_journal.value.id,
    teacher_id: current_journal.value.teacher.id,
    methodist_id: user.id,
    is_group: current_journal.value.is_group,
    group_id: current_journal.value.group.id,
    subject_id: plans.value.filter(el=>{return el.name===current_journal.value.plan.name})[0].subject_id,
    plan_id: plans.value.filter(el=>{return el.name===current_journal.value.plan.name})[0].id,
    schedule: days
  }
  console.log(data)
  axios({
    method: "POST",
    url: URL+"/post/journal_table",
    data:data
  }).then(()=>{
    store.commit("changeReload")
  })
}

</script>

<template>
  <div class="modal fade" id="journal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-hidden="true">
    <div class="modal-dialog">

      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Работа с журналами</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Учитель</label>
            <select class="form-select" v-model="current_journal.teacher">
              <option v-for="teacher in teachers" :value="teacher"> {{ teacher.name }} {{ teacher.surname }}</option>
            </select>
            <div class="form-text">Роль учителя автоматически вытавится после сохранения</div>
          </div>
          <div class="mb-3">
            <label class="form-label">Учебный план</label>
            <select class="form-select" v-model="current_journal.plan">
              <option v-for="plan in plans" :value="plan"> {{ plan.name }}</option>
            </select>
          </div>
          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" v-model="current_journal.is_group"/>
            <label class="form-check-label">Прикрепить к группе</label>
          </div>
          <div class="mb-3" v-if="current_journal.is_group">
            <label class="form-label">Выбрать группу</label>
            <select class="form-select" v-model="current_journal.group">
              <option v-for="group in groups" :value="group"> {{ group.name }}</option>
            </select>
          </div>
          <div class="mb-3" v-if="!current_journal.is_group">
            <label class="form-label">Выбрать класс </label>
            <select class="form-select" v-model="current_journal.group">
              <option v-for="group in grades" :value="group"> {{ group.name }}</option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label">Рассписание</label>

            <table class="table">
              <tr>
              <td>Понедельник</td>
              <td><input type="number" min="0" class="form-control border-0" v-model="schedule[0]"></td>
              </tr>
              <tr>
                <td>Вторник</td>
                <td><input type="number" min="0" class="form-control border-0" v-model="schedule[1]"></td>
              </tr>
              <tr>
                <td>Среда</td>
                <td><input type="number" min="0" class="form-control border-0" v-model="schedule[2]"></td>
              </tr>
              <tr>
                <td>Четверг</td>
                <td><input type="number" min="0" class="form-control border-0" v-model="schedule[3]"></td>
              </tr>
              <tr>
                <td>Пятница</td>
                <td><input type="number" min="0" class="form-control border-0" v-model="schedule[4]"></td>
              </tr>
              <tr>
                <td>Суббота</td>
                <td><input type="number" min="0" class="form-control border-0" v-model="schedule[5]"></td>
              </tr>
              <tr>
                <td>Воскресенье</td>
                <td><input type="number" min="0" class="form-control border-0" v-model="schedule[6]"></td>
              </tr>

            </table>
            <div class="form-text">Выберите количество уроков на каждый день недели</div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="Send">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>