<template>
    <div class="container">
        <div class="text-center">
            <hr>
            <h2>Contact</h2>
        </div>
        <form class="py-5">
            <div class="form-group">
                <label for="nom">Nom</label>
                <input type="text" class="form-control" id="nom" placeholder="Votre nom">
            </div>
            <div class="form-group">
                <label for="prenom">Prénom</label>
                <input type="text" class="form-control" id="prenom" placeholder="Votre Prénom">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" placeholder="Votre adresse Email">
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" placeholder="Votre message" rows="5"></textarea>
            </div>
            <div class="text-center pt-2">
                <button type="submit" class="px-5 py-2"><i class="fas fa-paper-plane"></i> Envoyer</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    
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
</style>