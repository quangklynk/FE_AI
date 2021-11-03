<template>
  <div>
    <el-table :data="data.gpu" border >
      <el-table-column prop="id" label="ID" width="100"> </el-table-column>
      <el-table-column prop="gpuName" label="Tên" > </el-table-column>
      <el-table-column prop="point" label="Điểm"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {
        brand: [],
        cpu: [],
        gpu: [],
      },
    };
  },
  methods: {
    getBrand() {
      axios
        .get("brand")
        .then((result) => {
          this.data.brand = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCPU() {
      axios
        .get("cpu")
        .then((result) => {
          this.data.cpu = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getGPU() {
      axios
        .get("gpu")
        .then((result) => {
          this.data.gpu = result.data.data;
          console.log(this.data.gpu);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getBrand();
    this.getCPU();
    this.getGPU();
  },
};
</script>

<style>
</style>