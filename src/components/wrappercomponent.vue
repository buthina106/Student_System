<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <headercomponent/>
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col-3 nav-section">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/iti">ITI</router-link>
        <router-link to="/student">Student</router-link>
      </div>
      <div class="col-9 body-section">
        <router-view></router-view>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <footercomponent/>
      </div> 
    </div>
  </div>
</template>

<script>
import HeaderComponent from './headercomponent.vue'
import FooterComponent from './footercomponent.vue'

export default {
  components: {
    headercomponent: HeaderComponent,
    footercomponent: FooterComponent
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.nav-section {
  background-color: #FFC0CB;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.body-section {
  background-color: #FFC0CB;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
