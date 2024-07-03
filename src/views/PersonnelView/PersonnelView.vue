<script setup>

</script>

<template>

    <v-row>
        <v-col cols="12">
            <h1 class="text-center">Bộ môn Ứng dụng tin học</h1>
        </v-col>
    </v-row>
    <v-row class="content-personnel">
        <v-col cols="12" sm="6" md="6">
            <v-card>
                <v-card-subtitle class="content-title">Trưởng bộ môn</v-card-subtitle>
                <v-img src="/assets/about/tinhoc1.jpg" class="white--text" height="200px"></v-img>
                <v-card-title class="text-center">
                    PGS.TS Nguyễn Thanh Bình
                </v-card-title>
                <v-card-actions>
                    <router-link class="mx-auto" :to="{ name: 'person_details', params: { id: 1 } }"><v-btn
                            class="action-icon-btn">xem
                            thêm</v-btn>
                    </router-link>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="6">
            <v-card>
                <v-card-subtitle class="content-title">Phó trưởng bộ môn</v-card-subtitle>
                <v-img src="/assets/about/tinhoc1.jpg" class="white--text" height="200px"></v-img>
                <v-card-title class="text-center">ThS. Hà Văn Thảo</v-card-title>
                <v-card-actions>
                    <router-link class="mx-auto" :to="{ name: 'person_details', params: { id: 1 } }"><v-btn
                            class="action-icon-btn">xem
                            thêm</v-btn>
                    </router-link>

                </v-card-actions>
            </v-card>
        </v-col>

    </v-row>


</template>

<style lang="css" scoped>
.content-personnel {
    width: 100%;
    margin: auto;
}

.content-title {
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    margin: 10px 0;
    color: var(--primary);
}
</style>
