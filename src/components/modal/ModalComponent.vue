<!-- O modal é um componente que recebe os elementos para serem exibidos de forma dinâmica -->
<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeOnOverlayClick">
    <div class="modal-content" @click.stop>
      <span class="title">{{ title }}</span>
      <button class="close-btn" @click="closeModal">&times;</button>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAModal',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    closeOnOverlayClick(event) {
      if (event.target === event.currentTarget) {
        this.closeModal()
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/theme.styl'
.modal-overlay
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  background-color rgba(0, 0, 0, 0.5)
  display flex
  justify-content center
  align-items center
  z-index 1000

.modal-content
  background-color white
  padding 20px
  border-radius 8px
  box-shadow 0 5px 15px rgba(0, 0, 0, 0.3)
  width 100%
  max-width 40vw
  position relative
  padding-left 2vw
  padding-top 3vh

.title
  font-family $td-semi-bold
  color $td-title
  font-size 28px
  padding-top 1vh
.close-btn
  position absolute
  top 10px
  right 10px
  background none
  border none
  font-size 24px
  cursor pointer
  color $td-input-lbl

.modal-body
  // padding 20px
  // text-align center
</style>
