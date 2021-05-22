---
title: Creating Add-ons
---

All add-ons are created in the JSON format. Sadly, there is no way to test them yet unless you manually run JS code in the Mue console.

**Photo Packs**:
```json
{
    "name": "Test photo pack",
    "description": "This is a test",
    "icon_url": "https://cdn.discordapp.com/attachments/252071498397777921/748878937064734770/unknown.png",
    "screenshot_url": "https://u.derpyenterprises.org/CcNj",
    "type": "photos",
    "verified": false,
    "version": "1.0.0",
    "author": "davidjcralph",
    "photos": [
        {
            "photographer": "derpy",
            "location": "???",
            "url": {
                "default": "https://example.com/example.jpg"
            }
        },
        {
            "photographer": "derpy",
            "location": "???",
            "url": {
                "default": "https://example.com/example.jpg"
            }
        }
    ]
}
```
The ``location`` and ``photographer`` keys are not currently used but will be in the future, so please provide correct information for them. Please don't set ``verified`` to "true". We will announce information about verification in the future. In the future there will also be a ``webp`` option so if you can please provide one. If you don't, don't worry as we will make webp versions of your images for you when we add the feature.

**Quote Packs**:
```json
{
    "name": "Test quote pack",
    "description": "This is a test",
    "icon_url": "https://cdn.discordapp.com/attachments/252071498397777921/748878937064734770/unknown.png",
    "screenshot_url": "https://u.derpyenterprises.org/CcNj",
    "type": "quotes",
    "verified": false,
    "version": "1.0.0",
    "author": "davidjcralph",
    "quotes": [
        {
            "author": "derpy",
            "quote": "hello"
        },
        {
            "author": "derpy",
            "quote": "this is a test"
        }
    ]
}
```
In the future, there may be a ``language`` option, so if you want you can include one.

**Preset Settings**
```json
{
    "name": "Test settings pack",
    "description": "This is a test",
    "icon_url": "https://cdn.discordapp.com/attachments/252071498397777921/748878937064734770/unknown.png",
    "screenshot_url": "https://u.derpyenterprises.org/CcNj",
    "type": "settings",
    "verified": false,
    "version": "1.0.0",
    "author": "davidjcralph",
    "settings": [
        {
            "key": "copyButton",
            "value": "false"
        },
        {
            "key": "backgroundAPI",
            "value": "unsplash"
        }
    ]
}
```
If you want to find out the available settings, open dev tools on Mue, go to local storage and try changing the settings on the modal to see the keys and values. Currently, it is not possible to include quote packs etc in your preset but we may add it in the future.

After you've created your add-on, save it like this: "crunchyroll_hime.json" (for if your pack was called Crunchyroll Hime). You can then test it out by going to My Add-ons -> Sideload in the Mue settings modal.