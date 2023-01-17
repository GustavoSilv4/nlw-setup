import { Habit } from './components/Habit'

function App() {
  return (
    <div className="w-full text-white bg-zinc-900 flex flex-col gap-6">
      <Habit completed={3} />
      <Habit completed={20} />
      <Habit completed={30} />
      <Habit completed={40} />
    </div>
  )
}

export default App
