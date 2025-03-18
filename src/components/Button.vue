<script setup>
  defineProps({
    type: {
      type: String,
      default: 'button',
    },
    disabled: Boolean,
    classes: String,
    variant: {
      type: String,
      default: '',
    }
  });
</script>

<template>
  <v-btn :class="classes" :variant="variant" flat :type="type" :disabled="disabled">
    <slot></slot>
  </v-btn>
</template>