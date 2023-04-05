<template>
  <header>
    <nuxt-link class="brand" to="/" title="Accueil">
      <img src="@/assets/logo.svg?data" class="logo" alt="Logo Blagues-API" title="Logo Blagues-API">
      <h1 class="name">
        BLAGUES API
      </h1>
    </nuxt-link>
    <div class="overlay" :class="{ open }" @click="open = false" />
    <div class="navigation" :class="{ open }">
      <a class="item" href="https://github.com/Blagues-API/blagues-api" title="Github de Blagues API"> GITHUB </a>
      <a class="item" href="https://discord.gg/PPNpVaF" title="Discord de Blagues API"> DISCORD </a>
      <!-- <nuxt-link v-if="$auth.loggedIn" class="user-place" to="/account">
        <div
          class="avatar"
          :style="{
            'background-image': `url(https://cdn.discordapp.com/avatars/${$auth.user.id}/${$auth.user.avatar}?size=64)`,
          }"
        />
        <span class="username">{{ $auth.user.username }}</span>
      </nuxt-link> -->
      <!-- <span
        class="item rounded"
        title="Connexion Discord"
        @click="$auth.loginWith('discord', { params: { prompt: 'none' } })"
      >
        CONNEXION
      </span> -->
    </div>
    <div class="burger" :class="{ open }" @click="open = !open">
      <div class="burger-target">
        <div class="burger-icon">
          <div class="burger-lines" />
        </div>
      </div>
      <a href="https://discord.gg/PPNpVaF" class="item"> <DiscordIcon /> </a>
      <!-- <a
        class="item"
        @click="$auth.loggedIn ? $router.push('/account') : $auth.loginWith('discord', { params: { prompt: 'none' } })"
      >
        <div
          v-if="$auth.loggedIn"
          class="mobile-avatar"
          :style="{
            'background-image': `url(https://cdn.discordapp.com/avatars/${$auth.user.id}/${$auth.user.avatar}?size=64)`,
          }"
        />
        <LoginIcon v-else />
      </a> -->
      <a href="https://github.com/Blagues-API/blagues-api" class="item"> <GithubIcon /> </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import GithubIcon from '@/assets/icons/github.svg?component'
import DiscordIcon from '@/assets/icons/discord.svg?component'
// import LoginIcon from '@/assets/icons/login.svg?inline'

const open = ref(false)
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
    position: fixed;
    right: 16px;
    bottom: 16px;
    width: 72px;
    height: 72px;

    .burger-target {
      display: flex;
      position: absolute;
      z-index: 2;
      align-items: center;
      justify-content: center;
      width: 72px;
      height: 72px;
      transition: transform 0.4s cubic-bezier(0.17, 0.9, 0.3, 1.3), box-shadow 0.4s ease-out;
      border-radius: 48px;
      background-color: white;
      box-shadow: 0 2px 20px rgb(0 0 0 / 50%);
      cursor: pointer;

      .burger-icon {
        position: relative;
        z-index: 3;
        width: 40px;
        height: 40px;
        transition: 0.2s all;
        font-size: 12px;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;

        .burger-lines {
          top: 50%;
          width: 40px;
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
            transition: 0.2s top 0.2s, right 0.2s, 0.2s transform, background-color 0.2s, width 0.2s;
            border-radius: 2.5px;
            background-color: var(--primary);
            pointer-events: none;
          }

          &::after {
            top: -14px;
            right: 6px;
            width: 28px;
          }

          &::before {
            top: 14px;
            right: 6px;
            width: 28px;
          }
        }
      }
    }

    .item {
      display: flex;
      position: absolute;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 64px;
      transition: transform ease-out 0.2s, box-shadow ease-out 0.2s;
      border-radius: 32px;
      background-color: white;
      cursor: pointer;

      .mobile-avatar {
        width: 32px;
        height: 32px;
        border-radius: 16px;
        background-size: 32px;
      }
    }

    &.open {
      .burger-target {
        transform: scale(0.8);
        transform: transform 0.2s linear;
        box-shadow: 0 1px 8px rgb(0 0 0 / 50%);

        .burger-lines {
          background-color: transparent;

          &,
          &::after,
          &::before {
            transition: background-color 0.2s, 0.2s top, right 0.2s, 0.2s transform 0.2s, width 0.2s;
          }

          &::before,
          &::after {
            top: 0;
            right: 0;
            width: 40px;
          }

          &::before {
            transform: rotate(-45deg);
          }

          &::after {
            transform: rotate(45deg);
          }
        }
      }

      .item {
        transition-timing-function: cubic-bezier(0.95, 0, 0.35, 1.3);
        box-shadow: 0 0 12px rgb(0 0 0 / 30%);

        &:nth-child(2) {
          transform: translate3d(-96px, 0, 0);
          transition-duration: 0.2s;
        }

        &:nth-child(3) {
          transform: translate3d(-72px, -72px, 0);
          transition-duration: 0.3s;
        }

        &:nth-child(4) {
          transform: translate3d(0, -96px, 0);
          transition-duration: 0.4s;
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
        padding: 8px 16px;
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
