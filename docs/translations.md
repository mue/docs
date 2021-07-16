---
title: Translations
---

This page covers the instructions for translating the Mue tab extension.

Please do not use Google Translate where possible. To avoid duplication of work, it is recommended you join our Discord server first (see footer) as some of our translators are in there.

## Requirements
* All of the [development](/development#mue-tab) requirements
* A free [GitHub](https://github.com) account

## Instructions
Make sure you have followed all of the [development](/development#mue-tab) instructions first to get a working local instance of Mue on your machine. Instead of cloning ``mue/mue``, you will need to fork the repository to ``<yourgithubusername>/mue``.

1. Create a file for your translation in ``src/translations``, for example ``en_GB.json``
2. Copy all of the contents of ``en_GB.json`` to your new file
3. Translate all of the strings in your new file
4. Add your translation to ``src/modules/languages.json`` at the end of the JSON array
5. Test your translation by going to the Mue settings modal (make sure the dev server is running), then to languages and selecting your language
6. Go to the root directory of your Mue instance and run ``git add *``
7. Next, run ``git commit -m "feat(translations): Add <language here> translation"``
8. Finally, run ``git push`` and open a pull request on the GitHub website

If you have any issues, please feel free to contact us
