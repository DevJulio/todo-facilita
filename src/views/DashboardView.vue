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
      <FATopBar />
      <div class="dashboard-row">
        <div class="left-container">
          <div class="data-container">
            <span class="title">Categorias</span>
            <div class="filter-list">
              <FAFilterItem
                label="Todas"
                @click="handleClickFilter(1)"
                :current-clicked="activeFilter"
                idItem="1"
                qtd="1"
              />
              <FAFilterItem
                label="Urgentes"
                @click="handleClickFilter(2)"
                :current-clicked="activeFilter"
                idItem="2"
                qtd="2"
              />
              <FAFilterItem
                label="Importantes"
                @click="handleClickFilter(3)"
                :current-clicked="activeFilter"
                idItem="3"
                qtd="3"
              />
              <FAFilterItem
                label="Outras"
                @click="handleClickFilter(4)"
                :current-clicked="activeFilter"
                idItem="4"
                qtd="4"
              />
              <FAFilterItem
                label="Finalizada"
                @click="handleClickFilter(5)"
                :current-clicked="activeFilter"
                idItem="5"
                qtd="5"
              />
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="top-container">
            <span class="title">Minhas Tarefas</span>
            <div class="wellcome">
              <span class="regular">Olá </span>
              <span class="emphasis">Eduardo Pereira</span>
              <span class="regular" style="margin-left: -4px">, você tem </span>
              <span class="emphasis_">4 tarefas</span>
              <span class="regular"> pendentes.</span>
            </div>
            <FASearchInput placeholder="Buscar Tarefas" />
          </div>
          <div class="todo-list">
            <h1>OPAAAA</h1>
            <h1>OPAAAA</h1>
            <h1>OPAAAA</h1>
            <h1>OPAAAA</h1>
            <h1>OPAAAA</h1>
            <h1>OPAAAA</h1>
            <h1>OPAAAA</h1>
            <h1>OPAAAA</h1>
            <h1>OPAAAA</h1>
            <h1>OPAAAA</h1>
            <h1>OPAAAA</h1>
            <h1>OPAAAA</h1>
            <h1>OPAAAA</h1>
            <h1>OPAAAA</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FAActionItem from '../components/action-item/ActionItem.vue'
import FATopBar from '../components/top-bar/TopBar.vue'
import FAFilterItem from '../components/filter-item/Filtertem.vue'
import FASearchInput from '../components/search/SearchInput.vue'

export default {
  components: {
    FAActionItem,
    FATopBar,
    FAFilterItem,
    FASearchInput
  },
  data() {
    return {
      activeAction: 1,
      activeFilter: 1
    }
  },
  methods: {
    handleClickAction(id) {
      this.activeAction = id
    },
    handleClickFilter(id) {
      this.activeFilter = id
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/styles/theme.styl'

.home-container
  display flex
  flex-direction row
  height 100%
  width 100%
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
  width 100%
  height 100%
  .dashboard-row
   display flex
   flex-direction row
   height 100%
   width 100%
   .left-container
    background-color #f4fbff
    display flex
    .data-container
     flex-grow 1
     display flex
     justify-content center
     align-items center
     flex-direction column
     color black
     margin-top -10vh

     .title
      font-family $td-bold
      color $td-title
      font-size 22px
      margin-bottom 7vh
      margin-left -2.5vw
     .filter-list
      display flex
      flex-direction column
      width 100%
   .right-container
    background-color #e9f4fb
    display flex
    flex-direction column
    height 100%
    place-content center
    .top-container
      display flex
      flex-direction column
      align-self center
      .title
        font-family $td-bold
        color $td-title
        font-size 25px
      .wellcome
        display flex
        flex-direction row
        font-family $td-semi-bold
        font-size 16px
        column-gap 4px
        margin-top -1vh
        .regular
          color #77899E
        .emphasis
          color $td-blue
        .emphasis_
          color $td-blue
          text-decoration underline
     .todo-list
      display flex
      flex-direction column
      max-height 35vh
      overflow-y scroll
      color black
      align-items center
      width 32.5vw
      align-self center
</style>
