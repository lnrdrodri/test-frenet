<script setup>
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

import { useDialogHistoryStore } from '@/stores/dialogHistory'
import { useLoadingStore } from '@/stores/loading'
import { useHistoryStore } from '@/stores/history'
import { useQuoteStore } from '@/stores/quote'

import { storeToRefs } from 'pinia'

const quoteStore = useQuoteStore()
const { form, valid } = storeToRefs(quoteStore)
const { onSubmit, rules } = quoteStore

const historyStore = useHistoryStore()
const { history } = storeToRefs(historyStore)

const historyDialog = useDialogHistoryStore()
const loading = useLoadingStore()
</script>

<template>
  <v-form v-model="valid" validate-on="blur" @submit.prevent="onSubmit">
    <v-row>
      <v-col cols="6" md="6">
        <Input
          v-model="form.cep_origin"
          label="Origem"
          id="cep_origin"
          :rules="[rules.isRequired, rules.isCEP]"
          mask="#####-###"
          placeholder="Digite o CEP de origem"
        />
      </v-col>
      <v-col cols="6" md="6">
        <Input
          v-model="form.cep_destination"
          label="Destino"
          id="cep_destination"
          :rules="[rules.isRequired, rules.isCEP]"
          mask="#####-###"
          placeholder="Digite o CEP de destino"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="">
        <Input
          v-model="form.weight"
          label="Peso do produto (kg)"
          id="weight"
          :rules="[
            rules.isRequired,
            (value) => rules.isBetweenFloatValues(value, 0, 9999.999),
          ]"
          :mask="[
            '####',
            '#,###',
            '##,###',
            '###,###',
            '####,###',
            '#.###,###',
          ]"
        />
      </v-col>
      <v-col cols="12" md="">
        <Input
          v-model="form.width"
          label="Largura (cm)"
          id="width"
          :rules="[
            rules.isRequired,
            (value) => rules.isBetweenValues(value, 0, 1000),
          ]"
          mask="###"
        />
      </v-col>
      <v-col cols="12" md="">
        <Input
          v-model="form.height"
          label="Altura (cm)"
          id="height"
          :rules="[
            rules.isRequired,
            (value) => rules.isBetweenValues(value, 0, 1000),
          ]"
          mask="###"
        />
      </v-col>
      <v-col cols="12" md="">
        <Input
          v-model="form.length"
          label="Comprimento (cm)"
          id="length"
          :rules="[
            rules.isRequired,
            (value) => rules.isBetweenValues(value, 0, 1000),
          ]"
          mask="###"
        />
      </v-col>
      <v-col>
        <Input
          v-model="form.declared_value"
          label="Valor declarado (R$)"
          id="declared_value"
          :mask="[
            'R$ ###',
            'R$ #,##',
            'R$ ##,##',
            'R$ ###,##',
            'R$ ####,##',
            'R$ #.###,##',
            'R$ ##.###,##',
            'R$ ###.###,##',
          ]"
          :rules="[rules.isRequired, rules.isPositiveCurrency]"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class="d-flex justify-center flex-column-reverse flex-md-row ga-4 pt-8"
      >
        <Button
          v-if="history.length > 0"
          prependIcon="mdi-history"
          classes="bg-secondary"
          @click="historyDialog.open"
        >
          Ver histórico
        </Button>
        <Button
          prependIcon="mdi-truck-fast"
          classes="bg-primary"
          type="submit"
          :loading="loading.isLoading"
        >
          Calcular frete
        </Button>
      </v-col>
    </v-row>
  </v-form>
</template>
