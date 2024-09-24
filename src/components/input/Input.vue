<template>
  <div class="custom-input">
    <span :for="inputId" class="label" v-if="!isTextField">{{ label }}</span>

    <input
      class="input-style"
      :id="inputId"
      :placeholder="placeholder"
      :v-model="value"
      :type="inputType"
      v-if="!isTextField"
      @input="this.setValue($event.target.value)"
    />
    <span class="label" v-if="isTextField">{{ label }}</span>
    <textarea
      class="input-style"
      v-if="isTextField"
      :rows="7"
      :v-model="value"
      @input="this.setValue($event.target.value)"
    ></textarea>
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
    },
    isTextField: {
      type: Boolean,
      default: false
    },
    setValue: {
      type: Function,
      required: true
    }
  },
  computed: {
    inputId() {
      return this.label.toLowerCase().replace(/\s+/g, '-')
    },
    inputType() {
      return this.isPassword ? 'password' : 'text'
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
  padding 15px
  border 2px solid #BFDAEB
  border-radius 4px
  font-size 16px
  width 100%
  font-family $td-semi-bold
  transition border-color 0.3s ease

&:focus
  border-color $td-blue
  outline none
</style>
