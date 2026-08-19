/**
 * config.js — Staging Tengil Web Corporation
 * Configurable settings for index.html.
 * Edit values here; the page reads them at load time.
 */
window.SITE_CONFIG = {

  /* ── Company identity ─────────────────────────────────────────── */
  company: {
    name:        "Staging Tengil Corp.",
    fullName:    "Staging Tengil Web Corporation",   // <title> tag
    tagline:     "Interior Design",
  },

  /* ── Brand color (W3.CSS class suffix, e.g. "red", "blue") ────── */
  brandColor: "teal",

  /* ── Navigation links (label → anchor id) ─────────────────────── */
  nav: [
    { label: "Home",      href: "#"          },
    { label: "Showcase",  href: "#showcase"  },
    { label: "Services",  href: "#services"  },
    { label: "Designers", href: "#designers" },
    { label: "Packages",  href: "#packages"  },
    { label: "Contact",   href: "#contact"   },
  ],

  /* ── Gallery images ────────────────────────────────────────────── */
  gallery: [
    // Column 1
    { src: "https://www.w3schools.com/w3images/kitchenconcrete.jpg", alt: "Concrete meets bricks" },
    { src: "https://www.w3schools.com/w3images/livingroom.jpg",      alt: "Light, white and tight scandinavian design" },
    { src: "https://www.w3schools.com/w3images/diningroom.jpg",      alt: "White walls with designer chairs" },
    // Column 2
    { src: "https://www.w3schools.com/w3images/atrium.jpg",          alt: "Windows for the atrium" },
    { src: "https://www.w3schools.com/w3images/bedroom.jpg",         alt: "Bedroom and office in one space" },
    { src: "https://www.w3schools.com/w3images/livingroom2.jpg",     alt: "Scandinavian design" },
  ],

  /* ── Team / Designers ─────────────────────────────────────────── */
  team: [
    { name: "John Doe",  role: "CEO & Founder", img: "https://www.w3schools.com/w3images/team2.jpg", alt: "John" },
    { name: "Jane Doe",  role: "Designer",      img: "https://www.w3schools.com/w3images/team1.jpg", alt: "Jane" },
    { name: "Mike Ross", role: "Architect",     img: "https://www.w3schools.com/w3images/team3.jpg", alt: "Mike" },
  ],

  /* ── Pricing packages ─────────────────────────────────────────── */
  packages: [
    {
      name:     "Basic",
      style:    "w3-dark-grey",         // header background class
      btnStyle: "w3-button w3-white w3-padding-large w3-hover-black",
      price:    199,
      unit:     "per room",
      features: [
        "Floorplanning",
        "10 hours support",
        "Photography",
        "20% furniture discount",
        "Good deals",
      ],
    },
    {
      name:     "Pro",
      style:    "w3-red",
      btnStyle: "w3-button w3-red w3-padding-large w3-hover-black",
      price:    249,
      unit:     "per room",
      features: [
        "Floorplanning",
        "50 hours support",
        "Photography",
        "50% furniture discount",
        "GREAT deals",
      ],
    },
  ],

  /* ── Contact form ──────────────────────────────────────────────── */
  contact: {
    formAction: "/action_page.php",
    formTarget: "_blank",
  },
};
