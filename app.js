// app.js
const DEFAULT_LANG = "el";

/**
 * By default use textContent.
 * If a translation needs HTML, wrap the target element with data-i18n-html="1"
 * and we will use innerHTML only for that element.
 */
function applyI18n(lang){
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = (window.I18N && I18N[lang] && I18N[lang][key]) ? I18N[lang][key] : "";

    if (!val) return;

    const allowHtml = el.getAttribute("data-i18n-html") === "1";
    if (allowHtml) el.innerHTML = val;
    else el.textContent = val;
  });
}

function setLang(lang){
  document.documentElement.setAttribute("data-lang", lang);
  localStorage.setItem("parkat_lang", lang);

  const btn = document.getElementById("langToggle");
  if (btn) btn.textContent = (lang === "el") ? "EN" : "ΕΛ";

  applyI18n(lang);
}

function initLang(){
  const saved = localStorage.getItem("parkat_lang");
  setLang(saved || DEFAULT_LANG);

  const btn = document.getElementById("langToggle");
  if (btn){
    btn.addEventListener("click", () => {
      const current = localStorage.getItem("parkat_lang") || DEFAULT_LANG;
      setLang(current === "el" ? "en" : "el");
    });
  }
}

window.addEventListener("DOMContentLoaded", initLang);
