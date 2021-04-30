<template>
    <div class="container">
        <div class="text-center">
            <hr>
            <h2>Portfolio</h2>
        </div> 
        <div class="website justify-content-between my-5">
            <div class="websites col-lg-4 col-md-6 col-12 mb-4" v-for="(website, index) in websites" :key="index">
                <div class="front mb-4">
                    <img v-bind:src="getImgUrl(website.image)" v-bind:alt="website.image">
                </div>
                <div class="back mb-4">
                    <p>{{ website.description }}</p>
                    <a :href="website.github">
                        <button class="btn mb-3">Repository GitHub</button>
                    </a>
                    <br>
                    <a :href="website.accomodation" v-if="website.accomodation != null">
                        <button class="btn">Voir le site</button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     data() {
        return {
            websites : [
                {name: 'Portfolio', image: 'image_portfolio.png', description: 'Portfolio personel, réalisé avec Vue.js. Vous êtes actuellement sur ce site ! ', github: 'https://github.com/benoitD03/portfolio', accomodation: null},
                {name: "Réseaux social d'entreprise", image: 'image_groupomania.png', description: "Création d'un réseau social d'entreprise, avec gestion des messages et des utilisateurs. Frontend réalisé avec Vue.js, et Backend avec NodeJS, MySQL et Sequelize.", github: 'https://github.com/benoitD03/BenoitDurand_7_020321', accomodation: null},
                {name: 'Répertoire pays', image: 'image_countries.png', description: "Intégration d'une API regroupant tous les pays du monde, ansi que quelques informations sur chaques pays. Réalisé avec Vue.js", github: "https://github.com/benoitD03/api-countries", accomodation: null},
                {name: "API sécurisée pour une application d'avis gastronomique", image: 'image_sauces.png', description: "Création du Backend d'une application d'avis gastronomique, avec NodeJS, Express et MongoDB", github: "https://github.com/benoitD03/BenoitDurand_6_090221", accomodation: null},
                {name: 'Intégration de maquette responsive', image: 'image_reservia.png', description: "Intégration d'une maquette responsive, uniquement en HTML et CSS", github: "https://github.com/benoitD03/BenoitDurand_2_161020", accomodation: "https://benoitd03.github.io/BenoitDurand_2_161020/"},
                {name: "Simulation Frontend d'un site e-commerce", image: 'image_orinoco.png', description: "Simulation d'un Frontend de site e-commerce. Réalisé en JavaScript Vanilla.", github: 'https://github.com/benoitD03/BenoitDurand_5_080121', accomodation: null}
            ]
        }
    },
    methods: {
        getImgUrl(img) {
            return require('../assets/' + img);
        }
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
img {
    width: 100%;
    height: 200px;
    border:8px solid #123b7a;
    border-radius: 10px;
    object-fit: cover;
}
.website {
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
    position: relative;
}
.back {
    text-align: center;
    position: absolute;
    top: 10%;
    transform: translateY(150px) scale(0);
    transition: transform .5s ease-in-out;
}
.front {
    transform: translateY(0) rotateX(0);
    transition: transform .5s ease-in-out;
}

.websites:hover .front {
    transform: translateY(-150px) rotateX(-90deg);
    
}
.websites:hover .back {
    transform: translateY(0) scale(1);
}
button {
    padding: 10px 20px;
    border: 1px solid #e8ecf3;
    border-radius: 8px;
    background-color: #123b7a ;
    color: #e8ecf3;
    transition: background-color .2s ease-in;
}
button:hover {
    color: #e8ecf3;
    background-color: #a1b3cf;
}
</style>