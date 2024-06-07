<template>
  <a-form-item
    :label="label"
    :has-feedback="!!errorMessage"
    :help="errorMessage"
    :validate-status="errorMessage ? 'error' : undefined"
  >
    <a-checkbox v-bind="$attrs" v-model:checked="value">
      <slot></slot>
    </a-checkbox>
  </a-form-item>
</template>

<script lang="ts" setup>
  import { useField } from "vee-validate"

  interface Props {
    name: string
    label: string
    required?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    name: '',
    label: '',
    required: false
  })

  const { errorMessage, value } = useField<string>(toRef(props.name))

</script>

