<template>
  <div>
    <h1>Task list</h1>
    <ul v-for="task in getTasks" :key="task.id">
      <li><TaskItem :task="task" /></li>
    </ul>
  </div>
</template>

<script>
import TaskItem from "./TaskItem.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    TaskItem,
  },
  computed: {
    ...mapGetters(["getTasks"]),
  },
};
</script>

<style>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
li {
    list-style: none;
}
</style>
