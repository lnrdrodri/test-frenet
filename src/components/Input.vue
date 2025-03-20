<script setup>
  import { useDisplay } from 'vuetify'

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

  const { mobile } = useDisplay()
</script>

<template>
  <div>
    <label class="text-body-2 text-md-body-1 text-no-wrap" :for="name">
      {{ label }}
    </label>
    <v-text-field
      v-if="mask == ''"
      v-model="model"
      :id="name"
      variant="outlined"
      :rules="rules"
      :type="type"
      :placeholder="placeholder"
      hide-details="auto"
      :density="mobile ? 'compact' : 'comfortable'"
    />
    <v-text-field
      v-else
      v-model="model"
      :id="name"
      variant="outlined"
      :rules="rules"
      :type="type"
      :placeholder="placeholder"
      hide-details="auto"
      :density="mobile ? 'compact' : 'comfortable'"
      v-mask="mask"
    />
  </div>
</template>