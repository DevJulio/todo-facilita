<template>
  <div class="login-container">
    <div class="left">
      <div class="data-container">
        <div class="img-container">
          <!-- usando o figma normal, não consegui exportar as duas camadas mescladas, acabei inserindo o ícone manualmente e sem a borda -->
          <img src="../assets/images/logo.png" alt="Logo FacilitaTasks" />
          <fa icon="check" style="margin-left: -2.5vw; margin-top: -0.5vw; color: #0ed984" />
        </div>
        <div class="brand-container">
          <span class="left-span"> FACILITA </span>
          <span class="right-span">TASKS</span>
        </div>
        <span class="bottom-brand"> Gestão de tarefas pessoais </span>
      </div>
    </div>
    <div class="right">
      <div class="data-container">
        <span class="title"> Entre com seus dados de acesso. </span>
        <div class="form">
          <FAInput label="Nome de usuário ou e-mail:" placeholder="" v-model="email" />
          <FAInput label="Senha:" placeholder="" v-model="password" is-password="true" />
        </div>
        <div class="btn">
          <FAButton :action="login" label="Entrar" type="success" />
        </div>
        <a class="forget">Esqueci minha senha</a>
      </div>
    </div>
  </div>
</template>

<script>
import FAInput from '../components/input/Input.vue'
import FAButton from '../components/button/Button.vue'

export default {
  components: {
    FAInput,
    FAButton
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log('Formulário enviado', this.email, this.password)
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/styles/theme.styl'

.login-container
  display flex
  height 100%
  width 100%
  flex-direction row

.left
  display flex
  background-color $td-blue
  width 36%
  height 100%
  justify-content center

  .data-container
    display flex
    flex-direction column
    color white
    align-self center
    margin-top -6vw

    .img-container

    .brand-container
      display flex
      flex-direction row
      margin-bottom -16px
      letter-spacing: 1px
      font-size 50px

      .left-span
        font-family $td-bold
      .right-span
        font-family $td-regular
    .bottom-brand
     font-size 17px
     font-family $td-regular



.right
  display flex
  flex-direction column
  background-color #FFFFFF
  width 64%
  height 100%
  justify-content center
  .data-container
    display flex
    flex-direction column
    align-self center
    margin-top -2vw
   .title
     font-size 20px
     font-family $td-bold
     color $td-title
     margin-bottom 3vh
   .form
      display flex
      flex-direction column
   .btn
      margin-top 1vh
      margin-bottom 4vh
   .forget
     font-family $td-regular
     color $td-blue
</style>
