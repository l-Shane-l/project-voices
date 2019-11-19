<template>
 <v-container fluid>
   <div class="row">
     <div class="col-lg-1">
     </div>
    
      <div class="col-lg-5">
        
        <div v-if="authUser">
           <h1>Super Secret Application Data Page!</h1>
          <h2>Signed in as {{authUser.email}}</h2>
          <v-btn depressed small color="red" @click="signOut">Sign Out</v-btn>
        </div>
         <div v-else style="text-align: center;">
          <!-- <form @submit.prevent="register">
            <h2>Register</h2>
            <input type="email" v-model="email" placeholder="Type your email">
            <input type="password" v-model="password" placeholder="Pick your password">
            <button>Register</button>
          </form> -->

          <form @submit.prevent="signIn">
            <h2>Sign in</h2>
            <v-text-field
            v-model="email"
            label="Email"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            required
            :type="'password'"
          ></v-text-field>
            <v-btn block color="purple" dark @click="signIn">SignIn</v-btn>
          </form>
        </div>
       
      </div>

        <div class="col-lg-6">
        
            <div div v-if="authUser">
              <div v-for="message in messages" class="card" v-bind:key="message.userId">
                <v-card  width="100%">
                 <v-card-title>{{ message.name }}</v-card-title>
                  <v-card-subtitle class="pb-0">{{ message.country }}</v-card-subtitle>
                  <v-card-text class="text--primary">  
                    <div> <h3>Email:</h3><p>{{ message.email }}</p></div>    
                    <div> <h3>Indication of Interest:</h3><p>{{ message.choiceA }}</p></div>
                    <div><h3>Have you attended a voices workshop before:</h3><p>{{ message.choiceB }}</p></div>  
                    <div> <h3>Application Id (Important for database):</h3><p>{{ message.applicationId }}</p></div>       
                    <div><h3>Topic/Field:</h3><p>{{ message.expertise }}</p></div>
                    <div> <h3>Title/current role:</h3><p>{{ message.title }}</p></div>
                    <div><h3>Number of talks given:</h3><p>{{ message.events }}</p></div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="blue" text>
                      <vue-link
                      :to='message.linkedin'
                      :external="true"
                      :new-tab="true"
                      >
                        Linkedin
                      </vue-link>
                    </v-btn>
                    <v-btn text>
                      <vue-link
                          :to='message.video'
                          :external="true"
                          :new-tab="true"
                          >
                          Video
                      </vue-link>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  <br>
                </div>
                
              </div>
           
              
        </div>
        
          </div>
     
 
    </v-container>
</template>
<script>
import {db, auth} from "../db"
import VueLink from 'vue-link'

export default {
    data: () => ({
         messages: [],
          email: '',
      password: '',
      authUser: null
    }),
    components: {
    VueLink,
     
  },

    methods: {
      register () {
        auth.createUserWithEmailAndPassword(this.email, this.password)
      },
      signOut () {
        auth.signOut()
      },
      signIn () {
        auth.signInWithEmailAndPassword(this.email, this.password)
      }
    },
     created () {
      db.on('child_added', snapshot => this.messages.push(snapshot.val()))
      auth.onAuthStateChanged(user => { this.authUser = user })
    },
    
}
</script>