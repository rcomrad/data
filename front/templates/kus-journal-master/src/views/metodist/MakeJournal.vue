<script setup>
import JournalList from "@/components/management/journals/JournalList.vue";
import {ref} from "vue";
import {Modal} from "bootstrap";
import ButtonBlock from "@/components/management/journals/ButtonBlock.vue";
import JournalModal from "@/components/management/journals/JournalModal.vue";
const current_journal = ref('')
const SetJournal = (grade)=>{
  current_journal.value = grade
}

const ChangeGrade = (grade)=>{
  SetJournal(grade)
  const modal = new Modal("#journal")
  modal.toggle()
}

const filter = ref('')
</script>


<template>
  <ButtonBlock @set-journal="SetJournal" @set-filter="(Ifilter) =>{filter=Ifilter}"/>
  <JournalModal :current-journal="current_journal"/>
  <JournalList :filter_by="filter" @openModal="ChangeGrade"/>
</template>

<style scoped>

</style>