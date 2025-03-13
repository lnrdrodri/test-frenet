<script setup>
  defineProps({
    label: String,
    type: String,
    disabled: Boolean,
  });
</script>

<template>
  <v-btn class="bg-primary" flat :type="type" :disabled="disabled">
    <slot></slot>
  </v-btn>
</template>