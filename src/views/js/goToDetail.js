import router from "@/router/index.js";

export async function goToDetail(dataSrc,id) {
    await router.push({ name: `itemDetail`,params:{id:id,src:dataSrc} });
}
