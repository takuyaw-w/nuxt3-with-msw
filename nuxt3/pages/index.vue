<template>
  <div>
    <template v-if="pending"> <p>loading...</p></template>
    <template v-else-if="error">
      <p>{{ error }}</p></template
    >
    <template v-else>
      <ul>
        <li v-for="user in data.users">{{ user.id }}: {{ user.name }}</li>
      </ul>
    </template>
  </div>
</template>

<script setup lang="ts">
const { data, pending, error } = useFetch("/users", {
  server: false,
});
</script>
