<template>
    <div id="main">
        <nav class="main-nav">
            <router-link :to="{ name: 'index' }">Go to Index</router-link>
            <router-link :to="{ name: 'login' }">Go to Login</router-link>
        </nav>

        <main class="main-content">
            <transition name="slide">
                <router-view></router-view>
            </transition>
        </main>
    </div>
</template>
<script>
    export default {

    }
</script>
