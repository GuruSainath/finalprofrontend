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
      <br/>
      <b-container fluid class="form_main_data_container">
        <b-row>
          <b-col class="left_frame" cols="2" align="center"></b-col>
          <b-col class="right_frame col-md-8">
            <b-row class="justify-content-md-center">
              <b-col cols="12" md="9">
                <b-card>
                  <b-form class="main_form_align">
                    <b-card v-for="(form,index) in forms" :key="index">

                      <!-- text and password -->
                      <div v-if="form.data === 'text'">
                        <b-form-group v-bind:label="form.name" class="labels">
                          <b-form-input v-bind:type="form.field" v-bind:placeholder="form.field"></b-form-input>
                        </b-form-group>
                      </div>

                      <!-- textarea -->
                      <div v-if="form.data === 'textarea'">
                        <b-form-group v-bind:label="form.name" class="labels">
                          <b-form-textarea v-bind:type="form.field" v-bind:placeholder="form.field" :rows="3" :max-rows="6">
                          </b-form-textarea>
                        </b-form-group>
                      </div>

                      <!-- button -->
                      <div v-else-if="form.data === 'button'">
                        <b-form-group v-bind:label="form.name">
                          <b-form-radio-group :options="form.field"></b-form-radio-group>
                        </b-form-group>
                      </div>

                      <!-- checkbox -->
                      <div v-else-if="form.data === 'checkbox'">
                        <b-form-group v-bind:label="form.name">
                          <b-form-checkbox-group :options="form.field"></b-form-checkbox-group>
                        </b-form-group>
                      </div>

                      <!-- select box -->
                      <div v-else-if="form.data === 'select'">
                        <b-form-group v-bind:label="form.name">
                          <b-form-select :options="form.field"></b-form-select>
                        </b-form-group>
                      </div>

                    </b-card>

                    <br/>
                    <b-button class="float-right" type="submit" variant="success"> Submit </b-button>

                  </b-form>
                </b-card>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>

    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        forms: [
        ]
      }
    },
    methods: {
      mainfunctionload: function () {
        var fornmane = this.$route.query.formname
        var userformdata = {
          name: 'sainath',
          form: fornmane
        }
        this.$http.post('http://localhost:3000/formgenerateddataoutput', userformdata, {headers: {'Content-type': 'application/json'}})
          .then(
            response => {
              var mainresponse = response.data
              // text
              var textlength = mainresponse.text.length
              for (var i = 0; i < textlength; i = i + 1) {
                if (mainresponse.text[i]._id != null) {
                  for (var tl = 0; tl < mainresponse.text[i]._id.length; tl = tl + 1) {
                    this.forms.push(mainresponse.text[i]._id[tl])
                  }
                }
              }
              // textarea
              var textarealength = mainresponse.textarea.length
              for (var j = 0; j < textarealength; j = j + 1) {
                if (mainresponse.textarea[j] != null) {
                  for (var tal = 0; tal < mainresponse.textarea[j]._id.length; tal = tal + 1) {
                    this.forms.push(mainresponse.textarea[j]._id[tal])
                  }
                }
              }
              // button
              var buttonlength = mainresponse.button.length
              for (var k = 0; k < buttonlength; k = k + 1) {
                if (mainresponse.button[k]._id != null) {
                  for (var bl = 0; bl < mainresponse.button[k]._id.length; bl = bl + 1) {
                    this.forms.push(mainresponse.button[k]._id[bl])
                  }
                }
              }
              // checkbox
              var checkboxlength = mainresponse.checkbox.length
              for (var l = 0; l < checkboxlength; l = l + 1) {
                if (mainresponse.checkbox[l]._id != null) {
                  for (var cl = 0; cl < mainresponse.checkbox[l]._id.length; cl = cl + 1) {
                    this.forms.push(mainresponse.checkbox[l]._id[cl])
                  }
                }
              }
              // select
              var selectlength = mainresponse.select.length
              for (var m = 0; m < selectlength; m = m + 1) {
                if (mainresponse.select[m]._id != null) {
                  for (var sl = 0; sl < mainresponse.select[m]._id.length; sl = sl + 1) {
                    this.forms.push(mainresponse.select[m]._id[sl])
                  }
                }
              }
            }, error => {
              console.log(error)
            })
      }
    },
    created: function () {
      this.mainfunctionload()
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
