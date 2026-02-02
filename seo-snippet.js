// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.slimjimslocksmithservice.com",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.slimjimslocksmithservice.com/","title_tag":"Locksmith Denton & Emergency Locksmith | Slim Jim's","meta_description":"Locksmith Denton specialists for home, business and auto. Emergency locksmith, auto lockout services, lock repair, rekey, key duplication and more in Denton County."},{"page_url":"https://www.slimjimslocksmithservice.com/residential","title_tag":"Residential Locksmith Denton & Rekey Locks | Slim Jim's","meta_description":"Residential locksmith Denton experts for house lockout, rekey locks, lock installation, lock repair, key duplication and more. Trusted home locksmiths in Denton County."},{"page_url":"https://www.slimjimslocksmithservice.com/commercial","title_tag":"Commercial Locksmith Denton & Master Keys | Slim Jim's","meta_description":"Commercial locksmith Denton services for offices and businesses. Master key systems, lock installation, lock repair, rekey locks and more in Denton County."},{"page_url":"https://www.slimjimslocksmithservice.com/automotive","title_tag":"Auto Lockout Services Denton & Car Keys | Slim Jim's","meta_description":"Auto lockout services Denton for car lockouts, car key duplication and key fobs. Emergency locksmith help for lost keys, broken keys and more across Denton County."},{"page_url":"https://www.slimjimslocksmithservice.com/contact","title_tag":"Emergency Locksmith Denton Contact | Slim Jim's","meta_description":"Contact an emergency locksmith Denton residents trust. Call for auto lockout services, residential and commercial locksmith help, rekey locks and lock repair."}],"keywords":["Locksmith Denton","Residential Locksmith Denton","Commercial Locksmith Denton","Auto Lockout Services Denton","Rekey Locks Denton","Lock Installation Denton","Master Key Systems Denton","Emergency Locksmith Denton","Key Duplication Denton","Lock Repair Denton"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  "@id": "https://www.slimjimslocksmithservice.com/#locksmith",
  "name": "Slim Jim's Locksmith Service",
  "url": "https://www.slimjimslocksmithservice.com/",
  "image": "https://static.wixstatic.com/media/4158bb_d06ebb579e854015858badc76b77cbd1%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/4158bb_d06ebb579e854015858badc76b77cbd1%7Emv2.jpg",
  "logo": "https://static.wixstatic.com/media/4158bb_d06ebb579e854015858badc76b77cbd1%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/4158bb_d06ebb579e854015858badc76b77cbd1%7Emv2.jpg",
  "description": "Slim Jim's Locksmith Service provides professional residential, commercial, and automotive locksmith services in Denton County, Texas. Fully licensed, bonded, and insured, serving the Denton community since 1999.",
  "telephone": "+1-940-387-9797",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1800 N Carroll Blvd #102",
    "addressLocality": "Denton",
    "addressRegion": "TX",
    "postalCode": "76201",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Denton County, Texas"
  },
  "priceRange": "$$",
  "foundingDate": "1999",
  "founder": {
    "@type": "Person",
    "name": "Slim Jim"
  },
  "sameAs": [],
  "serviceArea": {
    "@type": "AdministrativeArea",
    "name": "Denton County, Texas"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Slim Jim's Locksmith Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Residential Locksmith Services",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Locksmith Services",
          "url": "https://www.slimjimslocksmithservice.com/residential",
          "serviceType": "Residential locksmith",
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Denton County, Texas"
          },
          "description": "Residential locksmith services including lost house keys, house lockout, change locks, lock repair, rekey, new lock installation, entry door locks, mailbox locks, garage door locks, gate locks, storm door locks, key duplication, digital door locks, and broken key extraction."
        }
      },
      {
        "@type": "Offer",
        "name": "Commercial Locksmith Services",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Locksmith Services",
          "url": "https://www.slimjimslocksmithservice.com/commercial",
          "serviceType": "Commercial locksmith",
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Denton County, Texas"
          },
          "description": "Commercial locksmith services including master systems, high security locks, door closers, lever handles, file cabinet locks, mailbox locks, fresh lock installation, lost office keys, lock change, lock repair, push bars (panic bars), exit devices, desk locks, digital door locks, and interchangeable core locks (IC Core)."
        }
      },
      {
        "@type": "Offer",
        "name": "Automotive Locksmith Services",
        "itemOffered": {
          "@type": "Service",
          "name": "Automotive Locksmith Services",
          "url": "https://www.slimjimslocksmithservice.com/automotive",
          "serviceType": "Automotive locksmith",
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Denton County, Texas"
          },
          "description": "Automotive locksmith services including car lockout and unlock service, car key duplication, car lock picking, car key remote control programming, car remote replacement, lost key replacement, broken car key extraction, transponder keys cut and programmed, and motorcycle keys made."
        }
      }
    ]
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Mrs. Comeans"
      },
      "reviewBody": "Today I locked my keys in my car for the 3rd time but as far as locksmiths go, 3rd time was a charm. He showed up 10 minutes after we called & 5 minutes later he had my car open for me. And he didn’t use one of those airbags that pry the door apart like the other guys who damaged my door in the process. I’m so glad we called Slim Jim’s. He is the man! Thanks to his fast work, I still made it to the school to pick up on time! Thanking him very much!",
      "publisher": {
        "@type": "Organization",
        "name": "Google Reviews"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Joe Putnam"
      },
      "reviewBody": "Outstanding service and great no nonsense pricing. Definitely my go to locksmith from now on.",
      "publisher": {
        "@type": "Organization",
        "name": "Google Reviews"
      }
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Jude Schrumpf"
      },
      "reviewBody": "I got locked out of my car with my toddler at goodwill. This was our only set of keys and my husband was still at work. We called the first number we saw on Google and some creepy/scary guy showed up in a red van. My husband told me not to go out there and be called slim Jim’s instead. He showed up in less than 10 minutes in a marked van. He was very friendly and quoted us 1/3 the price of the predatory locksmith company who also continued to harass me while slim Jim was there. I cannot brag on slim Jim’s enough. They made me and my daughter feel comfortable and they were able to help us get the car unlocked fast and without doing any damage to the car. I felt confident he had all the right tools to get the right job done. Keeping him in my contacts in case we need him again. Thank you slim Jim’s",
      "publisher": {
        "@type": "Organization",
        "name": "Google Reviews"
      }
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-940-387-9797",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "en"
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
