<template>
  <div class="loader">
    <div class="point" />
    <div class="point" />
    <div class="point" />
  </div>
</template>

<style lang="scss">
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5em;
  height: 2em;
  font-size: 24px;

  & > .point {
    width: 0.625em;
    height: 0.625em;
    margin-right: 0.3em;
    animation: loader 1.4s infinite;
    border-radius: 100%;
    background-color: var(--primary);

    @keyframes loader {
      30% {
        transform: scale(0.75);
        opacity: 0.3;
      }

      60% {
        transform: scale(0.75);
        opacity: 0.3;
      }
    }

    &:nth-child(1) {
      animation-delay: 0.1s;
    }

    &:nth-child(2) {
      animation-delay: 0.25s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}
</style>
