<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <div v-for="city in cities" :key="city.name">{{ city.name }}</div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "app",
  apollo: {
    // Vue-Apollo options here
    cities: gql`
      query {
        cities {
          name
          temp
        }
      }
    `
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
