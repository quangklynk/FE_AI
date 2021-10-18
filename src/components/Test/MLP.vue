<template>
  <div>
    <div class="wrap-form">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="Tên máy tinh" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Hãng" prop="region">
          <el-select v-model="ruleForm.region" placeholder="Hãng">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="CPU" required>
              <el-select v-model="ruleForm.region" placeholder="Hãng">
                <el-option label="Zone one" value="shanghai"></el-option>
                <el-option label="Zone two" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="GPU" prop="resource">
              <el-select v-model="ruleForm.region" placeholder="Hãng">
                <el-option label="Zone one" value="shanghai"></el-option>
                <el-option label="Zone two" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="Dung Lượng" prop="delivery">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="8">
            <el-form-item label="Bluetooth" prop="type">
              <el-switch v-model="ruleForm.delivery"></el-switch> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="Camera" prop="resource">
              <el-switch v-model="ruleForm.delivery"></el-switch> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="Cổng Lan" prop="resource">
              <el-switch v-model="ruleForm.delivery"></el-switch> </el-form-item
          ></el-col>
        </el-row>

        <el-form-item label="Bộ Nhớ Đệm" prop="type">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="Màu sắc" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="Sáng"></el-radio>
            <el-radio label="Tối"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Màn Hình" prop="resource">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="8">
            <el-form-item label="Tai Nghe" prop="resource">
              <el-switch v-model="ruleForm.delivery"></el-switch> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="Bàn Phím" prop="resource">
              <el-switch v-model="ruleForm.delivery"></el-switch> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="Chuột" prop="resource">
              <el-switch v-model="ruleForm.delivery"></el-switch> </el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="Thẻ Nhớ" prop="resource">
              <el-switch v-model="ruleForm.delivery"></el-switch> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="USB" prop="resource">
              <el-switch v-model="ruleForm.delivery"></el-switch> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="WIRELESS" prop="resource">
              <el-switch v-model="ruleForm.delivery"></el-switch> </el-form-item
          ></el-col>
        </el-row>
        <el-form-item label="Số Khe" prop="resource">
          <el-input-number
            v-model="num"
            :step="2"
            step-strictly
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Hệ Điều Hành" prop="resource">
          <el-select v-model="ruleForm.region" placeholder="Hệ Điều Hành">
            <el-option label="Window" value="shanghai"></el-option>
            <el-option label="MacOS" value="beijing"></el-option>
            <el-option label="Linux" value="beijing"></el-option>
            <el-option label="Kali" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Giá" prop="resource">
          <el-input v-model="ruleForm.name">
            <template slot="prepend">đ</template>
          </el-input>
        </el-form-item>
        <el-form-item label="RAM">
          <el-input-number
            v-model="num"
            :step="2"
            step-strictly
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Độ Phân Giải" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="HD"></el-radio>
            <el-radio label="FullHD"></el-radio>
            <el-radio label="2K"></el-radio>
            <el-radio label="4K"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Tốc Độ Vòng Quay" prop="resource">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Tốc Độ" prop="resource">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>

        <el-form-item label="Trọng Lượng" prop="resource">
          <el-input v-model="ruleForm.name">
            <template slot="append">g</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >Create</el-button
          >
          <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input Activity name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 5,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
        region: [
          {
            required: true,
            message: "Please select Activity zone",
            trigger: "change",
          },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "Please pick a date",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "Please pick a time",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change",
          },
        ],
        resource: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change",
          },
        ],
        desc: [
          {
            required: true,
            message: "Please input activity form",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  created() {},
};
</script>

<style scoped>
.wrap-form {
  width: 500px;
  background-color: #f2f2f2;
  border-radius: 4px;
  padding: 20px 15px;
}
</style>
