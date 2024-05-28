<template>
    <van-watermark :content="config.watermarkText" :opacity=".5" v-if="config.displayWatermark && config.watermarkText" />
    <van-form :input-align="config.inputAlign">
        <van-field v-model="form.price" label="price" type="digit" placeholder="输入价格">
            <template #extra>￥</template>
        </van-field>
        <van-field v-model="purchaseTax" label="price" type="digit" readonly placeholder="根据价格自动计算">
            <template #extra>￥</template>
        </van-field>
        <van-field v-model="form.price" label="price" type="digit" placeholder="输入价格" />
        <van-field v-model="form.price" label="price" type="digit" placeholder="输入价格" />
        <van-field v-model="form.price" label="price" type="digit" placeholder="输入价格" />
    </van-form>
<!-- 
    <div class="info-wrap">
        <div>
            日期: {{ new Date().toLocaleDateString() }}
        </div>
        <div>
            签名: 
            <van-image v-if="config.signatureImg" width="60" height="20" fit="scale-down" :src="config.signatureImg"/>
        </div>
    </div> -->

</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const form = ref({
    price: ''
})
const config = reactive({})

const purchaseTax = computed(() => {
    if (!form.value.price) return ''
    return form.value.price * 0.113
})

onMounted(() => {
    console.log(useRoute().query)
    const pageCfg = localStorage.getItem('pageCfg')
    if (config) {
        const pageCfgObj = JSON.parse(pageCfg)
        for (let key in pageCfgObj) {
            config[key] = pageCfgObj[key]
        }
    }
})


</script>