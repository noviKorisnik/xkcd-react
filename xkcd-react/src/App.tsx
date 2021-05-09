import { GetXkcdComic } from './provider';
import { useState, useEffect } from 'react';
import { XkcdComic } from './model';

function App() {
  const [xkcd, setXkcd] = useState(new XkcdComic());
  const [comicId, setComicId] = useState(NaN);
  const [comicDate, setComicDate] = useState('');
  const [latest, setLatest] = useState(NaN);

  useEffect(() => {
    if (!xkcd || xkcd.num !== comicId) {
      GetXkcdComic(comicId)
        .then((result: XkcdComic) => {
          setXkcd(result);
          setComicId(result.num ? result.num : NaN);
          try {
            setComicDate(new Date(
              parseInt(result.year ? result.year : '', 10),
              parseInt(result.month ? result.month : '', 10) - 1,
              parseInt(result.day ? result.day : '', 10)
            ).toDateString());
          } catch (ex) { }
          if (!latest) {
            setLatest(result.num ? result.num : NaN);
          }
        })
        .catch((err) => {
          alert(`err: could not fetch xkcd ${comicId}`);
        });
    }
  }, [xkcd, comicId, latest]);
  useEffect(() => {
    if (xkcd) {
      document.title = `${xkcd.title} | xkcd`;
    }
  }, [xkcd]);

  const prev = () => {
    if (latest) {
      setComicId(comicId - 1);
    }
  }
  const next = () => {
    if (latest) {
      setComicId(comicId + 1);
    }
  }
  const last = () => {
    if (latest) {
      setComicId(latest);
    }
  }
  const rnd = () => {
    if (latest) {
      setComicId(Math.floor(Math.random() * latest) + 1);
    }
  }

  if (xkcd.img) return (
    <>
      <div className={'nav'}>
        <button onClick={prev} disabled={comicId <= 1}>previous</button>
        <button disabled={true}>{comicId}</button>
        <button onClick={next} disabled={comicId >= latest}>next</button>
        <button disabled={true}>xkcd</button>
        <button onClick={last} disabled={comicId === latest}>latest</button>
        <button onClick={rnd}>random</button>
      </div>
      <h1 className={'title'}>{xkcd.title}</h1>
      <div className={'date'}>{comicDate}</div>
      <div className={'comic'}><img src={xkcd.img} title={xkcd.alt} alt={xkcd.alt} /></div>
      <div className={'link'}>
        <a href={`https://xkcd.com/${xkcd.num}/`} target="_blank" rel="noreferrer">{xkcd.num}</a>
        {' | '}
        <a href={`https://www.explainxkcd.com/wiki/index.php/${xkcd.num}`} target="_blank" rel="noreferrer">explain</a>
      </div>
    </>
  );
  return <div>Xkcd</div>;
}

export default App;
