module.exports = {
  "plugins": {
    "@release-it/conventional-changelog": {
      "preset": "conventionalcommits",
      "infile": "CHANGELOG.md"
    }
  },
  "github": {
    "release": true
  },
  "npm": {
    "skipChecks": true
  }
}
