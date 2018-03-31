<template>
  <div>
    <div class="form_main_container">
      <div>
        <b-navbar toggleable="md" variant="faded" type="light" class="index_main_header">
          <b-container class="index_header_container">
            <b-navbar-brand>
              <router-link to="/"><span class="index_header">Scalable Forms</span></router-link>
            </b-navbar-brand>
          </b-container>
        </b-navbar>
      </div>
    </div>

    <b-container fluid class="form_main_data_container">
      <b-row>
        <b-col class="left_frame" cols="2" align="center"></b-col>
        <b-col class="right_frame col-md-8">
          hi this is sainath
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .form_main_container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.44);
  }
  .index_main_header {
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .index_header_container {
    height: 40px;
  }
  .index_header {
    color: white;
    font-size: 125%;
  }
  .form_main_data_container {
    max-height: 80%;
  }
  .left_frame {
    min-height: 80vh;
    height: 100%;
  }
  .right_frame {
    border: 0px solid black;
    box-shadow: 0px 0px 10px black;
    padding-top: 30px;
  }
</style>
