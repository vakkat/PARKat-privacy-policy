const DEFAULT_LANG = "el";

function setLang(lang){
  document.documentElement.setAttribute("data-lang", lang);
  localStorage.setItem("parkat_lang", lang);

  // toggle button text
  const btn = document.getElementById("langToggle");
  if (btn) btn.textContent = (lang === "el") ? "EN" : "ΕΛ";

  // show/hide content blocks
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = (I18N[lang] && I18N[lang][key]) ? I18N[lang][key] : "";
    if (val) el.innerHTML = val;
  });
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

// Per-page translations (each page defines its own I18N object)
window.addEventListener("DOMContentLoaded", initLang);
