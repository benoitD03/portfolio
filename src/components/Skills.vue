<template>
    <div class="container">
        <div class="text-center">
            <hr>
            <h2>Compétences</h2>
        </div> 
        <div id="bars" class="justify-content-center my-5">
            <div class="row col-md-6 mb-4 p-3" v-for="(skill, index) in skills" :key="index">
                <img class=" mr-2" v-bind:src="getImgUrl(skill.logo)" v-bind:alt="skill.logo">
                <div class="progress mr-4 mt-2">
                    <div class="progress-bar skill" role="progressbar" aria-valuemax="100">{{ skill.name }} {{ skill.level }}</div>
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
}
.skill {
    background-color: #123b7a;
}
img {
    width: 50px;
    height: 55px;
}
#bars {
    display: flex;
    flex-wrap: wrap;
}
</style>