<script setup>

import {useStore} from "vuex";
import {computed, ref} from "vue";
import axios from "axios";
import {CreateMessage} from "@/components/messages/utils";

const store = useStore()
const from_date = ref()
const to_date = ref()
const selected = ref()
const num = ref()

const MaxCount = computed(() => {
  let ret = 0
  if (from_date.value) {
    let day_num = new Date(from_date.value)
    if (selected.value !== undefined) {
      for (let day of selected.value.schedule.split(' ')) {
        if (Number(day) === day_num.getDay()) {
          ret++;
        }
      }
    }
  }
  return ret;
})

const Send = ()=>{
//   SEND
  CreateMessage("Занятие перенесено", "primary")
}
</script>

<template>
  <form action="">
    <div class="mb-3">
      <label class="form-label">Выберите журнал:</label>
      <select class="form-select mb-3" v-model="selected" required>
        <option v-for="journal in store.state.moves.journals" :value="journal">{{ journal.name }}</option>
      </select>
    </div>
    <div class="row gx-3 mb-3">
      <div class="col-6">
        <label class="form-label">Откуда:</label>
        <input class="form-control" type="date" v-model="from_date" required>
      </div>
      <div class="col-6">
        <label class="form-label">Куда:</label>
        <input class="form-control" type="date" v-model="to_date" required>
      </div>
    </div>
    <div class="mb-3" v-if="MaxCount !== 0">
      <label class="form-label">Укажите количество переносимых занятий:</label>
      <input type="number" class="form-control" :max="MaxCount" :min="0" v-model="num" required>
      <div class="form-text">Максимум: {{MaxCount}}</div>
    </div>
    <div class="mb-3" v-else>
      <label class="form-label">На данную дату у этого журнала нет занятий</label>
    </div>
    <div class="col-6">
      <button class="btn btn-primary" @click="Send" type="submit">Изменить</button>
    </div>
  </form>
</template>

<style scoped>

</style>