import './App.css'
import logo from '../assets/react.svg'
import Header from './Header'
import AppContent from './AppContent'

export default function App() {
    return (
        <div>
            <Header pageTitle="FrontEnd authenticated with JWT" logoSrc={logo} />
            <AppContent/>
        </div>
    )
}