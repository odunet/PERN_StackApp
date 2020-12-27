![PERN Logo](https://i.ibb.co/BNgLzDF/Pern.png)

# Simple PERN Stack App with Image Upload Feature
This full stack app provides the almost bare minimum modules and code required to deploy a PERN stack app with image upload feature. Note that the server (e.g. REST API) recieving the image is not implemented here. A REST end point is also iomplemented. This REST endpoint gets data from the PostgreSQL DB and displays same as a JSON object in the browser.

### Tech

* PostgreSQL
* Express
* ReactJS
* Node
* REST

### Node Libraries

* WebPack
* Babel
* HandleBars
* Node
* express-fileupload

### Installation

Install the dependencies from the *Tech* list above.

```sh
$ npm init
$ service postgresql start
$ sudo -u postgres psql
$ npm run build
$ npm start
```

License
----

MIT
**Free Script**