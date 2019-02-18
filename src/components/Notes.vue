<template>
  <v-layout column>
    <v-flex xs-8>
      <panel title="Search for Notes">
        <v-text-field label="Note Title"></v-text-field>
      </panel>
      <panel title="Notes">
        <v-btn icon fab right to="create" slot="action" class="indigo darken-2">
          <v-icon>add</v-icon>
        </v-btn>
        <div v-for="note in notes" :key="note.title">
          {{ note.title }}
          {{ note.text }}
          {{ note.author }}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  }
}
</script>

<style scoped>

</style>
