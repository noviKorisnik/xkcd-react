import { XkcdComic } from './model';

export const GetXkcdComic = async (comicId?: number): Promise<XkcdComic> => {
    const path: string[] = ['http://xkcd.com'];
    if (comicId) {
        path.push(comicId.toString());
    }
    path.push('info.0.json');

    const url: string = `https://localhost:5001/Proxy?url=${encodeURI(path.join('/'))}`;

    return Object.assign(new XkcdComic(), await (await fetch(url)).json());
}