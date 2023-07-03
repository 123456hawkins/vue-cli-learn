<template>
  <div>
    <h1>原生组件</h1>
    <button>
      点击试试
    </button>
    <input>

    <h1>el组件</h1>
    <el-button>点击试试</el-button>
    <el-input></el-input>
    <el-carousel :interval="4000"
                 type="card"
                 height="200px">
      <el-carousel-item v-for="item in 6"
                        :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary"
                 plain>主要按钮</el-button>
      <el-button type="success"
                 plain>成功按钮</el-button>
      <el-button type="info"
                 plain>信息按钮</el-button>
      <el-button type="warning"
                 plain>警告按钮</el-button>
      <el-button type="danger"
                 plain>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary"
                 round>主要按钮</el-button>
      <el-button type="success"
                 round>成功按钮</el-button>
      <el-button type="info"
                 round>信息按钮</el-button>
      <el-button type="warning"
                 round>警告按钮</el-button>
      <el-button type="danger"
                 round>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button icon="el-icon-search"
                 circle></el-button>
      <el-button type="primary"
                 icon="el-icon-edit"
                 circle></el-button>
      <el-button type="success"
                 icon="el-icon-check"
                 circle></el-button>
      <el-button type="info"
                 icon="el-icon-message"
                 circle></el-button>
      <el-button type="warning"
                 icon="el-icon-star-off"
                 circle></el-button>
      <el-button type="danger"
                 icon="el-icon-delete"
                 circle></el-button>
    </el-row>

    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker v-model="value1"
                      type="datetime"
                      placeholder="选择日期时间">
      </el-date-picker>
    </div>
    <el-button @click="getTime">获取时间</el-button>
  </div>

</template>

<script>
export default {
  name: "App",
  components: {
  },
  data () {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',
      value3: ''

    }
  },
  methods: {
    getTime(){
      alert(this.value1)
    }
  }
}
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>



