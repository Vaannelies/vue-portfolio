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
          title="Computational Creativity" 
          description="The creativity of human vs computer" 
          text="hwoeijelsifjeslfjels" 
          backgroundImage="/vue-portfolio/media-tech/image_2024-12-27_19-24-31.png" 
          heroImage="/vue-portfolio/media-tech/Afbeelding van WhatsApp op 2023-12-06 om 14.40.56_d946d109.jpg"/>
        <grid-card 
          title="Creative Programming" 
          description="Courses in programming, i.e. Processing" 
          text="hwoeijelsifjeslfjels" 
          backgroundImage="/vue-portfolio/media-tech/image_2024-12-27_19-19-46.png" 
          heroImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png"
          heroVideo="/vue-portfolio/media-tech/video_2024-12-27_21-28-33.mp4"
          :media="[
            {type: 'video', path: '/vue-portfolio/media-tech/video_2024-12-27_21-28-33.mp4'},
            {type: 'video', path: '/vue-portfolio/media-tech/video_2024-12-27_21-28-33.mp4'},
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
            {type: 'image', path: '/vue-portfolio/media-tech/image_2024-12-27_18-49-49.png'},
            {type: 'image', path: '/vue-portfolio/media-tech/image_2024-12-27_19-02-02.png'}
          ]">
          hoi
        </grid-card>
        <grid-card 
          title="HCI" 
          description="Human Computer Interaction and Information Visualization" 
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
          text="hwoeijelsifjeslfjels" 
          backgroundImage="/vue-portfolio/media-tech/Schermafbeelding 2024-12-27 162150.png" 
          heroImage="/vue-portfolio/media-tech/kotlin-home.png"
          :media="[
            {type: 'image', path: '/vue-portfolio/media-tech/Schermafbeelding 2024-12-27 162150.png'},
          ]"
        />
      </div>
      
      <div class="grid__row">
        <grid-card title="Meta Media" description="Communicating using peculiar media" text="sdflkjd" backgroundImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png" heroImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png"/>
        <grid-card 
          title="Modern Game AI Algorithms" 
          description="Algorithms used in gaming" 
          backgroundImage="/vue-portfolio/media-tech/image_2024-12-27_20-41-15.png" 
          heroImage="/vue-portfolio/media-tech/image_2024-12-27_20-41-15.png"
          :media="[
            {type: 'image', path: '/vue-portfolio/media-tech/image_2024-03-09_22-10-50.png'},
            {type: 'image', path: '/vue-portfolio/media-tech/image_2024-03-09_22-07-24.png'}
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/cvI72eArJUg?si=jvsFNhdvKrJd7oLd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </grid-card>
        <grid-card 
          title="Non-human Cognition" 
          description="Behavior in animals and funghi" 
          text="My team and I conducted a research experiment on pigeon behavior in a teammate's backyard. We reported the observations of pigeon behavior at feeding time on a poster." 
          backgroundImage="/vue-portfolio/media-tech/NHC POSTER PRINT-1_thumbnail.png" 
          heroImage="/vue-portfolio/media-tech/NHC POSTER PRINT-1.png"
          :media="[
            {type: 'image', path: '/vue-portfolio/media-tech/NHC POSTER PRINT-1.png'},
          ]"
        />
        <grid-card 
          title="Playful and Creative Science" 
          description="Visualize the output of scientific research in a creative way" 
          text="hwoeijelsifjeslfjels" 
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
        />
      </div>
        
      <div class="grid__row">
        <grid-card title="Research Fundamentals" description="hallo" text="hwoeijelsifjeslfjels" backgroundImage="/vue-portfolio/media-tech/image_2024-12-27_20-29-43.png" heroImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png"/>
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
        <grid-card title="Sciences and Humanities" description="The opinion of what 'truth' is, according to various philosophers" text="hwoeijelsifjeslfjels" backgroundImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png" heroImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png"/>
        <grid-card title="Sound, Space and Interaction" description="Creating installations with the use of sound, using PureData" text="hwoeijelsifjeslfjels" backgroundImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png" heroImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png"/>
      </div>
      
      
      <div class="grid__row">
        <grid-card title="Strategies in Creative and Performing Arts" :reversed="true" description="hallo" text="hwoeijelsifjeslfjels" backgroundImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png" heroImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png"/>
        <grid-card title="Graduation Project" :reversed="true" description="hallo" text="hwoeijelsifjeslfjels" backgroundImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png" heroImage="/vue-portfolio/media-tech/Schermafbeelding_2024-12-27_143717.png"/>
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