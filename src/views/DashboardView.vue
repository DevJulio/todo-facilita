<template>
  <div class="home-container">
    <div class="sidebar">
      <div class="img-container">
        <img src="../assets/images/logo.png" alt="Logo FacilitaTasks" class="image" />
        <fa icon="check" style="margin-left: -1.3vw; color: #0ed984" />
      </div>
      <div class="actions-container">
        <div class="action-item">
          <fa icon="circle-check" style="color: white" />
          <span class="label">Dashboard</span>
        </div>
      </div>
    </div>
    <div class="tasopbar">teste</div>
  </div>
</template>
<script></script>

<style lang="stylus" scoped>
@import '../assets/styles/theme.styl'

.home-container
  display flex
  height 100%
  width 100%
  flex-direction row
.sidebar
  display flex
  height: 100vh;
  width 8%
  flex-direction column
  background-color $td-blue
  place-items center
  place-content: center;

  .img-container
    display flex
    margin-top 2.5vw
    .image
      width 60px
  .actions-container
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction column
    .action-item
      display: flex;
      flex-direction column
      .label
        color white
        font-family $td-bold
        margin-top 2vw

.topbar
  display flex
  height fit-content
  width 100%
  flex-direction row
  background-color #fff
</style>
