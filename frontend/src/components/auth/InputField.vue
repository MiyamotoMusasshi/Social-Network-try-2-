<script setup lang="ts">
import iconShowPassword from "../../assets/imgs/icon_show_password.png";
import iconHidePassword from "../../assets/imgs/icon_hide_password.png";
import { ref } from "vue";

const isHide = ref(true);

interface Props {
  name: string;
  type: string;
  placeholder: string;
  icon: string;
  isPassword: boolean;
}
const props = defineProps<Props>();

function hideToggle() {
  isHide.value = !isHide.value;
}
</script>

<template>
  <label :for="props.name" class="auth-input-field">
    <img :src="props.icon" />
    <input
      :type="props.isPassword ? (isHide ? 'password' : 'text') : props.type"
      :placeholder="props.placeholder"
      :name="props.name"
    />
    <img
      :src="isHide ? iconHidePassword : iconShowPassword"
      style="cursor: pointer"
      @click="hideToggle"
      v-if="props.isPassword"
    />
  </label>
</template>
