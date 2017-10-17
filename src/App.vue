<template>
  <div id="app">
    
  <v-app>
    <v-toolbar>
      <h4>Hello World</h4>
      <v-spacer></v-spacer>
      <v-btn large dark>V-BTN</v-btn>
    </v-toolbar>
  </v-app>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
  @import './stylus/main';

  body {
    font-family: $body-font-family;
  }
</style>  
