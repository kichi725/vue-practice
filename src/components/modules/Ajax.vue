<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import axios from "axios";
import SidebarLeft from "@/pages/SidebarLeft.vue";
import SidebarRight from "../pages/SidebarRight.vue";

const list = ref([]);
// const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m';

// onMounted(() => axios.get(url).then((response) => {
//         console.log(response);
//     }));
</script>

<template>
    <h2>axios</h2>

    <!-- <sidebar-left></sidebar-left>
    <SidebarRight /> -->
</template>