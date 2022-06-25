<template>
  <div
    tabindex="0"
    class="selector"
    :class="{ active }"
    role="combobox"
    @focus="activate()"
    @blur="deactivate()"
    @keydown.self.down.prevent="pointerForward()"
    @keydown.self.up.prevent="pointerBackward()"
    @keypress.enter.self="addPointerElement()"
    @keyup.esc="deactivate()"
  >
    <div class="select-element">
      <div class="element">
        <img class="icon" :src="selected.icon" :alt="selected.name" />
        <span :style="{ color: selected.color }">{{ selected.name }}</span>
      </div>
      <DownIcon class="down" />
    </div>
    <div
      v-show="active"
      ref="list"
      class="select-elements"
      tabindex="-1"
      role="listbox"
      @focus="activate"
      @mousedown.prevent
    >
      <div
        v-for="(element, index) in elements"
        :key="element.id"
        class="element"
        :class="{ selected: index === pointer }"
        @click="select(element.id)"
        @mouseenter.self="pointer = index"
      >
        <img :src="element.icon" :alt="element.name" />
        <span :style="{ color: element.color }">{{ element.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import DownIcon from '@/assets/icons/down.svg?inline'
import NpmIcon from '@/assets/icons/npm_full.svg'
import PypiIcon from '@/assets/icons/pypi_full.svg'
import PackagistIcon from '@/assets/icons/packagist.svg'
import ApiIcon from '@/assets/icons/api_full.svg'

export default {
  name: 'Selector',
  components: {
    DownIcon,
  },
  data() {
    return {
      active: false,
      pointer: 0,
      elements: [
        {
          id: 'npm',
          name: 'NPM',
          color: '#cb3837',
          icon: NpmIcon,
        },
        {
          id: 'pypi',
          name: 'PYPI',
          color: '#3775a9',
          icon: PypiIcon,
        },
        {
          id: 'packagist',
          name: 'PACKAGIST',
          color: '#f28d1a',
          icon: PackagistIcon,
        },
        {
          id: 'api',
          name: 'API',
          color: '#3f3f3f',
          icon: ApiIcon,
        },
      ],
    }
  },
  computed: {
    selected() {
      const doc = this.$store.state.doc
      return this.elements.find((element) => element.id === doc)
    },
    pointerPosition() {
      return this.pointer * 46
    },
  },
  methods: {
    toggle() {
      this.active ? this.deactivate() : this.activate()
    },
    activate() {
      if (this.active || this.disabled) {
        return
      }

      this.active = true

      this.$el.focus()
    },
    deactivate() {
      if (!this.active) {
        return
      }

      this.active = false

      this.$el.blur()
    },
    pointerForward() {
      if (this.pointer < this.elements.length - 1) {
        this.pointer++

        if (this.$refs.list.scrollTop <= this.pointerPosition - (330 / 46 - 1) * 46) {
          this.$refs.list.scrollTop = this.pointerPosition - (330 / 46 - 1) * 46
        }
      }
    },
    pointerBackward() {
      if (this.pointer > 0) {
        this.pointer--

        if (this.$refs.list.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition
        }
      }
    },
    addPointerElement() {
      if (this.elements.length > 0) {
        this.select(this.elements[this.pointer].id)
      }
      this.pointer = 0
    },
    select(elementId) {
      this.deactivate()
      this.$store.commit('SET_DOC', elementId)
    },
  },
}
</script>

<style lang="scss">
.selector {
  display: flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  min-width: 160px;
  min-height: 46px;
  padding: 0 12px;
  transition: border-color 0.3s ease-out;
  border: 1px solid #d7d7d7;
  border-radius: 3px;
  outline: none;
  background-color: #ffffff;
  font-size: 15px;
  font-weight: 400;
  user-select: none;

  .element {
    display: flex;
    align-items: center;
    font-weight: 700;

    span {
      margin-left: 8px;
    }
  }

  .select-element {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    .down {
      position: absolute;
      right: 16px;
      width: 18px;
      height: 18px;
      color: #c4c4c4;
    }
  }

  &.active .select-element .down {
    transform: rotate(180deg);
  }

  &:hover {
    border-color: #0098ff;
  }

  .select-elements {
    position: absolute;
    z-index: 500;
    top: calc(100% + 1px);
    left: 0;
    box-sizing: border-box;
    width: 100%;
    max-height: 330px;
    overflow-y: auto;
    border-radius: 0 0 3px 3px;
    background-color: #ffffff;
    box-shadow: 0 0 6px 0 rgb(0 0 0 / 10%);

    &::-webkit-scrollbar {
      width: 10px;
      border-radius: 5px;
      background-color: #c4c4c4;
      appearance: none;
    }

    &::-webkit-scrollbar-thumb {
      transition: background-color 0.1s ease;
      border-radius: 5px;
      background-color: var(--primary);
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: var(--primary);
    }

    .element {
      display: flex;
      position: relative;
      align-items: center;
      min-height: 46px;
      padding-left: 15px;
      font-weight: 700;
      cursor: pointer;

      &.hidden {
        display: none;
      }

      &.selected {
        background-color: #e6e6e6;
      }
    }
  }
}
</style>
