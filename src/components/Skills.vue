<template>
    <div class="container">
        <div class="text-center">
            <hr>
            <h2>Compétences</h2>
        </div> 
        <div id="bars" class="justify-content-center my-5">
            <div class="row col-md-6 mb-4 ml-2 p-3" v-for="(skill, index) in skills" :key="index">
                <img class=" mr-2" v-bind:src="getImgUrl(skill.logo)" v-bind:alt="skill.logo">
                <div class="progress  mt-2">
                    <div class="progress-bar skill" role="progressbar" aria-valuemax="100">{{ skill.name }} {{ skill.level }}</div>
                </div>
            </div>
        </div> 
        <div class="text-center mb-5">
            <button class="btn" type="button" data-toggle="collapse" data-target="#secondarySkills" aria-expanded="false" aria-controls="secondarySkills">
                Compétences secondaires <i class="fas fa-arrow-down"></i>
            </button>
            <div class="collapse mt-3" id="secondarySkills">
                <div class="card card-body">
                    <i class="fas fa-database fa-2x"></i> MySQL
                    <i class="fab fa-github fa-2x"></i> Git & GitHub
                    <i class="fab fa-wordpress fa-2x"></i> Wordpress
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            skills : [
                {name: 'HTML', level: "90%", logo: 'logo_html.png'},
                {name: 'CSS/SCSS', level: "85%", logo: 'logo_css.png'},
                {name: 'BOOTSTRAP', level: "75%", logo: 'logo_bootstrap.png'},
                {name: 'JAVASCRIPT', level: "75%", logo: 'logo_js.png'},
                {name: 'VUE.JS', level: "75%", logo: 'logo.png'},
                {name: 'NODEJS', level: "65%", logo: 'logo_node.png'}
            ]
        }
    },
    mounted() {
       
        for (let i = 0; i <= this.skills.length; i++ )  {
            let skill = document.getElementsByClassName("skill");
            skill[i].style.width = this.skills[i].level;
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
.progress {
    width: 400px;
    height: 40px;
    background-color: #a1b3cf;
    box-shadow: inset 4px 4px 15px 0px #000;
}
.skill {
    background-color: #123b7a;
    box-shadow: inset 4px 4px 15px 0px #000;
}
img {
    width: 50px;
    height: 55px;
}
#bars {
    display: flex;
    flex-wrap: wrap;
}
.card-body {
    color: white;
    background-color: #a1b3cf;
    border-radius: 8px;
}
button {
    padding: 10px 20px;
    border: 1px solid #e8ecf3;
    border-radius: 8px;
    background-color: #123b7a ;
    color: #e8ecf3;
    transform: scale(1);
    transition: transform .3s ease-in-out;
}
button:hover {
    transform: scale(1.10);
    background-color: #123b7a;
    color: #e8ecf3;
}
@media all and (max-width: 525px) {
.progress {
    width: 250px;
    margin: auto;
}
.row {
    margin-left: 0 !important;
    padding-left: 0 !important;
}
img {
    width: 40px;
    height: 45px;
    margin-top: 5px !important;
}
}
</style>