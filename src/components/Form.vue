<script setup>
  import { useForm } from '@/composables/useForm';
  import Input from '@/components/Input.vue';
  import Button from '@/components/Button.vue';

  const { form, valid, onSubmit, rules } = useForm();
</script>

<template>
  <v-form v-model="valid" validate-on="blur" @submit.prevent="onSubmit">
    <Input
      v-model="form.cep_origin"
      label="CEP de origem"
      id="cep_origin"
      :rules="[rules.isRequired, rules.isCEP]"
      mask="#####-###"
    />
    <Input
      v-model="form.cep_destination"
      label="CEP de destino"
      id="cep_destination"
      :rules="[rules.isRequired, rules.isCEP]"
      mask="#####-###"
    />
    <Input
      v-model="form.weight"
      label="Peso do produto (kg)"
      id="weight"
      :rules="[
        rules.isRequired,
        value => rules.isBetweenFloatValues(value, 0, 9999.999)
      ]"
      :mask="['####', '#,###', '##,###', '###,###', '####,###', '#.###,###']"
    />
    <Input
      v-model="form.width"
      label="Largura (cm)"
      id="width"
      :rules="[
        rules.isRequired,
        value => rules.isBetweenValues(value, 0, 1000)
      ]"
      mask="###"
    />
    <Input
      v-model="form.height"
      label="Altura (cm)"
      id="height"
      :rules="[
        rules.isRequired,
        value => rules.isBetweenValues(value, 0, 1000)
      ]"
      mask="###"
    />
    <Input
      v-model="form.length"
      label="Comprimento (cm)"
      id="length"
      :rules="[
        rules.isRequired,
        value => rules.isBetweenValues(value, 0, 1000)
      ]"
      mask="###"
    />
    <Input
      v-model="form.declared_value"
      label="Valor declarado (R$)"
      id="declared_value"
      :mask="['R$ ###', 'R$ #,##', 'R$ ##,##', 'R$ ###,##', 'R$ ####,##', 'R$ #.###,##', 'R$ ##.###,##', 'R$ ###.###,##']"
      :rules="[
        rules.isRequired,
        rules.isPositiveCurrency
      ]"
    />
    <!-- 
      TODO: TER UM LOADING AO CLICAR, PRA N FICAR FAZENDO VARIAS VEZES A MESMA REQUEST,
      SERIA LEGAL IMPLEMENTAR UM DEBOUNCE NESSE FORM TB, PRA NAO DISPARAR VARIAS VEZES EM SEQUENCIA,
      MESMO QUE JA TENHA FEITO A REQUEST ANTERIOR, AI FICARIA COM DUAS VALIDACOES, SO FAZ UMA NOVA
      REQUEST SE JA TERMINOU A ANTERIOR (LOADING) E SE TAMBEM N FEZ ESSA REQUEST A 5s(pensar melhor
      no tempo) ATRAS
    -->
    <Button
      type="submit"
    >
      Buscar
    </Button>
  </v-form>
</template>