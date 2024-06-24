<template>
    <h1>Hello App!</h1>

    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>

    <nav>
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/about">Go to About</RouterLink>
    </nav>

    <router-view v-slot="{ Component }">
        <component :is="Component"></component>
    </router-view>

    <div>Footer</div>
</template>

<script setup></script>

<style lang="css" scoped></style>
