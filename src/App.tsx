import ThrottleComponent from "../components/ThrottleComponent"
import DebounceComponent from "../components/DebounceComponent"

function App() {
  return (
    <div className="container space-y-2">
      <div className="flex gap-2">
        <div className="flex-1">
          <ThrottleComponent />
        </div>

        <div className="flex-1">
          <DebounceComponent />
        </div>
      </div>
    </div>
  )
}

export default App
