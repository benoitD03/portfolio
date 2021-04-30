<template>
  <div id="app">
    <div id="navigation">
        <nav class="navbar navbar-expand-lg fixed-top" style="background-color: #123b7a ">
            <div id="nav" class="collapse navbar-collapse justify-content-center">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link font-weight-bold text-uppercase text-light px-3" href="#">Présentation</a></li>
                    <li class="nav-item"><a class="nav-link font-weight-bold text-uppercase text-light px-3" href="#skills">Compétences</a></li>
                    <li class="nav-item"><a class="nav-link font-weight-bold text-uppercase text-light px-3" href="#experience">Expérience</a></li>
                    <li class="nav-item"><a class="nav-link font-weight-bold text-uppercase text-light px-3" href="#portfolio">Portfolio</a></li>
                    <li class="nav-item"><a class="nav-link font-weight-bold text-uppercase text-light px-3" href="#recommandations">Recommandations</a></li>
                    <li class="nav-item"><a class="nav-link font-weight-bold text-uppercase text-light px-3" href="#contact">Contact</a></li>
                </ul>
            </div>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#nav"><span class="text-light"><i class="fas fa-bars fa-2x"></i></span></button>
        </nav> 
    </div>
    <presentation></presentation>
    <skills id="skills"></skills>
    <experience id="experience"></experience>
    <portfolio id="portfolio"></portfolio>
    <recommandations id="recommandations"></recommandations>
    <contact id="contact"></contact>
    <myfooter></myfooter>
  </div>
</template>

<script>
import Presentation from './components/Presentation'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Recommandations from './components/Recommandations'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    'presentation' : Presentation,
    'skills' : Skills,
    'experience' : Experience,
    'portfolio' : Portfolio,
    'recommandations' : Recommandations,
    'contact' : Contact,
    'myfooter' : Footer
  },
}
</script>

    Portfolio
<style>
#app {
  margin: 0;
  background-color: #E8ECF3;
}
</style>
