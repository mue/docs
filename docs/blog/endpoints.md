---
title: API Endpoints
---

There is an API to get blog content in JSON. Listed below are the various endpoints for information.

### Posts
#### Get All Posts
```https://blog.muetab.com/posts/index.json```

This endpoint allows you to get a list of all the posts on the blog currently, ordered by most recent.
#### Response
```json
[
    {
	    "title": "Version 5.0 - The big one",
	    "url": "https://blog.muetab.com/posts/version-5-0-the-big-one/",
	    "api": "https://blog.muetab.com/posts/version-5-0-the-big-one/index.json",
	    "date": "2021-04-23 17:30:32.772 +0000 UTC",
	    "last_modified": "2021-04-23 17:30:33.384 +0000 UTC",
	    "authors": ["Isaac Saunders"],
	    "featured_image": "https://res.cloudinary.com/mue/image/upload/blog/version-5-0-the-big-one.webp",
	    "tags": ["Update release"],
	    "keywords": null,
	    "summary": "The biggest update to Mue yet. Learn about everything that was added to Mue in the new 5.0 release.",
	    "truncated": false
	}
]
```

#### Get Post
```https://blog.muetab.com/posts/:slug/index.json```

This endpoint allows you to get a specific post along with its content in markdown.
#### Request
Parameter | Type | Info
--- | --- | ---
slug | string | Post slug
#### Response
```json
{
	"title": "Version 5.0 - The big one",
	"url": "https://blog.muetab.com/posts/version-5-0-the-big-one/",
	"date": "2021-04-23 17:30:32.772 +0000 UTC",
	"last_modified": "2021-04-23 17:30:33.384 +0000 UTC",
	"authors": ["Isaac Saunders"],
	"featured_image": "https://res.cloudinary.com/mue/image/upload/blog/version-5-0-the-big-one.webp",
	"tags": ["Update release"],
	"keywords": null,
	"summary": "The biggest update to Mue yet. Learn about everything that was added to Mue in the new 5.0 release.",
	"truncated": false,
	"words": 231,
	"reading_time": 2,
	"plain_text": ""
}
```

### Authors
#### Get All Authors
```https://blog.muetab.com/authors/index.json```

This endpoint allows you to get a list of all the blog authors along with their profile information.
#### Response
```json
[
    {
	    "title": "Isaac Saunders",
	    "url": "https://blog.muetab.com/authors/isaac-saunders/",
	    "api": "https://blog.muetab.com/authors/isaac-saunders/index.json",
	    "date": "2021-04-23 17:30:32.772 +0000 UTC",
	    "last_modified": "2021-04-23 17:30:33.384 +0000 UTC",
	    "authors": null,
	    "featured_image": null,
	    "tags": null,
	    "keywords": null,
	    "summary": "Hi, I’m Isaac. I don’t do much at Mue, but I give David and Alex huge lists of things to improve. 😆",
	    "truncated": false
	}
]
```

#### Get Author Posts
```https://blog.muetab.com/authors/:slug/index.json```

This endpoint allows you to get a list of all posts written by an author.
#### Request
Parameter | Type | Info
--- | --- | ---
slug | string | Author slug
#### Response
```json
[
    {
	    "title": "Version 5.0 - The big one",
	    "url": "https://blog.muetab.com/posts/version-5-0-the-big-one/",
	    "api": "https://blog.muetab.com/posts/version-5-0-the-big-one/index.json",
	    "date": "2021-04-23 17:30:32.772 +0000 UTC",
	    "last_modified": "2021-04-23 17:30:33.384 +0000 UTC",
	    "authors": ["Isaac Saunders"],
	    "featured_image": "https://res.cloudinary.com/mue/image/upload/blog/version-5-0-the-big-one.webp",
	    "tags": ["Update release"],
	    "keywords": null,
	    "summary": "The biggest update to Mue yet. Learn about everything that was added to Mue in the new 5.0 release.",
	    "truncated": false
	}
]    
```