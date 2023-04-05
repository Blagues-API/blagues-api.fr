<template>
  <div class="container token-page">
    <div class="card">
      <div class="token">
        <div class="language">
          VOTRE TOKEN
        </div>
        <div ref="target" class="code">
          <label class="overlay" for="copy" />
          <!-- {{ $auth.user.token }} -->
          AUTH MANQUANT
        </div>
        <div class="buttons">
          <button class="regerate" @click="regenerateToken()">
            {{ regenerated ? 'REGÉNÉRÉ !' : 'REGÉNÉRER' }}
          </button>
          <button id="copy" class="copy" @click="copyToClipboard()">
            {{ copied ? 'COPIÉ !' : 'COPIER' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({ middleware: 'auth' })

const target = ref<HTMLDivElement | null>(null)

const copied = ref(false)

function copyToClipboard () {
  if (!target.value) { return }

  window.getSelection()?.removeAllRanges()
  const range = document.createRange()
  range.selectNode(target.value)
  window.getSelection()?.addRange(range)
  document.execCommand('copy')

  copied.value = true
  setTimeout(() => {
    copied.value = false
    window.getSelection()?.removeAllRanges()
  }, 2000)
}

const regenerated = ref(false)

async function regenerateToken () {
  // const { data } = await useFetch(
  //   '/api/regenerate',
  //   {
  //     method: 'POST',
  //     body: { key: this.$auth.user.token_key },
  //     headers: {
  //       Authorization: `Bearer ${this.$auth.user.token}`,
  //     },
  //   },
  // )

  // const { token, key } = data;

  // await this.$auth.setUser({ ...this.$auth.user, token, token_key: key })

  // regenerated.value = true
  // setTimeout(() => {
  //   regenerated.value = false
  //   window.getSelection()?.removeAllRanges()
  // }, 2000)
}
</script>

<style lang="scss">
.token-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;

  @media (max-width: 420px) {
    padding: 40px 20px;
  }

  .head {
    margin-bottom: 40px;

    .title {
      margin-bottom: 20px;
      color: #0067ad;
      font-size: 26px;
      font-weight: bold;
      text-align: center;
    }

    p {
      margin-bottom: 3px;
      color: #393939;
      font-size: 14px;
      font-weight: bold; //  600
      text-align: center;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 500px;

    .token {
      display: flex;
      flex-direction: column;

      .language {
        margin: 0 0 6px 2px;
        color: #8b8b8b;
        font-size: 12px;
        font-weight: bold;
      }

      .code {
        position: relative;
        padding: 16px;
        background-color: #202020;
        color: white;
        font-size: 14px;
        letter-spacing: 0.5px;
        line-height: 28px;
        word-break: break-all;

        .overlay {
          content: '';
          position: absolute;
          inset: 0;
          cursor: pointer;
        }

        &::selection {
          background: transparent !important;
        }
      }

      .buttons {
        display: flex;
        margin-top: 10px;

        button {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          height: 40px;
          padding: 10px 16px;
          transition: background-color 0.3s;
          border-radius: 6px;
          outline: revert;
          background-color: var(--primary);
          color: var(--white);
          font-size: 15px;
          font-weight: bold;
          cursor: pointer;

          &:first-child {
            margin-right: 10px;
          }

          &:hover {
            background-color: var(--primary-dark);
          }
        }
      }
    }
  }
}
</style>
