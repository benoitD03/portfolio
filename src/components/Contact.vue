<template>
    <div class="container">
        <div class="text-center">
            <hr>
            <h2>Contact</h2>
        </div>
        <form class="py-5" @submit.prevent="sendEmail">
            <div class="form-group">
                <label for="nom">Nom *</label>
                <input type="text" class="form-control" name="nom" id="nom" placeholder="Votre nom"
                v-model.trim="$v.nom.$model" :class="{
                'is-invalid':$v.nom.$error, 'is-valid':!$v.nom.$invalid }">
                <div class="valid-feedback">Votre nom est valide !</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.nom.required">Votre nom est requis</span>
                    <span v-if="!$v.nom.minLength"> Votre nom doit contenir au minimum {{ $v.nom.$params.minLength.min }} lettres</span>
                </div>
            </div>
            <div class="form-group">
                <label for="prenom">Prénom</label>
                <input type="text" class="form-control" name="prenom" id="prenom" placeholder="Votre Prénom"
                v-model.trim="$v.prenom.$model" :class="{
                'is-invalid':$v.prenom.$error, 'is-valid':!$v.prenom.$invalid }">
                <div class="valid-feedback">Votre prénom est valide !</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.nom.required">Votre prénom est requis</span>
                    <span v-if="!$v.nom.minLength"> Votre prénom doit contenir au minimum {{ $v.prenom.$params.minLength.min }} lettres</span>
                </div>
            </div>
            <div class="form-group">
                <label for="email">Email *</label>
                <input type="text" class="form-control" name="email" id="email" placeholder="Votre adresse Email"
                v-model.trim="$v.email.$model" :class="{
                'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid }">  
                <div class="valid-feedback">Votre adresse email est correct</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.email.required">Votre adresse email est requise</span>
                    <span v-if="!$v.email.emailValid">Veuillez rentrer une adresse email valide</span>
                </div>
            </div>
            <div class="form-group">
                <label for="message">Message *</label>
                <textarea class="form-control" name="message" id="message" placeholder="Votre message" rows="5"
                v-model.trim="$v.message.$model" :class="{
                'is-invalid':$v.message.$error, 'is-valid':!$v.message.$invalid }"></textarea>
                <div class="valid-feedback">Votre message est correct!</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.message.required">Un message est requis</span>
                    <span v-if="!$v.message.minLength"> Votre message doit contenir au minimum {{ $v.message.$params.minLength.min }} lettres</span>
                </div>
            </div>
            <div class="text-center pt-2">
                <button type="submit" class="px-5 py-2"><i class="fas fa-paper-plane"></i> Envoyer</button>
            </div>
            <div id="success-message" class="text-center mt-3 w-50 mx-auto">
                <span><i class="fas fa-check-circle "></i> Message envoyé !</span>
            </div>
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
    name: 'Contact',
    data() {
        return {
            nom: '',
            prenom: '',
            email: '',
            message: '',
        }
    },
    validations: {
        nom: {
            required,
            minLength: minLength(2),
        },
        prenom: {
            required,
            minLength: minLength(2)
        },
        message: {
            required,
            minLength: minLength(5),
        },
        email: {
            required,
            email,
            emailValid(value) {
                if (value === '') return true

                let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(regexEmail.test(value))
                    }, 500)
                })
            }
        }
    },
    methods: {
        
        sendEmail(e) {
            this.$v.$touch()
                if(this.$v.$invalid) {
                    console.log("missing elements")
                } else {
                    emailjs.sendForm('service_uoecxn5', 'template_4z4cm3l', e.target, 'user_vQAlNrTI3wKKaw2nlO7Zb')
                    .then((result) => {
                        console.log('SUCCESS!', result.status, result.text);
                        const successMessage = document.getElementById("success-message");
                        successMessage.style.display = 'block';
                        this.$v.$reset();
                    }, (error) => {
                        console.log('FAILED...', error);
                    }); 
                }         
        },
    }
}
</script>

<style scoped>
hr {
    margin-top: 20px;
    margin-bottom: 10px;
    border-top: 2px solid #123b7a;
    width: 100px;
}
input, textarea {
    border: 2px solid #123b7a;
    border-radius: 10px;
}
button {
    border: 1px solid #e8ecf3;
    border-radius: 8px;
    background-color: #123b7a ;
    color: #e8ecf3;
    transform: scale(1);
    transition: transform .3s ease-in-out;
}
button:hover {
    transform: scale(1.20);
}
#success-message {
    padding: 20px 40px;
    background-color: rgba(118, 255, 118, 0.541);
    border: 2px solid #123b7a;
    border-radius: 10px;
    font-weight: bold;
    display: none;
}
</style>