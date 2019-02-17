<template>
  <v-toolbar fixed class="indigo" dark>
    <v-toolbar-title class="mr-4" dark @click="navigateTo('home')">
      Note App
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark to="/notes"> My Notes </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat dark to="/login"> Login </v-btn>
      <v-btn flat dark to="/signup"> Signup </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<style scoped>
.mr-4 {
  cursor: pointer;
}
.mr-4:hover {
  color: black;
}
</style>
