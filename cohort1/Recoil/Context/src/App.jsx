import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { countAtom } from "./store/atoms/count";
import { evenSelector } from "./store/atoms/count";
function App() {
  //recoil
  return (
    <div>
      <Count />
    </div>
  );
}

function Count() {
  return (
    <div>
      <RecoilRoot>
        <CountRenderer />
        <Buttons />
      </RecoilRoot>
    </div>
  );
}

function CountRenderer() {
  const value = useRecoilValue(countAtom);

  return (
    <div>
      <p>{value}</p>
      <EvenCount />
    </div>
  );
}

function EvenCount() {
  const count = useRecoilValue(evenSelector);

  return <div>{count ? "It is even" : null}</div>;
}

function Buttons() {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
}

export default App;
