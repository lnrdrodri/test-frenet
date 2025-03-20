<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
  },
  size: {
    type: String,
    default: 'default',
  },
  disabled: Boolean,
  classes: String,
  loading: Boolean,
  prependIcon: String,
})
</script>

<template>
  <v-btn
    :class="classes"
    :type="type"
    :disabled="disabled"
    :loading="loading"
    :size="size"
    :prepend-icon="prependIcon"
    flat
  >
    <slot></slot>
  </v-btn>
</template>
