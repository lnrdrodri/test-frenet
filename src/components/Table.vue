<script setup>
  defineProps({
    items: Array,
    columns: Array,
    actions: {
      type: Array,
      default: [],
    }
  })
</script>

<template>
  <v-table density="compact" class="border-thin rounded">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column">
          {{ column.label }}
        </th>
        <th v-if="actions.length > 0"></th>
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
        <td v-if="actions.length > 0">
          <v-icon
            v-for="action in actions"
            :key="action.icon"
            @click="action.handler(item)"
          >
            {{ action.icon }}
          </v-icon>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>