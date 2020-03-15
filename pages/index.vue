<template>
  <div>
    <b-container>
      <!-- Content here -->

      <h1>Parking entrance registration</h1>
      <br />

      <b-form action="javascript:void(0)" @submit="newP()">
      
      
        <b-form-group label="Select vehicle type" label-for="v_type" > 
          <b-form-select  id="v_type" v-model="vp.type" :options="vehicle_type"></b-form-select>
        </b-form-group>

        <b-form-group label="Plaque number:" label-for="plaque_number">
          <b-form-input
            class="form-control"
            type="text"
            placeholder="Insert the plaque number of the vehicle"
            id="plaque_number"
            v-bind:required="true"
            v-model="vp.plaque"
          />
        </b-form-group>


        <b-form-group label="Plaque city:" label-for="city_plaque">
          <b-form-input
            class="form-control"
            type="text"
            placeholder="Insert the city of the the vehicle plaque"
            id="city_plaque"
            v-model="vp.city_plaque"
            v-bind:required="true"
          />
        </b-form-group>


        <b-form-group label="Brand:" label-for="brand">
          <b-form-input
            class="form-control"
            type="text"
            placeholder="Insert the brand of the vehicle"
            id="brand"
            v-model="brand"
            v-bind:required="true"
          />
        </b-form-group>


        <b-form-group label="Color:" label-for="color">
          <b-form-input
            class="form-control"
            type="text"
            placeholder="Insert the color of the vehicle"
            id="color"
            v-model="color"
            v-bind:required="true"
          />
        </b-form-group>

        <b-form-group label="Date-time: Insert the date-time when the vehicle started to use the parking" label-for="date_time">
          <b-form-input
            class="form-control"
            type="datetime-local"
            id="car_color"
            v-bind:required="true"
            v-model="entrance_datetime"
          />
        </b-form-group>


      <br/>
        <b-button class="bg-udem" type="submit"  v-if="!enEdicion">Submit</b-button>
        <b-button clas="bg-udem" @click="update()" variant="primary" v-else>Actualizar estudiante</b-button>
      </b-form>


      <b-table striped hover :items="listareducida">
        <template v-slot:cell(Modificar)="row">
          <b-button size="sm" @click="upload(row)" class="bg-udem">Modificar</b-button>
        </template>
        <template v-slot:cell(Eliminar)="row">
          <b-button size="sm" @click="ddelete(row)" class="bg-udem">Eliminar</b-button>
        </template>
      </b-table>
    </b-container>
  </div>
</template>
<script src="@/assets/code.js"/>

