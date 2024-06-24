<template>
    <div>Header</div>

    <router-view v-slot="{ Component }">
        <component :is="Component"></component>
    </router-view>

    <div>Footer</div>
</template>

<script setup></script>

<style lang="css" scoped></style>
