const URL = 'https://www.valeredouille.com'

export default async function sitemap() {
  const routes = ['', '/'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
