module.exports = {
    "env": {
        "node": true,
        "jest": true
    },
    "extends": [
        "standard",
        "standard-react",
        "plugin:prettier/recommended",
        "prettier/standard",
        "prettier/react"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "legacyDecorators": true,
            "jsx": true
        }
    },
    "settings": {
        "react": {
            "version": "17"
        }
    },
    "rules": {
        "space-before-function-paren": 0,
        "react/prop-types": 0,
        "react/jsx-handler-names": 0,
        "react/jsx-fragments": 0,
        "react/no-unused-prop-types": 0,
        "import/export": 0,
        "prettier/prettier": [
            "error",
            {
              "endOfLine": "auto"
            },
          ],
    },
}