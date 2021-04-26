import { GetXkcdComic } from './provider';

GetXkcdComic()
.then((result) => {
console.log('result is ', result);
})
.catch((caught) => {
  console.log('caught is ', caught);
});

function App() {
  return (
    <div>
      App
    </div>
  );
}

export default App;
