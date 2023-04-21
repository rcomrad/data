<script setup>
import {ref} from "vue";
import axios from "axios";
import {URL} from "@/utils/config";

const a = ref()

const send = () => {
  axios({
    url: URL + "/upload",
    method: "POST",
    data: {
      a: a.value
    },
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }).then((res)=>{
    console.log(res)
  })
}
</script>

<template>
  <div class="d-flex justify-content-center align-items-center flex-column" style="height: 100%">

   <img alt="Тут должен быть крутой логотип, но его почему то нет...." src="../../static/Magic_cat.svg" height="200" width="200">
    <h3 class="mt-5">Что бы начать работать выберите любой элемент слева :)</h3>
<!--      <input type="file" @change="(event)=>{a = event.target.files[0]}">-->
<!--      <button class="btn btn-primary" @click="send">Тыкни сюда</button>-->
  </div>
</template>

<style scoped>

</style>