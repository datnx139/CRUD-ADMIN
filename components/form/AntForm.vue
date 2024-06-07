<template>
  <a-form v-bind="$attrs">
    <slot></slot>

    <Button @click="handleSubmit">submit</Button>
  </a-form>
</template>
<script lang="ts" setup>

  const emits = defineEmits<{
    (e: 'submit'): void
  }>()

  const handleSubmit = () => {
    emits('submit')
  }

</script>
