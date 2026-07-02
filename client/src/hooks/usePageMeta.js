import { useEffect } from 'react'

const DEFAULTS = {
  title: 'Iknus Consultants | SEO & Digital Marketing Agency Kenya',
  description: "Iknus Consultants is Kenya's top-rated SEO and digital marketing agency. We deliver data-driven SEO, content strategy, PPC, and web development to help businesses grow online.",
  canonical: 'https://iknusconsultants.com/',
}

export default function usePageMeta({ title, description, canonical } = {}) {
  useEffect(() => {
    const t = title || DEFAULTS.title
    const d = description || DEFAULTS.description
    const c = canonical || DEFAULTS.canonical

    document.title = t

    const setMeta = (sel, attr, val) => {
      const el = document.querySelector(sel)
      if (el) el.setAttribute(attr, val)
    }

    setMeta('meta[name="description"]',        'content', d)
    setMeta('link[rel="canonical"]',           'href',    c)
    setMeta('meta[property="og:title"]',       'content', t)
    setMeta('meta[property="og:description"]', 'content', d)
    setMeta('meta[property="og:url"]',         'content', c)
    setMeta('meta[name="twitter:title"]',      'content', t)
    setMeta('meta[name="twitter:description"]','content', d)

    return () => {
      document.title = DEFAULTS.title
      setMeta('meta[name="description"]',        'content', DEFAULTS.description)
      setMeta('link[rel="canonical"]',           'href',    DEFAULTS.canonical)
      setMeta('meta[property="og:title"]',       'content', DEFAULTS.title)
      setMeta('meta[property="og:description"]', 'content', DEFAULTS.description)
      setMeta('meta[property="og:url"]',         'content', DEFAULTS.canonical)
      setMeta('meta[name="twitter:title"]',      'content', DEFAULTS.title)
      setMeta('meta[name="twitter:description"]','content', DEFAULTS.description)
    }
  }, [title, description, canonical])
}
