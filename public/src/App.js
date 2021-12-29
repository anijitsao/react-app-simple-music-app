// components
import Header from "./components/layout/Header"
import MusicPanel from "./components/MusicPanel"

// css
import "./css/style.css"

const App = () => {
	return (
		<div className="container">
			{/* including the Header and other components */}
			<Header />
			<MusicPanel />
		</div>
	)
}

export default App
