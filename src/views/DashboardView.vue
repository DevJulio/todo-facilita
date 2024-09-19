<template>
  <div class="home-container">
    <div class="sidebar">
      <div class="img-container">
        <img src="../assets/images/logo.png" alt="Logo FacilitaTasks" class="image" />
        <fa
          icon="check"
          style="margin-left: -1vw; color: #0ed984; font-size: 30px; margin-top: -1vh"
        />
      </div>
      <div class="actions-container">
        <div class="action-item">
          <fa icon="chart-column" style="color: white; font-size: 40px" />
          <span class="label">Dashboard</span>
        </div>
        <div class="action-item">
          <fa icon="circle-check" style="color: white; font-size: 40px" />
          <span class="label">Tarefas</span>
        </div>
        <div class="action-item">
          <fa icon="gears" style="color: white; font-size: 40px" />
          <span class="label">Configurações</span>
        </div>
      </div>
    </div>
    <div class="topbar">teste</div>
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
  width 7%
  flex-direction column
  background-color $td-blue
  place-items center
  place-content: center;

  .img-container
    display flex
    margin-top 2.5vw
    .image
      width 70px
   .actions-container
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction column
    width: 100%;
    margin-top -6vh
    .action-item
      display: flex;
      flex-direction column
      width 100%
      border solid #46A3FF 1px
      padding 10px 0px 10px 0px
      align-items center
      margin-bottom -1px

      .label
        color white
        font-family $td-medium
        margin-top 0.5vw

.topbar
  display flex
  height fit-content
  width 100%
  flex-direction row
  background-color #fff
</style>
