<template>
  <div>
    <h1>Huấn luyện với MLP</h1>
    <div class="wrapp-box">
      <input @change="getPath" type="file" name="" id="" />
      <div>
        <h5 class="name-file">Tên: {{ property.name }}</h5>
        <p class="size-file">Size: {{ property.size }} byte</p>
      </div>
      <el-button type="primary" v-model="data.path" @click="postData"
        >Gửi file</el-button
      >
    </div>
    <h1>Kết quả sau khi huấn luyện</h1>
    <el-row>
      <el-col :span="12">
        <pre>
        {{ result }}
        </pre>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {
        path: "",
      },
      defaulPath: "D:/",
      property: {
        size: "",
        name: "",
      },
      result: "",
    };
  },
  methods: {
    postData() {
      if (!this.data.path) {
        this.$message.error(`Oops, Lỗi~~~~, Chưa nhập file vào.(」゜ロ゜)」`);
        return;
      }
      axios
        .post(`j48/train`, this.data)
        .then((result) => {
          this.result = result.data.data.result;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getPath(e) {
      this.property.name = e.target.files[0].name;
      this.property.size = e.target.files[0].size;
      this.data.path = this.defaulPath + e.target.files[0].name;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.wrapp-box {
  background-color: #cedfed;
  border-radius: 4px;
  padding: 15px 10px;
  line-height: 30px;
  width: 500px;
  color: #2c3e50;
}
.name-file {
  font-size: 20px;
  font-weight: 500;
}
.size-file {
  font-size: 16px;
}
</style>
