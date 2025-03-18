<script setup>
  import Form from '@/components/Form.vue'
  import ThemeSwitch from '@/components/ThemeSwitch.vue'
  import Table from '@/components/Table.vue'
  import DialogHistory from '@/components/DialogHistory.vue'

  import { useForm } from '@/composables/useForm'

  const { apiData } = useForm();
</script>

<template>
  <div class="d-flex justify-end pa-4">
    <ThemeSwitch />
  </div>
  <div class="pa-4 w-xl-50 w-lg-75 mx-auto d-flex flex-column ga-8">
    <h1>Calculadora de fretes - Frenet</h1>
    <Form />
    <Table
      v-if="apiData != null"
      :columns="[
        {label: 'Transportadora', key: 'Carrier'},
        {label: 'Serviço', key: 'ServiceDescription'},
        {label: 'Prazo', key: 'DeliveryTime'},
        {label: 'Preço', key: 'OriginalShippingPrice'},
        {label: 'Preço Frenet', key: 'ShippingPrice'},
      ]"
      :items="apiData"
    />
    <DialogHistory />
  </div>
</template>