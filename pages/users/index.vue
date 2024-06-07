
<template>
  <div>
    <ClientOnly>
      <Table 
        :data="(posts as IPost[])" 
        :columns="columns" show-page 
        :pagination="pagination"
        selection
        :selectedRowKeys="rowSelected"
        @changePage="handleChangePage"
      >
      </Table>
    </ClientOnly>
  </div>
</template>
<script lang="ts" setup>
  import type { Column, ITablePagination } from '@/models/common.interface'

  interface IPost {
    id: string
    userId: string
    title: string
    body: string
  }

  const rowSelected = ref<string[]>([])

  const { data: posts } = await useAsyncData<IPost[]>(() => $fetch('https://jsonplaceholder.typicode.com/posts'))

  const columns: Column = [
    { title: 'Id', dataIndex: 'id', key: 'id' },
    { title: 'UserId', dataIndex: 'userId' },
    { title: 'Title', dataIndex: 'title' },
    { title: 'Content', dataIndex: 'body' },
  ];

  const pagination = reactive<ITablePagination>({
    current: 1,
    pageSize: 10,
    total: 100
  })

  const handleChangePage = (page: ITablePagination) => {
    pagination.current = page.current
    pagination.pageSize = page.pageSize
    pagination.total = page.total
  }

</script>
