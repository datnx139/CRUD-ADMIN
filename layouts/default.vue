<template>
  <a-layout class="ls-layout">
    <a-layout-header class="ls-layout-default-header">
      <div>this is header</div>
    </a-layout-header>
    <a-layout>
      <a-layout-sider class="ls-layout-default-sider">
        <div>this is sider</div>
      </a-layout-sider>
      <a-layout-content class="ls-layout-content">
        <slot></slot>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
