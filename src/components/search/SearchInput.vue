<template>
  <div class="search">
    <input className="input" type="text" :placeholder="placeholder" :value="value" />
    <div className="icon">
      <fa icon="magnifying-glass" />
    </div>
  </div>
</template>
<!-- style="margin-left: -1vw; color: #0ed984; font-size: 30px; margin-top: -1vh" -->

<script>
export default {
  name: 'FASearchInput',
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
  methods: {
    updateValue(newValue) {
      this.$emit('input', newValue)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/theme.styl'
  .search
   display flex
   flex-direction row
   align-items center
   width 100%
   border 2px solid #BFDAEB
   border-radius 4px
   margin-top 3vh
   margin-bottom 1vh

   .icon
     color $td-blue-aux
     margin-top -3px
     margin-left auto
     margin-right 1vw
     font-size 25px


   .input
     font-size 20px
     padding 15px
     font-family $td-regular
     border-style none
     background-color transparent
     color $td-blue-aux
     width 30vw
     &::placeholder
       color $td-blue-aux
     &:focus
       outline none
       border none
</style>
