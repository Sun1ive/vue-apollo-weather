<template>
  <v-layout>
    <v-flex>
      <h1>Hello</h1>
      <v-btn @click="onLogin">Login</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import { loginMutation } from "@/schema";

export default {
  name: "home",

  data: () => ({
    email: "hello@world.com",
    password: "123456"
  }),

  methods: {
    async onLogin() {
      const {
        data: { login: data }
      } = await this.$apollo.mutate({
        mutation: loginMutation,
        variables: {
          email: "hello@world.com",
          password: "123456"
        }
      });

      console.log(data);
    }
  }
};
</script>

