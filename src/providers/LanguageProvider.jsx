import React, { useEffect, useState } from "react";
import LanguageContext from "../contexts/LanguageContext";
import { getCookie, setCookie } from "../utils/cookie";

const translations = {
  ua: {
    todolist: "Список завдань",
    addtask: "Додати завдання",
    delete: "Видалити",
  },
  en: {
    todolist: "Todo list",
    addtask: "Add task",
    delete: "Delete",
  },
};

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(getCookie("lang") || "ua");

  useEffect(() => {
    setCookie("lang", lang, 30);
  }, [lang]);

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
