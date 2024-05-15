<template>
 <div class="col-3 nav-section">
    <ul class="list-group">
      <li class="list-group-item"><router-link to="/">Home</router-link></li>
      <li class="list-group-item"><router-link to="/">About</router-link></li>
      <li class="list-group-item"><router-link to="/">Contant</router-link></li>
      <li class="list-group-item"><router-link to="/">ITI</router-link></li>
      <li class="list-group-item"><router-link to="/">Student</router-link></li>
    </ul>
    
  </div>
</template>


  
<style scoped>
.list-group {
  background-color: #FFC0CB; 
  padding: 5px 10px; 
  border-radius: 10px; 
  font-size: 14px; 
  line-height: 1.5; 
  width: 20em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

}

.list-group-item {
  background-color: #917e7e; 
  margin-bottom: 10px; 
  
}

.nav-link {
  color: #000000; 
  font-size: 18px; 
}

.list-group-item:hover {
  transform: scale(1.1); 
   background: #4cafaf;
}

.nav-link:hover {
  color: #c7c9c9; 
}
  .nav-section {
  width: 90%;
    background-color: #fff;
    color: #FFC0CB;
    padding: 1px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin: auto;
  }
  
</style>
