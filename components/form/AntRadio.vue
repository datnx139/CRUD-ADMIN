<template>
  <a-form-item
    :label="label"
    :has-feedback="!!errorMessage"
    :help="errorMessage"
    :validate-status="errorMessage ? 'error' : undefined"
  >
    <a-radio-group v-model="value" v-bind="$attrs">
      <template v-for="option in options" :key="option.value">
        <a-radio :value="option.value">{{ option.label }}</a-radio>
      </template>
    </a-radio-group>
  </a-form-item>
  
</template>

<script lang="ts" setup>
  import { useField } from "vee-validate"
  import type { IOption } from "~/models/common.interface"

  interface Props {
    name: string
    label: string
    required?: boolean,
    options: IOption[]
  }

  const props = withDefaults(defineProps<Props>(), {
    name: '',
    label: '',
    required: false,
    options: () => []
  })

  const { errorMessage, value } = useField<string>(toRef(props.name))

</script>
