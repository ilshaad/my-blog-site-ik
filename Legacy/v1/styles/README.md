ik 20250517
iK changes I have made so far

- place old files (particularly sass) in v1 legacy directory
- upgraded every package, including for it to work on node v24
- Switching from sass to css
  - because bootstrap was giving error warnings on the terminal as their package have not upgraded their sass
    - they still use @import, but sass now use @use
  - no need to change the nesting because css now support nesting too
- I fixed the quote api as it was not working, but the issue was on their side, I just remove the s in the https which seem to work fine now

# Ilshaad blog site

###### Frontend / React-Typescript app using Next.js

##### Author: _ilshaad Kheerdali_

##### Live site: [Ilshaad blog site](https://www.ilshaadblog.tk/)

##### Github: [ilshaad/my-blog-site-ik](https://github.com/ilshaad/my-blog-site-ik)

## What is the app about?

The app is a blog site. I have learnt a lot from the web community, and I believe in giving back. So I write blog articles in the hope that it will help other web developers, who are struggling with certain topics that I come across.

## Main technologies I used in the app:

- React
- Typescript / Javascript
- Next.js
- Jest
- React-Testing-Library
- Sass / Bootstrap / React-Bootstrap
- PWA
- Docker
- etc...

## Some key points about the app:

- Test on every pages.
  - Using Jest and React-Testing-Library.
  - API and unit testing.
- Mobile first approach, design ranging `320px-1600px`.

#### Feel free to contact me if you want to know more about me or the app. Thanks
