<template>
  <div class="login-container">
    <h1 class="title">Connexion</h1>
    <div class="login-card">
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="adresse@email.com"
            v-model="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input id="password" type="password" v-model="password" required />
        </div>
        <button class="btn-primary" type="submit">Connexion</button>
      </form>
      <div class="social-login">
        <button class="btn-google">
          <img src="../../assets/login/logo_google.svg" alt="Google" />
          <p>Se connecter avec Google</p>
        </button>
        <button class="btn-apple">
          <img src="../../assets/login/logo_apple.svg" alt="Apple" />
          <p>Se connecter avec Apple</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      alert(`Email: ${this.email}\nMot de passe: ${this.password}`);
    },
  },
};
</script>

<style scoped>
.login-container {
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

.login-card {
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
  width: 100%;
  padding: 12px 0;
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  font-size: 14px;
}

input::placeholder {
  padding-left: 10px;
}

input:focus {
  outline: none;
}

.btn-primary {
  width: 100%;
  padding: 10px 0;
  margin-top: 20px;
  cursor: pointer;
}

.social-login {
  margin-top: 80px;
}

.social-login button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 20px;
  font-size: 16px;
  border: 1px solid #000;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #fff;
  cursor: pointer;
}

.social-login button p {
  margin: unset;
  font-size: 16px;
}

.social-login img {
  width: 24px;
  height: 22px;
  margin-right: 10px;
}
</style>
