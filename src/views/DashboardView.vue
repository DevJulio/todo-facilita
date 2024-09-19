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
        <!-- Foram usados ícones compativeis e uma lógica para manter um item com destaque de cor-->
        <FAActionItem
          icon="chart-column"
          label="Dashboard"
          @click="handleClickAction(1)"
          :current-clicked="activeAction"
          idItem="1"
        />
        <FAActionItem
          icon="circle-check"
          label="Tarefas"
          @click="handleClickAction(2)"
          :current-clicked="activeAction"
          idItem="2"
        />
        <FAActionItem
          icon="gears"
          label="Configurações"
          @click="handleClickAction(3)"
          :current-clicked="activeAction"
          idItem="3"
        />
      </div>
    </div>
    <div class="right-container">
      <div class="topbar">
        <div class="info-container">
          <img src="../assets/images/profile.png" alt="profile" class="image" />
          <div class="info">
            <span class="top"> Eduardo Pereira da Costa </span>
            <span class="bottom"> Front-end Developer </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FAActionItem from '../components/action-item/ActionItem.vue'

export default {
  components: {
    FAActionItem
  },
  data() {
    return {
      activeAction: 1
    }
  },
  methods: {
    handleClickAction(id) {
      this.activeAction = id
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/styles/theme.styl'

.home-container
  display flex
  height 100%
  width 100%
  flex-direction row
.sidebar
  display flex
  height 100vh
  width 7%
  flex-direction column
  background-color $td-blue
  place-items center
  place-content center
  .img-container
    display flex
    margin-top 1.3vw
   .image
      width 70px
   .actions-container
    flex-grow 1
    display flex
    justify-content center
    align-items center
    flex-direction column
    width 100%
    margin-top -6vh
.right-container
  display flex
  flex-direction column
  width 93%
  height 100%
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
