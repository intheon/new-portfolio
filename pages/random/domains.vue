<template lang="html">
  <main class="mtx">
      <section class="intro-text">
        <p>Generate a funky domain name and check it's availability and price.</p>
        <p>Helpful for when you need to operate in reverse. Thinking of a cool domain hack and then checking its unavailable is a ballache!</p>
        <p>Select a TLD from the dropdown below and cycle through one. You can then query the price and availability.</p>
      </section>

      <section class="select-tld pad">
        <select v-model="userSelectedTLD" ref="tldSelectRef">
          <option disabled value="">Please select one</option>
          <option v-for="tld in allExistingTLDs" v-bind:value="tld">.{{ tld }}</option>
        </select>
        <div class="navigation-buttons">
          <button class="c50" type="button" name="button" v-on:click="getPrevOptionIndex" v-bind:disabled="isPrevButtonDisabled">Prev</button>
          <button class="c50" type="button" name="button" v-on:click="getNextOptionIndex" v-bind:disabled="isNextButtonDisabled">Next</button>
        </div>
      </section>

      <section class="parser pad" v-if="userSelectedTLD">
        <span>Selected TLD: {{ userSelectedTLD }}</span>
        <section class="parser-status pad" v-if="isProcessing">
          Processing...
        </section>
        <section class="parser-output" v-if="!isProcessing">
          <section class="has-results" v-if="allMatchingDomainNames.length">
            <a href="#" v-for="tldResult in allMatchingDomainNames" class="tld-result-item">{{ tldResult }}</a>
          </section>
          <section class="no-results" v-if="!allMatchingDomainNames.length">
            Sorreh :(
          </section>
        </section>
      </section>
  </main>
</template>

<script>

import { mapGetters }               from "vuex";

import tlds                         from "../../assets/tlds/tlds.json";
import lotsOfWords                  from "../../assets/words/english-words.json";

export default {
  data(){
    return {
      allExistingTLDs: [],
      allMatchingDomainNames: [],
      userSelectedTLD: "",
      isProcessing: false,
      isPrevButtonDisabled: false,
      isNextButtonDisabled: false,
      newIndex: null
    }
  },
  methods: {
    getNextOptionIndex(){
      this.newIndex = this.$refs.tldSelectRef.selectedIndex + 1;
      if (this.newIndex >= this.allExistingTLDs.length ){
        this.newIndex = 1;
      }
      this.updateSelectOption();
    },
    getPrevOptionIndex(){
      this.newIndex = this.$refs.tldSelectRef.selectedIndex - 1;
      if (this.newIndex <= 0 ){
        this.newIndex = this.allExistingTLDs.length;
      }
      this.updateSelectOption();
    },
    organiseMatch(){
      if (!this.isProcessing){
        this.isProcessing = true;
        this.searchArrayForMatches();
      }
    },
    resetArray(){
      this.allMatchingDomainNames = [];
    },
    searchArrayForMatches(){
      this.lotsOfWords.forEach((word, iteration) => {
        // will return the index if it exists or -1 if not
        let test = word.indexOf(this.userSelectedTLD);
        // important... to make a tld hack it needs to go at the end like rome.ro so cant be in the middle or start of the string
        // this means that the length of the 2 words subtracted must equal the index of the start position
        let cropPosition = Math.abs(this.userSelectedTLD.length - word.length);
        // match
        if (test > 0){
          if (cropPosition === test){
            let hostName = word.slice(0, cropPosition);
            let domainName = `${hostName}.${this.userSelectedTLD}`;
            this.allMatchingDomainNames.push(domainName);
          }
        }
        // todo = make this a promise
        this.isProcessing = false;
      });
    },
    updateSelectOption(){
      // so other html elements (like <buttons>) can programatically update the model
      this.userSelectedTLD = this.$refs.tldSelectRef[this.newIndex].value;
    }
  },
  mounted(){
    this.allExistingTLDs = tlds;
    this.lotsOfWords = lotsOfWords;
  },
  watch: {
    userSelectedTLD(){
      // on change... reinitialise at []
      this.resetArray();
      // perform a match
      this.organiseMatch();
    }
  }
}
</script>

<style lang="css">

  select {
    float:left;
    z-index:10;
    width:  100%;
    font-size: 18px;
    padding: 8px;
    background: rgb(31, 31, 33);
    border: none;
    color: #585858;
    font-weight: normal;
    outline: none;
    text-align: center;
    font-family: 'Titillium Web', sans-serif;
    width: 100%;
  }

  .pad {
    float: left;
    width: 100%;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .tld-result-item {
    padding: 8px;
    margin-right: 8px;
    margin-bottom: 8px;
    background: rgba(255,255,255,0.04);
  }

  .parser-output {
    width: 100%;
  }

  .navigation-buttons {
    margin-top: 32px;
    width: 100%;
    float: left;
  }

  .navigation-buttons button {
    width: 50%;
  }

  .navigation-buttons button[disabled=disabled] {
    opacity: 0.3;
  }

  .intro-text {
  }

  .intro-text h1 {
    font-size: 2em;
    margin-bottom: 4px;
  }

  .intro-text h2{
    font-size: 0.85em;
    margin-bottom: 4px;
  }

  .intro-text p {
    font-size: 0.7em;

  }


</style>
