import styles from './App.module.css';

import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div className={styles.layout}>

      <header className='px-6 py-4 border-b'>header</header>

      <Sidebar />

      <main className='flex flex-col'>
        <div className='p-6 border-b'>
          <h3 className='text-xl font-semibold'>567 Tasks</h3>
        </div>

        <div className='p-6 overflow-scroll'>
          <h3 className='text-lg font-semibold mb-4'>Scrollable area</h3>

          <div className='grid grid-cols-3 gap-4'>
            <div className='bg-zinc-100 rounded-md p-3 flex flex-col gap-2'>
              <h4 className='font-semibold'>To do</h4>

              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className={`bg-white px-3 py-4 rounded-md border ${index === 0 && 'mt-4'}`}>
                  <span>Card {index + 1}</span>
                  <p className='text-sm text-gray-600'>Card description {index + 1}</p>
                </div>
              ))}
            </div>

            <div className='bg-zinc-100 rounded-md p-3'>
              <h4 className='font-semibold'>Doing</h4>
            </div>

            <div className='bg-zinc-100 rounded-md p-3'>
              <h4 className='font-semibold'>Done</h4>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

