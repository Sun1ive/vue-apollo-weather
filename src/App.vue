<template>
  <div id="app">
    <table border="1">
      <caption>Weather cities table</caption>
      <tr>
        <th>City name</th>
        <th>City temperature</th>
        <th>City pressure</th>
      </tr>
      <tr v-for="city in cities" :key="city.name">
        <td>{{ city.name }}</td>
        <td>{{ city.temp }}</td>
        <td>{{ city.pressure }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import cities from "./schema/weather.gql";

export default {
  apollo: {
    cities
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
  width: 600px;
  margin: 70px auto;
}
</style>
