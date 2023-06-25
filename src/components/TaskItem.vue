<template>
    <div>
        <h1 v-if="!editing">{{ task.title }}</h1>
        <input 
        v-bind:value="title"
        @change="changeTitle"
         v-else type="text"
         >
        <button @click="updateTaskI(task)">{{editing ? 'Update' : 'Edit'}}</button>
        <button @click="deleteTask(task.id)">Delete</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
        props: {
            task:{}
        },
        data() {
            return {
                editing:false,
                title:''
            }
        },
        methods: {
           ...mapActions(['deleteTask','updateTask']),
           changeTitle(e) {
            this.title = e.target.value
           },   
           updateTaskI(task) {
            this.editing = this.editing == true ? false : true;
            if(this.editing) {
                this.title = task.title
                this.updateTask(task)
            }else {
                task.title = this.title
            }
           }
        }
    }
</script>

<style lang="scss" scoped>

</style>