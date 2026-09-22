// English-only interface copy. Legacy language preferences are ignored.
const currentLang = "en";
const UI = {
  "explore": "Explore the directory",
  "hero_eyebrow": "MADE IN CHINA. FOUND HERE.",
  "hero_title_1": "Small components.",
  "hero_title_2": "Big possibilities.",
  "hero_desc_1": "High-performance choices. Thoughtful sourcing.",
  "hero_desc_2": "Explore specifications, applications and long-term value.",
  "stamp_1": "Made in China",
  "stamp_2": "GLOBAL POSSIBILITIES",
  "section_eyebrow": "THE PRODUCT INDEX",
  "section_title": "Find your next product.",
  "search_placeholder": "Search products",
  "buying_note": "Choose with confidence: explore performance-focused buying briefs and value considerations. Technical figures are example selection targets, not verified specifications of the suppliers linked below. Confirm the exact model, test conditions and quotation before ordering.",
  "name_label": "PRODUCT NAME",
  "empty": "No products found. Try \"bearing\", \"solar\", or \"charger\".",
  "noscript": "Please enable JavaScript to browse this product directory.",
  "directory_note": "Product names open Alibaba search in a new tab. A curated directory, not a live sales ranking.",
  "closing_1": "BUILT TO CONNECT.",
  "closing_2": "From China.",
  "closing_3": "To your next idea.",
  "closing_link": "Explore products",
  "footer_tagline": "An independent product discovery directory.",
  "visits_label": "Page views",
  "powered_by": "Powered by",
  "ga_notice": "This site uses Google Analytics",
  "spec_guide": "Technical selection guide",
  "spec_caption": "Reference targets · Confirm per model",
  "value_focus": "VALUE FOCUS",
  "counter_loading": "Loading…",
  "counter_local": "Published only",
  "counter_unavailable": "Unavailable",
  "result_count": "{n} PRODUCTS · {category}"
};
function t(key) { return UI[key] || key; }
function categoryName(category) { return category; }
function countText(n,category) { return t("result_count").replace("{n}",n).replace("{category}",category); }
