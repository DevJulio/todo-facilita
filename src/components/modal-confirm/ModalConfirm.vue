<!-- O modal confirm é diferente do componente de modal o suficente para ser um componente separado -->
<template>
  <div v-if="isVisible" class="modal-overlay" @click="closeOnOverlayClick">
    <div class="modal-content" @click.stop>
      <div class="modal-body">
        <div class="icon-container">
          <fa icon="trash-can" style="color: #486481" />
        </div>
        <div class="title">
          <span class="regular">Tem certeza que deseja </span>
          <span class="emphasis">excluir </span>
          <span class="regular">esta tarefa?</span>
        </div>
        <span class="description">Esta ação não poderá ser desfeita.</span>
        <div class="modal-footer">
          <FAButton label="Cancelar" :action="closeModal" />
          <FAButton label="Confirmar" type="danger" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FAButton from '../button/Button.vue'

export default {
  name: 'FAModalConfirm',
  components: {
    FAButton
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false
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
  max-width 600px
  position relative

.modal-body
  padding 20px
  text-align center
  display flex
  flex-direction column
  align-items center
  .icon-container
    background-color #edf6fc
    border-radius 100px
    font-size 100px
    padding 20px
    padding-inline 60px
    margin-bottom 2vh
  .title
    font-family $td-bold
    font-size 22px
    column-gap 6px
    display flex
    flex-direction row
    .regular
      color $td-title
    .emphasis
      color $td-red
  .description
    font-family $td-semi-bold
    color $td-title
    font-size 16px
    margin-top -4px
.modal-footer
  display flex
  flex-direction row
  column-gap 1vw
  width 15vw
  margin-top 4vh
</style>
