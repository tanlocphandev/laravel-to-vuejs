<script setup>
import MainTop from '@/components/shared/admin/MainTop';
import Search from '@/components/ui/Search';
import { ref } from 'vue';

const isChecked = ref(false);


const posts = ref([
    {
        id: 1,
        title: 'Hội thi “Tìm hiểu Chương trình Giáo dục phổ thông mới cấp Tiểu học”',
        des: 'Chương trình Giáo dục phổ thông tổng thể (2017) và Chương trình giáo dục phổ thông các môn học (Ban hành kèm theo Thông tư số 32/2018/TT-BGDĐT ngày 26 tháng 12 năm 2018 của Bộ trưởng Bộ GD&ĐT) đã đặt ra những cơ hội và thách thức cho hoạt động đào tạo ở các trường đại học sư phạm, các trường phổ thông trong cả nước. Trước nhiệm vụ phát triển năng lực sư phạm của giáo viên trong bối cảnh mới, Trường Đại học Sư phạm, Đại học Huế đã khuyến khích các đơn vị tổ chức các hoạt động giúp sinh viên tìm hiểu về Chương trình giáo dục phổ thông mới.',
        img: '/assets/new/1556363043tintuc2.jpg',
        feature: 1,
        view: 1
    },

    {
        id: 2,
        title: 'Hội thi “Tìm hiểu Chương trình Giáo dực phở thông không cấp Tiểu học”',
        des: 'Chương trình Giáo dục phổ thông tổng thể (2017) và Chương trình giáo dục phổ thông các môn học (Ban hành kèm theo Thông tư số 32/2018/TT-BGDĐT ngày 26 tháng 12 năm 2018 của Bộ trưởng Bộ GD&ĐT) đã đặt ra những cơ hội và thách thức cho hoạt động đào tạo ở các trường đại học sư phạm, các trường phổ thông trong cả nước. Trước nhiệm vụ phát triển năng lực sư phạm của giáo viên trong bối cảnh mới, Trường Đại học Sư phạm, Đại học Huế đã khuyến khích các đơn vị tổ chức các hoạt động giúp sinh viên tìm hiểu về Chương trình giáo dục phổ thông mới.',
        img: '/assets/new/1556363186tintuc3.jpg',
        feature: 1,
        view: 2
    },
    {
        id: 2,
        title: 'Hội thi “Tìm hiểu Chương trình Giáo dực phở thông không cấp Tiểu học”',
        des: 'Chương trình Giáo dục phổ thông tổng thể (2017) và Chương trình giáo dục phổ thông các môn học (Ban hành kèm theo Thông tư số 32/2018/TT-BGDĐT ngày 26 tháng 12 năm 2018 của Bộ trưởng Bộ GD&ĐT) đã đặt ra những cơ hội và thách thức cho hoạt động đào tạo ở các trường đại học sư phạm, các trường phổ thông trong cả nước. Trước nhiệm vụ phát triển năng lực sư phạm của giáo viên trong bối cảnh mới, Trường Đại học Sư phạm, Đại học Huế đã khuyến khích các đơn vị tổ chức các hoạt động giúp sinh viên tìm hiểu về Chương trình giáo dục phổ thông mới.',
        img: '/assets/new/1556363474avatar.jpg',
        feature: 1,
        view: 2
    },
    {
        id: 2,
        title: 'Hội thi “Tìm hiểu Chương trình Giáo dực phở thông không cấp Tiểu học”',
        des: 'Chương trình Giáo dục phổ thông tổng thể (2017) và Chương trình giáo dục phổ thông các môn học (Ban hành kèm theo Thông tư số 32/2018/TT-BGDĐT ngày 26 tháng 12 năm 2018 của Bộ trưởng Bộ GD&ĐT) đã đặt ra những cơ hội và thách thức cho hoạt động đào tạo ở các trường đại học sư phạm, các trường phổ thông trong cả nước. Trước nhiệm vụ phát triển năng lực sư phạm của giáo viên trong bối cảnh mới, Trường Đại học Sư phạm, Đại học Huế đã khuyến khích các đơn vị tổ chức các hoạt động giúp sinh viên tìm hiểu về Chương trình giáo dục phổ thông mới.',
        img: '/assets/new/1556997044hinh1.jpg',
        feature: 1,
        view: 4
    },
    {
        id: 2,
        title: 'Hội thi “Tìm hiểu Chương trình Giáo dực phở thông không cấp Tiểu học”',
        des: 'Chương trình Giáo dục phổ thông tổng thể (2017) và Chương trình giáo dục phổ thông các môn học (Ban hành kèm theo Thông tư số 32/2018/TT-BGDĐT ngày 26 tháng 12 năm 2018 của Bộ trưởng Bộ GD&ĐT) đã đặt ra những cơ hội và thách thức cho hoạt động đào tạo ở các trường đại học sư phạm, các trường phổ thông trong cả nước. Trước nhiệm vụ phát triển năng lực sư phạm của giáo viên trong bối cảnh mới, Trường Đại học Sư phạm, Đại học Huế đã khuyến khích các đơn vị tổ chức các hoạt động giúp sinh viên tìm hiểu về Chương trình giáo dục phổ thông mới.',
        img: '/assets/new/1556997150hinh2.jpg',
        feature: 1,
        view: 1
    },

]);
</script>

<template>
    <MainTop title="Danh sách bài viết" sub="Quản lí bài viết" icon="mdi-pencil-box-outline" parent="Tin tức" />

    <v-card class="mx-30 pa-30">
        <div class="d-flex justify-space-between mb-5">
            <Search placeholder="Tìm kiếm tên tài khoản..." width="300px" height="45px" widthIcon="54px" />
            <v-btn color="success" prepend-icon="mdi-plus-circle-outline" class="action-icon-btn" @click="addNew">Thêm
                mới</v-btn>
        </div>

        <v-data-table :headers="headers" :items="desserts" item-key="name">

            <thead class="table-header">
                <tr>
                    <th class="text-left">
                        STT
                    </th>
                    <th class=" text-left" style="width: 20%;">
                        Tiêu đề
                    </th>
                    <th class=" text-left" style="width: 40%;">
                        Mô tả
                    </th>
                    <th class=" text-left" style="width: 15%;">
                        Hình ảnh
                    </th>
                    <th class=" text-left">
                        Nổi bật
                    </th>
                    <th class=" text-left">
                        Lượt xem
                    </th>
                    <th class="text-center">
                        Hành động
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in posts" :key="index">
                    <td>{{ item.id }}</td>
                    <td>{{ item.title }}</td>
                    <td>
                        <div class="post-des">
                            <p>{{ item.des }}</p>
                        </div>
                    </td>
                    <td>
                        <div class="post-img">
                            <v-img :src="item.img">
                            </v-img>
                        </div>
                    </td>
                    <td>
                        <div>
                            <v-checkbox v-model="isChecked">{{ isChecked ? 'Mở' : 'Tắt' }}</v-checkbox>
                        </div>
                    </td>
                    <td>{{ item.view }}</td>
                    <td class="action-btn">
                        <v-btn class="action-icon-btn mb-2" color="success">
                            <v-icon class="mr-2">mdi-eye</v-icon>
                            Xem
                        </v-btn>
                        <v-btn class="action-icon-btn mb-2" color="primary">
                            <v-icon class="mr-2">mdi-pencil-outline</v-icon>
                            Sửa
                        </v-btn>
                        <v-btn class="action-icon-btn ">
                            <v-icon class="mr-2">mdi-delete-outline</v-icon>
                            Xóa
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </v-data-table>
    </v-card>
</template>

<style lang="css" scoped>
.custom-thead tr th {
    font-size: 1.2em;
    font-weight: bold;
    border-top: 2px solid #000;


}

thead.table-header {
    font-size: 18px !important;
}

.post-des {
    height: 150px;
    overflow: hidden;
}

.post-des p {
    margin-top: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 20px;
    -webkit-line-clamp: 5;
    height: 100px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}

.post-img {
    width: 120px;
    height: 90px;
    object-fit: cover;
    border: 1px solid var(--gray);
    padding: 5px;
    border-radius: 4px;
}
</style>