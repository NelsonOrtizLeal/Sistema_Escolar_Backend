import { Routes, Route } from 'react-router-dom';
import { Login } from './Login';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  )
}