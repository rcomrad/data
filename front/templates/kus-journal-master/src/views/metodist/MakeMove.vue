<script setup>
import {ref} from "vue";
import axios from "axios";
import {URL} from "@/utils/config.js"
import {useStore} from "vuex";
import SelectForm from "@/components/management/moves/SelectForm.vue";

const store = useStore()
axios.get(URL + '/get/all/journal_table[name;id;schedule]').then((response) => {
  store.commit("set_multi_journals", response.data.journal_tables)
})

</script>

<template>
  <div class="row justify-content-md-center mt-3">
    <div class="col-6">
      <SelectForm/>
    </div>
  </div>


</template>


<style scoped>

</style>