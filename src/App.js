import { useState } from 'react'
import useStateWithHistory from './custom-hooks/useStateWithHistory'
import useTranslation from "./custom-hooks/useTranslation"


function App() {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation()

  return (
    <>
      <div>{language}</div>
      <div>{t("hi")}</div>
      <div>{t("bye")}</div>
      <div>{t("nested.value")}</div>
      <button onClick={() => setLanguage("sp")}>Change To Spanish</button>
      <button onClick={() => setLanguage("en")}>Change To English</button>
      <button onClick={() => setFallbackLanguage("sp")}>Change FB Lang</button>
    </>
  )
}

export default App;
