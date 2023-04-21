<script setup>

import {computed, ref, watch} from "vue";

const props = defineProps(["students", "selected", "backID"])
const emit = defineEmits(["MakeList"])

const student_list = ref([])

watch(props, () => {
  student_list.value = []
  if (props.students && props.selected) {
    for (let student of props.students) {
      student.selected = props.selected.includes(student.id)
      student_list.value.push(JSON.parse(JSON.stringify(student)))
    }
  }
})

const search = ref("")

const Send = () => {
  let ids = []
  for (let student of student_list.value) {
    if (student.selected) {
      ids.push({
        id: student.id,
        name: student.name,
        surname: student.surname
      })
    }
  }

  emit("MakeList", ids)
}
</script>


<template>
  <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Выбор Обучающихся</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" style="">
          <div class="mb-3">
            <div class="mb-3">
              <label class="form-label">Поиск: </label>
              <input type="text" class="form-control" v-model="search" placeholder="Введите имя">
              <div class="form-text">
                Поиск показываат первые 5 частично совподающих имен
              </div>
            </div>
            <table class="table">
              <tbody>
              <tr v-for="student in student_list.filter((student)=>{return (student.name+' '+student.surname).toLowerCase().includes(search.toLowerCase())&&!student.selected}).slice(0, 5)">
                <td>
                  <button class="btn btn-primary btn-sm" @click="student.selected =!student.selected">
                    <i class="bi bi-circle"></i>
                  </button>
                </td>
                <td>{{ student.name }} {{ student.surname }}</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="mb-3">
            <label class="form-label">Выбранные обучающиеся: </label>
            <table class="table">
              <tbody>
              <tr v-for="student in student_list.filter((student)=>{return student.selected})">
                <td>
                  <button class="btn btn-primary btn-sm" @click="student.selected =!student.selected">
                    <i class="bi bi-check2-circle"></i>
                  </button>
                </td>
                <td>{{ student.name }} {{ student.surname }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" :data-bs-target="backID" data-bs-toggle="modal">Закрыть
          </button>
          <button type="button" class="btn btn-primary" :data-bs-target="backID" data-bs-toggle="modal" @click="Send">
            Сохранить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>