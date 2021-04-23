<template>
  <div id="app">
    <navbar></navbar>
    <presentation></presentation>
    <skills></skills>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Presentation from './components/Presentation'
import Skills from './components/Skills'

export default {
  name: 'App',
  components: {
    'navbar' : Navbar,
    'presentation' : Presentation,
    'skills' : Skills
  }
}
</script>

<style>
#app {
  margin: 0;
}
</style>
