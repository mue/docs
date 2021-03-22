---
title: Endpoints
---

There are endpoints for images, quotes and update information.

* [Images](#images)
* [Quotes](#quotes)
* [Other](#other)

## Images

#### Get Image

```https://api.muetab.com/getImage```

This endpoint allows you to get an image. If ID or category aren't specified it will return a random image from all categories.

<!-- tabs:start -->
#### ** Request **
Parameter | Type | Info
--- | --- | ---
id (optional) | number | Returns information for specific image id
category (optional) | string | Returns random image from specific category

#### ** Response **
Type | Code | Response
--- | --- | ---
OK | 200 | ```{"id":186,"category":"Outdoors","file":"https://img.muetab.com/mue/78ff331a7aa4bda3.jpg","photographer":"David Ralph","location":"Cotswold Wildlife Park", "camera": "Samsung Galaxy S8", "resolution": null}```
Not Found | 404 | ```{"message":"Category not found."}```
<!-- tabs:end -->

### Get Categories

```https://api.muetab.com/getCategories```

This endpoint returns all categories in an array.

<!-- tabs:start -->
#### ** Response **
Type | Code | Response
--- | --- | ---
OK | 200 | ```["Outdoors"]```
<!-- tabs:end -->

### Get Photographers

```https://api.muetab.com/getPhotographers```

This endpoint returns all photographers in an array.

<!-- tabs:start -->
#### ** Response **
Type | Code | Response
--- | --- | ---
OK | 200 | ```["photographer1", "photographer2"]```
<!-- tabs:end -->

## Quotes

#### Get Quote

```https://api.muetab.com/getQuote```

This endpoint allows you to get a quote. If ID isn't specified it will return a random quote.

<!-- tabs:start -->
#### ** Request **
Parameter | Type | Info
--- | --- | ---
id (optional) | number | Returns information for specific quote id
language (optional) | string | Get a random quote in a specific language

#### ** Response **
Type | Code | Response
--- | --- | ---
OK | 200 | ```{"id":4,"author":"E.E Cummings","quote":"It takes courage to grow up and become who you really are.","language":"English"}```
Not Found | 404 | ```{"statusCode":400,"error":"Invalid ID","message":"ID Not Found"}```
<!-- tabs:end -->

### Get Quote Languages

```https://api.muetab.com/getQuoteLanguages```

This endpoint returns all quote languages in an array.

<!-- tabs:start -->
#### ** Response **
Type | Code | Response
--- | --- | ---
OK | 200 | ```["English", "French"]```
<!-- tabs:end -->

## Other

#### /

```https://api.muetab.com```

Returns hello world message.

<!-- tabs:start -->
#### ** Response **
Type | Code | Response
--- | --- | ---
OK | 200 | ```Hello world! Documentation can be found at https://apidocs.muetab.com```
<!-- tabs:end -->

#### Get Update Changelog

```https://api.muetab.com/getUpdate```

This endpoint allows you to get the most recent update changelog from the [blog](https://blog.muetab.com).

<!-- tabs:start -->
#### ** Response **
Type | Code | Response
--- | --- | ---
OK | 200 | ```{"title":"Version 4.0 - Changelog","content":"<p>Changes in version 4.0 of Mue Tab:</p>removed","published":"31st Aug 2020","author":"Alex Sparkes"}```
<!-- tabs:end -->