<template>
  <div
    ref="selector"
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
      <div v-if="selected" class="element">
        <component :is="selected.icon" class="icon" />
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
        <component :is="element.icon" />
        <span :style="{ color: element.color }">{{ element.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FunctionalComponent, SVGAttributes } from 'vue'
import { useDocStore, Doc } from '~/store/documentation'

import DownIcon from '@/assets/icons/down.svg?component'
import NpmIcon from '@/assets/icons/npm_full.svg?component'
import PypiIcon from '@/assets/icons/pypi_full.svg?component'
import PackagistIcon from '@/assets/icons/packagist.svg?component'
import ApiIcon from '@/assets/icons/api_full.svg?component'

interface SelectorElement {
  id: Doc;
  name: string;
  color: string;
  icon: FunctionalComponent<SVGAttributes>;
}

const active = ref(false)
const list = ref<HTMLDivElement | null>(null)
const selector = ref<HTMLDivElement | null>(null)

const pointer = ref(0)
const elements: SelectorElement[] = [
  {
    id: 'npm',
    name: 'NPM',
    color: '#cb3837',
    icon: NpmIcon
  },
  {
    id: 'pypi',
    name: 'PYPI',
    color: '#3775a9',
    icon: PypiIcon
  },
  {
    id: 'packagist',
    name: 'PACKAGIST',
    color: '#f28d1a',
    icon: PackagistIcon
  },
  {
    id: 'api',
    name: 'API',
    color: '#3f3f3f',
    icon: ApiIcon
  }
]

const { doc, setDoc } = useDocStore()

const selected = computed(() => {
  return elements.find(element => element.id === doc)
})

function deactivate () {
  if (!active.value) {
    return
  }

  active.value = false

  if (selector.value) { selector.value.blur() }
}

function activate () {
  if (active.value) { return }

  active.value = true

  if (selector.value) { selector.value.focus() }
}

function select (elementId: Doc) {
  deactivate()

  setDoc(elementId)
}

const pointerPosition = computed(() => {
  return pointer.value * 46
})

function pointerForward () {
  if (pointer.value < elements.length - 1) {
    pointer.value++

    if (list.value && list.value.scrollTop <= pointerPosition.value - (330 / 46 - 1) * 46) {
      list.value.scrollTop = pointerPosition.value - (330 / 46 - 1) * 46
    }
  }
}

function pointerBackward () {
  if (pointer.value > 0) {
    pointer.value--

    if (list.value && list.value.scrollTop >= pointerPosition.value) {
      list.value.scrollTop = pointerPosition.value
    }
  }
}

function addPointerElement () {
  if (elements.length > 0) {
    select(elements[pointer.value].id)
  }
  pointer.value = 0
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
