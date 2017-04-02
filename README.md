# MIT ATS Website

We want to:
- Not to have a website in PHP
- Make it more maintainable for the future webmasters
- Preserve the look and feel
- But modernize the design

We don't want to:
- Re-brand, come up with a completely new design
- Spend too much time on the rewrite

## Design 
Ideas:
- Preserve the warm brownish colorscheme
- Add more photos from the actual ATS events, less stock photography

The current colors are:
- title text: #280810
- body text: #1b050b
- background: #DAD5B5

New colors:
 - #000000
 - #151515
 - #542f01
 - #7e4702
 - #a95f01
 - #d47601


## Development

You would need `node` and `npm`.

Install `gatsby` globally:

```
npm install -g gatsby
```

Install dependencies:

```
npm install
```

Run locally:

```
npm run develop
```

Running in development mode will run a server on `localhost:8000`. CSS has hot-code-reloading. Hot module replacement also should work.

To lint:

```
npm run lint
```

## Deployment

The site is deployed on MIT Scripts, under the locker called `mitats`.

Since it is a club-owned locker, your MIT Kerberos account should be on
the `ats-exec@mit.edu` mailing list in order to upload files there.

To deploy, just build files and put them into the Scripts root to be served
as static files.

Run the `./deploy-to-prod` bash script to save keystrokes and upload files
over `scp`.

---

Web design and development by Slava Kim'19.
