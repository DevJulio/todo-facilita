<template>
  <FAModal :isVisible="isVisible" @close="closeModal" :title="title">
    <div class="form">
      <FAInput label="Título:" placeholder="" :v-model="titleTask" />
      <FAInput label="Descrição:" placeholder="" :v-model="description" isTextField="true" />
      <div class="footer">
        <div class="radio-container">
          <input type="radio" value="opcao1" v-model="selectedOption" />
          <span class="lbl">Urgente</span>
          <input type="radio" value="opcao1" v-model="selectedOption" />
          <span class="lbl">Importante</span>
        </div>

        <div class="btn-container">
          <FAButton :action="login" :label="btnLbl" :type="isDisabled ? 'disabled' : 'success'" />
        </div>
      </div>
    </div>
  </FAModal>
</template>

<script>
import FAModal from '../modal/ModalComponent.vue'
import FAInput from '../input/Input.vue'
import FAButton from '../button/Button.vue'

export default {
  name: 'FAModalForm',
  components: {
    FAModal,
    FAInput,
    FAButton
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    btnLbl: {
      type: String
    }
  },
  data() {
    return {
      isModalVisible: false,
      titleTask: '',
      description: ''
    }
  },
  methods: {
    openModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/theme.styl'


.form
  display flex
  flex-direction column
  margin-top 2vh
  color black
  .footer
    display flex
    flex-direction row
    width 100%
    .btn-container
     color black
     margin-left auto
    .radio-container
     display flex
     flex-direction row
     width 100%
     place-self center;
     margin-bottom auto;
    .lbl
      font-family $td-semi-bold
      color $td-input-lbl
      margin-right 1vw
      margin-left 0.3vw
    // .input

.popover-container
  position relative
  display inline-block

.popover-content
  position absolute
  top -44%
  transform translateX(-65%)
  width 110px
  padding 15px
  background-color white
  box-shadow 0 4px 8px rgba(0, 0, 0, 0.1)
  border-radius 8px
  text-align center
  z-index 10
  display flex
  flex-direction row
  justify-content right
  .item-list
   display flex
   flex-direction column
   margin-top -5px
   row-gap 10px
   .item
     display flex
     flex-direction row
     align-items center
     column-gap 10px
     cursor pointer
     .label
       font-family $td-semi-bold
       color #748CA5
   &::before
    content ''
    position absolute
    top -10px
    left 50%
    transform translateX(-50%)
    border 10px solid transparent
    border-bottom-color white
</style>
