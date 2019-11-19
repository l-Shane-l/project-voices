<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="8" md="8" xs="12">
        <h1 style="text-align: center">Application form</h1>
        <form  @submit.prevent="storeMessage">
          <v-text-field
            v-model="name"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            label="E-mail"
            required

          ></v-text-field>
   
          <v-switch v-model="c1" class="ma-4" label="I am a female first time speaker and would like to be added to the VOICES Speaker Database" @change="control1"></v-switch>
          <v-switch v-model="c2" class="ma-4" label="I am a female speaker, speaking frequently at events and would like to be added to the VOICES Speaker Database" @change="control2"></v-switch>
          <v-switch v-model="c3" class="ma-4" label="I would like to recommend someone to be added to the VOICES Database" @change="control3"></v-switch>
          <h4>How many events have you spoken at</h4>
            <v-slider v-model="events" hint="This will not factor into your selection" max="500"></v-slider>
              <h2>I've spoken at {{events}} events</h2>
 
         <v-text-field
            v-model="applicantsEmail"
            label="If your recommending someone, please submit there email here"
    
          ></v-text-field>
       
        <v-select
          v-model="country"
          :items="countries"
          label="Country of residence of the speaker"
          required
      
        ></v-select>
        <div class="row">
          <div class="col-lg-8">
        <h2> Have you spoken at a voices event before?</h2>
          </div>
        <div class="col-lg-2">
         <v-switch v-model="c4" class="ma-4" label="I have" @change="control4"></v-switch>
        </div>
         <div class="col-lg-2">
          <v-switch v-model="c5" class="ma-4" label="I have not" @change="control5"></v-switch>
         </div>
          </div>
      
          <v-text-field
            v-model="expertise"
         
            label="Topic/Field of expertise of the speaker"
            required
   
          ></v-text-field>
          <v-text-field
            v-model="title"
            label="Job title/current role"
            required
          
          ></v-text-field>
           <v-text-field
            v-model="linkedin"
            label="Link to speakers Linkedin"
            required
    
          ></v-text-field>
          <v-text-field
            v-model="link"
            label="Link to video of speaker giving a talk"
            required
     
          ></v-text-field>
         <v-btn block color="purple" dark @click="storeMessage">Submit</v-btn>
        </form>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import {db, auth} from "../db"
import { uuid } from 'vue-uuid';

export default {
  data: () => ({
    countries: ["Ireland", "The UK"],
    events: 0,
    multiOne: "",
    multiTwo: "",
    c1: false,
    c2: false,
    c3: false,
    c4: false,
    c5: false,
    country: "Not specified",
    name: "",
    email: "",
    applicantsEmail: "",
    link: "",
    linkedin: "",
    expertise: "",
    title: "",
    messages: [],
    uuid: uuid.v1()
  }),
  mixins: [validationMixin],
  

  methods: {
    control1: function() {
    
      if (this.c1 == true) {
        this.c3 = false;
        this.c2 = false; 
        this.multiOne="I am a female first time speaker and would like to be added to the VOICES Speaker Database";
      }
      },
        control2: function() {
      if (this.c2 == true) {
        this.c1 = false;
        this.c3 = false;
        this.multiOne="I am a female speaker, speaking frequently at events and would like to be added to the VOICES Speaker Database";  
      }
      },
        control3: function() {
      if (this.c3 == true) {
        this.c1 = false;
        this.c2 = false;
        this.multiOne="I would like to recommend someone to be added to the VOICES Database";   
      }
      },
       
    
    submit() {
      this.$v.$touch();
    },
    storeMessage () {
  
        db.push({ applicationId: this.$uuid.v1(), name: this.name, email: this.email, country: this.country, choiceA: this.multiOne, choiceB: this.multiTwo, events: this.events, expertise: this.expertise, title: this.title, linkedin: this.linkedin, video: this.link})
        this.$router.replace({ path: "/" });
      },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
    control4: function() {
      if (this.c4 == true) {
        this.c5 = false;
        this.multiTwo="I have attended";
      }
      },
      control5: function() {
      if (this.c5 == true) {
        this.c4 = false;
        this.multiTwo="I have not attended";
      }
      }
  }
};
</script>