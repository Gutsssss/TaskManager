<template>
    <div>
    <InputTask/>
    <TaskList/>
    </div>
</template>

<script>
import TaskList from './TaskList.vue';
import InputTask from './InputTask.vue'
    export default {
        components: {
            TaskList,
            InputTask,
        }
    }
</script>

<style lang="scss" scoped>

</style>