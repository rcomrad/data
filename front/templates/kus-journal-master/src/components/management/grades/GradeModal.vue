<script setup>
import {computed, reactive, ref, watch} from "vue";
import axios from "axios";
import router from "@/router";
import {URL} from "@/utils/config";
import StudentsSearch from "@/components/management/grades/StudentsSearch.vue";
import {useStore} from "vuex";

const props = defineProps(["grade"])
const emit = defineEmits(["reGet"])

const staff = ref([])
const students = ref([])
const store = useStore()

axios.get(URL + '/get/all/user[id;name;surname;role_id]').then((response) => {
  staff.value = response.data.users.filter((user) => {
    return !user.role.includes("student")
  });
  students.value = response.data.users.filter((user) => {
    return user.role.includes("student")
  });
})

const current_grade = reactive({
  id: 0,
  name: '',
  students: [''],
  head: {}
})

const selected_teacher = ref('')

watch(props, () => {
  if (props.grade.id !== undefined) {
    axios.get(URL + '/get/by_id/grade(grade_student[student_id[name;surname;id;role_id]])[*;head_id[id;name;surname;role_id]]/' + props.grade.id).then((response) => {
      current_grade.id = response.data.grade.id
      current_grade.name = response.data.grade.name
      current_grade.head = response.data.grade.head
      let students = []
      for (let i of response.data.grade.grade_students) {
        students.push(i.student)
      }
      current_grade.students = students
    })
  }else{
    current_grade.id = 0
    current_grade.name = ""
    current_grade.head = {}
    current_grade.students = []
  }
})
const GetId = computed(() => {
  let id = []
  if (current_grade.students) {
    for (let student of current_grade.students) {
      id.push(student.id)
    }
  }
  return id
})


const SendGrade = () => {
  let id = []
  if (current_grade.students) {
    for (let student of current_grade.students) {
      id.push(student.id)
    }
  }
  axios({
    url: URL + "/post/grade",
    method: "POST",
    data: {
      id: current_grade.id,
      name: current_grade.name,
      head_id: current_grade.head.id,
      grade_student: id,
    },
    headers: {
      token: JSON.parse(localStorage.getItem("user")).token
    }
  }).then((response) => {
    store.commit('changeReload')
  })
}


const newStudent = (Istudents) => {
  current_grade.students = Istudents
}

const a = ref()

const send = () => {
  axios({
    url: URL + "/upload",
    method: "POST",
    data: {
      a: a.value
    },
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((res) => {
    console.log(res)
  })
}
</script>

<template>
  <StudentsSearch :back-i-d="'#grade'" :students="students" :selected="GetId"
                  @make-list="newStudent" id="student_search"/>
  <div class="modal fade" id="grade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="grade" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Работа с классом</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Имя</label>
            <input type="text" class="form-control" v-model="current_grade.name">
          </div>
          <div class="mb-3">
            <label class="form-label">Классный руководитель</label>
            <select class="form-control" v-model="current_grade.head">
              <option v-for="user in staff" :value="user">{{ user.name }} {{ user.surname }}</option>
            </select>
          </div>

          <div class="mb-3">
            <button class="btn btn-primary" data-bs-target="#student_search" data-bs-toggle="modal">
              Выбрать обучающихся
            </button>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-primary me-auto"
                  @click="router.push({name: 'group_management', params:{grade: JSON.stringify(current_grade)}})"
                  data-bs-dismiss="modal">Открыть группы
          </button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
          <button type="button" class="btn btn-primary" @click="SendGrade" data-bs-dismiss="modal">Сохранить</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>