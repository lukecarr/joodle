const tasks = arr => arr.join(" && ")

module.exports = {
  hooks: {
    "pre-commit": tasks([
      "yarn lint:check"
    ]),
    "commit-msg": tasks([
      "commitlint -E HUSKY_GIT_PARAMS"
    ])
  }
};
