<template>
  <div>
    <h1>Test trên thuật toán MLP</h1>
    <div class="wrap-form">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="Tên máy tính" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Hãng" prop="manufactureId">
          <el-select v-model="ruleForm.manufactureId" placeholder="Hãng">
            <el-option
              v-for="item in data.brand"
              :key="item.id"
              :label="item.brandName"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="CPU" prop="cpuId">
              <el-select v-model="ruleForm.cpuId" placeholder="CPU">
                <el-option
                  v-for="item in data.cpu"
                  :key="item.id"
                  :label="item.cpuName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="GPU" prop="gpuId">
              <el-select v-model="ruleForm.gpuId" placeholder="GPU">
                <el-option
                  v-for="item in data.gpu"
                  :key="item.id"
                  :label="item.gpuName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="Dung Lượng" prop="capacity">
          <el-input v-model.number="ruleForm.capacity"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="8">
            <el-form-item label="Bluetooth">
              <el-switch
                v-model="ruleForm.bluetooth"
                active-value="Có"
                inactive-value="Không"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="Camera">
              <el-switch
                v-model="ruleForm.camera"
                active-value="Có"
                inactive-value="Không"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="Cổng Lan">
              <el-switch
                v-model="ruleForm.lan"
                active-value="Có"
                inactive-value="Không"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch> </el-form-item
          ></el-col>
        </el-row>

        <el-form-item label="Bộ Nhớ Đệm" prop="cache">
          <el-input v-model.number="ruleForm.cache"></el-input>
        </el-form-item>

        <el-form-item label="Màu sắc" prop="color">
          <el-radio-group v-model="ruleForm.color">
            <el-radio label="Sáng"></el-radio>
            <el-radio label="Tối"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Màn Hình" prop="display">
          <el-input v-model="ruleForm.display"></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="8">
            <el-form-item label="Tai Nghe">
              <el-switch
                v-model="ruleForm.headphone"
                active-value="Có"
                inactive-value="Không"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="Bàn Phím">
              <el-switch
                v-model="ruleForm.keyboard"
                active-value="Có"
                inactive-value="Không"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="Chuột">
              <el-switch
                v-model="ruleForm.mouse"
                active-value="Có"
                inactive-value="Không"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch> </el-form-item
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="Thẻ Nhớ">
              <el-switch
                v-model="ruleForm.memSlot"
                active-value="1"
                inactive-value="0"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="USB">
              <el-switch
                v-model="ruleForm.usb"
                active-value="Có"
                inactive-value="Không"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch> </el-form-item
          ></el-col>
          <el-col :span="8">
            <el-form-item label="WIRELESS">
              <el-switch
                v-model="ruleForm.wireless"
                active-value="Có"
                inactive-value="Không"
                active-color="#13ce66"
                inactive-color="#ff4949"
              ></el-switch> </el-form-item
          ></el-col>
        </el-row>
        <el-form-item label="Số Khe">
          <el-input-number
            v-model="ruleForm.memCardSlot"
            :step="2"
            :max="8"
            :min="1"
            step-strictly
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Hệ Điều Hành" prop="os">
          <el-select v-model="ruleForm.os" placeholder="Hệ Điều Hành">
            <el-option label="Window" value="Window"></el-option>
            <el-option label="MacOS" value="MacOS"></el-option>
            <el-option label="Linux" value="Linux"></el-option>
            <el-option label="Kali" value="Kali"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Giá" prop="price">
          <el-input v-model.number="ruleForm.price">
            <template slot="prepend">đ</template>
          </el-input>
        </el-form-item>
        <el-form-item label="RAM">
          <el-input-number
            v-model="ruleForm.ram"
            :step="2"
            :min="2"
            :max="256"
            step-strictly
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Độ Phân Giải" prop="resolution">
          <el-radio-group v-model="ruleForm.resolution">
            <el-radio label="HD"></el-radio>
            <el-radio label="FullHD"></el-radio>
            <el-radio label="2K"></el-radio>
            <el-radio label="4K"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Tốc Độ Vòng Quay" prop="rpm">
          <el-input v-model.number="ruleForm.rpm"></el-input>
        </el-form-item>
        <el-form-item label="Tốc Độ" prop="speed">
          <el-input v-model.number="ruleForm.speed"></el-input>
        </el-form-item>
        <el-form-item label="Trọng Lượng" prop="weight">
          <el-input v-model.number="ruleForm.weight">
            <template slot="append">g</template>
          </el-input>
        </el-form-item>
        <el-form-item label="Pin" prop="battery">
          <el-input v-model.number="ruleForm.battery">
            <template slot="append">giờ</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >Thêm</el-button
          >
          <el-button @click="resetForm('ruleForm')">Reset</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    var checkBattery = (rule, value, callback) => {
      if (value < 0) {
        callback(new Error("Pin phải lớn 0"));
      } else if (value > 50) {
        callback(new Error("Pin phải bé hơn 50"));
      } else {
        callback();
      }
    };
    var checkWeight = (rule, value, callback) => {
      if (value < 300) {
        callback(new Error("Trọng lượng phải lớn hơn 300g"));
      } else if (value > 50) {
        callback(new Error("Trọng lượng phải bé hơn 10000g"));
      } else {
        callback();
      }
    };
    var checkPrice = (rule, value, callback) => {
      if (value < 5000000) {
        callback(new Error("Giá phải lớn hơn 5tr"));
      } else if (value > 200000000) {
        callback(new Error("Giá phải bé hơn 200tr"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        manufactureId: null,
        name: "",
        cpuId: null,
        speed: "",
        cache: 0,
        ram: 4,
        memSlot: "1",
        capacity: 128,
        rpm: "",
        display: "",
        resolution: "4k",
        gpuId: "",
        wireless: "Không",
        lan: "Không",
        bluetooth: "Không",
        keyboard: "Không",
        mouse: "Không",
        usb: "Không",
        displayPort: "",
        memCardSlot: 2,
        headphone: "Không",
        camera: "Không",
        battery: "",
        os: "",
        weight: "",
        color: "",
        price: 0,
        datasetPath: "D:\\DuLieu.arff",
      },
      data: {
        brand: [],
        cpu: [],
        gpu: [],
      },
      rules: {
        name: [
          {
            required: true,
            message: "Vui lòng nhập tên",
            trigger: "blur",
          },
          {
            min: 3,
            max: 50,
            message: "Độ dài nên từ 3 đến 50 kí tự",
            trigger: "blur",
          },
        ],
        manufactureId: [
          {
            required: true,
            message: "Vui lòng chọn hãng",
            trigger: "change",
          },
        ],
        cpuId: [
          {
            required: true,
            message: "Vui lòng chọn CPU",
            trigger: "change",
          },
        ],
        gpuId: [
          {
            required: true,
            message: "Vui lòng chọn GPU",
            trigger: "change",
          },
        ],
        capacity: [
          { required: true, message: "Nhập dung lượng" },
          { type: "number", message: "Dung lượng phải là số" },
        ],
        cache: [
          { required: true, message: "Nhập bộ nhớ đệm" },
          { type: "number", message: "Bộ nhớ đệm phải là số" },
        ],
        color: [
          {
            required: true,
            message: "Vui lòng chọn màu",
            trigger: "change",
          },
        ],
        display: [
          {
            required: true,
            message: "Vui lòng nhập màng hình",
            trigger: "blur",
          },
          {
            min: 3,
            max: 50,
            message: "Độ dài nên từ 3 đến 50 kí tự",
            trigger: "blur",
          },
        ],
        os: [
          {
            required: true,
            message: "Vui lòng chọn hệ điều hành",
            trigger: "change",
          },
        ],
        price: [
          { required: true, message: "Nhập giá" },
          { type: "number", message: "Giá phải là số" },
          { validator: checkPrice, trigger: "blur" },
        ],
        resolution: [
          {
            required: true,
            message: "Vui lòng chọn màu",
            trigger: "change",
          },
        ],
        rpm: [
          { required: true, message: "Nhập bộ tốc độ vòng quay" },
          { type: "number", message: "Tốc độ vòng quay phải là số" },
        ],
        speed: [
          { required: true, message: "Nhập tốc độ" },
          { type: "number", message: "Tốc Độ phải là số" },
        ],
        weight: [
          { required: true, message: "Nhập trọng lượng" },
          { type: "number", message: "Trọng lượng phải là số" },
          { validator: checkWeight, trigger: "blur" },
        ],
        battery: [
          { required: true, message: "Nhập pin" },
          { type: "number", message: "Pin phải là số" },
          { validator: checkBattery, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm);
          axios
            .post("computer/mlp", this.ruleForm)
            .then((result) => {
              console.log(result);
               this.$notify({
                title: "Success",
                message: `Thêm thành công ${result.data.data.name}, dữ liệu được phân lớp: ${result.data.data.classifyDes}`,
                type: "success",
                duration: 0
              });
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          this.$notify.error({
            title: "Error",
            message: "Thất bại",
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
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
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async created() {
    this.getBrand();
    this.getCPU();
    this.getGPU();
  },
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
