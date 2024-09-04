import { useContext } from "react";
import { AppContext } from "../context/appContext";

export const IndexPage = () => {
    const {count, setCount, name} = useContext(AppContext)
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
  return (
    <main className="min-h-[calc(100vh-80px)]">
      <section className="bg-slate-500 min-h-[calc(100vh-80px)] gap-8 justify-center items-center flex flex-col">
        <h1>Counter</h1>
        <div className="grid gap-4">
          <div className="flex gap-4"></div>
          <p className="px-4 py-2 mx-auto text-3xl rounded-full shadow-inner shadow-black w-fit bg-slate-600">{count}</p>
          <button onClick={increment}>increase</button>
          <button onClick={decrement}>decrease</button>
          
        </div>
      </section>
      {name}
    </main>
  );
};
