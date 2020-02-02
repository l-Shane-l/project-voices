<template>
<div >
         <vue-video-section
    :elementId="'header-background-video'"
    :ref="'header-background-video'"
    :mp4Source="require('../../src/assets/videos/wws.mp4')"
    :mobileBreakpoint="992"
    :desktopHeight="550"
    :mobileHeight="450"
    :playsinline="true"
    :loop="true"
    :autoplay="true"
    :autobuffer="true"
    :muted="true"
  >
  
     <div slot="overlay-content" class="overlay-content">
         <div class="row">
          <div class="col-lg-4">
          </div>

      
         
            <h1 style="text-align: center; font-size: 600%; color: white;"><strong>Welcome to Voices</strong></h1>
        
            
         
       
  </div>
   
    </div>
      
      </vue-video-section> 
      
        <br>

          <div style="margin-left: 5%; margin-right: 15%; text-align: justify;">
      <p>VOICES is a platform that envisions a world where women are equally represented in panels, committees, at local and international events. As women are less likely to proactively seek dissemination of their professional achievements, VOICES aims to encourage women to share their expertise publicly. Firstly, it does so by providing conference organizers with a database of qualified female speakers from all backgrounds with links to their contact details shared by them, such as their LinkedIn profiles. Secondly, VOICES is offering workshops for women from a wide range of expertise on public speaking. These workshops offer an opportunity for women to share best practices, concerns and learn from each other how to disseminate, how to sharpen their public engagement skills. 
 </p><v-btn block color="purple" dark @click="signClick">Apply Now !</v-btn><br></div>
       
      <h1 style="margin-left: 5%; margin-right: 15%; text-align: center;">Our Team</h1>
      <br>
      <br>
      <div class="row">
        <div class="col-md-5">
          <div style="text-align: center;">
            <h2>Zsofia Szlamka</h2>
            <br>
             <v-avatar size="100">
            <v-img
              src="http://localhost:8080/img/Zsofia.jpg"
      
            />
             </v-avatar>
          </div>
          <br>
          <p
            style="margin-left: 15%; margin-right: 15%; text-align: justify;"
          >Zsofia is a developmental psychologist and a PhD Candidate researching health inequalities and concepts of empowerment from a cross-country perspective. She is passionate about equality of opportunities, loves learning languages and is crazy about travelling. VOICES, to her, means more than a collaboration, it is a project bringing women together from different corners of the world.</p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <div style="text-align: center;">
            
            <h2>Clodagh Quain</h2>
            <br>
             <v-avatar size="100">
            <v-img
              src="http://localhost:8080/img/Clo.jpeg"
        
            />
             </v-avatar>
          </div>
          <br>
          <p
            style="margin-left: 15%; margin-right: 15%; text-align: justify;"
          >Security and Defence Researcher at Ireland's leading think tank, the IIEA, responsible for the research and events programme. Over six years international experience in Paris, Brussels and Vienna with experience at the EU Institute for Security Studies, European Parliament and Irish Department of Foreign Affairs.</p>
        </div>
      </div>
      <div class="row" >
        <div class="col-md-5">
          <div style="text-align: center;">
            <h2>Khaoula Morchid</h2>
            <br>
            <v-avatar size="100">
            <v-img
              src="http://localhost:8080/img/Khaoula.jpeg"
       
            />
            </v-avatar>
          </div>
          <br>
          <p
            style="margin-left: 15%; margin-right: 15%; text-align: justify;"
          >Khaoula Morchid is a Civil Engineer and a Transport Planning Consultant passionate about infrastructure and the future of mobility. She loves hiking, traveling and connecting with people from different parts of the world. Khaoula is excited about improving gender equality and working with inspiring women from around the globe through project Voices.</p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <div style="text-align: center;">
            <h2>Hanna Rasper</h2>
            <br>
             <v-avatar size="100">
            <v-img
              src="http://localhost:8080/img/Hanna.jpg"
    
            />
             </v-avatar>
          </div>
          <br>
          <p
            style="margin-left: 15%; margin-right: 15%; text-align: justify;"
          >Hello there, my name is Hanna and I'm a Designer based in Palermo. From here I work in the fields of creative strategy, (info)graphics, design fiction and social impact. With PUSH I research and explore social and urban innovation through service design. And within Ellery Studio Berlin, I coordinate projects in the spheres of design fiction and creative approaches towards renewable energies. I‘m proud holder of a BA in Media Design and a MA in Design for Social Impact from the Paris College of Art.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5">
          <div style="text-align: center;">
            <h2>Shane Hamilton</h2>
            <br>
             <v-avatar size="100">
            <v-img
              src="http://localhost:8080/img/Shane.jpg"

            />
             </v-avatar>
          </div>
          <br>
          <p
            style="margin-left: 15%; margin-right: 15%; text-align: justify;"
          >I am an engineer at Eiratech Robotics in Dublin Ireland and a memember of the Dublin global shapers. I am passionate about solving social and economic problems with technological innovation, in my day job I build and program robots and in my free time I build code solutions for social enterprises.</p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <div style="text-align: center;">
            <h2>Juan Azcarreta</h2>
            <br>
             <v-avatar size="100">
            <v-img
              src="http://localhost:8080/img/Juan.jpg"

            />
             </v-avatar>
          </div>
          <br>
          <p
            style="margin-left: 15%; margin-right: 15%; text-align: justify;"
          >I am a Research Engineer at Audio Analytic, Cambridge, UK, working in signal processing and machine learning algorithms. Through my experience attending STEM conferences I realized there is a lack of women public speakers. VOICES is an international project where we aim to give visibility to women leaders that will sparkle inspiration to the next to come!
I feel passionate about technology, discovering different cultures and learning new languages. I am a member of the Global Shapers Cambridge Hub, the yough organization of the World Economic Forum.</p>
        </div>
      </div>
    </div>

</template>

<script>
import 'vue-video-section/dist/vue-video-section.css'
import VueVideoSection from 'vue-video-section'
export default {
  components: {
    VueVideoSection
  },
  methods: {
        signClick: function() {
      this.$router.replace({ path: "/sign" });
    },
  }
};
</script>