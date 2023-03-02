<template>
  <div>
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
        
          trigger: "blur",
        },
      },
    };
  },
  methods: {
    
  },
};
</script>

<style  scoped>
 .input_phone{
    width: 200px;
 }
</style>
