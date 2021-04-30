<template>
<div class="container-fluid ">
    <div class="text-center">
        <hr class="border-light">
        <h2 class="text-light">Expérience</h2>
    </div> 
    <div class="container my-3">
       <div class="row py-5 justify-content-around">
           <div class="card col-md-5 text-center mb-5 p-3">
               <p class="mt-2">2020 - 2021</p>
               <i class="fas fa-user-graduate fa-3x"></i>
               <h3>Openclassrooms</h3>
               <h4>Obtention du titre RNCP de <b>Développeur Web</b> (Bac+2)</h4>
               <hr class="mx-auto mt-3">
               <p><i class="fas fa-angle-double-right"></i> Création de sites web statiques en HTML/CSS.</p>
               <p><i class="fas fa-angle-double-right"></i> Optimisation d’un site web existant (SEO + Accessibilité).</p>
               <p><i class="fas fa-angle-double-right"></i> Front end d’un site e-commerce en Javascript (+ exploitation API).</p>
               <p><i class="fas fa-angle-double-right"></i> Back end d’un site de critique culinaire, avec NodeJS, Express, et MongoDB.</p>
               <p><i class="fas fa-angle-double-right"></i> Création d’un réseau social d’entreprise avec Vue.js, NodeJS, MySQL et Sequelize.</p>
           </div>
           <div class="card col-md-5 text-center mb-5 p-3">
               <p class="mt-2">2021</p>
               <i class="fas fa-laptop-code fa-3x"></i>
               <h3>Développeur web indépendant</h3>
               <hr class="mx-auto mt-5">
               <p class="mt-5"><i class="fas fa-angle-double-right"></i> Réalisation de divers projets : Voir partie portfolio ci-dessous</p>
           </div>
       </div>      
    </div>
</div>  
</template>

<script>
export default {
    
}
</script>

<style scoped>

hr {
    margin-top: 0;
    margin-bottom: 10px;
    border-top: 2px solid #123b7a;
    width: 100px;
}
h3, b{
    color: #123b7a;
}
i {
    margin-bottom: 15px;
}
.container-fluid {
    background: #a1b3cf;
    padding-top: 20px;
}
.card {
    background: #e8ecf3;
    border: 2px solid #123b7a;
    border-radius: 15px;
    box-shadow: inset 4px 4px 15px 0px #000;
}
</style>