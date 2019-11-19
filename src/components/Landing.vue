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
              src="https://voices-2f306.firebaseapp.com/img/pro.png"
      
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
            
            <h2>Julia Pardo</h2>
            <br>
             <v-avatar size="100">
            <v-img
              src="https://voices-2f306.firebaseapp.com/img/pro.png"
        
            />
             </v-avatar>
          </div>
          <br>
          <p
            style="margin-left: 15%; margin-right: 15%; text-align: justify;"
          >With formal training in Biotechnology and Business management and administration, I have worked in different fields, always staying close to a stage. I am currently an actress and public speaking consultant, and I do workshops in different formats and for different types of entities. In 2016, I was awarded as Best Speaker in Spain by Toastmasters International. I also organise and present Ignite BCN, and I have been the curator of the Barcelona hub for Global Shapers, the youth community of the World Economic Forum.</p>
        </div>
      </div>
      <div class="row" >
        <div class="col-md-5">
          <div style="text-align: center;">
            <h2>Khaoula Morchid</h2>
            <br>
            <v-avatar size="100">
            <v-img
              src="https://voices-2f306.firebaseapp.com/img/pro.png"
       
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
              src="https://voices-2f306.firebaseapp.com/img/pro.png"
    
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
            <h2>Dr. Pahini Pandya</h2>
            <br>
             <v-avatar size="100">
            <v-img
              src="https://voices-2f306.firebaseapp.com/img/pro.png"

            />
             </v-avatar>
          </div>
          <br>
          <p
            style="margin-left: 15%; margin-right: 15%; text-align: justify;"
          >Dr. Pahini Pandya is the CEO and co-founder of Panakeia Technologies. Following a BSc. in Biotechnology in India, she pursued a PhD in Cancer Biophysics at King’s College London and continued her research on cancer as a Post-Doctoral fellow at the University of Cambridge. In addition to her academic pursuits, she has facilitated the translation of research to the wider community through several leadership positions as the President, Innovation Forum (KCL), Vice-President, Cambridge Consulting Network and Committee member, Entrepreneurial Postdocs of Cambridge.</p>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <div style="text-align: center;">
            <h2>Alena Fargere</h2>
            <br>
             <v-avatar size="100">
            <v-img
              src="https://voices-2f306.firebaseapp.com/img/pro.png"

            />
             </v-avatar>
          </div>
          <br>
          <p
            style="margin-left: 15%; margin-right: 15%; text-align: justify;"
          >Alena is an Energy Transition Economist and Hydrogen Energy Expert.With 6 years of industrial experience, Alena advises industries and international organisations, such as the World Energy Council and the UN on sustainable energy, gas and mobility pathways. Her contribution to the energy transition success has been recognised by the Forbes 30 under 30 list and the Future Energy Leader nomination by the World Energy Council. Alena holds a PhD in Economics and Master's degrees both in Applied Mathematics and Public Policy.</p>
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