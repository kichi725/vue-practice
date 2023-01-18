<script setup>
import router from '../../router/index';

const routes = router.options.routes;
console.log(routes);
</script>

<template>
    <header class="bg-light">
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <img src="../../assets/vue.svg" alt="Vue logo" width="30" height="24" class="d-inline-block align-text-top">
                    vue router
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul v-for="route in routes" :key="route.name" class="navbar-nav">
                        <li class="nav-item">
                            <router-link :to="{ path: route.path }" class="nav-link">
                                {{ route.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
