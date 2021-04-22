<template>
  <div id="app">
    <navbar></navbar>
    <presentation></presentation>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Presentation from './components/Presentation'

export default {
  name: 'App',
  components: {
    'navbar' : Navbar,
    'presentation' : Presentation
  }
}
</script>

<style>
#app {
  margin: 0;
}
</style>
