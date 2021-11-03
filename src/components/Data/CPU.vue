<template>
  <div>
    <el-table :data="data.cpu" border>
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="cpuName" label="Tên">
      </el-table-column>
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
        cpu: [],
      },
    };
  },
  methods: {
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
  },
  created() {
    this.getCPU();
  },
};
</script>

<style>
</style>