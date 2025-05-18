import { useEffect, FC } from "react";
import Cookies from "js-cookie";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

const googleTranslateConfig = {
  lang: "ru",
};

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
];

export const TranslateComponent:FC = () => {
  const setTranslateLanguage = (code: string) => {
    const value = `/auto/${code}`;
    Cookies.set("googtrans", value, { domain: "." + document.domain });
    window.location.reload();
  };

  const clearTranslateCookie = () => {
    Cookies.remove("googtrans", { domain: "." + document.domain });
    window.location.reload();
  };

  useEffect(() => {
    window.googleTranslateElementInit = () => {

      new window.google.translate.TranslateElement(
        {
          pageLanguage: googleTranslateConfig.lang,
          autoDisplay: false,
        },
        "dummy"
      );
    };

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  const currentLangCookie = Cookies.get("googtrans") || "";
  const currentLang = currentLangCookie.slice(-2) || googleTranslateConfig.lang;

  return (
    <div>
      {LANGUAGES.map(({ code, label }) => {
        const isActive = code === currentLang || (code === googleTranslateConfig.lang && !currentLangCookie);

        return (
          <button
            key={code}
            onClick={() => {
              if (code === googleTranslateConfig.lang) {
                clearTranslateCookie(); 
              } else {
                setTranslateLanguage(code);
              }
            }}
            disabled={isActive}
            style={{
              marginRight: 8,
              padding: "6px 12px",
              fontWeight: isActive ? "bold" : "normal",
              cursor: isActive ? "default" : "pointer",
              opacity: isActive ? 0.6 : 1,
            }}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

