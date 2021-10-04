module.exports = (options, ctx) => {
    return {
      // other code...
      async ready() {
        // Filter out draft posts in prod mode
        if (ctx.isProd) {
          ctx.pages.splice(0, ctx.pages.length, ...ctx.pages.filter(({ frontmatter }) => frontmatter.draft !== true))
        }
      },
      
    plugins: [
        ['@vuepress/medium-zoom', {
            selector: '.portfolio-item-layout .content img,.medium-zoom'
        }],
        ['vuepress-plugin-container', {
            type: 'tip',
            before: info => `<div class="tip pt-4 pb-2"><p class="title">${info}</p>`,
            after: '</div>',
            defaultTitle: "TIP"
        }],
        ['vuepress-plugin-container', {
            type: 'youtube',
            before: info => `<div class="youtube-container"><iframe width="560" height="315" src="${info}`,
            after: '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
            defaultTitle: ""
        }]
    ]
    }

}