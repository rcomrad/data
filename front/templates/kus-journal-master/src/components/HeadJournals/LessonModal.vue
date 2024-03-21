<script setup>

import {ref, watch} from "vue";
import axios from "axios";
import {URL} from "@/utils/config";

const props = defineProps(["lesson"])
const emit = defineEmits(["updateLesson"])
const control = ref("")
const homework = ref("")

watch(props, ()=>{
  control.value = props.lesson.control
  homework.value = props.lesson.homework
})

const sendLesson = ()=>{
  console.log({
    id: props.lesson.id,
    homework: homework.value,
    control: control.value
  })
  axios({
    url: URL+"/lesson",
    method: "POST",
    data: {
      id: props.lesson.id,
      homework: homework.value,
      control: control.value
    },
    headers: {
      token: JSON.parse(localStorage.getItem("user")).token
    }
  }).then(()=>{
    emit("updateLesson", {
      id: props.lesson.id,
      homework: homework.value,
      control: control.value
    })
  })
}

</script>


<template>
  <div class="modal fade" id="lesson" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="lesson" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ lesson.theme }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Дата</label>
            <p>{{lesson.date}}</p>
          </div>
          <div class="mb-3">
            <label class="form-label">Тип контроля занятия</label>
            <input type="text" class="form-control" v-model="control">
          </div>
          <div class="mb-3">
            <label class="form-label">Домашняя работа</label>
            <textarea type="text" class="form-control" v-model="homework"></textarea>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
          <button type="button" class="btn btn-primary" @click="sendLesson" data-bs-dismiss="modal">Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>