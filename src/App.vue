<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Voices</span>
        <span class="font-weight-light">People who speak</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <helloworld />
    </v-content>
  </v-app>
</template>

<script>
import helloworld from "./components/HelloWorld";
export default {
  name: "App",
  components: {
    helloworld
  },

  data: () => ({
    //
  })
};
</script>
