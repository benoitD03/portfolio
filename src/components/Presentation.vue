<template>
    <div id="about" class="container-fluid">
        <div class="row">
            <div id="photo" class="col-12 col-lg-4 my-5 text-center">
                <img src="../assets/benoit.jpeg" alt="Benoit">  
            </div>
            <div class="my-auto col-12 col-lg-4 text-center heading">
                <h1 class="text-light text-uppercase">Benoit Durand</h1>
                <h2>Développeur Web</h2>
                <a :href="`${publicPath}CV_Benoit.pdf`" class="button1" target="_blank">
                    <button type="button" class="mt-3"><i class="fas fa-download"></i> Télécharger CV</button>
                </a>
                <div class="mt-3">
                     <a class="network mr-4" href="https://github.com/benoitD03" target="_blank">
                        <i class="fab fa-github fa-3x"></i>
                    </a>
                    <a class="network" href="https://www.linkedin.com/in/benoit-durand-556b94209/" target="_blank">
                        <i class="fab fa-linkedin fa-3x"></i>
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
            publicPath: process.env.BASE_URL
        }
    }
}
</script>

<style scoped>
.row {
    justify-content: center ;
}
#about {
    padding: 75px 300px 25px 300px;
    background: #a1b3cf;
    flex-wrap: wrap; 
}
img {
    width: 250px;
    border-radius: 50%;
    border:8px solid #123b7a;
     box-shadow: 0 0 0 2px #e8ecf3; 
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
.network {
    color: #123b7a;   
}
.network i {
    transform: rotate(0);
    transition: transform .5s ease-in-out;
}
.network i:hover {
    transform: rotate(360deg);
}
button:hover {
    transform: scale(1.20);
}
#photo {
    animation: scale-up-center .8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both .3s;
}

@keyframes scale-up-center {
  0% {
            transform: scale(0);
  }
  70% {
            transform: scale(1.5);
  }
  100% {
            transform: scale(1);
  }
}
@media all and (max-width: 1000px) {
    img {
        width: 175px;
    }
    h1 {
        font-size: 30px;
    }
    h2 {
        font-size: 25px;
    }
}
@media all and  (max-width: 1500px){
    #about {
        padding: 60px;
    }
}


</style>