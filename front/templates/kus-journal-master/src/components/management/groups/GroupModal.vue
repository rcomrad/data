<script setup>
import {reactive, ref, watch} from "vue";
import StudentsSearch from "@/components/management/grades/StudentsSearch.vue";
import axios from "axios";
import {URL} from "@/utils/config";
import router from "@/router";
import {useStore} from "vuex";

const props = defineProps(["group", "students", "backID"])
const emit = defineEmits(["ChangeGroup"])
const store = useStore()
const current_group = reactive({
  name: "",
  students: [],
  grade: "",
  id: ""
})
watch(props, ()=>{
  current_group.name = props.group.name
  current_group.students = props.group.students===undefined?[]:props.group.students
  current_group.grade = props.group.grade
  current_group.id = props.group.id === undefined?0:props.group.id
})
const name = ref('')
const GetId = (students) =>{
  let id = []
  if (students) {
    for (let student of students) {
      id.push(student.id)
    }
  }
  return id
}

const newStudent = (Istudents)=>{
  current_group.students = Istudents

}

const Send = ()=>{
  console.log({
    id: current_group.id,
    name: current_group.name,
    students: GetId(current_group.students),
    grade: current_group.grade.id
  })
  axios({
    url: URL+"/manage_group",
    method: "POST",
    data:{
      id: current_group.id,
      name: current_group.name,
      students: GetId(current_group.students),
      grade: current_group.grade.id
    },
    headers:{
      token: JSON.parse(localStorage.getItem("user")).token
    }
  }).then((response)=>{
    store.commit('changeReload')
  })
}

</script>

<template>
  <StudentsSearch :students="students" :selected="GetId(current_group.students)" back-i-d="#group_create" id="group_students" @make-list="newStudent"/>
  <div class="modal fade" id="group_create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Изменение групп</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" style="">
          <div class="mb-3">
            <label class="form-label">Имя</label>
            <input type="text" class="form-control" v-model="current_group.name">
          </div>
          <div class="mb-3">
            <button class="btn btn-primary" data-bs-target="#group_students" data-bs-toggle="modal">
              Выбрать обучающихся
            </button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" :data-bs-target="backID" data-bs-toggle="modal">
              Назад
            </button>
            <button type="button" class="btn btn-primary" @click="Send" data-bs-dismiss="modal">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>