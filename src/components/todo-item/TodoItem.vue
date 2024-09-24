<template>
  <div class="todo-item" :id="idItem" :style="{ opacity: isCheked == true ? '0.5' : '1' }">
    <input type="checkbox" :checked="isCheked" @change="handleCheckboxChange" />

    <span class="label" :style="{ textDecoration: isCheked == true ? 'line-through' : 'unset' }">{{
      label
    }}</span>
    <div
      class="badge"
      v-if="badge != ''"
      :style="{ backgroundColor: badge == 'Urgente' ? '#FF2E79' : '#FFC42E' }"
    >
      {{ badge }}
    </div>
    <div :style="{ pointerEvents: isCheked == true ? 'none' : 'all' }">
      <FAPopOver />
    </div>
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
    isCheked: {
      type: Boolean,
      required: true
    },
    idItem: {
      type: String,
      required: true
    },
    badge: {
      type: String
    }
  },
  methods: {
    handleCheckboxChange() {
      this.$store.commit('updateStatus', this.idItem)
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
  width 100%
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
