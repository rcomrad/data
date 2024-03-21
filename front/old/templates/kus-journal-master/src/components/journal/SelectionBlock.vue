<script setup>
import {computed, ref, watch} from "vue";

const props = defineProps(["journals", "grades", "groups", "show_themes"])
const emit = defineEmits(["setJournal", "setShow"])

const subjects = computed(() => {
  let subjects = []
  for (let journal of props.journals) {
    if (!subjects.includes(journal.subject)) {
      subjects.push(journal.subject)
    }
  }
  return subjects
})
const selected_subject = ref('')

const s_grades = computed(() => {
  let grades = []
  for (let journal of props.journals) {
    if (!grades.includes(journal.group_id) && journal.subject === selected_subject.value) {
      if (journal.is_group) {
        grades.push(props.groups.filter((g) => {
          return g.id === journal.group_id
        })[0])
      } else {
        grades.push(props.grades.filter((g) => {
          return g.id === journal.group_id
        })[0])
      }
    }
  }
  return grades
})
const selected_grade = ref('')

watch(selected_grade, (new_grade) => {
  const selected = props.journals.filter((journal) => {
    return journal.group_id === selected_grade.value && journal.subject === selected_subject.value
  })[0]
  if (selected) {
    emit("setJournal", selected);
  }
})
</script>

<template>
  <div class="row my-3">
    <div class="col-2">
      <select class="form-select " v-model="selected_subject">
        <option v-for="subject in subjects" :value="subject">{{ subject }}</option>
      </select>
    </div>
    <div class="col-2">
      <select class="form-select " aria-label="Default select example"
              :disabled="selected_subject===''"
              v-model="selected_grade">
        <option v-for="grade in s_grades" :value="grade.id">{{ grade.name }}</option>
      </select>
    </div>
    <div class="col-2 ms-auto">
      <button type="button"
              class="btn btn-primary"
              v-if="selected_grade!==''"
              @click="$emit('setShow', !show_themes)">
        {{ show_themes ? "Убрать темы" : "Показать темы" }}
      </button>
    </div>
  </div>

</template>