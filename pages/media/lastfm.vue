<template>
  <section class="background-wrapper colour2">
    <section class="content-wrapper flex pad">
      <h2 class="second-header">Export all your tracks</h2>
      <section class="mt ml">
        <input v-model="user" placeholder="last.fm username" class="mr" /><button @click="go">{{ buttonText }}</button>
        <div v-if="numPages">
          <p>Downloaded {{ currentPage }} / {{ numPages }} pages.</p>
          <p>Downloaded {{ trackDownloadProgress }} / {{ numTracks }} tracks!</p>
        </div>
      </section>
      <section class="ml mt">
        <ul v-if="tracks" class="exported-tracks">
          <li v-for="track in tracks">
            <span v-if="track.artist">{{ track.artist["#text"] }} - </span>
            <span v-if="track.name">{{ track.name }}</span>
            <!--<span v-if="track.album">{{ track.album["#text"] }}</span>-->
            <span v-if="track.date" class="tiny">({{ track.date["#text"] }})</span>
          </li>
        </ul>
      </section>
    </section>
  </section>

</template>

<script>
	export default {
    data(){
      return {
        user: null,
        numPages: null,
        numTracks: null,
        currentPage: 436,
        trackDownloadProgress: 1,
        tracks: null,
        buttonText: "Commence"
      }
    },
    methods:{
      async go(){
        this.buttonText = "Working";
        await this.retreiveTracks();
        while (this.currentPage < this.numPages){
          if (this.currentPage < this.numPages){
            this.currentPage++;
            let countup = setInterval(() => {
              this.trackDownloadProgress += 1;
            }, 2);
            setTimeout(() => {
              clearInterval(countup)
            }, 1500);
          }
          await this.retreiveTracks();
        }
        this.buttonText = "Completed";
        setTimeout(() => {
          this.trackDownloadProgress = this.numTracks;

        }, 600)
      },
      async retreiveTracks(){
        try {

          let res = await this.$axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${this.user}&api_key=3329fbd5c9a9642aac2144cff8dc183a&format=json&limit=200&page=${this.currentPage}`);
          if (!this.numPages){
            this.numPages = parseInt(res.data.recenttracks["@attr"].totalPages);
            this.numTracks = parseInt(res.data.recenttracks["@attr"].total);
          }
          !this.tracks ? this.tracks = res.data.recenttracks.track : this.tracks.push(...res.data.recenttracks.track);
        }
        catch (e){
          console.log(e)
        }
      }
    }
	}
</script>

<style>

  .exported-tracks {
    font-size: 0.7em;
  }

  .tiny {
    font-size: 0.5em;
  }

</style>
