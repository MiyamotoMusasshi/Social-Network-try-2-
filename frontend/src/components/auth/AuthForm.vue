<script setup lang="ts">
import iconUsername from "../../assets/imgs/icon_username.png";
import iconEmail from "../../assets/imgs/icon_email.png";
import iconPassword from "../../assets/imgs/icon_password.png";
import InputField from "./InputField.vue";

interface Props {
  action: string;
  isRegistration: boolean;
}

const props = defineProps<Props>();
</script>

<template>
  <form :action="props.action" method="POST" class="auth-form">
    <div class="auth-top-info">
      <img src="../../assets/imgs/icon.png" />
    </div>
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;
      "
    >
      <InputField
        name="username"
        type="text"
        placeholder="Username"
        :icon="iconUsername"
        :is-password="false"
      />
      <InputField
        name="email"
        type="email"
        placeholder="Email"
        :icon="iconEmail"
        :is-password="false"
      />
      <InputField
        name="password"
        type="password"
        placeholder="Password"
        :icon="iconPassword"
        :is-password="true"
      />
      <InputField
        name="retun-password"
        type="password"
        placeholder="Return Password"
        :icon="iconPassword"
        :is-password="true"
        v-if="props.isRegistration"
      />

      <button :class="isRegistration ? 'main-btn' : 'secondry-btn'">
        {{ isRegistration ? "Sign up" : "Sign in" }}
      </button>
    </div>
    <div
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 5%;
        gap: 10px;
      "
    >
      <span style="color: #808080; font-size: 18px">{{
        isRegistration ? "Already have an account?" : "Don't have an account?"
      }}</span>
      <a
        :href="isRegistration ? '/autorization' : '/registration'"
        style="text-decoration: none; font-size: 18px; color: purple"
        >{{ isRegistration ? "Sign in" : "Sign up" }}</a
      >
    </div>
  </form>
</template>
