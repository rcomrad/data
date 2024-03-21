<script setup>
import {useStore} from "vuex";

const store = useStore();

</script>

<template>

  <ul class="list-group">
    <li class="list-group-item border-0 py-1" v-for="task in store.state.tasks.problems_list">
      <router-link style="text-decoration: none"
                   class="text-dark"
                   :to="{'name': 'problem_page', params:{'id': task.id}}">
        {{ task.name }}
      </router-link>
    </li>
    <li class="list-group-item border-0 mb-1"  v-for="task in store.state.tasks.questions_list" :class="task.sent?'bg-secondary bg-opacity-25 rounded-2':null">
      <router-link style="text-decoration: none"
                   class="text-dark"
                   :to="{'name': 'question_page', params:{'id': task.id}}">
        {{ task.name }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
.router-link-active{
  color: #0d6efd!important;
}

</style>