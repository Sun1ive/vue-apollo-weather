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
import cities from "./schema/weather.gql";

export default {
  apollo: {
    cities
  }
};
</script>

