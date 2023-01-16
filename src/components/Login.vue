<script setup>
import { ref } from "@vue/runtime-core";

const email = ref('');
const password = ref('');
const onSubmit = (e) => console.log(email.value);
</script>

<template>
    <h2>Login Vue</h2>

    <form action="#" @submit="onSubmit">
        <div class="mb-3 row">
            <div class="col-sm-10">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email: {{ email }}</label>
                <input v-model="email" type="text" class="form-control" id="staticEmail" placeholder="email@example.com">
            </div>
        </div>
        <div class="mb-3 row">
            <div class="col-sm-10">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password: {{ password }}</label>
                <input v-model="password" type="password" class="form-control" id="inputPassword">
            </div>
        </div>
        <button class="bton btn-primary">Submit</button>
    </form>
</template>