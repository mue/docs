---
title: API Endpoints
---

There is an API to get blog content in JSON. Listed below are the various endpoints for information.

### Posts
#### Get All Posts
```https://blog.muetab.com/posts/index.json```

This endpoint allows you to get a list of all the posts on the blog currently, ordered by most recent.
#### Response
Type | Code | Response
--- | --- | ---
OK | 200 | ```[{"title": "Version 5.0 - The big one", "url": "", "api": "", "date": "2021-04-23 17:30:32.772 +0000 UTC", "last_modified": "2021-04-23 17:30:33.384 +0000 UTC", "authors": ["Isaac Saunders"], "featured_image": "", "tags": [""], "keywords": null, "summary": "", "truncated": false }```


#### Get Post
```https://blog.muetab.com/posts/:slug/index.json```

This endpoint allows you to get a specific post along with its content in markdown.
#### Response
Type | Code | Response
--- | --- | ---
OK | 200 | ```{"title": "Version 5.0 - The big one", "url": "", "date": "2021-04-23 17:30:32.772 +0000 UTC", "last_modified": "2021-04-23 17:30:33.384 +0000 UTC", "authors": ["Isaac Saunders"],"featured_image": "", "tags": ["Update release"], "keywords": null, "summary": "", "truncated": false, "words": 231, "reading_time": 2, "plain_text": ""}```

### Authors
(to be added)