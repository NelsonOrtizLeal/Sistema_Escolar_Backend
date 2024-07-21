import { Routes, Route } from 'react-router-dom';
import { Login } from './Login';
import { Dashboard } from './Dashboard';
import { StudentNew } from './StudentNew';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/student' element={<StudentNew />}></Route>
    </Routes>
  )
}