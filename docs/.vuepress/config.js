require('dotenv').config()
module.exports = {
    title: 'Jérôme RINNER',
    description: 'Portfolio of Jérôme RINNER',
    theme: 'theme',
    themeConfig: {
        social: [
            { name: 'Github', icon: ['fab', 'github'], url: 'https://github.com/helixfix' },
            { name: 'Stack Overflow', icon: ['fab', 'stack-overflow'], url: 'https://stackoverflow.com/users/16547877/helixfix'},
            { name: 'Mail', icon: ['fas', 'envelope'], url: 'mailto:portfolio.9fkib@aleeas.com' },
            { name: 'LinkedIn', icon: ['fab', 'linkedin'], url: 'https://www.linkedin.com/in/jerome-rinner-helixfix-developpeur-full-stack-mulhouse/' }
        ],
        tag_order: ['Android Development', 'Web Development']
    },
    head: [
        ['link', { rel: 'icon', type: "image/png", sizes: "32x32", href: '/favicon-32x32.png' }],
        ['link', { rel: 'icon', type: "image/png", sizes: "16x16", href: '/favicon-16x16.png' }],
        ['link', { rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png' }],
        ['link', { rel: 'manifest', href: '/site.webmanifest' }],
        ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' }],
        ['meta', { name: 'msapplication-TileColor', content: '#2b5797' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }]
    ],
    plugins: [
        '@vuepress/pwa',
        [
            '@vuepress/google-analytics',
            {
                'ga': process.env.GOOGLE_ANALYTICS_TRACKING_ID
            }
        ],
        [
            'sitemap', {
                hostname: 'https://helixfix.github.io'
            }
        ]
    ]
}