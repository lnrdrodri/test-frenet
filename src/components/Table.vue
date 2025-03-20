<script setup>
  import { useDisplay } from 'vuetify'

  defineProps({
    items: Array,
    columns: Array,
    actions: {
      type: Array,
      default: [],
    }
  })

  const { mdAndDown } = useDisplay()
</script>

<template>
  <div v-if="mdAndDown">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="d-flex border-thin rounded pa-4 align-center mb-4"
    >
      <div class="flex-grow-1 text-body-2">
        <p v-for="column in columns" :key="column.key">
          {{ column.label }}: {{ column?.formatter ? column.formatter(item[column.key]) : item[column.key] }}
        </p>
      </div>
      <div>
        <v-icon
          v-for="action in actions"
          :key="action.icon"
          @click="action.handler(item)"
          :title="action.title"
        >
          {{ action.icon }}
        </v-icon>
      </div>
    </div>
  </div>
  <v-table
    v-else
    density="compact"
    class="border-thin rounded text-body-1"
  >
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
          {{ 
            column?.formatter
            ? column.formatter(item[column.key])
            : item[column.key]
          }}
        </td>
        <td v-if="actions.length > 0">
          <v-icon
            v-for="action in actions"
            :key="action.icon"
            @click="action.handler(item)"
            :title="action.title"
          >
            {{ action.icon }}
          </v-icon>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>