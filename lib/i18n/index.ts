import type { Locale } from './config'
import { en } from './en'
import { ja, type Dict } from './ja'

const dictionaries: Record<Locale, Dict> = { ja, en }

export function getDict(locale: Locale): Dict {
  return dictionaries[locale]
}

export type { Dict }
