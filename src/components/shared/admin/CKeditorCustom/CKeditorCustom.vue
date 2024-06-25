<template>
    <div class="mx-5">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>

    </div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
    name: 'CKEditor',
    components: {
        ckeditor: CKEditor.component
    },
    data() {
        return {
            editor: ClassicEditor,
            editorData: `<h2>Giới thiệu</h2>
                  <p>Khoa Tin học Trường Đại học Sư phạm Huế được chính thức thành lập vào ngày 15 tháng 12 năm 1999 theo quyết định của Đại Học Huế số 398/QĐ-ĐHH-TCNS ngày 10 tháng 12 năm 1999 mà tiền thân là Bộ môn Tin học được thành lập theo quyết định số 09/QĐ-TC ngày 8 tháng 3 năm 1996 của Ban Giám hiệu trường ĐHSP Huế.</p>
                  <p>Trải qua hơn 20 năm xây dựng và phát triển, với nhiệm vụ Đào tạo giáo viên Tin học, đến nay Khoa Tin học đã lớn mạnh về nhiều mặt từ đội ngũ cán bộ giảng dạy đến qui mô đào tạo, nghiên cứu khoa học và chất lượng đào tạo được xã hội đánh giá cao.</p>
                  <p>Bước đầu thành lập, Bộ môn Tin học với 8 cán bộ, đến nay, Khoa Tin học có 17 giảng viên cơ hữu, 5 giảng viên sinh hoạt chuyên môn ở Khoa, 4 nghiên cứu viên. Với 6 tiến sĩ và 20 thạc sĩ. Năm học này Khoa đã có một NCS bảo vệ thành công luận án Tiến sĩ, một NCS tốt nghiệp Thạc sĩ. Giảng viên được đào tạo có hệ thống, có truyền thống nghiêm túc trong giảng dạy và nghiên cứu khoa học; có mối quan hệ, trao đổi chuyên môn với nhiều trung tâm nghiên cứu tin học và trung tâm nghiên cứu giáo dục ở trên toàn quốc.</p>
                  <p>Trong những năm gần đây, Khoa Tin học không ngừng nâng cao chất lượng dạy và học để góp phần cung cấp nguồn nhân lực chất lượng cao cho các cơ sở giáo dục và các công ty phần mềm. Với những cố gắng vượt bậc của đội ngũ giảng viên, nhân viên và các sinh viên, khoa Tin học đã có những bước phát triển mạnh mẽ. Khoa luôn xác định và tập trung vào 4 nhân tố chính là Cơ sở vật chất, chương trình đào tạo, chất lượng đội ngũ và thái độ sinh viên để nâng cao chất lượng đào tạo và điều chỉnh, xây dựng các giải pháp phát triển.</p>
                  <img src="your-image-url.jpg" alt="Khoa Tin học">
                  `,
            editorConfig: {
            }
        };
    },
};
</script>

<style scoped></style>