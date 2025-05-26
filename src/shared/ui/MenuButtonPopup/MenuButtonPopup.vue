<script setup lang="ts">
import { Button, Menu } from 'primevue'

const { items } = defineProps<{ items: MenuItem[] }>()

import { ref } from 'vue'
import type { MenuItem } from 'primevue/menuitem'
const menu = ref()

const toggle = (event: Event) => {
  menu.value.toggle(event)
}
</script>
<template>
  <Button type="button" icon="pi pi-bars" @click="toggle" title="Меню" />

  <Menu ref="menu" id="overlay_menu" :popup="true" :model="items">
    <template #item="{ item, props }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
      <a v-else :href="item.url" :target="item.target" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
      </a>
    </template>
  </Menu>
</template>
