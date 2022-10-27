<template>
  <div>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eligendi enim expedita libero nisi repellendus repudiandae tempore! Ab, exercitationem, soluta.
<!--    <li v-for="i in data" :key="i">-->
<!--      {{ i }}-->
<!--    </li>-->
<!--    <button @click="reFetch()">haha</button>-->
  </div>
</template>

<script lang="ts" setup>
import {useStompStore} from "@/stores/stomp-client";
import {useAuthStore} from "@/stores/auth.store";

const stompStore = useStompStore()
const authStore = useAuthStore()
authStore.loginFromHelper({});
// stompStore.init();
</script><z></z>

<style scoped>

</style>