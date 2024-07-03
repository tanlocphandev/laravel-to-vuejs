<script setup>

</script>

<template>

    <v-row>
        <v-col cols="12">
            <h1 class="text-center title">TS. HOÀNG VĂN HÀ</h1>
            <p class="text-center mb-3">Phó trưởng khoa Toán - tin học (Bộ Môn Xác Xuất Thống Kê)</p>
        </v-col>
    </v-row>
    <v-row class="content-personnel">
        <v-col cols="12" sm="4" md="4">
            <v-img src="/assets/about/tinhoc1.jpg" class="white--text" height="200px"></v-img>

        </v-col>
        <v-col cols="12" sm="8" md="8">
            <v-row>
                <v-col>
                    <div class="mb-3 h-50">
                        <h3>Văn phòng</h3>
                        <p>dsdsds</p>
                        <p>dsdsfs</p>
                    </div>
                    <div class="mb-3 h-50">
                        <h3>SĐT văn phòng</h3>
                        <p>dsdsds</p>
                    </div>
                </v-col>
                <v-col>
                    <div class="mb-3 h-50">
                        <h3>Email</h3>
                        <p>dsdsds</p>
                    </div>
                    <div class="mb-3 h-50">
                        <h3>Website cá nhân</h3>
                        <p>dsdsds</p>
                    </div>
                </v-col>
            </v-row>

        </v-col>
        <v-col class="pa-0">
            <v-card>
                <p class="text-justify pa-2">Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
                    trình bày và dàn trang phục
                    vụ cho in ấn. Lorem Ipsum đã được sử dụng như một văn bản chuẩn cho ngành công nghiệp in ấn từ
                    những năm 1500, khi một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản mẫu
                    văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi được áp dụng vào tin học văn
                    phòng, nội dung của nó vẫn không hề bị thay đổi. Nó đã được phổ biến trong những năm 1960 nhờ
                    việc bán những bản giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn</p>
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

.title {
    font-family: 'Arial', sans-serif;
    font-size: 32px;
    background: linear-gradient(45deg, #ff6b6b, #f06595, #cc5de8, #845ef7, #5c7cfa, #339af0, #22b8cf, #20c997, #51cf66, #94d82d, #fcc419, #ff922b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    animation: rainbow 3s infinite alternate;
}

@keyframes rainbow {
    0% {
        filter: hue-rotate(0deg);
    }

    100% {
        filter: hue-rotate(360deg);
    }
}
</style>
