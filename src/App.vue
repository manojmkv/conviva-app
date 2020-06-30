<template>
  <div id="app">
    <landing-page :msg="welcomeNote"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LandingPage from './components/landing.vue';

@Component({
  components: {
    "landing-page": LandingPage
  },
})
export default class App extends Vue {
  welcomeNote: string = "A Conviva Employee details App";
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
