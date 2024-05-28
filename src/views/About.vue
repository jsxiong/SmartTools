<template>
    <van-nav-bar title="页面配置" left-text="返回" right-text="恢复默认配置" left-arrow @click-left="onClickLeft"
        @click-right="onClickRight" />
    <van-form>
        <van-field name="radio" label="输入框位置">
            <template #input>
                <van-radio-group v-model="form.inputAlign" direction="horizontal">
                    <van-radio name="left">左侧对齐</van-radio>
                    <van-radio name="center">居中</van-radio>
                    <van-radio name="right">右侧对齐</van-radio>
                </van-radio-group>
            </template>
        </van-field>
        <van-field label="展示水印">
            <template #input>
                <van-switch size="16px" v-model="form.displayWatermark" />
            </template>
        </van-field>
        <van-field v-if="form.displayWatermark" v-model="form.watermarkText" label="水印内容" placeholder="请输入水印内容" />
        <van-field label="签名">
            <template #input>
                <van-image v-if="form.signatureImg" :src="form.signatureImg" @click="showSignaturePopup = true" />
                <div v-else style="color: #999;" @click="showSignaturePopup = true">点击签名</div>
            </template>
        </van-field>

        <van-popup v-model:show="showSignaturePopup" position="bottom" closeable :style="{ height: '100%' }">
            <div style="text-align: center;padding: 20px;font-size: 18px;">手写签名</div>
            <van-signature @submit="onSubmitSignature" />
        </van-popup>

    </van-form>
</template>

<script setup>
import { reactive, watch, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
let form = reactive({
    inputAlign: 'right',
    displayWatermark: true,
    watermarkText: '',
    signatureImg: ''
})
const showSignaturePopup = ref(false)

watch(form, (newVal) => {
    localStorage.setItem('pageCfg', JSON.stringify(newVal))
}, {
    deep: true
})

const onSubmitSignature = data => {
    form.signatureImg = data.image
    showSignaturePopup.value = false
}

const setForm = () => {
    const localPageCfg = localStorage.getItem('pageCfg')
    if (!localPageCfg) return
    const localPageCfgObj = JSON.parse(localPageCfg)
    for (let key in form) {
        if (key in localPageCfgObj) {
            form[key] = localPageCfgObj[key]
        }
    }
}

function onClickLeft() {
    router.push('/')
}

function onClickRight () {
    localStorage.removeItem('pageCfg')
    window.location.reload()
}
onMounted(() => {
    setForm()
})

</script>

<style>
:root:root {
    --van-signature-content-height: 83vh;
}
</style>