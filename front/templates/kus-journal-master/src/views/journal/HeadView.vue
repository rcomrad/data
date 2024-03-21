<script setup>
import axios from "axios";
import {computed, ref} from "vue";
import {URL} from "@/utils/config";
import SelectionBlock from "@/components/HeadJournals/SelectionBlock.vue";
import TableHeader from "@/components/HeadJournals/TableHeader.vue";
import TableBody from "@/components/HeadJournals/TableBody.vue";
import ThemeBlock from "@/components/HeadJournals/ThemeBlock.vue";
import LessonModal from "@/components/HeadJournals/LessonModal.vue";

const journals = ref([])
const selected = ref('');

let user = JSON.parse(localStorage.getItem("user"))

axios.get(URL + "/get_grade_journals/" + user.id, {
  headers: {
    token: user.token
  }
}).then((response) => {
  journals.value = response.data["journals"]
})


const grades = computed(() => {
  let grades = []
  for (let journal of journals.value) {
    if (!journal.is_group) {
      axios.get(URL + "/grade/" + journal.group_id, {
        headers: {
          token: user.token
        }
      }).then((response) => {
        grades.push(response.data)
      })
    }
  }
  return grades
})


const groups = computed(() => {
  let group = []
  for (let journal of journals.value) {

    if (journal.is_group) {
      axios.get(URL + "/group/" + journal.group_id, {
        headers: {
          token: user.token
        }
      }).then((response) => {

        group.push(response.data)
      })
    }
  }
  return group
})
const student_list = computed(() => {
  if (selected.value.is_group) {
    return groups.value.filter((group) => {
      return group.id === selected.value.group_id
    })[0].students
  } else {

    return grades.value.filter((grade) => {
      return grade.id === selected.value.group_id
    })[0].students
  }
})

const SetJournal = (journal) => {
  journal.lessons.sort((a, b) => {
    let date_a = new Date(a.date)
    let date_b = new Date(b.date)
    if (date_a < date_b) {
      return -1
    }
    if (date_a === date_b) {
      return 0
    }
    if (date_a > date_b) {
      return 1
    }
  })
  selected.value = journal
}

const show_themes = ref(false)
const modal_lesson = ref('')
const SetLesson = (lesson)=>{
  modal_lesson.value.homework = lesson.homework
  modal_lesson.value.control = lesson.control
}
</script>


<template>

  <SelectionBlock :journals="journals"
                  :grades="grades"
                  :groups="groups"
                  :show_themes="show_themes"
                  @set-journal="SetJournal"
                  @set-show="(show)=>{show_themes=show}"/>
  <LessonModal :lesson="modal_lesson" @update-lesson="SetLesson"/>
  <div class="row">
    <div :class="show_themes?'col-9':'col-12'" style="overflow: auto">
      <table class="table table-striped table-bordered" v-if="selected" style="overflow: auto">
        <TableHeader :lessons="selected.lessons" @set-modal-lesson="(lesson)=>{modal_lesson=lesson}"/>
        <TableBody :students="student_list" :marks="selected.marks" :lessons="selected.lessons"/>
      </table>
    </div>

    <div class="col-3" v-if="show_themes" style="overflow: auto; max-height: 80vh">
      <ThemeBlock :lessons="selected.lessons" @set-modal-lesson="(lesson)=>{modal_lesson=lesson}"/>
    </div>
  </div>
</template>

<style scoped>
</style>