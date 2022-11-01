<template>
  <h4>Thêm liên hệ mới</h4>
  <ContactForm :contact="contact" @submit:contact="createContact" />
  <p>{{ message }}</p>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      contact: {},
      message: "",
    };
  },
  methods: {
    async createContact() {
      try {
        await ContactService.create(this.contact);
        this.message = "Liên hệ được thêm thành công";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>