<script setup>
import router from "@/router";
import {useRoute} from "vue-router";
import GroupList from "@/components/management/groups/GroupList.vue";

</script>

<template>
<GroupList :grade="JSON.parse(useRoute().params.grade)"/>
</template>


<style scoped>

</style>