<template>
  <div class="topbar">
    <div class="info-container">
      <img src="../../assets/images/profile.png" alt="profile" class="image" />
      <div class="info">
        <span class="top"> Eduardo Pereira da Costa </span>
        <span class="bottom"> Front-end Developer </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FATopBar'
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/theme.styl'
.topbar
 display flex
 flex-direction row
 height fit-content
 width 100%
 background-color #fff
 .info-container
   display flex
   flex-direction row
   margin-left auto
   padding 2.5vh 5vh 4vh
   .image
     border-radius 25px
     margin-right 0.5vw
     cursor pointer
   .info
     display flex
     flex-direction column
     .top
       font-family $td-semi-bold
       color $td-title
       font-size 18px
       margin-bottom -7px
     .bottom
       font-family $td-semi-bold
       color $td-blue
       font-size 14px
</style>
