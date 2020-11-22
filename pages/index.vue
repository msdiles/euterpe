<template>
  <div class="main">
    <div class="word-list">
      <Word v-for="word in words" :key="word.id" :word="word"></Word>
      <button class="button"
              @click="isModalOpen=true"
      >Добавить новое слово
      </button>
    </div>
    <AddForm v-if="isModalOpen" @close="isModalOpen=false" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Word from '~/components/Word'
import AddForm from '~/components/AddForm'
import { GET_WORDS } from '~/graphql/words'

export default {
  components: { Word },
  async asyncData({ $axios, store, app }) {
    const response = await app.apolloProvider.defaultClient.query({ query: GET_WORDS })
    store.commit('setWords', response.data.words)
    return {}
  },
  data: () => ({
    isModalOpen: false
  }),
  computed: {
    ...mapState(['words'])
  },
  comments: {
    Word, AddForm
  }
}
</script>

<style lang="scss">
@import "./styles/mixins";


.main {
  height: auto;
  padding-bottom: 3rem;
}

.word-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
  height: auto;
  width: 40%;
  min-width: 600px;
  padding: 3rem 5%;
  margin: 3rem auto;
  background: #e6e3e3;
  border-radius: 10px;
}


</style>
