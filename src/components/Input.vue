<script setup>
  const model = defineModel();
  
  const props = defineProps({
    name: String,
    label: String,
    rules: Array,
    mask: {
      type: [Array, String],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  });
</script>

<template>
  <div>
    <label :for="name">{{label}}</label>
    <v-text-field
      v-if="mask == ''"
      v-model="model"
      :id="name"
      variant="outlined"
      :rules="rules"
      :type="type"
    />
    <v-text-field
      v-else
      v-model="model"
      :id="name"
      variant="outlined"
      :rules="rules"
      :type="type"
      v-mask="mask"
    />
  </div>
</template>