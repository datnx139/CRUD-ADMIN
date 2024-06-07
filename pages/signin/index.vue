<template>
  <AntForm @submit="onSubmit">
    <AntInputField name="email" label="email" type="text" required/>

    <AntInputField name="password" label="password" type="password" required></AntInputField>
  </AntForm>
</template>
<script setup lang="ts">

  import { useForm } from 'vee-validate'
  import { toTypedSchema } from '@vee-validate/zod'
  import * as zod from 'zod'

  definePageMeta({
    layout: 'auth'
  })

  const schema = toTypedSchema(
    zod.object({
      email: zod.string().min(1, { message: 'This is required' }).email({ message: 'Must be a valid email' }),
      password: zod.string().min(1, { message: 'This is required' }).min(8, { message: 'Too short' }),
    })
  )

  const { handleSubmit } = useForm({
    validationSchema: schema
  })

  
  const onSubmit = handleSubmit(values => {
    console.log(values, 'values')
  });
</script>
