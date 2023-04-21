<script setup>
import "bootstrap-icons/font/bootstrap-icons.css";
import router from "@/router";
import {ref} from "vue";
import axios from "axios";
import {URL} from "@/utils/config";
import {CreateMessage} from '@/components/messages/utils';
import MessageBlock from "@/components/messages/MessageBlock.vue";


const username = ref("");
const password = ref("");

const error = ref(false)

function login() {
  axios({
    method: "POST",
    url: URL + "/login",
    data: {
      "login": username.value,
      "password": password.value
    }
  }).then((response) => {
    console.log(response.data)
    localStorage.setItem("user", JSON.stringify(response.data.user));
    router.push({name: "homepage"});
  }).catch(() => {
    error.value = true;
  })

}
const pass = ref(true)

const change = ()=>{
  pass.value = !pass.value
}
</script>


<template>
  <div class="d-flex justify-content-center align-items-center py-5" style="height: 80vh">
    <div class="col-4 card ">
      <div class="card-body">
        <MessageBlock/>
        <div class="alert alert-danger" role="alert" v-if="error">
          Неправильный логин или пароль
        </div>
        <div class="alert alert-info">
          Для связи с организаторами пишите в <a href="https://t.me/kussystembot">техподдержку</a>
        </div>
        <div class="form-group my-3">
          <label for="username" class="form-label">Имя пользователя</label>
          <input type="text" name="username" id="username" class="form-control" v-model="username">
        </div>
        <div class="form-group">
          <label for="username" class="form-label">Пароль</label>

          <div class="input-group my-3" id="show_hide_password">
            <input :type="pass?'password':'text'" name="password" id="pass" class="form-control" v-model="password">
            <button class="btn btn-secondary" type="button" @click="change">
              <i id="icon" class="bi bi-eye-fill"></i>
            </button>
          </div>
        </div>
        <button class="btn btn-primary my-3" @click="login">Зайти</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
