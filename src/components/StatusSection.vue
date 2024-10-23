<template>
  <section-component :title="'status'">
    <div class="status__container">

        <img
            class="picture-half"
            src="../assets/img/IMG_20230807_142920_Bokeh.png"
            alt=""
        />
        <table class="status-text__container">
            <tr class="status-text__container-row status-text__container-row--header text-m"><td colspan="2">Full-Stack developer <span class="status-text__container-label text-xs">@Internetbureau Slik</span></td></tr>
            <tr class="status-text__container-row text-s">
                <td>
                    <label>Age:</label>
                </td>
                <td>
                    <p>{{ age }}</p>
                </td>
            </tr>
            <tr class="status-text__container-row text-s">
                <td>
                    <label>Degree:</label>
                </td>
                <td>
                    <p>MSc Media Technology, Leiden University</p>
                </td>
            </tr>
            <tr class="status-text__container-row text-s">
                <td>
                    <label>Languages:</label>
                </td>
                <td>
                    <p>Dutch, English</p>
                </td>
            </tr>
            <tr class="status-text__container-row text-s">
                <td>
                    <label>Location:</label>
                </td>
                <td>
                    <p>Rotterdam</p>
                </td>
            </tr>
        </table>
    </div>
  </section-component>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import SectionComponent from "./SectionComponent.vue";

export default  {
    extends: [Vue],
    components: {
        SectionComponent
    },
    computed: {
        age() {
            const today = new Date();
            const dateOfBirth = new Date("2000-07-10")
            let age = today.getFullYear() - dateOfBirth.getFullYear()
            let dm = today.getMonth() - dateOfBirth.getMonth()
            if(dm < 0 || (dm == 0 && today.getDate() < dateOfBirth.getDate())) {
                age--
            }
            return age
        }
    },
    setup() {
        return {

        }
    }
    
}
</script>

<style>

</style>