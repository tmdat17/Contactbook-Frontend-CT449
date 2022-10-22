<script>
export default {
    props: {
        contact: {type: Object, require: true},
    },
};
</script>

<template>
    <div>
        <div class="p-1">
            <strong>Tên:</strong>
            {{ Contact.name }}
        </div>
        <div class="p-1">
            <strong>E-mail:</strong>
            {{ Contact.email }}
        </div>
        <div class="p-1">
            <strong>Địa chỉ:</strong>
            {{ Contact.address }}
        </div>
        <div class="p-1">
            <strong>Điện thoại:</strong>
            {{ Contact.phone }}
        </div>
        <div class="p-1">
            <strong>Liên hệ yêu thích: &nbsp;</strong>
            <i 
                v-if="contact.favorite"
                class="fas fa-check"
            ></i>

            <i
                v-else
                class="fas fa-times"
            ></i>
        </div>
    </div>
</template>

