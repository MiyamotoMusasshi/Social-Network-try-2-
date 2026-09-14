<script setup lang="ts">
interface Props {
  action: string;
}

const props = defineProps<Props>();
</script>

<template>
  <form action="props.action" method="POST" class="auth-form"></form>
</template>
