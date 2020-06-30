<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <div class="parent-container">
      <upper-container @employee-selected="getSelectedEmployee"></upper-container>
      <lower-container></lower-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LowerContainer from "@/components/lower-container.vue";
import UpperContainer from "@/components/upper-container.vue";

@Component({
  components: {
    "upper-container": UpperContainer,
    "lower-container": LowerContainer
  }
})
export default class SampleApp extends Vue {
  @Prop()
  msg!: string;

  selectedEmployeeObject: any = null;

  getSelectedEmployee(employee: any) {
    this.selectedEmployeeObject = employee;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.parent-container {
  text-align: -webkit-center;
}
</style>
