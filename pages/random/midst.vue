<template>
  <div class="mtx">
    <client-only>
      <section class="content-wrapper">
        <div class="output-messages relative">
  				<h2> > in the midst of</h2>
  				<p>double click on any two squares to find the difference in date between.</p>
  				<p>you can also click/grab to swipe instead of just using the scrollbar.</p>


  				<div class="currently-selected absolute-top-right">
  					<div v-if="selectedDates.length >= 1">
  						<span class="large-text-detail">1<sup>st</sup> Date:</span>
  						<span class="med-text-detail">{{ selectedDates[0] }}</span>
  					</div>
  					<div v-if="selectedDates.length >= 2">
  						<span class="large-text-detail">2<sup>nd</sup> Date:</span>
  						<span class="med-text-detail">{{ selectedDates[1] }}</span>
  					</div>
  					<div v-if="selectedDates.length > 0" class="button-wrapper">
  						<button type="button" name="button" v-on:click="clearAllSelectedDates" class="button-style">Clear</button>
  					</div>
  				</div>
  				<div class="output-value half" v-if="selectedDates.length == 2">
  					{{ differenceBetweenTwoSelectedDates }} days
  				</div>

  			</div>

  			<div class="scrollable-container row mtx" v-dragscroll>
  				<div class="scroll-x-container">
  					<month-wrapper v-for="n in 14" v-bind:index="(n-1)" class="month-wrapper" />
  				</div>
  			</div>
      </section>
    </client-only>
  </div>
</template>

<script>

import { mapActions, mapGetters }                   from "vuex";
//import $ 																from "jquery";
import moment 													from "moment";
//import dragscroll                       from "dragscroll";

import Month from "~/components/midst/Month.vue";

export default {
  components: {
    "month-wrapper": Month
  },
  computed: {
    ...mapGetters([
      "numDays",
      "selectedDates"
    ]),
    differenceBetweenTwoSelectedDates(){
      if (this.selectedDates.length === 2){

        let firstChopped = this.selectedDates[0].split("-");

        let firstYear = firstChopped[0];
        let firstMonth = (Math.floor(firstChopped[1])) - 1;
        let firstDay = Math.floor(firstChopped[2]);

        let secondChopped = this.selectedDates[1].split("-");
        let secondYear = secondChopped[0];
        let secondMonth = (Math.floor(secondChopped[1])) - 1;
        let secondDay = Math.floor(secondChopped[2]);

        let firstDateAsMoment = moment().year(firstYear).month(firstMonth).date(firstDay);
        let secondDateAsMoment = moment().year(secondYear).month(secondMonth).date(secondDay);

        let numDays = secondDateAsMoment.diff(firstDateAsMoment, "days");

        this.$store.dispatch("storeNumDays", numDays);

        return numDays;

      }
    }
  },
  data(){
    return {
    }
  },
  head () {
    return {
      title: "In The Midst Of | vohzd.com",
      meta: [
        { hid: "description", name: "description", content: "Find the number of days between two dates." },
        { hid: "keywords", name: "keywords", content: "time, calendar" },
      ]
    }
  },
  methods: {
    ...mapActions([
      "clearAllSelectedDates"
    ])
  }
}

</script>

<style>


.scrollable-container {
  overflow-x: scroll;
  width: calc(100% - 64px);
}

.scroll-x-container {
  width: 10000px;
}

.month-wrapper {
  display: inline-block;
  width: 700px;
  float: left;
}

.output-messages {
  margin-bottom: 64px;
  letter-spacing: 1px;
}

.output-messages h3 {
  margin-bottom: 16px;
  font-size: 24px;
}

.output-messages p {
  margin-bottom: 8px;
  font-size: 15px;
}

.output-value {
  float: left;
  position: relative;
  font-size: 56px;
}

.half {
  width: 50%;
  float: left;
}

.button-wrapper {
  margin-top: 16px;
  float: left;
}
.button-wrapper button{
  width: 128px;
  padding: 8px;
  background: rgba(141, 165, 202, 0.3);
  outline: none;
  border: 1px solid rgba(141, 165, 202, 0.6);
}

.button-wrapper button:hover{
  cursor: pointer;
  opacity: 0.7;
}

.large-text-detail {
  font-size: 24px;
}

</style>
