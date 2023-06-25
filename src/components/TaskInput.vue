<template>
    <div class="taskInput">
        <input @change="titelChange" v-bind:value="title" type="text">
        <button @click="addTaskI()">Add</button>
        </div>
</template>

<script>
import {mapActions} from 'vuex'

    export default {
        data() {
            return {
                title:''
            }
        },
        methods: {
            ...mapActions(['addTask']),
            titelChange(e) {
                this.title = e.target.value
            },
            addTaskI() {
                this.addTask({
                    title:this.title,
                    id:Date.now()
                })
                this.title = ''
            }
        }
    }
</script>

<style scoped>
.taskInput {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
}
input {
    width: 300px;
    border-radius: 10px;
    height: 40px;
    font-size: 24px;
}
button {
    height: 40px;
    width: 100px;
    margin: 10px;
    color: white;
    background-color: teal;
    border-radius: 10px;
    font-size: 24px;
}
</style>