<script setup>
import ListItem from "@/components/home/ListItem.vue";
import UserItem from "@/components/home/UserItem.vue";
import "bootstrap-icons/font/bootstrap-icons.css";
import MessageBlock from "@/components/messages/MessageBlock.vue";
import {reactive} from "vue";

const user = reactive(JSON.parse(localStorage.getItem("user")))
</script>

<template>
  <div class="row full-size" style="margin: 0">
    <div class="d-flex flex-column flex-shrink-0 bg-light col-1" style="width: 4.5rem">
      <ul class="nav flex-column mb-auto text-center ">
        <ListItem icon="bi-house-fill"/>

        <ListItem icon="bi-book" :href="{name: 'journal'}" v-if="user.role.includes('teacher')" :title="'Журнал'"/>
        <ListItem icon="bi-journal" :href="{name: 'head_journal'}" v-if="user.role.includes('grade_head')"
                  :title="'Журнал'"/>
        <ListItem icon="bi-person-gear" :href="{name:'user_management'}" v-if="user.role.includes('add_user')"
                  :title="'Управление пользователями'"/>
        <ListItem icon="bi-calendar-event" :href="{name: 'plan_management'}" v-if="user.role.includes('add_plan')"
                  :title="'Управление учебными планами'"/>
        <ListItem icon="bi-people" :href="{name: 'grade_management'}" v-if="user.role.includes('add_user')"
                  :title="'Управление классами'"/>
        <ListItem icon="bi-table" :href="{name: 'journal_management'}" v-if="user.role.includes('add_journal')"/>
        <ListItem icon="bi-arrow-left-right" :href="{name: 'move'}" v-if="user.role.includes('add_journal')"/>
        <ListItem icon="bi-award" :href="{name: 'competitions'}"
                  v-if="user.role.includes('add_journal') || user.role.includes('submitor')"/>
      </ul>
      <UserItem/>
    </div>
    <div class="col-11 mx-auto">
      <MessageBlock/>
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="sass">
.full-size
  height: calc(100% - 50px)

</style>