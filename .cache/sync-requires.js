const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/caleb/calebs-notes/.cache/dev-404-page.js"))),
  "component---node-modules-gatsby-theme-andy-src-templates-note-js": hot(preferDefault(require("/home/caleb/calebs-notes/node_modules/gatsby-theme-andy/src/templates/note.js")))
}

