<template>
    <div>
        <h1>Task list</h1>
        <div v-for="task in getTasks" :key="task.id"><TaskItem :task="task"/></div>
    </div>
</template>

<script>
import TaskItem from './TaskItem.vue';
import {mapGetters} from 'vuex'
    export default {
        components: {
            TaskItem
        },
        computed: {
            ...mapGetters(['getTasks'])
        }
    }
</script>

<style lang="scss" scoped>

</style>