<template>
  <div class="todo-item" :id="idItem" :style="{ opacity: isDisabled == true ? '0.5' : '1' }">
    <input type="checkbox" checked="checked" />

    <span class="label">{{ label }}</span>
    <div
      class="badge"
      v-if="badge != ''"
      :style="{ backgroundColor: badge == 'Urgente' ? '#FF2E79' : '#FFC42E' }"
    >
      {{ badge }}
    </div>
    <FAPopOver />
  </div>
</template>

<script>
import FAPopOver from '../pop-over/PopOver.vue'
export default {
  components: {
    FAPopOver
  },
  name: 'FATodoItem',
  props: {
    label: {
      type: String,
      required: true
    },
    isDisabled: {
      type: Boolean,
      required: true
    },
    currentClicked: {
      type: String,
      required: true
    },
    idItem: {
      type: String,
      required: true
    },
    badge: {
      type: String
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/theme.styl'

 .label
  color black
  font-family $td-semi-bold
  margin-left 1vw
  font-size 15px
 .todo-item
  display: flex;
  flex-direction row
  width 100%
  padding 15px
  align-items center
  margin-bottom 0.5vw
  border-radius 5px
  background-color white
 .badge
  color white
  font-family $td-semi-bold
  border-radius 25px
  margin-left: auto;
  padding-inline: 1vw;
  font-size 14px
</style>
