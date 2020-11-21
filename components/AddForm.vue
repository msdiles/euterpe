<template>
  <div class="layout" @click.stop="clickAwayListener">
    <form class="modal" @submit.prevent="addWord">
      <div class="close-button" @click="$emit('close')">
        <span class="material-icons">close</span>
      </div>
      <h2 class="title">Добавить слово</h2>
      <input class="word" v-model.trim="word" placeholder="Cлово" />
      <textarea class="meaning" v-model.trim="meaning" placeholder="Значение" rows="10" />
      <button class="button" :disabled="(!word || !meaning)" type="submit">Добавить</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    word: '',
    meaning: ''
  }),
  methods: {
    clickAwayListener(e) {
      if (e.currentTarget === e.target) {
        this.$emit('close')
      }
    },
    async addWord() {
      try {
        const newWord = await this.$axios.$post(process.env.serverUrl + '/words', {
          title: this.word, meaning:
          this.meaning
        })
        this.$store.commit('addWord', newWord)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>


<style scoped lang="scss">
@import "./styles/mixins";

.layout {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
}

.modal {
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 400px;
  width: 30%;
  height: 600px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background: #eeeded;

  .title {
    text-align: center;
    margin-bottom: 1rem;
  }

  .word {
    width: 80%;
    margin: 0 auto 2rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #1c92f0;
    outline: 0;
    font-size: 16px;
    color: #464646;

    &::placeholder {
      color: #9a9a9a;
    }
  }

  .meaning {
    width: 80%;
    margin: 0 auto 2rem;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #1c92f0;
    outline: 0;
    font-size: 16px;
    color: #464646;

    &::placeholder {
      color: #9a9a9a;
    }
  }

  .button {
    width: 80%;
    margin: 0 auto 2rem;
  }
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  user-select: none;

  @include interactive(0.90, 1.2, 200ms)
}
</style>
