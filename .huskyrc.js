const tasks = arr => arr.join(" && ")

module.exports = {
  hooks: {
    "pre-commit": tasks([
      "npm run lint"
    ]),
    "prepare-commit-msg": tasks([
      "exec < /dev/tty && git cz --hook || true"
    ]),
    "commit-msg": tasks([
      "commitlint -E HUSKY_GIT_PARAMS"
    ])
  }
};
