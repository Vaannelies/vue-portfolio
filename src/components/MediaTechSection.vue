<template>
  <section-component :title="'media technology'">
    <div class="media-tech__projects__container">

      <div class="grid__row">
        <grid-card title="AI in Society" description="Sneakpeek AI (concept)" text="We designed an app to inform Radiology students about how AI might affect the tasks in their future career." backgroundImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png" heroImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png"/>
        <grid-card 
          title="Artificial Creatures" 
          description="Unique aspects of organic creatures, portrayed by artificial ones" 
          text="We created a robot that loves to check himself out in the mirror. When the infraredsensor registers input, the LED-matrix shows heart-eyes and the head tilts and rotates a little bit, as if it is checking out its own face in the mirror. If the mirror is taken away, the robot stops moving and shows a sad face. This behavior, vanity, appears to be a feature that only humans show. Robots usually do not show this behavior." 
          backgroundImage="/vue-portfolio/media-tech/Screenshot_2023-03-23-17-34-08-886_com.miui.videoplayer[1].png" 
          heroImage="/vue-portfolio/media-tech/Screenshot_2023-03-23-17-34-08-886_com.miui.videoplayer[1].png"
          heroVideo="/vue-portfolio/media-tech/narcissus robot ‐ Gemaakt met Clipchamp (1).mp4"
          :media="[
            {type: 'video', path: '/vue-portfolio/media-tech/narcissus robot ‐ Gemaakt met Clipchamp (1).mp4'},
            {type: 'image', path: '/vue-portfolio/media-tech/Screenshot_2023-03-23-17-34-08-886_com.miui.videoplayer[1].png'},
            {type: 'image', path: '/vue-portfolio/media-tech/Afbeelding van WhatsApp op 2023-03-24 om 13.27.38_d6efa77b.jpg'},
            ]"
        />
        <grid-card 
          title="Creative Programming" 
          description="Courses in programming, i.e. Processing" 
          text="hwoeijelsifjeslfjels" 
          backgroundImage="/vue-portfolio/media-tech/image_2024-12-27_19-19-46.png" 
          heroImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png"
          heroVideo="/vue-portfolio/media-tech/video_2024-12-27_21-28-33.mp4"
          :media="[
            {type: 'video', path: '/vue-portfolio/media-tech/video_2024-12-27_21-28-33.mp4'},
            {type: 'video', path: '/vue-portfolio/media-tech/etch_a_sketch.mp4'},
            {type: 'video', path: '/vue-portfolio/media-tech/alpaca.mp4'},
            ]"
          />
      </div>

      <div class="grid__row">
        <grid-card 
          title="Exhibition: Science to Experience" 
          description="Hosting an exhibition in Rotterdam" 
          text="hwoeijelsifjeslfjels" 
          backgroundImage="/vue-portfolio/media-tech/image_2023-06-03_16-10-18.png" 
          heroImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png" 
          heroVideo="/vue-portfolio/media-tech/signal-2023-06-06-14-29-44-625.mp4"
          :media="[
            {type: 'video', path: '/vue-portfolio/media-tech/signal-2023-06-06-14-29-44-625.mp4'},
            {type: 'image', path: '/vue-portfolio/media-tech/image_2023-06-03_16-10-18.png'},
            {type: 'video', path: '/vue-portfolio/media-tech/VID_20230609_140904.mp4'},
            ]"
          />
        <grid-card 
          title="Hardware and Physical Computing" 
          description="Soldering and working with sensors and actors on an Arduino" 
          text="hwoeijelsifjeslfjels" 
          backgroundImage="/vue-portfolio/media-tech/image_2024-12-27_19-02-02.png" 
          heroVideo="/vue-portfolio/media-tech/Video van WhatsApp op 2024-01-16 om 13.05.53_92de3586.mp4"
          :media="[
            {type: 'video', path: '/vue-portfolio/media-tech/Video van WhatsApp op 2024-01-16 om 13.05.53_92de3586.mp4'},
            {type: 'image', path: '/vue-portfolio/media-tech/image_2024-12-27_18-49-49.png'},
            {type: 'image', path: '/vue-portfolio/media-tech/image_2024-12-27_19-02-02.png'}
          ]">
          hoi
        </grid-card>
        <grid-card 
          title="Human Computer Interaction and Information Visualization" 
          description="UX" 
          text="hwoeijelsifjeslfjels" 
          backgroundImage="/vue-portfolio/media-tech/image_2024-12-27_21-15-00.png" 
          heroImage="/vue-portfolio/media-tech/Schermafbeelding 2024-12-27 170010.png"
          :media="[
            {type: 'image', path: '/vue-portfolio/media-tech/Schermafbeelding 2024-12-27 162150.png'},
            {type: 'image', path: '/vue-portfolio/media-tech/image_2024-12-27_21-15-48.png'},
            {type: 'image', path: '/vue-portfolio/media-tech/birds_normal_list.png'},
            {type: 'image', path: '/vue-portfolio/media-tech/birds_filter.png'},
            {type: 'image', path: '/vue-portfolio/media-tech/birds_list.png'},
            {type: 'image', path: '/vue-portfolio/media-tech/birds_map.png'},
            {type: 'image', path: '/vue-portfolio/media-tech/birds_detail.png'},
            {type: 'image', path: '/vue-portfolio/media-tech/birds_locations.png'},
            {type: 'image', path: '/vue-portfolio/media-tech/birds_resources.png'},
            {type: 'image', path: '/vue-portfolio/media-tech/storyboard1.png'},
            {type: 'image', path: '/vue-portfolio/media-tech/storyboard2.png'},
            {type: 'image', path: '/vue-portfolio/media-tech/birds_diagram.png'},
          ]"
          />
        <grid-card 
          title="Kotlin App" 
          description="(Elective project)" 
          backgroundImage="/vue-portfolio/media-tech/Schermafbeelding 2024-12-27 162150.png" 
          heroImage="/vue-portfolio/media-tech/kotlin-home.png"
          :media="[
            {type: 'image', path: '/vue-portfolio/media-tech/Schermafbeelding 2024-12-27 162150.png'},
          ]"
        >
        As an elective project, I learned how to create an Android app in Kotlin.
        </grid-card>
      </div>
      
      <div class="grid__row">
        <grid-card 
          title="Modern Game AI Algorithms" 
          description="Algorithms used in gaming" 
          backgroundImage="/vue-portfolio/media-tech/image_2024-12-27_20-41-15.png" 
          heroImage="/vue-portfolio/media-tech/image_2024-12-27_20-41-15.png"
          :media="[
            {type: 'image', path: '/vue-portfolio/media-tech/image_2024-03-09_22-10-50.png'},
            {type: 'image', path: '/vue-portfolio/media-tech/image_2024-03-09_22-07-24.png'},
            {type: 'youtube', path: 'https://www.youtube.com/embed/cvI72eArJUg?si=jvsFNhdvKrJd7oLd'}
          ]"
        >
          <div>
            <p>Individually created an algorithm to generate a 'Barbie' themed house in Minecraft, that is different in shape, size and features every time and is automatically built in the best location in the perimeter on the map. The house will not be placed on top of a tree: only on flat areas. If there is no flat area that is big enough for the house, it will change the size of the house. If it is too small, it will generate a platform (attached to the biggest flat area) to build the house on.</p>
            <p>In a team, I created an algorithm that generates a multi-level platform game in Minecraft, which is different every time you play it. Important features are:
              <ul>
                <li>Procedural content generation</li>
                <li>Adaptive difficulty</li>
                <li>Randomness</li>
                <li>Monte Carlo tree search</li>
              </ul>

            </p>
          </div>
        </grid-card>
        <grid-card 
          title="Non-human Cognition" 
          description="Behavior in animals and funghi" 
          text="In a team, I conducted a research experiment on pigeon behavior in a teammate's backyard. We reported the observations of pigeon behavior at feeding time on a poster." 
          backgroundImage="/vue-portfolio/media-tech/NHC POSTER PRINT-1_thumbnail.png" 
          heroImage="/vue-portfolio/media-tech/NHC POSTER PRINT-1.png"
          :media="[
            {type: 'image', path: '/vue-portfolio/media-tech/NHC POSTER PRINT-1.png'},
          ]"
        />
        <grid-card 
          title="Playful and Creative Science" 
          description="Visualize the output of scientific research in a creative way" 
          backgroundImage="/vue-portfolio/media-tech/image_2024-12-27_18-44-44.png" 
          heroImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png"
          heroVideo="/vue-portfolio/media-tech/Video van WhatsApp op 2024-01-19 om 00.42.54_4ebd93c2.mp4"
          :media="[
            {type: 'video', path: '/vue-portfolio/media-tech/Video van WhatsApp op 2024-01-19 om 00.42.54_4ebd93c2.mp4'},
            {type: 'image', path: '/vue-portfolio/media-tech/Afbeelding van WhatsApp op 2024-01-19 om 00.42.25_5e5aeb22.jpg'},
            {type: 'image', path: '/vue-portfolio/media-tech/Afbeelding van WhatsApp op 2024-01-19 om 00.46.39_12a44efe.jpg'},
            {type: 'image', path: '/vue-portfolio/media-tech/Afbeelding van WhatsApp op 2024-01-19 om 00.45.44_d920764c.jpg'},
            {type: 'image', path: '/vue-portfolio/media-tech/Afbeelding van WhatsApp op 2024-01-19 om 00.43.27_8df6dea1.jpg'},
            
          ]"
        >
          With a teammate, I crafted an interactive peephole box. A scientic paper reported that bees stop humming during a solar eclipse.
          We wanted to visualize this phenomenon in a creative way. Using a light sensor, a servo motor and a buzzer, we triggered an Arduino to cover the light-hole of the box with a cardboard "moon" whenever a person covered the top of the box using the "solar eclipse activator lid".
        </grid-card>
        <grid-card 
        title="Research Fundamentals" 
        description="hallo" 
        backgroundImage="/vue-portfolio/media-tech/image_2024-12-27_20-29-43.png" 
        heroImage="/vue-portfolio/media-tech/image_2024-12-27_20-29-43.png"
        >
        I wrote a <a href="/vue-portfolio/media-tech/7-papers-assignment_annelies_vaandrager_s3624587.pdf" target="_blank">literature review</a> about papers about Retrograde Crycopharyngeal Dysfunction (R-CPD).
     
        </grid-card>
      </div>
        
      <div class="grid__row">
        <grid-card 
          title="Robotics" 
          description="Learning the basics of robotics" 
          text="hwoeijelsifjeslfjels" 
          backgroundImage="/vue-portfolio/media-tech/image_2024-12-27_21-09-57.png" 
          heroImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png" 
          heroVideo="/vue-portfolio/media-tech/robotics ‐ Gemaakt met Clipchamp.mp4"
          :media="[
            {type: 'video', path: '/vue-portfolio/media-tech/robotics ‐ Gemaakt met Clipchamp.mp4'},
            {type: 'image', path: '/vue-portfolio/media-tech/image_2024-12-27_21-09-57.png'},
            
          ]"
        />
        <grid-card
          title="Sciences and Humanities" 
          description="The opinion of what 'truth' is, according to various philosophers" 
          backgroundImage="/vue-portfolio/media-tech/image_2024-12-28_19-55-44.png" 
          heroImage="/vue-portfolio/media-tech/image_2024-12-28_19-55-44.png"
          >
          A teammate and I created a plan for a hypothetical installation in the stellarium in Leiden.
          <a href="/vue-portfolio/media-tech/Sciences_and_Humanities_Final_Assignment.docx.pdf">View</a>
        </grid-card>
        <grid-card 
          title="Sound, Space and Interaction" 
          description="Creating installations with the use of sound, using PureData" 
          backgroundImage="/vue-portfolio/media-tech/image_2024-12-28_18-24-55.png" 
          heroVideo="/vue-portfolio/media-tech/ghostbusters.mp4"
          :media="[
            {type: 'video', path:'/vue-portfolio/media-tech/ghostbusters.mp4'},
            {type: 'image', path:'/vue-portfolio/media-tech/image_2024-12-28_18-24-55.png'}
          ]">
          For the final assignment of Sound, Space and Interaction, a teammate and I created an interactive installation where someone "scares" ghosts using a flashlight.
          A person is surrounded by 4 speakers. A light sensor (LDR) is attached to each speaker. All light sensors are connected to an Arduino, which is connected to a laptop. The speakers are also connected to the laptop.
          The Arduino registers the brightness values from the sensors, and sends this to the laptop. In PlugData, ghost sounds are played on the 4 speakers. If the person points the flashlight in a direction, the ghost sounds will
          "move" to the speakers in the other corners. For the person standing in the center, it will sound as if the ghosts move around them to avoid the light.
          If the person quickly points the light in a certain direction, the ghosts make a squeal sound before they "run" away, as if the ghosts were startled.


        </grid-card>
        <grid-card 
          title="Strategies in Creative and Performing Arts" 
          description="" 
          backgroundImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png" 
          heroImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png"
          :media="[
            {type: '', path:''}
          ]">
          For this course, I came up with my own art strategy: invisible effort. <a href="/vue-portfolio/media-tech/Final assignment.pdf" target="_blank">View</a>
          </grid-card>
      </div>
      
      <div class="grid__row">
        <grid-card title="Graduation Project" description="Thesis, work in progress." backgroundImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png" heroImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png" :disableUnfold="true">
          For my thesis, I am using computational methods to discover new insights about a relatively unknown medical condition, called retrograde cricopharyngeal dysfunction (R-CPD). 
          I have performed content analysis on 11.904 Reddit posts, from a subreddit called "r/noburp". This subreddit is about R-CPD has over 33.000 members.
        </grid-card>
      </div>
    </div>
  </section-component>
</template>

<script>
import SectionComponent from "./SectionComponent.vue";
import GridCard from "./GridCard.vue";
import Photo1 from "../assets/img/logo-vue.svg"
export default {
  components: {
    SectionComponent,
    GridCard
  },
  data() {
    return {
    }
  },
  methods: {
    getImagePath(path) {
      console.log( new URL(path, import.meta.url))
      return new URL(path, import.meta.url).href

    }
  }
}

</script>

<style>

</style>