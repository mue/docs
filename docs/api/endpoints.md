---
title: Endpoints
---

There are endpoints for images, quotes and update information.

## Images
#### Get Random Image
```https://api.muetab.com/images/random```

This endpoint allows you to get a random image. If category isn't specified it will get a random image from all categories.
#### Request
Parameter | Type | Info
--- | --- | ---
category (optional) | string | Returns random image from specific category
#### Response
```json 
{
    "id": 186,
    "category": "Outdoors",
    "file": "https://res.cloudinary.com/mue/image/upload/photos/old/78ff331a7aa4bda3.jpg",
    "photographer": "David Ralph",
    "location": "Cotswold Wildlife Park", 
    "camera": "Samsung Galaxy S8", 
    "resolution": null
}
```

### Get Categories
```https://api.muetab.com/images/categories```

This endpoint returns all categories in an array.
#### Response
```json
["Outdoors"]
```

### Get Photographers
```https://api.muetab.com/images/photographers```

This endpoint returns all photographers in an array.
#### Response
```json
["photographer1", "photographer2"]
```

## Quotes
#### Get Random Quote
```https://api.muetab.com/quotes/random```

This endpoint allows you to get a random quote. If language isn't specified it will return a random quote in any language.
#### Request
Parameter | Type | Info
--- | --- | ---
language (optional) | string | Get a random quote in a specific language
#### Response
```json
{
    "id": 4,
    "author": "E.E Cummings",
    "quote": "It takes courage to grow up and become who you really are.",
    "language": "English"
}
```

### Get Quote Languages
```https://api.muetab.com/quotes/languages```

This endpoint returns all quote languages in an array.
#### Response
```json
["English", "French"]
```

## Other
#### /
```https://api.muetab.com```

Returns hello world message.
#### Response
```json
{
    "version": "1.4.0",
    "message": "Hello World! API docs: https://docs.muetab.com"
}
```
