/* ============================================================
   main.js — InkInsightHub
   Shared JS for all pages. Vanilla only — no frameworks.
   Wrapped in IIFE to avoid polluting the global scope.
   See website.md for full specification and behaviour notes.
   ============================================================ */

(function () {
  'use strict';

  /* Nav scroll — adds .nav-scrolled to .site-nav on scroll */
  function initNavScroll() {}

  /* Nav toggle — mobile hamburger open/close */
  function initNavToggle() {}

  /* Reveal — IntersectionObserver fade-up on .reveal elements */
  function initReveal() {}

  /* PDF fallback — shows .pdf-fallback if iframe fails to load */
  function initPdfFallback() {}

  document.addEventListener('DOMContentLoaded', () => {
    initNavScroll();
    initNavToggle();
    initReveal();
    initPdfFallback();
  });

}());
