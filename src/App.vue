<script setup>
import Form from '@/components/Form.vue'
import ThemeSwitch from '@/components/ThemeSwitch.vue'
import Table from '@/components/Table.vue'
import DialogHistory from '@/components/DialogHistory.vue'
import Footer from '@/components/Footer.vue'

import { useAppTheme } from '@/composables/useAppTheme'

import { useLoadingStore } from '@/stores/loading'
import { useQuoteStore } from '@/stores/quote'

import formatters from '@/utils/formatters'
import { storeToRefs } from 'pinia'

const quoteStore = useQuoteStore()
const { quote } = storeToRefs(quoteStore)

const { isDark } = useAppTheme()
const loading = useLoadingStore()
</script>

<template>
  <div
    class="bg-pattern pb-8"
    :style="`background-image: url(/bg-logo-${isDark ? 'dark' : 'light'}.svg)`"
  >
    <div class="d-flex justify-end pa-4">
      <ThemeSwitch />
    </div>
    <div
      class="px-8 py-12 w-xl-50 w-lg-75 mx-2 mx-md-8 mx-lg-auto d-flex flex-column ga-8 bg-surface border border-text rounded-lg"
    >
      <img
        src="/logo.png"
        alt="Logo"
        :class="`mx-auto pa-2 mb-4 ${isDark ? '' : 'bg-text rounded-lg'}`"
      />
      <Form />
      <Table
        v-if="quote != null && loading.isLoading === false"
        :columns="[
          {
            label: 'Transportadora',
            key: 'Carrier',
          },
          {
            label: 'Serviço',
            key: 'ServiceDescription',
          },
          {
            label: 'Prazo',
            key: 'DeliveryTime',
          },
          {
            label: 'Preço',
            key: 'OriginalShippingPrice',
            formatter: formatters.currencyInReal,
          },
          {
            label: 'Preço Frenet',
            key: 'ShippingPrice',
            formatter: formatters.currencyInReal,
          },
        ]"
        :items="quote"
      />
      <DialogHistory />
    </div>
  </div>
  <Footer />
</template>
