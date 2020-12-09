module.exports = {
  "plugins": {
    "@release-it/conventional-changelog": {
      "preset": "conventionalcommits",
      "infile": "CHANGELOG.md"
    }
  },
  "github": {
    "release": true,
    "releaseName": "v${version}"
  },
  "npm": {
    "skipChecks": true
  },
  "git": {
    "commitMessage": "chore(release): v${version}",
  }
}
