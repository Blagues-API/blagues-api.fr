<template>
  <div :class="$route.name">
    <Header />
    <transition name="down">
      <slot />
    </transition>
    <Footer />
  </div>
</template>

<style lang="scss">
:root {
  --primary: #0098ff;
  --primary-dark: #0079cc;
  --secondary: #002b36;
  --text: #5c5c5c;
  --title: #414141;
  --white: #ffffff;
  --background: #f2f2f2;
}

.down-enter-active,
.down-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.down-enter {
  transform: translateY(-20px);
  opacity: 0;
}

.down-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

body {
  font-family: 'Open Sans', sans-serif;

  .index {
    header {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    }

    @media screen and (max-width: 720px) {
      header {
        position: sticky;
      }

      .hero {
        min-height: calc(60vh - 96px);
        padding-top: 14px;
      }
    }
  }

  .container {
    min-height: calc(100vh - 110px);
    background-color: var(--background);
  }

  strong {
    font-weight: bold;
  }
}

a {
  color: var(--primary);
}
</style>
