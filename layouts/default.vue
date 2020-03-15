<template>
<div>
  <div>
    <b-jumbotron class="bg" >
      <center><h1>Buenos Aires Parking</h1></center>
       <br/>
      <div>
 <center> <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://image.shutterstock.com/image-vector/parking-sign-vector-illustration-260nw-1191536209.jpg" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Prices per hour">
          <b-card-text>
            <ul>
              <li>Car: 8000</li>
              <li>Motorcycle: 4000</li>
              <li>Bicycle: 2000</li>
              <li>Truck: 8000</li>
            </ul>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card></center>
</div>

<center>
<b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="12">
        <b-card-img src="https://static.iris.net.co/dinero/upload/images/2019/6/12/273067_1.jpg" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="12">
        <b-card-body title="Our Parking">
          <b-card-text>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  </center>
    </b-jumbotron>
  </div>
    
   
    <nuxt />
</div>
</template>

<style>


*{
  font-family: 'Playfair Display', serif;
}

.wf{
  color:#FFFFFF;
}
 .bg{
    background-image: url('https://images.unsplash.com/photo-1521464302861-ce943915d1c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80');
    background-size: cover;
}


</style>
