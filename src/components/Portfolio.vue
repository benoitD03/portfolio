<template>
  <div class="container">
    <div class="text-center">
      <hr />
      <h2>Portfolio</h2>
    </div>
    <div class="website justify-content-between my-5">
      <div
        class="websites col-lg-4 col-md-6 col-12 mb-5"
        v-for="(website, index) in websites"
        :key="index"
      >
        <div class="front mb-5">
          <img
            v-bind:src="getImgUrl(website.image)"
            v-bind:alt="website.image"
          />
        </div>

        <div class="back mb-5">
          <p>{{ website.description }}</p>
          <a :href="website.github" target="_blank">
            <button class="btn mb-3">Repository GitHub</button>
          </a>
          <br />
          <a
            :href="website.accomodation"
            target="_blank"
            v-if="website.accomodation != null"
          >
            <button class="btn">Voir le site</button>
          </a>

          <button
            v-if="website.video"
            type="button"
            class="btn"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Démonstration
          </button>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ websites[2].name }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="my-3">
              E-commerce avec une interface administrateur permettant d'ajouter, de supprimer, ou de modifier des articles.
              Utilisation de json-server, vue.js, vuex, et le localStorage pour la gestion du panier. Voir la Démonstration
              dans la courte vidéo ci-dessous. 
            </p>
            <video controls>
              <source src="../assets/Video_Vuex.mp4" type="video/mp4" />
            </video>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      websites: [
        {
          name: "Portfolio",
          image: "image_portfolio.png",
          description:
            "Portfolio personel, réalisé avec Vue.js. Vous êtes actuellement sur ce site.",
          github: "https://github.com/benoitD03/portfolio",
          accomodation: null,
        },
        {
          name: "Réseaux social d'entreprise",
          image: "image_groupomania.png",
          description:
            "Création d'un réseau social d'entreprise, avec gestion des messages et des utilisateurs. Frontend réalisé avec Vue.js, et Backend avec NodeJS, MySQL et Sequelize.",
          github: "https://github.com/benoitD03/BenoitDurand_7_020321",
          accomodation: null,
        },
        {
          name: "E-commerce + interface administrateur",
          image: "image_ecommerce.png",
          description:
            "E-commerce avec une interface administrateur, avec Vue.js, VUEX, json-server.",
          github: "https://github.com/benoitD03/training_vuex_ecommerce",
          accomodation: null,
          video: "Video_Vuex.mp4",
        },
        {
          name: "API sécurisée pour une application d'avis gastronomique",
          image: "image_sauces.png",
          description:
            "Création du Backend d'une application d'avis gastronomique, avec NodeJS, Express et MongoDB",
          github: "https://github.com/benoitD03/BenoitDurand_6_090221",
          accomodation: null,
        },
        {
          name: "Intégration de maquette responsive",
          image: "image_reservia.png",
          description:
            "Intégration d'une maquette responsive, uniquement en HTML et CSS",
          github: "https://github.com/benoitD03/BenoitDurand_2_161020",
          accomodation: "https://benoitd03.github.io/BenoitDurand_2_161020/",
        },
        {
          name: "Générateur de dégradé CSS",
          image: "image_gradient_generator.png",
          description: "Générateur de dégradé CSS, réalisé en Javascript.",
          github: "https://github.com/benoitD03/Gradient_Generator",
          accomodation: "https://benoitd03.github.io/Gradient_Generator",
        },
      ],
    };
  },
  methods: {
    getImgUrl(img) {
      return require("../assets/" + img);
    },
  },
};
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
  border: 8px solid #123b7a;
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
  /* transform: translateY(150px) scale(0);
  transition: transform 0.5s ease-in-out; */
  opacity: 0;
  transition: opacity 0.5s ease-in;
}
.front {
  /* transform: translateY(0) rotateX(0);
  transition: transform 0.5s ease-in-out; */
  opacity: 1;
  transition: opacity 0.5s ease-in;
}

.websites:hover .front {
  /* transform: translateY(-150px) rotateX(-90deg); */
  opacity: 0;
}
.websites:hover .back {
  /* transform: translateY(0) scale(1); */
  opacity: 1;
}
button {
  padding: 10px 20px;
  border: 1px solid #e8ecf3;
  border-radius: 8px;
  background-color: #123b7a;
  color: #e8ecf3;
  transition: background-color 0.2s ease-in;
}
button:hover {
  color: #e8ecf3;
  background-color: #a1b3cf;
}
video {
  width: 100%;
}
.modal-header {
  color: #e8ecf3;
  background: #123b7a;
}
</style>