<script setup lang="ts">
import iconUsername from "../../assets/imgs/icon_username.png";
import iconEmail from "../../assets/imgs/icon_email.png";
import iconPassword from "../../assets/imgs/icon_password.png";
import InputField from "./InputField.vue";

interface Props {
  action: string;
}

const props = defineProps<Props>();
</script>

<template>
  <form :action="props.action" method="POST" class="auth-form">
    <button class="secondry-btn">Sign up</button>
    <button class="main-btn">Sign up</button>
  </form>
</template>
