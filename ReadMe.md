[xkcd-react](https://github.com/noviKorisnik/xkcd-react#readme)
___
### snapshot003
## cors policy?
Our first test failed with exception...
```
Access to fetch at 'http://xkcd.com/info.0.json' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```
... it appears that request is blocked from side of browser, while asked service does not provide response header which explicitly allow that request can be asked from distant site like ours - it is considered as security risk and we are secured with not allowing to use the service. Cool to be secure - the only problem is that we want to use service, huh.

So, it is a browser thingie, and the problem can be solved with altering browser behaviour (there is some extension for Chrome which can solve it, for example), but that wouldn't solve an issue for all the users using our react application (would they follow the instruction - just install this extension which adds minor security risk and you can use our app!?).

The other is to use proxy server - simple scenario - we pass request to proxy with address we want to use and parameters - proxy send request to desired address, receives answer and send it back to us!

Well... here is proxy written for this purpose, but it possibly can be used for something else too: [dotnet-proxy](https://github.com/noviKorisnik/dotnet-proxy#readme)
## ready for another test?
With our proxy up and running, just a bit to alter existing code in **GetXkcdComic**
``` typescript
const url: string = `https://localhost:5001/Proxy?url=${encodeURI(path.join('/'))}`;
```
Test passes now, there is printed the last xkcd comic object in debug console, really encouraging!
## something visual
... if we just could see the comic... probably even more interestig... nothing too fancy though...

Since service is designed to provide the latest comic episode when comicId is not specified, the first run will bring us the latest comicId and with somehow provided navigation we can browse from the very beginning all up to that point (a look to the future not invented yet, sorry). Random button is also here, nothing unusual if you tried original xkcd at any time.

Considering react, all is done with several hooks, useState and useEffect, I hope that code is simple enough to be self-explaining.

The most interesting is to see the comic itself, image element with a proper address give that to us.

For the end, couple of links: one to original page of shown comic and the other to correxponding explain page (which helped me numerous times, just as it is nicely said there **_Explain xkcd: It's 'cause you're dumb._**)

___
| [Previous](https://github.com/noviKorisnik/xkcd-react/tree/snapshot002#readme) |  [Home](https://github.com/noviKorisnik/xkcd-react#readme) |
|:-:|:-:|
___
