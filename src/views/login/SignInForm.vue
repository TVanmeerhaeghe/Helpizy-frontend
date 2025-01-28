<template>
  <div class="signup-container">
    <h1 class="title">Inscription</h1>
    <div class="signup-card">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="firstname">Prénom</label>
          <input id="firstname" type="text" placeholder="John" v-model="firstname" required />
        </div>
        <div class="form-group">
          <label for="lastname">Nom</label>
          <input id="lastname" type="text" placeholder="Doe" v-model="lastname" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" placeholder="adresse@email.com" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input id="password" type="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirmer le mot de passe</label>
          <input id="confirmPassword" type="password" v-model="confirmPassword" required />
          <p v-if="passwordMismatch" class="error-message">Les mots de passe ne correspondent pas.</p>
        </div>
        <button class="btn-primary" type="submit" :disabled="loading || passwordMismatch">
          <span v-if="loading">Inscription...</span>
          <span v-else>S'inscrire</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      confirmPassword: '',
      loading: false,
    };
  },
  computed: {
    passwordMismatch() {
      return this.password && this.confirmPassword && this.password !== this.confirmPassword;
    },
  },
  methods: {
    async handleSubmit() {
      if (this.passwordMismatch) {
        alert("Les mots de passe ne correspondent pas.");
        return;
      }

      this.loading = true;
      try {
        const response = await fetch(`${process.env.VUE_APP_API_URL}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
            firstname: this.firstname,
            lastname: this.lastname,
            password: this.password,
            allow_notification: true,
          }),
        });

        if (!response.ok) {
          throw new Error("Une erreur s'est produite lors de l'inscription.");
        }

        const data = await response.json();

        const token = data.token;
        const expiration = new Date();
        expiration.setDate(expiration.getDate() + 7);
        localStorage.setItem(
          'authToken',
          JSON.stringify({ token, expiration: expiration.toISOString() })
        );

        this.$router.push({ name: 'Home' });
      } catch (error) {
        alert(error.message || "Une erreur s'est produite.");
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.title {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 50px;
}

.signup-card {
  background: #f9fafb;
  padding: 40px 60px;
  border-radius: 40px;
  box-shadow: 0px 4px 17px 0px #0000001c;
  width: 100%;
  max-width: 860px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  color: #344054;
}

input {
  padding: 12px 10px;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  font-size: 14px;
}

input::placeholder {
  color: #b3b3b3;
}

input:focus {
  outline: none;
  border-color: #80bdff;
  box-shadow: 0 0 5px rgba(128, 189, 255, 0.5);
}

.btn-primary {
  width: 100%;
  padding: 10px 0;
  margin-top: 20px;
  cursor: pointer;
}

.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
</style>
