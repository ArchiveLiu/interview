<template>
  <div class="navigation">
    <el-row class="navigation_bar" type="flex" justify="center">
      <el-col :span="2" class="title">一体化平台</el-col>
      <el-col :span="7" class="title_col">
        <el-row>
          <el-col :span="2" class="title_col">总览</el-col>
          <el-col :span="4" class="title_col">
            <el-dropdown class="title_col">
              <span class="el-dropdown-link">
                云产品<i class="fa fa-angle-down"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="2" class="title_cola">|</el-col>
          <el-col :span="4" class="title_col">云服务器</el-col>
          <el-col :span="4" class="title_col">域名服务</el-col>
          <el-col :span="4" class="title_col">网站备案</el-col>
          <el-col :span="2" class="title_cols"
            ><i class="el-icon-more"></i>
          </el-col>
          <el-col :span="2" class="title_col"
            ><i class="fa fa-plus"></i
          ></el-col>
        </el-row>
      </el-col>
      <el-col :span="7"> </el-col>
      <el-col :span="8" class="title_colr">
        <el-row :span="24">
          <el-col :span="2" class="title_col"
            ><i class="fa fa-solid fa-qrcode"></i
          ></el-col>
          <el-col :span="3" class="title_col">
            <i class="fa fa-sharp fa-regular fa-envelope"
              ><el-badge :value="100" :max="99" class="item" type="primary"> </el-badge
            ></i>
          </el-col>
          <el-col :span="2" class="title_col">帮助</el-col>
          <el-col :span="3" class="title_col"
            >工单<i class="fa fa-angle-down"></i
          ></el-col>
          <el-col :span="3" class="title_col"
            >费用<i class="fa fa-angle-down"></i
          ></el-col>
          <el-col :span="5" class="title_coltt"
            ><i class="fa fa-duotone fa-user"></i
            ><span class="user_name">{{ value | ellipsis }}</span></el-col
          >
          <el-col :span="2" class="title_col"
            ><i class="fa fa-angle-down right_down"></i
          ></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-button type="primary" @click="signup_page">权限页面按钮</el-button>
    <el-button type="primary" @click="array_page">数据处理页面按钮</el-button>
     <el-button type="primary">promise和async优化在untils文件夹中</el-button>
  </div>
</template>

<script>
import {signup} from '../api/api'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      value: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    };
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 19) {
        return value.slice(0, 19) + "...";
      }
      return value;
    },
  },
  methods: {
    signup_page(){
       signup().then(res=>{
          if(res.data.code=='200'&& res.data.role=='admin'){
            this.$router.push('/signup')
          }else{
             this.$router.push('/notFound')
          }
       }).catch(err=>{
        this.$router.push('/notFound')
       })  
    },
  array_page(){
      this.$router.push('/arrayMerging')
  }
  },
   beforeRouteLeave(to, from, next) {
    console.log(to,from,'dddd');
    if(to.path.indexOf("/signup") !== -1){
      if(this.toTradeFlags){
        next()
      }else{
        alert('请勿手动修改地址栏，请点权限页面按钮')
        next(false)
      }
    }else{
      next();
    }}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation_bar {
  background-color: #262f3e;
  height: 64px;
  margin: 0px;
}
.title {
  text-align: center;
  line-height: 64px;
  color: azure;
  font-size: 22px;
  font-style: italic;
}
.title_col {
  color: #c1c6c8;
  text-align: center;
  line-height: 64px;
  font-size: 14px;
}
.fa-angle-down {
  font-size: 12px;
  padding-left: 6px;
  font-weight: 600;
}
.fa-plus .el-icon-more .fa-envelope {
  font-size: 16px;
  line-height: 64px;
  text-align: center;
}
.title_cola {
  font-size: 16px;
  opacity: 0.4;
  line-height: 64px;
}
.right_down {
  margin-left: 80px;
  line-height: 64px;
  text-align: center;
}

.fa-user {
  font-size: 16px;
  line-height: 64px;
  text-align: center;
  color: cornflowerblue;
}
.user_name {
  display: block;
  padding-left: 10px;
  line-height: 64px;
  text-align: center;
  color: #c1c6c8;
}
.title_coltt {
  display: flex;
  line-height: 64px;
  text-align: center;
  margin-left: 20px;
}

</style>
