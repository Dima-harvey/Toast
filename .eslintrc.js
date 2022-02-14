module.exports = {
    "extends": ["standard", "standard-react", "prettier", "prettier/react"],
    "plugins": ["prettier", "react-hooks","jest"],
    "parser": "babel-eslint",
    "env": {
      "node": true,
      "browser": true,
      "jest": true,
    },
    "rules": {
      "arrow-parens": ["error", "as-needed"],
      "semi": "error",
      "prefer-destructuring": "error",
      "no-eval": ["error", {"allowIndirect": true}],
      "max-len": [
        "warn",
        {
          "code": 150,
          "ignoreUrls": true,
          "ignorePattern": "import"
        }
      ],
      "no-unused-vars": "warn",
      "operator-linebreak": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react/jsx-closing-tag-location": 2,
      "react/jsx-closing-bracket-location": "off",
      "react/jsx-max-props-per-line": [
        2,
        {
          "maximum": 2,
          "when": "multiline"
        }
      ],
      "react/jsx-filename-extension": [
        2,
        {
          "extensions": [".js",".jsx"]
        }
      ],
      "jsx-quotes": ["error", "prefer-double"],
      "prefer-const": [
        "error",
        {
          "destructuring": "any",
          "ignoreReadBeforeAssign": false
        }
      ],
      "react/prop-types": "off",
      "react/jsx-fragments": [1, "element"]
    },
    "overrides": [
      {
        "files": ["src/index.js"],
        "rules": {
          "react/jsx-filename-extension": "off",
          "prettier/prettier": [
            "error",
            {
              "singleQuote": true
            }
          ]
        }
      }
    ]
}