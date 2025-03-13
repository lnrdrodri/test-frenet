<script setup>
  import { watchEffect } from 'vue'

  const props = defineProps({
    items: Array,
    columns: Array,
  })

  watchEffect(() => {
    // console.log(props.items)
  })
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th v-for="column in columns" :key="column">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, index) in items"
        :key="index"
      >
        <td v-for="column in columns">
          {{ item[column.key] }}
        </td>
      </tr>
    </tbody>
  </v-table>
</template>