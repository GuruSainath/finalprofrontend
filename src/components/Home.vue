<template>
  <div class="body">
    <!-- header -->
    <div>
      <b-button class="float-right" type="submit" variant="success" @click="logOut()">Close</b-button>
      <b-navbar toggleable="md" variant="faded" type="light" class="index_main_header">
        <b-container class="index_header_container">
          <b-navbar-brand>
            <router-link to="/"><span class="index_header">Scalable Forms</span></router-link>
          </b-navbar-brand>
        </b-container>
      </b-navbar>
    </div>

    <!--<button @click="status =! status">haha</button>-->

    <!-- navigation internally-->
    <div class="navigation_internally">
      <b-container>
        <b-row class="justify-content-md-center">
          <b-col class="column" @click="status = true" :class="{'nav_color': status}">Create Forms</b-col>
          <b-col class="column" @click="status = false" :class="{'nav_color': !status}">Past Forms</b-col>
          <b-col class="column Last_column">Created a New Form</b-col>
        </b-row>
      </b-container>
    </div>

    <!-- redirecting the components-->
    <div>
      <div v-if="status">
        <Create-Registration></Create-Registration>
      </div>
      <div v-else>
        <Past-Registration></Past-Registration>
      </div>
    </div>

    <div class="components_field">

    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        status: true,
        mainimpparseddata: ''
      }
    },
    methods: {
      logOut: function () {
        localStorage.removeItem('UserName')
        location.reload()
      },
      mainfunction: function () {
        if (localStorage.getItem('UserName') === null) {
          location.href = '/login'
        } else {
          this.mainimpparseddata = localStorage.getItem('UserName')
        }
      }
    },
    created: function () {
      this.mainfunction()
    }
  }
</script>

<style scoped>
  .body {
    background-color: rgba(0, 0, 0, 0.75);
    width: 100%;
    height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .index_main_header {
    color: white;
    background-color: rgba(0,0,0,0.45);
  }
  .index_header_container {
    height: 40px;
  }
  .index_header {
    color: white;
    font-size: 125%;
  }
  .navigation_internally {
    width: 100%;
    height: 10vh;
    background-color: rgba(0,0,0,0.45);
    border-top: 1px solid white;
    text-align: center;
  }
  .navigation_internally .column{
    height: 10vh;
    font-size: 130%;
    line-height: 3.5;
    color: white;
    cursor: pointer;
  }
  .navigation_internally .column:hover{
    font-size: 132%;
    border-bottom: 1px solid white;
  }
  .nav_color {
    border-bottom: 1px solid white;
    box-shadow: 0px 0px 0.1px white;
    background-color: rgba(255,255,255,0.12);
  }
  @media (max-width: 575px) {
    .navigation_internally .column{
      font-size: 100%;
      line-height: 3;
    }
    .navigation_internally .column:hover{
      font-size: 105%;
      border-bottom: 1px solid white;
    }
    .Last_column {
      display: none;
    }
  }
</style>
