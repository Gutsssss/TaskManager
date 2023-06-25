<template>
    <div class="item">
        <p class="item-title" v-if="!editing">{{ task.title }}</p>
        <input
        class="item-input"
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

<style scoped>
.item {
    border: 2px solid teal;
    width: 400px;
    margin: 0 auto;
    border-radius: 10px;
    overflow-wrap: break-word;
}
.item-title {
    font-size: 40px;
}
button {
    height: 40px;
    width: 100px;
    margin: 10px;
    border-radius: 10px;
    color: white;
    background-color: teal;
    font-size: 20px;
}
.item-input {
    height: 30px;
    border-radius: 10px;
    font-size: 24px;
    margin: 10px;
    padding: 5px;
}
</style>