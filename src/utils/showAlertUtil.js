import Swal from "sweetalert2";
import router from "@/router/index.js";

export function showLoginAlert() {
    Swal.fire({
        title: '操作失败',
        text: '请先登录再进行操作',
        icon: 'warning',
        confirmButtonText: '确定'
    }).then((result) => {
        if (result.isConfirmed) {
            router.push('/user/login');
        }
    });
}

