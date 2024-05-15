<template>
  <div class="container mt-5">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="tab-0" data-bs-toggle="tab" data-bs-target="#content-0" type="button" role="tab" aria-controls="content-0" aria-selected="true">OS</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="tab-1" data-bs-toggle="tab" data-bs-target="#content-1" type="button" role="tab" aria-controls="content-1" aria-selected="false">BD</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="tab-2" data-bs-toggle="tab" data-bs-target="#content-2" type="button" role="tab" aria-controls="content-2" aria-selected="false">AI</button>
      </li>
    </ul>

    <div class="tab-content mt-3" id="myTabContent">
      <div class="tab-pane fade show active" id="content-0" role="tabpanel" aria-labelledby="tab-0">
        <div class="card card-sm">
          <img src="https://i0.wp.com/dukanefada.com/wp-content/uploads/2022/08/Screenshot-2022-08-08-194005.png?w=1358&ssl=1" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">Open Source</h5>
            <p class="card-text">Instructor: Hend</p>
            <p class="card-text">Information: refers to a software development model based on the idea of providing open and free access to the source code of software.</p>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="content-1" role="tabpanel" aria-labelledby="tab-1">
        <div class="card">
          <img src="https://i0.wp.com/dukanefada.com/wp-content/uploads/2022/08/Screenshot-2022-08-08-194005.png?w=1358&ssl=1" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">Backend Development</h5>
            <p class="card-text">Instructor: Nadia</p>
            <p class="card-text">Information: Backend development involves working with server-side technologies and databases to build the behind-the-scenes functionality of web applications.</p>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" id="content-2" role="tabpanel" aria-labelledby="tab-2">
        <div class="card">
          <img src="https://i0.wp.com/dukanefada.com/wp-content/uploads/2022/08/Screenshot-2022-08-08-194005.png?w=1358&ssl=1" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">Artificial Intelligence</h5>
            <p class="card-text">Instructor: Noha</p>
            <p class="card-text">Information: Artificial intelligence involves creating computer systems that can perform tasks that typically require human intelligence.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
body {
    padding-top: 10px;
    width: 70rem;
    margin: auto;
}

.card-title {
    font-size: 30px;
;

}

.card-text {
    font-size: 25px; 
    
}

.card-img{
    max-width: 500px; 
    height: 400px; 
    object-fit: cover; 
}
</style>
