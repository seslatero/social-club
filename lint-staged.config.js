module.exports = {
  "*.{ts,tsx,!.graphql.ts,css}": ["prettier . --write"],
  "*.{ts,tsx,!.graphql.ts}": [
    "eslint . --cache --fix --ext .tsx --ext .ts",
    () => "yarn tsc",
    () => "yarn jest",
  ],
};
