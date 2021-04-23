<template>
  <div id="app">
    <navbar></navbar>
    <presentation></presentation>
    <skills></skills>
    <experience></experience>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Presentation from './components/Presentation'
import Skills from './components/Skills'
import Experience from './components/Experience'


export default {
  name: 'App',
  components: {
    'navbar' : Navbar,
    'presentation' : Presentation,
    'skills' : Skills,
    'experience' : Experience
  }
}
</script>

<style>
#app {
  margin: 0;
}
</style>
