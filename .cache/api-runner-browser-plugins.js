module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-loadable-components-ssr/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-instagram-embed/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-pinterest/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-twitter/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-layout/gatsby-browser.js'),
      options: {"plugins":[],"component":"/Users/uday/docs/src/templates/docs.js"},
    },{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"remarkPlugins":[null,null],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-mermaid","options":{"language":"mermaid","theme":"dark","viewport":{"width":300,"height":300},"mermaidOptions":{}}},"gatsby-remark-graphviz",{"resolve":"/Users/uday/docs/plugins/gatsby-remark-sectionize-toc/index.js","options":{"maxDepth":3}},{"resolve":"gatsby-remark-images","options":{"maxWidth":1050,"quality":75,"showCaptions":true,"disableBgImageOnAlpha":true,"withWebp":true}},"gatsby-remark-copy-linked-files",{"resolve":"gatsby-remark-jargon","options":{"jargon":{"docs":"<span><b>docs</b> - inspektre docs</span> Inspektre Documentation"}}},{"resolve":"gatsby-remark-embed-snippet","options":{"directory":"/Users/uday/docs/snippets/"}},{"resolve":"gatsby-remark-embedder","options":{"customTransformers":[],"services":{}}}],"extensions":[".mdx",".md"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":null,"head":true,"anonymize":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-canonical-urls/gatsby-browser.js'),
      options: {"plugins":[],"siteUrl":"https://docs.inspektre.io","stripQueryString":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"BooGi","short_name":"BooGi","start_url":"/","background_color":"#6b37bf","theme_color":"#6b37bf","display":"minimal-ui","crossOrigin":"anonymous","icon":"static/assets/logo.png","description":"Inspektre Documentation","cache_busting_mode":"none","include_favicon":false,"lang":"en","legacy":true,"theme_color_in_head":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"appendScript":"/Users/uday/docs/src/custom-sw-code.js"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
