<!-- :style="{ backgroundColor: idItem == currentClicked ? '#1182F2' : '#2693FF' }" -->
<template>
  <div class="filter-item" :id="idItem">
    <fa
      icon="chevron-right"
      :style="{
        color: idItem == currentClicked ? '#1182F2' : '#283848',
        fontSize: '14px'
      }"
    />
    <span
      class="label"
      :style="{
        color: idItem == currentClicked ? '#1182F2' : '#283848'
      }"
      >{{ label }}</span
    >
    <span
      class="qtd-container"
      v-if="idItem == 2 || idItem == 3"
      :style="{
        backgroundColor: idItem == 2 ? '#FF2E79' : '#FFC42E'
      }"
      >{{ qtd }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'FAFilterItem',
  props: {
    label: {
      type: String,
      required: true
    },
    qtd: {
      type: Number,
      required: true
    },
    currentClicked: {
      type: String,
      required: true
    },
    idItem: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/theme.styl'
.label
  font-family $td-semi-bold
  color $td-title
  font-size 18px
  margin-left 0.5vw
  margin-right 0.3vw
  cursor pointer

.filter-item
 display: flex;
 flex-direction row
 width 100%
 padding 10px 0px 10px 0px
 align-items center
 margin-left 3vw
 margin-right 4vw

.qtd-container
  border-radius 50px
  background-color $td-yellow
  color white
  padding-inline 8px
</style>
