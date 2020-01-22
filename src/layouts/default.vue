<template>
  <v-app>
    <v-app-bar app class="header">
      <v-toolbar-title>
        nuxt.js with vuetify
      </v-toolbar-title>

      <div class="flex-grow-1" />
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<style scoped lang="scss">
@import '../assets/css/variables';

.v-application.theme--light {
  background-color: white;
}

.header {
  background-color: $header-color;
  color: white;
}
</style>
