<script setup>
import GradeList from "@/components/management/grades/GradeList.vue";
import ButtonBlock from "@/components/management/grades/ButtonBlock.vue";
import {Modal} from "bootstrap";
import {ref} from "vue";
import GradeModal from "@/components/management/grades/GradeModal.vue";

const current_grade = ref('')
const SetGrade = (grade)=>{
  current_grade.value = grade
}

const ChangeGrade = (grade)=>{
  SetGrade(grade)
  const modal = new Modal("#grade")
  modal.toggle()
}

const filter = ref('')

</script>

<template>
  <ButtonBlock @set-grade="SetGrade" @set-filter="(Ifilter) =>{filter=Ifilter}"/>
  <GradeModal :grade="current_grade"/>
  <GradeList :filter_by="filter" @openModal="ChangeGrade"/>
</template>

<style scoped>

</style>