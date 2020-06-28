import format from "date-fns/format";
import parseISO from "date-fns/parseISO";
import Vue from "vue";

Vue.filter("parseISO", string => parseISO(string));

Vue.filter("dateFilter", timestamp => format(timestamp, "PPPP"));
Vue.filter("timeFilter", timestamp => format(timestamp, "HH:mm:ss dd/MM/yyyy"));
Vue.filter("monthName", timestamp => format(timestamp, "MMMM"))
