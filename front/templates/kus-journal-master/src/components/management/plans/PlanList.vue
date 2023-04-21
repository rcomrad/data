<script setup>

import {computed, ref, watch} from "vue";
import axios from "axios";
import {URL} from "@/utils/config";
import {useStore} from "vuex";
import {Delete} from "@/utils/utils";

const props = defineProps(["filter_by"])
const emit = defineEmits(["setPlan"])
const store = useStore()
const plans = ref([])

const getPlans = ()=>{
  axios.get(URL + "/get/all/plan[*;subject_id[*]]").then((response) => {
    plans.value = response.data.plans.sort((el1, el2)=>{
      if (el1.name>el2.name){
        return 1
      }else{
        return -1
      }
    })
    plans.value.forEach((plan)=>{
      plan.to_delete = false
    })
  })
}
getPlans()
let reload = computed(()=>{
  return store.state.needReload
})
watch(reload, ()=>{
  getPlans()
})

const FilteredPlan = computed(() => {
  return plans.value.filter((plan) => {
    return plan.name.toLowerCase().includes(props.filter_by.toLowerCase()) || plan.subject.toLowerCase().includes(props.filter_by.toLowerCase())
  })
})


</script>

<template>
  <table class="table table-striped text-center">
    <thead>
    <tr>
      <th>Имя</th>
      <th>Предмет</th>
      <th style="width: 10%">Изменить</th>
      <th style="width: 10%"><button class="btn btn-danger btn-sm" @click="Delete(plans, '/drop/plan', store)">Удалить</button></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="plan in FilteredPlan">
      <td>{{ plan.name }}</td>
      <td>{{ plan.subject.name }}</td>
      <td>
        <button class="btn btn-primary btn-sm" @click="$emit('setPlan', plan)"><i class="bi bi-pencil-fill"></i>
        </button>
      </td>
      <td>
        <input type="checkbox" class="form-check-input" v-model="plan.to_delete">
      </td>
    </tr>

    </tbody>
  </table>
</template>

<style scoped>

</style>