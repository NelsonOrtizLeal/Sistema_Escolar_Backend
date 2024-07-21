import { Routes, Route } from 'react-router-dom';
import { Login } from './Login';
import { Dashboard} from './Dashboard';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
    </Routes>
  )
}