/* eslint-disable no-undef */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "spellcheck",
    ],
    /**
     * To make something exempt from spellcheck, simply add it into the
     * "skipWords" files below.
     */
    "rules": {
        "spellcheck/spell-checker": [1,
            {
                "comments": true,
                "strings": true,
                "identifiers": true,
                "templates": true,
                "lang": "en_US",
                "skipWords": [
                    "leaderboard",
                    "meijer",
                    "num",
                    "undef",
                    "unpadded",
                ],
            }
        ]
    }
}
