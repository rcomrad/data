<script setup>
import {computed, ref} from "vue";
import axios from "axios";
import {URL} from "@/utils/config"

const competitions = ref()

axios.get(URL + "/get/if/user_competition[competition_id[id;name;start_time]]/user_id=" + JSON.parse(localStorage.getItem("user")).id).then((response) => {
  competitions.value = response.data;
  competitions.value.user_competitions.forEach((el) => {
    el.competition.start_time = new Date(el.competition.start_time)
  })
})


const now_time = computed(() => {
  return new Date()
})
const compare_time = (time) => {
  const c = new Date()
  return c.valueOf() >= time.valueOf()
}
</script>

<template>
  <div class=" d-flex justify-content-center align-items-center" style="height: 100%">
    <div class="card m-2" v-for="competition in competitions.user_competitions" v-if="competitions">
      <div class="card-body m-5 text-center">
        <h5 class="card-title">{{ competition.competition.name }}</h5>
        <router-link class="btn btn-outline-primary"
                     :to="{name: 'task_list', params:{'c_id': competition.competition.id}}"
                     v-if="true">Участвовать
        </router-link>

        <a class="btn btn-outline-secondary" v-else>Соревнование закрыто</a>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>