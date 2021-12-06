<template>
  <div class="callback"><LoginLoader /></div>
</template>

<style lang="scss">
.callback {
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 96px - 40px);
  padding-top: 64px;
  background-color: var(--background);
  span {
    padding-top: 64px;
  }
  @media screen and(max-width: 720px) {
    min-height: calc(100vh - 96px - 60px);
  }
}
</style>
