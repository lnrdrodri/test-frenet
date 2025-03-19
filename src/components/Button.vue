<script setup>
  defineProps({
    type: {
      type: String,
      default: 'button',
    },
    disabled: Boolean,
    classes: String,
    loading: Boolean,
    size: {
      type: String,
      default: 'default',
    },
  });
</script>

<template>
  <v-btn
    :class="classes"
    :type="type"
    :disabled="disabled"
    :loading="loading"
    :size="size"
    flat
  >
    <slot></slot>
  </v-btn>
</template>