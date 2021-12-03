<template>
  <header v-body-scroll-lock="open">
    <nuxt-link class="brand" to="/" title="Accueil">
      <Logo class="logo" />
      <h1 class="name">BLAGUES API</h1>
    </nuxt-link>
    <div class="overlay" :class="{ open }" @click="open = false" />
    <div class="navigation" :class="{ open }">
      <a class="item" href="https://github.com/Blagues-API/blagues-api" title="Github de Blagues API"> GITHUB </a>
      <a class="item" href="https://discord.gg/PPNpVaF" title="Discord de Blagues API"> DISCORD </a>
      <nuxt-link v-if="$auth.loggedIn" class="user-place" to="/account">
        <div
          class="avatar"
          :style="{
            'background-image': `url(https://cdn.discordapp.com/avatars/${$auth.user.id}/${$auth.user.avatar}?size=64)`,
          }"
        />
        <span class="username">{{ $auth.user.username }}</span>
      </nuxt-link>
      <span
        v-else
        class="item rounded"
        title="Connexion Discord"
        @click="$auth.loginWith('discord', { params: { prompt: 'none' } })"
      >
        CONNEXION
      </span>
    </div>
    <div class="burger" :class="{ open }" @click="open = !open">
      <div class="burger-lines" />
    </div>
  </header>
</template>

<script>
import Logo from '@/assets/logo.svg?inline'

export default {
  components: {
    Logo,
  },
  data() {
    return {
      open: false,
    }
  },
}
</script>

<style lang="scss">
header {
  display: flex;
  position: relative;
  z-index: 3;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background-color: var(--secondary);

  .brand {
    display: flex;
    align-items: center;
    margin-right: 8%;
    text-decoration: none;
    cursor: pointer;
    user-select: none;

    .logo {
      width: 64px;
      height: 64px;
    }

    .name {
      margin-left: 6px;
      color: var(--primary);
      font-size: 26px;
      font-weight: 800;
      text-shadow: 1px 1px 3px #000000cc;
      white-space: nowrap;
    }
  }

  .burger {
    display: none;
    position: relative;
    z-index: 3;
    width: 40px;
    height: 40px;
    margin-right: 8px;
    transition: 0.2s all;
    font-size: 12px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    .burger-lines {
      top: 50%;
      width: 28px;
      margin-top: -2.5px;

      &,
      &::after,
      &::before {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        height: 5px;
        transform: rotate(0);
        transition: 0.2s top 0.2s, 0.1s left, 0.2s transform, 0.4s background-color 0.2s, 0s width 0.15s;
        border-radius: 2.5px;
        background-color: var(--primary);
        pointer-events: none;
      }

      &::after {
        top: -14px;
        width: 38px;
      }

      &::before {
        top: 14px;
        width: 18px;
      }
    }

    &.open {
      .burger-lines {
        background-color: transparent;

        &,
        &::after,
        &::before {
          transition: 0.2s background-color, 0.2s top, 0.2s left, 0.2s transform 0.15s, 0s width 0.15s;
        }

        &::before,
        &::after {
          top: 0;
          width: 38px;
        }

        &::before {
          transform: rotate(-45deg);
        }

        &::after {
          transform: rotate(45deg);
        }
      }
    }
  }

  .navigation {
    display: flex;
    align-items: center;

    .item {
      margin: 16px;
      color: var(--primary);
      font-weight: 600;
      text-decoration: none;
      cursor: pointer;

      &.rounded {
        display: flex;
        padding: 10px 16px;
        border-radius: 18px;
        background-color: var(--primary);
        color: var(--white);
      }
    }

    .user-place {
      display: flex;
      align-items: center;
      margin: 0 10px;
      text-decoration: none;

      .avatar {
        width: 36px;
        height: 36px;
        border: 2px solid var(--white);
        border-radius: 18px;
        background-size: 32px;
      }

      .username {
        margin-left: 8px;
        color: white;
        font-size: 18px;
        font-weight: 600;
        text-transform: none;
      }
    }
  }
  @media screen and (max-width: 720px) {
    .burger {
      display: flex;
    }

    .navigation {
      display: none;
    }
  }
}
</style>
