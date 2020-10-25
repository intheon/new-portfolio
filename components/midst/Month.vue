<template lang="html">
  <section>
    <h3 class="month-title">{{ dynamicMonthTitle }}</h3>
    <cell class="cell" v-for="day in dynamicMonthDays" v-bind:identifier="uniqueCellIdentifier(day)" v-bind:dayNumber="day"/>
  </section>
</template>

<script>

import { mapGetters }                   from "vuex";

//import $ 																from "jquery";
import moment 													from "moment";

import Cell 														from "~/components/midst/Cell.vue";

export default {

  components: {
    Cell
  },
  computed: {
    ...mapGetters([
    ]),
    dynamicMonthDays(){
      return moment().add(this.index, "months").daysInMonth();
    },
    dynamicMonthTitle(){
      return moment().add(this.index, "months").format("MMMM YYYY");
    },
    uniqueMonthIdentifier(){
      return moment().add(this.index, "months").format("YYYY-MM");
    }
  },
  props: [
    "index",
  ],
  methods: {
    uniqueCellIdentifier(dayInteger){
      return `${this.uniqueMonthIdentifier}-${dayInteger}`;
    }
  }

}
</script>

<style lang="css">

.cell {
  width: 100px;
  height: 100px;
  display: inline-block;
  -webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}

.cell:nth-child(6n+1){
  clear: both;
}

.cell:hover {
  opacity: 0.7;
  cursor: pointer;
}


.cell:nth-child(odd) {
  background: rgba(223, 246, 254, 0.08);
}

.cell:nth-child(even) {
  background: rgba(141, 165, 202, 0.3);
}


.month-wrapper:nth-child(even) .cell:nth-child(even) {
  background: rgba(223, 246, 254, 0.08);
}

.month-wrapper:nth-child(even) .cell:nth-child(odd) {
  background: rgba(141, 165, 202, 0.3);
}

.month-title {
  padding-bottom: 16px;
}


</style>
