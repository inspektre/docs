module.exports = {
    "metadata": {
        "name": "inspektre docs",
        "short_name": "docs",
        "description": "Inspektre Documentation",
        "language": "en",
        "url": "https://docs.inspektre.io",
        "pathPrefix": "/",
        "gaTrackingId": null,
        "siteImage": null,
        "favicon": "/assets/favicon.png",
        "themeColor": "#0066cc"
    },
    "header": {
        "logo": "/assets/logo.png",
        "logoLink": "/",
        "helpUrl": "",
        "links": [],
        "enabled": true
    },
    "sidebar": {
        "enabled": true,
        "ignoreIndex": false,
        "forcedNavOrder": [],
        "expanded": [],
        "groups": [],
        "links": [],
        "poweredBy": {}
    },
    "pwa": {
        "manifest": {
            "name": "inspektre docs",
            "short_name": "inspektre docs",
            "start_url": "/",
            "background_color": "#6b37bf",
            "theme_color": "#6b37bf",
            "display": "minimal-ui",
            "crossOrigin": "anonymous",
            "icon": "static/assets/logo.png",
            "description": "Inspektre Documentation",
            "cache_busting_mode": "none",
            "include_favicon": false,
            "lang": "en"
        },
        "enabled": true
    },
    "social": {
        "facebook": "",
        "github": "https://github.com/inspektre",
        "gitlab": "",
        "instagram": "",
        "linkedin": "https://www.linkedin.com/company/inspektreio",
        "mail": "contact@inspektre.io",
        "gmail": "",
        "slack": "",
        "twich": "",
        "twitter": "https://twitter.com/inspektre",
        "youtube": ""
    },
    "features": {
        "editOnRepo": {
            "editable": true,
            "location": "https://github.com/inspektre/docs.git",
            "type": "github"
        },
        "search": {
            "enabled": true,
            "indexName": "docs",
            "algoliaAppId": "XW6AFRQWUY",
            "algoliaAdminKey": "be00fb1a9d27aaf543af5a1220213a20",
            "excerptSize": 20000,
            "engine": "algolia",
            "placeholder": "Search",
            "startComponent": "icon",
            "debounceTime": 380,
            "snippetLength": 23,
            "hitsPerPage": 10,
            "showStats": true,
            "localSearchEngine": {
                "encode": "advanced",
                "tokenize": "full",
                "threshold": 2,
                "resolution": 30,
                "depth": 20
            },
            "pagination": {
                "enabled": true,
                "totalPages": 10,
                "showNext": true,
                "showPrevious": true
            }
        },
        "toc": {
            "show": true,
            "depth": 3
        },
        "previousNext": {
            "enabled": true,
            "arrowKeyNavigation": true
        },
        "scrollTop": true,
        "showMetadata": true,
        "propagateNetlifyEnv": true,
        "pageProgress": {
            "enabled": false,
            "excludePaths": [
                "/"
            ],
            "height": 3,
            "prependToBody": false,
            "color": "#A05EB5"
        },
        "mermaid": {
            "language": "mermaid",
            "theme": "dark",
            "options": {},
            "width": 300,
            "height": 300
        },
        "rss": {
            "enabled": false,
            "showIcon": false,
            "title": "inspektre docs",
            "copyright": "",
            "webMaster": "M",
            "managingEditor": "",
            "categories": [
                "GatsbyJS",
                "Docs"
            ],
            "ttl": "60",
            "matchRegex": "^/",
            "outputPath": "/rss.xml",
            "generator": "gidocs"
        },
        "darkMode": {
            "enabled": true,
            "default": true
        },
        "publishDraft": false,
        "fullScreenMode": {
            "enabled": false,
            "hideHeader": false,
            "hideToc": true,
            "hideSidebar": true
        }
    },
    "search": {
        "enabled": true,
        "startComponent": "icon",
        "pagination": {
            "enabled": true
        }
    }
};