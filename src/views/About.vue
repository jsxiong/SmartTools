<template>
    <!-- <van-field name="radio" label="输入框对齐方式">
        <template #input>
            <van-radio-group v-model="form.inputAlign" direction="horizontal">
                <van-radio name="left">左侧对齐</van-radio>
                <van-radio name="center">居中</van-radio>
                <van-radio name="right">右侧对齐</van-radio>
            </van-radio-group>
        </template>
    </van-field> -->

</template>

<script setup>
import { ref } from 'vue'
const form = ref({
    inputAlign: 'left',
})
</script>