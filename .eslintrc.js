module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "plugin:import/typescript",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "tsconfigRootDir": __dirname,
        "project": "./tsconfig.json"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "i18next"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "import/prefer-default-export": "off",
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": true
            }
        ],
        "react/function-component-definition": "off",
        "no-underscore-dangle": "off",
        "react/require-default-props": "off",
        "react/jsx-props-no-spreading": "off",
        "i18next/no-literal-string": [
            "error",
            {
                "markupOnly": true,
                "ignoreAttribute": [
                    "data-testid",
                    "theme",
                    "to"
                ]
            }
        ],
        "no-unused-vars": "warn",
        "no-trailing-spaces": "off",
        "max-len": [
            "error",
            {
                "code": 100,
                "comments": 150
            }
        ]
    },
    "globals": {
        "__IS_DEV__": true
    },
    "overrides": [
        {
            "files": [
                "**/src/**/*.test.{ts,tsx}"
            ],
            "rules": {
                "i18next/no-literal-string": "off"
            }
        }
    ]
}
