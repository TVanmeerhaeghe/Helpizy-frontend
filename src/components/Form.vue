<template>
  <form class="suggestion-form">
    <div class="form-row name-surname">
      <div class="form-group">
        <label for="prenom">Prénom</label>
        <input type="text" id="prenom" placeholder="Prénom" />
      </div>
      <div class="form-group">
        <label for="nom">Nom</label>
        <input type="text" id="nom" placeholder="Nom" />
      </div>
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="adresse@email.com"
        v-model="email"
        @input="validateEmail"
      />
      <p v-if="emailError" class="error">{{ emailError }}</p>
    </div>

    <div class="form-group">
      <label for="telephone">Téléphone</label>
      <div class="phone-input">
        <select class="country-code" v-model="countryCode">
          <option value="+33">FR +33</option>
          <option value="+1">US +1</option>
          <option value="+44">UK +44</option>
        </select>
        <input
          type="tel"
          placeholder="0 00 00 00 00"
          v-model="phone"
          @input="validatePhone"
        />
      </div>
      <p v-if="phoneError" class="error">{{ phoneError }}</p>
    </div>

    <div class="form-group">
      <label for="suggestion">Suggestion</label>
      <textarea id="suggestion" rows="4"></textarea>
    </div>

    <div class="form-group">
      <label class="checkbox checkbox-group">
        <input type="checkbox" />
        <p>
          J'accepte que mes informations soient utilisées uniquement dans le
          cadre de ma demande et de la relation commerciale qui pourrait en
          découler.
        </p>
      </label>
    </div>

    <button
      type="submit"
      class="submit-button button-orange"
      :disabled="emailError || phoneError"
    >
      Envoyer ma suggestion
    </button>
  </form>
</template>

<script>
export default {
  name: 'AppForm',
  data() {
    return {
      email: '',
      phone: '',
      countryCode: '+33',
      emailError: null,
      phoneError: null,
    };
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailError = emailRegex.test(this.email)
        ? null
        : 'Adresse email invalide.';
    },
    validatePhone() {
      const phoneRegex = /^[0-9\s-]{8,15}$/;
      this.phoneError = phoneRegex.test(this.phone)
        ? null
        : 'Numéro de téléphone invalide.';
    },
  },
};
</script>

<style>
.suggestion-form {
  max-width: 760px;
  margin: 0 auto;
  margin-top: 100px;
}

.form-row {
  display: flex;
  gap: 30px;
}

.form-group {
  margin-bottom: 15px;
  flex: 1;
}

.name-surname .form-group {
  width: 50%;
}

.name-surname .form-group input {
  width: 95%;
}

.checkbox {
  display: flex;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #344054;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 98%;
  padding: 10px;
  border: 1px solid #d0d5dd;
  border-radius: 5px;
  font-size: 16px;
}

.phone-input {
  display: flex;
  gap: 5px;
}

.phone-input select {
  max-width: 85px;
}

.checkbox {
  font-size: 12px;
  color: #d0d5dd;
}

.checkbox input {
  margin-right: 10px;
  width: 20px;
  border-radius: 5px;
}

.checkbox-group {
  display: flex !important;
}

.submit-button {
  width: 100%;
  cursor: pointer;
}

.phone-input {
  display: flex;
  align-items: center;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #fff;
}

.phone-input select {
  border: none;
  background: none;
  padding-right: 10px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  outline: none;
}

.phone-input input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  color: #333;
  padding-left: 10px;
}

.phone-input input::placeholder {
  color: #ccc;
}

form select:focus,
form input:focus {
  outline: none;
}

.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
</style>
