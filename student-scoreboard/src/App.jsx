import { useState } from 'react'
import Header from './components/Header'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'

// some initial students to show by default
const initialStudents = [
  { id: 1, name: 'Aarav Sharma', score: 78 },
  { id: 2, name: 'Priya Mehta', score: 35 },
  { id: 3, name: 'Rohan Gupta', score: 55 },
  { id: 4, name: 'Sneha Patel', score: 20 },
  { id: 5, name: 'Karan Verma', score: 90 },
]

function App() {
  const [students, setStudents] = useState(initialStudents)

  // updates score of a specific student by id
  function handleScoreUpdate(id, newScore) {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, score: newScore } : s))
    )
  }

  // adds a new student to the list
  function handleAddStudent(name, score) {
    const newStudent = {
      id: Date.now(), // using timestamp as unique id
      name,
      score,
    }
    setStudents((prev) => [...prev, newStudent])
  }

  return (
    <div className="app-wrapper">
      <Header />
      <StudentTable students={students} onScoreUpdate={handleScoreUpdate} />
      <AddStudentForm onAddStudent={handleAddStudent} />
    </div>
  )
}

export default App
