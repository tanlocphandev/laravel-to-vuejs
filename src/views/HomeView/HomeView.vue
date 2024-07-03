<script setup>
import PostCard from "@/components/shared/client/PostCard/PostCard.vue";
import CardItem from "@/components/shared/client/CardItem/CardItem.vue";
import useCategory from "@/hooks/useCategory";
import { fDate } from "@/utils";

const { data } = useCategory({ include_category: "true", include_news: "true" });
</script>

<template>
    <PostCard />

    <CardItem
        v-for="cardItem in data?.metadata"
        :key="cardItem.id"
        :links="cardItems1"
        :titleMain="cardItem.tentheloai"
        :news="cardItem.tintuc"
        :description="cardItem?.tintuc[0]?.mota"
        :title="cardItem?.tintuc[0]?.tieude"
        :imageUrl="cardItem?.tintuc[0]?.hinhdaidien"
        :datetime="fDate(cardItem?.tintuc[0]?.created_at, 'DD/MM/YYYY HH:mm:ss')"
        :id="cardItem?.tintuc[0]?.id"
        views="5"
        comments="0"
    />
</template>

<style lang="css" scoped></style>
