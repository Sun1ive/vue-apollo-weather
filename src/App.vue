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
import { cities, loginMutation, hottestCity } from "@/schema";

export default {
  name: "root",

  apollo: {
    hottestCity: {
      query: hottestCity,
      result: ({ data }) => {
        console.log(data);
      }
    },
    cities: {
      query: cities,
      result({ data, loading }) {
        console.log(data, loading);
        console.log(this.$data);
      }
    }
  }
};
</script>

