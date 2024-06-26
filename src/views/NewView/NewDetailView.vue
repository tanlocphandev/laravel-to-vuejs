<script setup>
import { ROUTE_PATHS } from '@/constants/route.constant';

import { ref } from 'vue'

const news = ref([
    { index: 1, content: 'Cổng trại', firstPrize: 'Khoa GDTH', secondPrize: 'Khoa GDCT', thirdPrize: 'Khoa Hóa học' },
    { index: 2, content: 'Trại chính', firstPrize: 'Khoa GDCT', secondPrize: 'Khoa Hóa học', thirdPrize: 'Khoa Ngữ văn' },
    { index: 3, content: 'Gian hàng', firstPrize: 'Khoa Hóa học', secondPrize: 'Khoa Ngữ văn', thirdPrize: 'Khoa GDTH' },
    { index: 4, content: 'Dân vũ', firstPrize: 'Khoa GDTH', secondPrize: 'Khoa Ngữ văn', thirdPrize: 'Khoa TLGD' },
    { index: 5, content: 'Hóa trang', firstPrize: 'Khoa GDMN', secondPrize: 'THPT Thuận Hóa', thirdPrize: 'Khoa Hóa học' },
    { index: 6, content: 'Kéo co nữ', firstPrize: 'Khoa GDMN', secondPrize: 'THPT Thuận Hóa', thirdPrize: 'Khoa GDCT' },
    { index: 7, content: 'Trò chơi lớn', firstPrize: 'Khoa GDMN', secondPrize: 'Khoa TLGD', thirdPrize: 'Khoa Sinh học' },
])

const newComment = ref('');
const comments = ref([
    { id: 1, user: 'Sinh Viên1', date: '2024-06-24 15:30:05', text: 'Hello1', replies: 0 },
    { id: 2, user: 'Sinh Viên1', date: '2024-06-24 15:30:05', text: 'Tuyệt vời, sư phạm Huế', replies: 1 },
]);

const addComment = () => {
    if (newComment.value.trim() !== '') {
        comments.value.push({
            id: Date.now(),
            user: 'Sinh Viên1',
            date: new Date().toLocaleString(),
            text: newComment.value,
            replies: 0,
        });
        newComment.value = '';
    }
};

const editComment = (comment) => {
    // Function to edit a comment
    newComment.value = comment.text;
    deleteComment(comment.id);
};

const deleteComment = (id) => {
    comments.value = comments.value.filter(comment => comment.id !== id);
};

</script>

<template>
    <div class="news-detail">
        <div class="news-title mb-2 color-primary text-shadow">
            <h1>Tưng bừng Hội trại nghiệp vụ Trường Đại học Sư phạm, Đại học Huế</h1>
        </div>

        <div class="news-info">
            <div class="mr-3 news-info-item">
                <v-icon class="color-primary mr-1">mdi-account</v-icon>
                Huỳnh Văn Thùy
            </div>
            <div class="mr-3 news-info-item">
                <v-icon class="color-primary mr-1">mdi-clock</v-icon>
                2019-05-05 02:12:30
            </div>
            <div class="mr-3 news-info-item">
                <v-icon class="color-primary mr-1">mdi-tag-multiple</v-icon>
                <router-link to="/news" class="color-primary" style="text-decoration: none">Tin tức</router-link>
            </div>

            <iframe
                src="https://www.facebook.com/plugins/share_button.php?href=http://127.0.0.1:8000/tintuc/11&amp;layout=button_count&amp;size=small&amp;mobile_iframe=true&amp;width=78&amp;height=20&amp;appId"
                width="78" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                allowtransparency="true" allow="encrypted-media"></iframe>
        </div>

        <div class="news-content1">
            <strong>Hòa chung không khí tuổi trẻ cả nước chào mừng 88 năm ngày Thành lập Đoàn Thanh niên Cộng sản Hồ Chí
                Minh, 44 năm giải phóng quê hương Thừa Thiên Huế và Tháng thanh niên năm 2019, trong hai ngày
                23-24/3/2019, tại Cơ sở 2 đường Võ Văn Kiệt, Trường Đại học Sư phạm, Đại học Huế tổ chức Hội trại nghiệp
                vụ với chủ đề “Tuổi trẻ Trường Đại học Sư phạm, Đại học Huế tiếp lửa truyền thống, dựng xây tương
                lai”.</strong>

        </div>

        <div class="news-content2">
            <div class="mb-2">
                <strong>Tưng bừng Hội trại nghiệp vụ Trường Đại học Sư phạm, Đại học Huế</strong>
            </div>
            <div>
                <div>
                    <p class="ml-4" style="text-align: justify;">Hòa chung không khí tuổi trẻ cả nước chào mừng 88 năm
                        ngày Thành lập Đoàn Thanh niên
                        Cộng sản Hồ
                        Chí Minh, 44 năm giải phóng quê hương Thừa Thiên Huế và Tháng thanh niên năm 2019, trong hai
                        ngày 23-24/3/2019, tại Cơ sở 2 đường Võ Văn Kiệt, Trường Đại học Sư phạm, Đại học Huế tổ chức
                        Hội trại nghiệp vụ với chủ đề “Tuổi trẻ Trường Đại học Sư phạm, Đại học Huế tiếp lửa truyền
                        thống, dựng xây tương lai”.</p>

                    <p><img style="width: 512px;"
                            src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083144_img_0420.jpg"></p>


                    <div>
                        <div>
                            <img style="width: 512px;"
                                src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083145_img_0435.jpg">
                        </div>
                        <div>
                            <em>Đồng diễn dân vũ với sự tham gia của hàng trăm đoàn viên - sinh viên tạo không khi sôi
                                động của Hội trại.</em>
                        </div>
                    </div>


                    <p class="ml-4" style="text-align: justify;">Hội trại thu hút đông đảo đoàn viên - sinh viên và học
                        sinh Trường THPT Thuận Hóa tham gia, với
                        nhiều hoạt động ý nghĩa: Hội thi trang trí trại và gian hàng; trò chơi lớn “Tuổi trẻ Sư
                        phạm Huế với hành trình giải phóng quê hương”; kéo co nam nữ, dân vũ - vũ khúc thanh niên “Sẻ
                        chia từng khoảnh khắc”; gala văn nghệ Giai điệu tháng 3 và hội thi Nghiệp vụ cán bộ Đoàn (ngày
                        17/3).</p>

                    <p class="ml-4" style="text-align: justify;">Ở mỗi phần thi thể hiện sự năng động, sáng tạo và tài
                        năng của đoàn viên - sinh viên Nhà trường.
                        Qua đó góp phần rèn luyện kỹ năng mềm, kỹ năng hoạt động Đoàn và các bộ môn hoạt động thanh niên
                        cho đoàn viên - sinh viên và học sinh Trường.</p>

                    <p>Kết thúc Hội trại, Ban Tổ chức trao Giải toàn đoàn cho các Liên Chi đoàn: Khoa Hóa học – Giải
                        Nhất; Khoa Giáo dục Mầm non và Giáo dục Chính trị - Giải Nhì; Khoa Giáo dục Tiểu học, Khoa
                        Toán học và Trường THPT Thuận Hóa - Giải Ba.</p>

                    <p class="mt-5 mb-3">Chi tiết Giải:</p>

                    <v-table class="elevation-1">
                        <thead class="table-header">
                            <tr>
                                <th class="text-left">
                                    STT
                                </th>
                                <th class=" text-left">
                                    Nội dung
                                </th>
                                <th class=" text-left">
                                    Giải Nhất
                                </th>
                                <th class=" text-left">
                                    Giải Nhì
                                </th>
                                <th class=" text-left">
                                    Giải Ba
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="(item, index) in news" :key="index">
                                <td>{{ item.index }}</td>
                                <td>{{ item.content }}</td>
                                <td>{{ item.firstPrize }}</td>
                                <td>{{ item.secondPrize }}</td>
                                <td>{{ item.thirdPrize }}</td>
                            </tr>
                        </tbody>
                    </v-table>

                    <div class="mt-5">
                        <div>
                            <img style="width: 512px;"
                                src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083125_30.jpg">
                        </div>
                        <div>
                            <em>PGS.TS. Nguyễn Văn Thuận (phải ảnh) và PGS.TS. Nguyến Đình Luyện (trái ảnh) - Phó Hiệu
                                trưởng Nhà trường trao Giải Nhất, Giải Nhì toàn đoàn cho các Liên Chi đoàn.</em>
                        </div>
                    </div>



                    <div>
                        <div>
                            <img style="width: 512px;"
                                src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083125_31.jpg">
                        </div>
                        <div>
                            <em>Đ/c Nguyến Mạnh Quyền - Phó Bí thư Đoàn trường (phải ảnh) trao Giải Ba toàn đoàn cho
                                các Liên Chi đoàn.</em>
                        </div>
                    </div>


                    <p>
                        <img style="width: 512px;"
                            src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083145_img_0449.jpg">
                    </p>

                    <p>
                        <img style="width: 512px;"
                            src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083146_img_0454.jpg">
                    </p>

                    <p>
                        <img style="width: 512px;"
                            src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083147_img_0472.jpg">
                    </p>


                    <div>
                        <div>
                            <img style="width: 512px;"
                                src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083147_img_0474.jpg">
                        </div>
                        <div>
                            <em>Dân vũ - vũ khúc thanh niên “Sẻ chia từng khoảnh khắc” thể hiện sự sáng tạo và năng
                                động của học sinh, sinh viên Sư phạm Huế.</em>
                        </div>
                    </div>


                    <p>
                        <img style="width: 512px;"
                            src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083141_img_0404.jpg">
                    </p>

                    <p>
                        <img style="width: 512px;"
                            src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083139_img_0395.jpg">
                    </p>

                    <p>
                        <img style="width: 512px;"
                            src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083140_img_0399.jpg">
                    </p>


                    <div>
                        <div>
                            <img style="width: 512px;"
                                src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083142_img_0406.jpg">
                        </div>
                        <div>
                            <em>Không gian ngập tràn sắc màu tuổi trẻ với những cổng trại và gian hàng được trang trí
                                bắt mắt.</em>
                        </div>
                    </div>


                    <p>
                        <img style="width: 512px;" src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083115_4.jpg">
                    </p>


                    <div>
                        <div>
                            <img style="width: 512px;"
                                src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083114_2.jpg">
                        </div>
                        <div>
                            <em>Các Liên Chi đoàn hào hứng tham gia trò chơi kéo co.</em>
                        </div>
                    </div>



                    <p>
                        <img style="width: 512px;" src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083116_6.jpg">
                    </p>

                    <p>
                        <img style="width: 512px;"
                            src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083120_19.jpg">
                    </p>

                    <p>
                        <img style="width: 512px;"
                            src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083118_13.jpg">
                    </p>

                    <p>
                        <img style="width: 512px;"
                            src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083120_21.jpg">
                    </p>


                    <div>
                        <div>
                            <img style="width: 512px;"
                                src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083123_25.jpg">
                        </div>
                        <div>
                            <em>Đêm Gala "Giai điệu tháng 3" là điểm nhấn của Hội trại khi các tài năng sinh viên được
                                thể hiện qua các tiết mục nhảy hiện đại, đơn ca, tốp ca và trình diễn thời trang.</em>
                        </div>
                    </div>


                    <p>
                        <img style="width: 512px;"
                            src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083131_44.jpg">
                    </p>


                    <div>
                        <div>
                            <img style="width: 512px;"
                                src="http://www.dhsphue.edu.vn/media/db_tintuc/20190325083130_43.jpg">
                        </div>
                        <div>
                            <em>Ngọn lửa thanh niên cháy rực trong đêm lửa trại.</em>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="comment py-4">
            <v-card>
                <h2 class="pl-4 pt-4">{{ comments.length }} bình luận</h2>
                <div class="pa-4">
                    <v-textarea v-model="newComment" label="Viết bình luận..." auto-grow outlined></v-textarea>
                    <v-btn style="float:right" @click="addComment" class="mt-3" color="primary">Gửi bình luận</v-btn>
                </div>

                <v-list class="my-5 comment-list">
                    <v-list-item v-for="comment in comments" :key="comment.id" class="comment-item">
                        <div class="d-flex align-center">
                            <v-avatar class="mr-4">
                                <v-img src="/assets/avatar.jpg"></v-img>
                            </v-avatar>
                            <div class="comment-content">
                                <div>
                                    <v-list-item-title>
                                        <strong>{{ comment.user }}</strong>
                                        <small class="ml-4">{{ comment.date }}</small>
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        <p>{{ comment.text }}</p>
                                        <v-icon small color="green">mdi-comment</v-icon>
                                        <span>{{ comment.replies }}</span>
                                    </v-list-item-subtitle>
                                </div>
                                <div>
                                    <v-btn class="action-icon-btn mr-2" color="primary" @click="editComment(comment)">
                                        <v-icon class="mr-2">mdi-pencil-outline</v-icon>
                                        Sửa
                                    </v-btn>
                                    <v-btn class="action-icon-btn mr-2" @click="deleteComment(comment.id)">
                                        <v-icon class="mr-2">mdi-delete-outline</v-icon>
                                        Xóa
                                    </v-btn>
                                </div>
                            </div>
                        </div>
                    </v-list-item>
                </v-list>
            </v-card>

        </div>
    </div>
</template>

<style lang="css" scoped>
.news-detail {
    font-family: Lato;
    padding: 20px;
}

.news-info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.news-info-item {
    display: flex;
    align-items: center;
}

.news-content1 {
    margin-bottom: 20px;
    text-align: justify;
    font-style: italic;
}

.v-toolbar {
    background-color: #f5f5f5;
}

.v-chip {
    margin: 2px;
}

/* comment */

.comment-list {
    width: 100%;
    padding: 20px;

}

.comment-item {
    margin-top: 15px;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--white);
    box-shadow: #0006 0px 4px 8px 0px;
}

.comment-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
</style>
