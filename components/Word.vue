<template>
  <div class="word">
    <div class="title">{{ word.title }}</div>
    <div class="meaning">{{ word.meaning }}</div>
  </div>
</template>


<script>
export default {
  props: { word: { type: Object } }
}
</script>

<style scoped lang="scss">
.word {
  width: 100%;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  background: #fff;


  & .title {
    padding-left: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 20px;
    font-weight: bold;
  }

  & .meaning {
    font-size: 16px;
    padding: 0.5rem;
  }
}
</style>
