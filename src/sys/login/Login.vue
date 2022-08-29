<script setup>
import {reactive} from "vue"
const form= reactive({
    username:'',
    password:''
})
const onSubmit=()=>{
    console.log('提交数据',form)
}
</script>
<template>
    <div class="login_ct">
        <div class="login_form">
            <h5>XXX登录系统</h5>
            <el-form :model="form" label-width="120px">
                <el-form-item label="用户名">
                    <el-input v-model="form.username" />
                </el-form-item>
                 <el-form-item label="密码">
                    <el-input v-model="form.password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<style scoped lang="scss">
.login {
    margin: 0;
    padding: 0;
    border: 1px solid red;
}
</style>
