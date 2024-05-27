<template>
  <div class="form-login">
    <a-form :model="formData" @finish="handleSubmit">
      <a-form-item name="username">
        <a-input size="large" v-model:value="formData.username"></a-input>
      </a-form-item>
      <a-form-item name="password">
        <a-input size="large" v-model:value="formData.password"></a-input>
      </a-form-item>
      <a-button type="primary" html-type="submit">submit</a-button>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
  const formData = reactive({
    username: '',
    password: ''
  })

  const handleSubmit = (values: any) => {
    console.log(values)
  }
</script>
<style lang="scss" scoped>
  .form-login {
    width: 45%;
    padding: 40px 30px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
  }
</style>