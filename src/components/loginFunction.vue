<script>
  export default {
    state: { email: '' },
    getters: {},
    mutations: {
      login(state, email) {
        state.email = email;
        localStorage.setItem('email', email);
        alert('Loggged in');
      },
      logout(state) {
        state.email = '';
        localStorage.removeItem('email');
        alert('Logged out');
      },
      initializeStore(state) {
        if (localStorage.getItem('email')) {
          state.email = localStorage.getItem('email');
        }
      },
    },
  };
</script>
