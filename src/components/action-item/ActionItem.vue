<template>
  <div
    class="action-item"
    :id="divId"
    :style="{ backgroundColor: idItem == currentClicked ? '#1182F2' : '#2693FF' }"
  >
    <fa :icon="icon" style="color: white; font-size: 40px" />
    <span class="label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'FAActionItem',
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    currentClicked: {
      type: String,
      required: true
    },
    idItem: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/theme.styl'
.label
  color white
  font-family $td-medium
  margin-top 0.5vw
.action-item
 display: flex;
 flex-direction column
 width 100%
 border solid #46A3FF 1px
 padding 10px 0px 10px 0px
 align-items center
 margin-bottom -1px
 cursor pointer
</style>
