<template>
  <div id="app">
    <v-app>
      <app-header />
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header
  }
}
</script>
<style>
</style>
