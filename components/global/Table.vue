<template>
  <a-table
    :data-source="data"
    :columns="columns"
    :rowSelection="rowSelection"
    :pagination="pagination"
    @change="handleChangePage"
    v-bind="$attrs"
  >
    
  </a-table>
</template>
<script lang="ts" setup generic="T">
  import type { TablePaginationConfig } from 'ant-design-vue'
  import type { Column } from '~/models/common.interface'

  interface Props {
    data?: T[]
    columns: Column
    selection?: boolean
    selectedRowKeys?: string[]
    showPage?: boolean
    pagination: TablePaginationConfig | false
    rowKey?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    data: () => [],
    columns: () => [],
    selection: false,
    selectedRowKeys: () => [],
    showPage: false,
    pagination: false
  })
  
  const selectedRowKeys = ref<string[]>(props.selectedRowKeys ?? [])

  const rowSelection = computed<any>(() => {
    if (!props.selection) return null

    return {
      selectedRowKeys: selectedRowKeys.value,
      onChange: onSelectChange
    }
  })

  const pagination = computed(() => {
    if (!props.showPage) return false

    return props.pagination
  })

  const emits = defineEmits<{
    (e: 'selectedChange', value: string[]): void
    (e: 'changePage', value: TablePaginationConfig): void
  }>()

  const handleChangePage = (pagination: TablePaginationConfig) => {
    emits('changePage', pagination)
  }
  
  const onSelectChange = (newSelectedRowKeys: string[]) => {
    selectedRowKeys.value = newSelectedRowKeys
    emits('selectedChange', selectedRowKeys.value)
  }

</script>
