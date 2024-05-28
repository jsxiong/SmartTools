<template>
    <van-watermark content="这是" :opacity=".4" />
    <van-cell-group inset>
        <van-field v-model="form.price" label="price" type="digit" placeholder="输入价格" input-align="right" />
        <van-field v-model="purchaseTax" label="price" type="digit" placeholder="根据价格自动计算" input-align="right" />
        <van-field v-model="form.price" label="price" type="digit" placeholder="输入价格" input-align="right" />
        <van-field v-model="form.price" label="price" type="digit" placeholder="输入价格" input-align="right" />
        <van-field v-model="form.price" label="price" type="digit" placeholder="输入价格" input-align="right" />

    </van-cell-group>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const form = ref({
    price: 0
})

const purchaseTax = computed(() => {
    if (!form.value.price) return ''
    return form.value.price * 0.1
})

onMounted(() => {
    console.log(useRoute().query)
})


</script>