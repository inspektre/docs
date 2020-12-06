var plugins = [{
      plugin: require('/Users/uday/docs/node_modules/gatsby-plugin-loadable-components-ssr/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/uday/docs/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/uday/docs/node_modules/gatsby-plugin-instagram-embed/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/uday/docs/node_modules/gatsby-plugin-layout/gatsby-ssr'),
      options: {"plugins":[],"component":"/Users/uday/docs/src/templates/docs.js"},
    },{
      plugin: require('/Users/uday/docs/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/uday/docs/node_modules/gatsby-plugin-mdx/gatsby-ssr'),
      options: {"plugins":[],"remarkPlugins":[null,null],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-mermaid","options":{"language":"mermaid","theme":"dark","viewport":{"width":300,"height":300},"mermaidOptions":{}}},"gatsby-remark-graphviz",{"resolve":"/Users/uday/docs/plugins/gatsby-remark-sectionize-toc/index.js","options":{"maxDepth":3}},{"resolve":"gatsby-remark-images","options":{"maxWidth":1050,"quality":75,"showCaptions":true,"disableBgImageOnAlpha":true,"withWebp":true}},"gatsby-remark-copy-linked-files",{"resolve":"gatsby-remark-jargon","options":{"jargon":{"docs":"<span><b>docs</b> - inspektre docs</span> Inspektre Documentation"}}},{"resolve":"gatsby-remark-embed-snippet","options":{"directory":"/Users/uday/docs/snippets/"}},{"resolve":"gatsby-remark-embedder","options":{"customTransformers":[],"services":{}}}],"extensions":[".mdx",".md"]},
    },{
      plugin: require('/Users/uday/docs/node_modules/gatsby-plugin-gtag/gatsby-ssr'),
      options: {"plugins":[],"trackingId":null,"head":true,"anonymize":false},
    },{
      plugin: require('/Users/uday/docs/node_modules/gatsby-plugin-canonical-urls/gatsby-ssr'),
      options: {"plugins":[],"siteUrl":"https://docs.inspektre.io","stripQueryString":true},
    },{
      plugin: require('/Users/uday/docs/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"inspektre docs","short_name":"inspektre docs","start_url":"/","background_color":"#6b37bf","theme_color":"#6b37bf","display":"minimal-ui","crossOrigin":"anonymous","icon":"static/assets/logo.png","description":"Inspektre Documentation","cache_busting_mode":"none","include_favicon":false,"lang":"en","legacy":true,"theme_color_in_head":true,"cacheDigest":null},
    },{
      plugin: require('/Users/uday/docs/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[],"appendScript":"/Users/uday/docs/src/custom-sw-code.js"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
