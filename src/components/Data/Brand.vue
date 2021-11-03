<template>
  <div>
    <el-table :data="data.brand" border >
      <el-table-column prop="id" label="ID" width="100"> </el-table-column>
      <el-table-column prop="brandName" label="Tên" > </el-table-column>
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
      },
    };
  },
  methods: {
    getBrand() {
      axios
        .get("brand")
        .then((result) => {
          this.data.brand = result.data.data;
          console.log(this.data.brand);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getBrand();
  },
};
</script>

<style>
</style>