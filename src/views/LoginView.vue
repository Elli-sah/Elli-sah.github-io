<script>
  import SignInOut from '../components/SignInOut.vue';

  export default {
    data() {
      return { name: '', password: '', hasLoggedIn: false };
    },

    computed: {
      x() {
        return this.password.length;
      },
    },
    watch: {
      name(name) {
        console.log(name);
      },
      password(password) {
        console.log(password);
      },
    },

    components: {
      SignInOut,
    },
    methods: {
      onSignIn(msg) {
        msg.preventDefault();
        this.hasLoggedIn = true;
      },
      onSignOut() {
        this.hasLoggedIn = false;
      },
    },
  };
</script>

<template>
  <div id="loginContainer" v-if="!hasLoggedIn">
    <form @submit="onSignIn">
      <input v-model="name" placeholder="Email.." />
      <input v-model="password" type="password" placeholder="Password.." />
      <input
        :disabled="name.length === 0 || password.length === 0"
        class="btn btn-secondary p3"
        type="submit"
        value="Sign in"
      />
    </form>
  </div>
  <div id="loginSuccess" v-if="hasLoggedIn">
    <SignInOut @sign-out="onSignOut" :user="name" />
  </div>
  <p>Du har skrivit in {{ x }} tecken.</p>
</template>

<style scoped>
  #loginContainer {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  #loginSuccess {
    display: flex;
    justify-content: center;
  }
</style>
