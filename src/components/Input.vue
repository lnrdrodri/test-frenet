<script setup>
  const model = defineModel();
  
  const props = defineProps({
    name: String,
    label: String,
    rules: Array,
    placeholder: String,
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
      :placeholder="placeholder"
    />
    <v-text-field
      v-else
      v-model="model"
      :id="name"
      variant="outlined"
      :rules="rules"
      :type="type"
      :placeholder="placeholder"
      v-mask="mask"
    />
  </div>
</template>