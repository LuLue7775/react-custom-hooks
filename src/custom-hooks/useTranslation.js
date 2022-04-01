import { useLocalStorage } from "./useStorage"
import * as translations from "./translations"

export default function useTranslation() {
  const [language, setLanguage] = useLocalStorage("language", "en")
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
    "fallbackLanguage",
    "en"
  )

  const translate = key => {
    const keys = key.split(".")

    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    )
  }

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  }
}

// like flatten()
function getNestedTranslation(language, keys) {
  return keys.reduce((obj, key) => {
        // console.log( {obj} ); 
        return obj?.[key]
  }, translations[language])
}