import Card from './component/card'
import './App.css'

function App() {

  
  return (
    <>
      <h1 className='bg-green-500 rounded-xl mb-4'>tailwind test</h1>

      {/* <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/20522237/pexels-photo-20522237/free-photo-of-a-black-table-with-a-candle-and-a-book.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p class="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">
            Sarah Dayan
          </div>
          <div class="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
      </figure> */}
      <Card username='farzana' btnText='click me'/>
      <Card username='baekhyun' btnText='view profile'/>
    </>
  )
}

export default App
