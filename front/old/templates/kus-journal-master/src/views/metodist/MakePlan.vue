<script setup>
import PlanList from "@/components/management/plans/PlanList.vue";
import ButtonBlock from "@/components/management/plans/ButtonBlock.vue";
import {ref} from "vue";
import PlanModal from "@/components/management/plans/PlanModal.vue";
import {Modal} from "bootstrap";

const filter = ref('')

const SetFilter = (f)=>{
  filter.value = f
}

const current_plan = ref('')
const SetPlan = (plan)=>{
  current_plan.value = plan
  const modal = new Modal('#plan')
  modal.toggle()
}
</script>

<template>
  <PlanModal :plan="current_plan"/>
  <ButtonBlock @set-filter="SetFilter" @set-plan="SetPlan"/>
  <PlanList :filter_by="filter" @set-plan="SetPlan"/>
</template>


<style scoped>

</style>