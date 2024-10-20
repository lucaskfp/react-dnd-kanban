import { ReactNode } from "react";
import styles from "./App.module.css";

import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div className={styles.layout}>
      <header className="px-6 py-4 border-b font-semibold">Header area</header>

      <Sidebar />

      <main className="flex flex-col">
        <div className="p-6 border-b">
          <div className="container">
            <h3 className="text-xl font-semibold">567 Tasks</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="p-6 max-h-full overflow-scroll grow bg-red-400">
          <h3 className="text-lg font-semibold mb-4">Scrollable area</h3>

          <div className="flex gap-4">
            <Column title="To do">
              {Array.from({ length: 20 }).map((_, index) => (
                <Card
                  key={index}
                  title={`Card ${index + 1}`}
                  description={`Card description ${index + 1}`}
                ></Card>
              ))}
            </Column>

            <Column title="Doing"></Column>

            <Column title="Done"></Column>
          </div>
        </div>
      </main>
    </div>
  );
}

function Column(props: { children?: ReactNode; title: string }) {
  return (
    <div className="bg-zinc-100 rounded-md p-3 flex flex-col gap-2 w-[400px]">
      <h4 className="font-semibold mb-4">{props.title}</h4>
      {props.children}
    </div>
  );
}

function Card(props: { title: string; description?: string }) {
  return (
    <div className="bg-white px-3 py-4 rounded-md border">
      <h5>{props.title}</h5>
      <p className="text-sm text-gray-600">{props.description}</p>
    </div>
  );
}
