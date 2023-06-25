<template>
  <nav>
  <ul>
  <li><router-link class="link" to="/" >Home</router-link></li>
  <li><router-link to="/tasks" >Tasks</router-link></li>
  </ul>
  </nav>
  <router-view/>
</template>

<style scoped>
 * {
  margin: 0;
 }
nav {
  background-color: teal;
  font-size: 40px;
  display: flex;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: white;
}
</style>
