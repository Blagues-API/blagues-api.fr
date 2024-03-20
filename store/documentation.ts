import { defineStore } from 'pinia'

export type Doc = 'npm' | 'pypi' | 'packagist' | 'api';

export const useDocStore = defineStore('documentation', () => {
  const doc = ref<Doc>('npm')

  function setDoc (value: Doc) {
    doc.value = value
  }

  return { doc, setDoc }
})
