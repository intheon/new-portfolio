import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import Vue from "vue";

Vue.filter("dateFilter", timestamp => format(timestamp, "pp"))
