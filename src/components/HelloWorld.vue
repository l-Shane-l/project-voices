<template>


  <v-app id="inspire">
    
    <v-navigation-drawer v-model="drawer" app right>
      <v-list dense>
        <v-list-item @click="homeClick">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="signClick">
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Apply Now!</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
          <v-list-item @click="search">
          <v-list-item-action>
            <v-icon>mdi-account-search</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sign In</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="purple" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title>Voices</v-toolbar-title>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content>
   
        <router-view />
      
    </v-content>

    <v-footer color="purple" app>
      
      <v-spacer></v-spacer>
      <span class="white--text">&copy;Built by the Dublin global shapers 2019,
        &nbsp; please refer to our
       <strong @mouseover="tosmo" @mouseleave="tosml"><vue-link
                          :to='"https://voices-2f306.firebaseapp.com/TermsOfService.pdf"'
                          :external="true"
                          :new-tab="true"
                          :style="{ color: tosColor, cursor: curser }"
                          >
                          terms of service,
                      </vue-link></strong>
       &nbsp;
        <strong @mouseover="cookiesmo" @mouseleave="cookiesml"><vue-link
                          :to='"https://voices-2f306.firebaseapp.com/Cookies.pdf"'
                          :external="true"
                          :new-tab="true"
                          :style="{ color: cookiesColor, cursor: curser }"
                          >
                          cookies
                      </vue-link></strong> 
        &nbsp; and
        <strong @mouseover="privacymo" @mouseleave="privacyml" ><vue-link
                          :to='"https://voices-2f306.firebaseapp.com/PrivacyPolicy.pdf"'
                          :external="true"
                          :new-tab="true"
                          :style="{ color: privacyColor, cursor: curser }"
                          >
                          privacy
                      </vue-link></strong> policies for any quires on GDPR</span>
    </v-footer>
  </v-app>

</template>

<script>
import Landing from "./Landing";
import VueLink from 'vue-link'
export default {
  components: {
    Landing,
    VueLink,
  },
  props: {
    source: String
  },
  methods: {
    homeClick: function() {
      this.$router.replace({ path: "/" });
    },
    signClick: function() {
      this.$router.replace({ path: "/sign" });
    },
    search: function() {
      this.$router.replace({ path: "/search" });
    },
    tosmo: function(){
      this.tosColor="black"
    },
    tosml: function(){
      this.tosColor="white"
    },
    cookiesmo: function(){
      this.cookiesColor="black"
     
    },
    cookiesml: function(){
      this.cookiesColor="white"
    },
    privacymo: function(){
      this.privacyColor="black"
     
    },
    privacyml: function(){
      this.privacyColor="white"
    }
  },
  data: () => ({
    drawer: false,
    tosColor: "white",
    cookiesColor: "white",
    privacyColor: "white",
    curser: "pointer"
  })
};
</script>