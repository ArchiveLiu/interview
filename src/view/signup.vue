<template>
  <div>
    <!-- <a-form-model-item prop="phone">
      <a-input class="input_phone" v-model="form.phone" :maxLength="11" placeholder="手机号" />
    </a-form-model-item> -->

    <a-form
    ref="formRef"
    :model="form"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-item ref="form.phone" label="手机号" name="phone">
      <a-input  v-model="form.phone" :maxLength="11" placeholder="手机号" />
    </a-form-item>
     <a-form-item ref="form.email" label="email" name="email" placeholder="邮箱">
       <a-input  v-model="form.email" :maxLength="11" placeholder="邮箱" />
    </a-form-item>
  </a-form>
  </div>
</template>

<script>

export default {
  data() {
     const checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        //获取工具类中的手机号正则表达式
        const phoneReg =
          /^1[38]\d{9}$/
        if (phoneReg.test(value)) {
          callback();
        } else {
          //如果验证输入错误就清空
          this.form.phone = "";
          return callback(new Error("请输入正确的手机号"));
        }
      }}
      
    return {
      wrapperCol: { span: 4 },
      labelCol: { span: 4 },
      form: {
        phone: "",
        name:""
      },
      rules: {
        phone: {
          required: true,
          validator: checkPhone, 
          trigger: "blur",
        },
      },
    };
  },
  methods: {
    onSubmit(){
        //   signup()
        // .then(() => {
        //   console.log(toRaw(modelRef));
        // })
        // .catch(err => {
        //   console.log('error', err);
        // });
    }
  },
};
</script>

<style  scoped>
 .input_phone{
    width: 200px;
 }
</style>
