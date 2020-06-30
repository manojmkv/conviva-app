<template>
  <div>
    <div class="lower-container">
      <div>Selected Employee Salary: {{Salary}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class LowerContainer extends Vue {
  get Salary() {
    let salary = null;
    const selectedEmployee = this.$store.state.selectedObject;
    salary = selectedEmployee ? selectedEmployee.employee_salary : null;
    return salary;
  }
}
</script>
<style scoped>
.lower-container {
  height: 100px;
  width: 100px;
  background-color: aliceblue;
  text-align: -webkit-center;
  width: 60%;
  padding-top: 30px;
}
</style>