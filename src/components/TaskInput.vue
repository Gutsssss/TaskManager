<template>
    <div>
        <input @change="titelChange" v-bind:value="title" type="text">
        <button @click="addTaskI()">add</button>
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

<style lang="scss" scoped>

</style>