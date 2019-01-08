<template>
  <v-app>
    <v-container>
      <v-content>
        <router-view/>
      </v-content>
    </v-container>
  </v-app>
</template>

<script>
import { cities, loginMutation } from "@/schema";

export default {
  name: "root",

  data: () => ({
   cities: []
  }),
  apollo: {
    weather: {
      query: cities,
      update({ cities }) {
        this.cities = cities;
        console.log(this.$data);
      },
      result: ({ data, loading }) => {
        console.log(data, loading);
      }
    }
  }
};
</script>

