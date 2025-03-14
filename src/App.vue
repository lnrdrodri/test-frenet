<script setup>
  import Form from '@/components/Form.vue'
  import ThemeSwitch from '@/components/ThemeSwitch.vue'
  import History from '@/components/History.vue'
  import Table from './components/Table.vue';

  import { useForm } from '@/composables/useForm'
  const { apiData } = useForm();
</script>

<template>
  <div class="d-flex justify-end pa-4">
    <ThemeSwitch />
  </div>
  <div class="pa-4">
    <Form />
  </div>
  <div v-if="apiData != null" class="pa-4">
    <Table
      :columns="[
        {label: 'Transportadora', key: 'Carrier'},
        {label: 'Serviço', key: 'ServiceDescription'},
        {label: 'Prazo', key: 'DeliveryTime'},
        {label: 'Preço', key: 'OriginalShippingPrice'},
        {label: 'Preço Frenet', key: 'ShippingPrice'},
      ]"
      :items="apiData"
    />
  </div>
  <div class="pa-4">
    <History />
  </div>
</template>