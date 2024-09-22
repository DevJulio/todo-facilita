<template>
  <div class="popover-container">
    <fa
      icon="ellipsis-vertical"
      style="margin-left: 1vw; color: #9caec1; cursor: pointer; margin-top: 5px; margin-right: 8px"
      @click="togglePopover"
    />
    <div v-if="showPopover" class="popover-content">
      <div class="item-list">
        <div class="item">
          <fa icon="circle" style="color: #5ecda5" />
          <span class="label"> Editar </span>
        </div>
        <div class="item">
          <fa icon="circle" style="color: #d6e6ef" />
          <span class="label"> Excluir </span>
        </div>
      </div>
      <fa
        icon="ellipsis-vertical"
        style="margin-left: 8px; color: #2693ff; cursor: pointer"
        @click="togglePopover"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAPopOver',
  data() {
    return {
      showPopover: false
    }
  },
  methods: {
    togglePopover() {
      this.showPopover = !this.showPopover
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/theme.styl'

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
   row-gap 3px
   .item
     display flex
     flex-direction row
     align-items center
     column-gap 10px
     cursor pointer
     .label
       font-family $td-semi-bold
       color #748CA5
     //.icon
  &::before
    content ''
    position absolute
    top -10px
    left 50%
    transform translateX(-50%)
    border 10px solid transparent
    border-bottom-color white
</style>
