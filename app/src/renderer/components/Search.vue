<template>
  <section class="field section">
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Search" v-model="query">
        <span class="icon is-small is-left">
          <i class="fa fa-search"></i>
        </span>
      </p>
    </div>
    <ul class="content">
      <li v-for="item in results">
        <a @click="play(item)" v-text="item.title"></a>
      </li>
      <a v-if="results.length > 0" class="button" @click="more">More</a>
    </ul>
  </section>
</template>
<script>
import _ from 'lodash';
import axios from 'axios';
export default {
  data() {
    return {
      client_id: 'yhZSOFUtSUGz5OxWpiOhRi065lcrlAqI',
      query: '',
      offset: 0,
      results: [],
    };
  },
  watch: {
    query() {
      this.search();
    },
  },
  methods: {
    search: _.debounce(function search() {
      axios.get(`https://api.soundcloud.com/tracks?client_id=${this.client_id}&q=${this.query}&offset=${this.offset}`)
        .then((response) => {
          this.results = response.data;
        });
    }, 500),
    play(item) {
      this.$store.dispatch('change', item);
    },
    more() {
      this.offset += 10;
      this.search();
    },
  },
};
</script>
