---
title: Creating Add-ons
---

All add-ons are created in the JSON format.

**Photo Packs**:
```json
{
    "name": "Test photo pack",
    "description": "This is a test",
    "icon_url": "https://example.com/example.jpg",
    "screenshot_url": "https://example.com/example.jpg",
    "type": "photos",
    "verified": false,
    "version": "1.0.0",
    "author": "davidjcralph",
    "photos": [
        {
            "photographer": "David Ralph",
            "location": "???",
            "url": {
                "default": "https://example.com/example.jpg"
            }
        },
        {
            "photographer": "David Ralph",
            "location": "???",
            "url": {
                "default": "https://example.com/example.jpg"
            }
        }
    ]
}
```
The ``location`` and ``photographer`` keys are not currently used but will be in the future, so please provide correct information for them. Please don't set ``verified`` to "true". We will announce information about verification in the future.

**Quote Packs**:
```json
{
    "name": "Test quote pack",
    "description": "This is a test",
    "icon_url": "https://example.com/example.jpg",
    "screenshot_url": "https://example.com/example.jpg",
    "type": "quotes",
    "verified": false,
    "version": "1.0.0",
    "author": "davidjcralph",
    "quotes": [
        {
            "author": "David Ralph",
            "quote": "hello"
        },
        {
            "author": "David Ralph",
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
    "icon_url": "https://example.com/example.jpg",
    "screenshot_url": "https://example.com/example.jpg",
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
If you want to find out the available settings, open Developer Tools on Mue (Ctrl + Shift + I), go to Application -> Local Storage and try changing the settings on the modal to see the keys and values. You can also find these by exporting your settings in the Advanced tab on the settings modal. Currently, it is not possible to include quote packs etc in your preset but we may add it in the future.

After you've created your add-on, save it like this: "crunchyroll_hime.json" (for if your pack was called Crunchyroll Hime). You can then test it out by going to My Add-ons -> Sideload in the Mue settings modal.