<template>
<div>
  <div>
    <b-jumbotron class="bg-blue" >
      <center><h1>Buenos Aires Parking</h1></center>
       <br/>
      <div>
  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
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
  </b-card>
</div>
    </b-jumbotron>
  </div>
    
   
    <nuxt />
</div>
</template>

<style>
.wf{
  color:#FFFFFF;
}
 .bg-blue{
    background-color: rgb(57, 114, 228);
}


</style>
