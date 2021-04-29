<template>
  <div id="app">
    <navbar></navbar>
    <presentation></presentation>
    <skills></skills>
    <experience></experience>
    <portfolio></portfolio>
    <recommandations></recommandations>
    <contact></contact>
    <myfooter></myfooter>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
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
    'navbar' : Navbar,
    'presentation' : Presentation,
    'skills' : Skills,
    'experience' : Experience,
    'portfolio' : Portfolio,
    'recommandations' : Recommandations,
    'contact' : Contact,
    'myfooter' : Footer
  }
}
</script>

    Portfolio
<style>
#app {
  margin: 0;
  background-color: #E8ECF3;
}
</style>
