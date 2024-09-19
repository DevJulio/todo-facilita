<template>
  <div class="custom-input">
    <span :for="inputId" class="label">{{ label }}</span>
    <input
      class="input-style"
      :id="inputId"
      :placeholder="placeholder"
      :value="value"
      :type="inputType"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'FAInput',
  props: {
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    isPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputId() {
      //Gera um id baseado na label
      return this.label.toLowerCase().replace(/\s+/g, '-')
    },
    inputType() {
      return this.isPassword ? 'password' : 'text'
    }
  },
  methods: {
    updateValue(newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/theme.styl'

.custom-input
  display flex
  flex-direction column
  margin-bottom 15px
.label
  margin-bottom 5px
  font-family $td-semi-bold
  color $td-input-lbl
.input-style
  padding 20px
  border 2px solid #BFDAEB
  border-radius 4px
  font-size 16px
  width 30vw
  transition border-color 0.3s ease

&:focus
  border-color $td-blue
  outline none
</style>
