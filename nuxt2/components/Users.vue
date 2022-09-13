<template>
  <div>
    <template v-if="isLoading">
      <p v-if="isLoading">loading...</p>
    </template>
    <template v-else>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  name: "Users",
  data: () => ({
    isLoading: false,
    users: [],
  }),
  async created() {
    this.isLoading = true;
    const data = await this.$axios.get("/users");
    this.users = data.data.users;
    this.isLoading = false;
  },
};
</script>
