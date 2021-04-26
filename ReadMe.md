[xkcd-react](https://github.com/noviKorisnik/xkcd-react#readme)
___
### snapshot002
## about, finally
After initial interest to play with available public apis and do some react thingies... Search guided me to site [**any api**](https://any-api.com) (which appears as out of function now, but it was there, then, believe me).

There (while it worked) I found, among others, that [**xkcd**](https://xkcd.com) also provides api, which attracted me that it could be a good example to work with. Short info on xkcd, in case you are not familiar with it from earlier - web comic "of romance, sarcasm, math and language" (or it can be more clear with simple click on link, to get known if you like it or not).

Site of **any api** had listing of many apis and within details page of selected api was some basic yet usefull info on it, like addresses of api endpoints and expected shape of returned data, enough to have something to try api...
## typescript
Yes, I wanted to see how typescript works with react, but somehow I forgot to put those two together at the very start, so it is done later with
```
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```
... plus to rename all js files to ts and also to tsx where jsx syntax is used.
## model
Thanks for model definition from any api site, **XkcdComic** class is defined.
## provider
Since xkcd api has only two endpoints, where one is just a special case of the other, we can fetch data using single function where comicId is an optional parameter (if not provided, default service behaviour is to fetch latest comic book issue). All that is set into **provider.ts**, method **GetXkcdComic**.
___
| [Previous](https://github.com/noviKorisnik/xkcd-react/tree/snapshot001#readme) |  [Home](https://github.com/noviKorisnik/xkcd-react#readme) | [Next](https://github.com/noviKorisnik/xkcd-react/tree/snapshot003#readme) |
|:-:|:-:|:-:|
___
