<template lang="html">

  <div v-on:dblclick="cellClickHandler" v-bind:class="cssStyling">
        <label class="day-number-label">{{ dayNumber }}</label>
        <label class="day-text-label">{{ identifierAsShortDayLabel }}</label>
  </div>

</template>

<script>

import { mapGetters }         from "vuex";
//import $ 											from "jquery";
import moment 								from "moment";


export default {
  computed: {
    ...mapGetters([
      "numDays",
      "selectedDates"
    ]),
    cssStyling(){
      return {
        'highlighted-cell-main': this.isCellDateInArray,
        'higlighted-cell-trail': this.isCellTrail
      }
    },
    identifierAsShortDayLabel(){
      let chopped = this.identifier.split("-");
      let year = chopped[0];
      let month = (Math.floor(chopped[1])) - 1;
      let day = Math.floor(chopped[2]);
      let date = moment().year(year).month(month).date(day).format("dd");
      return date;
    },
    filterDate(){

    },
    isCellDateInArray(){
      if (this.selectedDates.length === 0) return false;
      else {
        //console.log("does this run again?")
        let result = this.selectedDates.filter((date) => {
          return this.identifier == date;
        });
        if (result.length === 1) return true;
        else return false;
      }
    },
    isCellTrail(){
      //if (selectedDates[0] == )
      return false;
    }
  },
	props: [
		"dayNumber",
    "identifier"
	],
  methods: {
    cellClickHandler(){

      if (this.selectedDates.length === 2) this.$store.dispatch("removeLastIdFromArray");
      this.$store.dispatch("addIdToArray", this.identifier);

      console.log(this.numDays);

    }
  }
}
</script>

<style lang="css">

  .highlighted-cell-main {
    background: var(--third-hex) !important;
  }

  .higlighted-cell-trail {
    background: rgba(0,0,0,0.2) !important;
  }

</style>
