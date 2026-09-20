<script setup lang="ts">
import AuthForm from "@/components/auth/AuthForm.vue";
import "../assets/styles/auth.css";
</script>

<template>
  <AuthForm
    action="http://localhost:3000/registration"
    :is-registration="true"
  />
</template>
