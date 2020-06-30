<template>
  <div>
    <div class="names-container">
      <table>
        <tr
          v-for="(employee, index) in employeeList"
          v-bind:key="index"
          @click="emitEmployee(employee)"
        >
          <template>
            <td>
              <label class="field-name">Employee Id:</label>
              <label>{{employee.id}}</label>
            </td>
            <td>
              <label class="field-name">Employee Age:</label>
              <label>{{employee.employee_age}}</label>
            </td>
            <td>
              <label class="field-name">Employee Name:</label>
              <label>{{employee.employee_name}}</label>
            </td>
          </template>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ConfigurationParameterClient from "../api/ConfigurationParameterClient";
import * as store from "../state/store";

@Component
export default class UpperContainer extends Vue {
  employeeList: [] = [];

  async getEmployees() {
    const configurationParameterClient = new ConfigurationParameterClient();
    const response = await configurationParameterClient.getOfficeIds();
    if (response.status === 200) {
      const result = await response.json();
      if (result.status === "success") {
        this.employeeList = result.data;
      }
    }
  }

  emitEmployee(employee: any) {
    this.$store.commit("setSelectedEmployee", employee);
  }

  mounted() {
    this.getEmployees();
  }
}
</script>
<style lang='scss' scoped>
.names-container {
  height: 400px;
  overflow: auto;
  text-align: -webkit-center;
  width: 60%;
  background-color: aliceblue;

  tr {
    border: 1px solid gray;
    display: block;
    border: 1px solid gray;
    background-color: honeydew;
    border-radius: 4px;
    line-height: 30px;
    padding-top: 5px;
    label {
      padding-left: 10px;
      padding-right: 10px;
      cursor: pointer;
    }
  }

  tr:hover {
    cursor: pointer;
    background-color: lightslategray;
  }

  .field-name {
    font-weight: bold;
  }
}
</style>