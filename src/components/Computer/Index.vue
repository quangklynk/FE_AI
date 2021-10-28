<template>
  <div>
    <el-table :data="data.computer" style="width: 100%" border>
      <el-table-column fixed prop="id" label="ID">
      </el-table-column>
      <el-table-column prop="name" label="Tên" width="120"> </el-table-column>
      <el-table-column prop="manufactureName" label="Tên hãng" width="120">
      </el-table-column>
      <el-table-column prop="cpuName" label="CPU" width="120">
      </el-table-column>
      <el-table-column prop="speed" label="Tốc độ" width="300">
      </el-table-column>
      <el-table-column prop="cache" label="Bộ nhớ đệm" width="300">
      </el-table-column>
      <el-table-column prop="ram" label="RAM" width="300"> </el-table-column>
      <el-table-column prop="memSlot" label="Số khe" width="300">
      </el-table-column>
      <el-table-column prop="capacity" label="Dung lượng" width="300">
      </el-table-column>
      <el-table-column prop="rpm" label="Tốc Độ Vòng Quay" width="300">
      </el-table-column>
      <el-table-column prop="gpuName" label="GPU" width="300">
      </el-table-column>
      <el-table-column prop="display" label="Màng hình" width="120">
      </el-table-column>
      <el-table-column prop="wireless" label="Wireless" width="120">
      </el-table-column>
      <el-table-column prop="lan" label="Lan" width="120"> </el-table-column>
      <el-table-column prop="bluetooth" label="Bluetooth" width="120">
      </el-table-column>
      <el-table-column prop="keyboard" label="Bàn phím" width="120">
      </el-table-column>
      <el-table-column prop="mouse" label="Chuột" width="120">
      </el-table-column>
      <el-table-column prop="usb" label="USB" width="120"> </el-table-column>
      <el-table-column prop="os" label="Hệ điều hành" width="120">
      </el-table-column>
      <el-table-column prop="weight" label="Khối lượng" width="120">
      </el-table-column>
      <el-table-column prop="color" label="Màu sắc" width="120">
      </el-table-column>
      <el-table-column prop="price" label="Giá" width="120"> </el-table-column>

      <el-table-column prop="resolution" label="Độ phân giải" width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="Phân lớp"
        prop="classifyDes"
        width="120"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    handleClick() {
      console.log("click");
    },
    getComputer() {
      axios
        .get("computer")
        .then((result) => {
          this.data.computer = result.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getComputer();
  },
  data() {
    return {
      data: {
        computer: [],
      },
    };
  },
};
</script>

<style scoped>
</style>