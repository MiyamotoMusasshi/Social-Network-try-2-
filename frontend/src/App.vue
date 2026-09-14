<script setup lang="ts">
import "./assets/main.css";
</script>

<template>
  <div class="space-background">
    <div class="stars"></div>
    <div class="nebula nebula-1"></div>
    <div class="nebula nebula-2"></div>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>
