import { useState } from 'react'
import './AddStudentForm.css'

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (name.trim() === '') {
      alert('Please enter student name')
      return
    }

    const parsedScore = parseInt(score)
    if (isNaN(parsedScore) || parsedScore < 0 || parsedScore > 100) {
      alert('Please enter a valid score (0 - 100)')
      return
    }

    onAddStudent(name.trim(), parsedScore)

    // clear the form after submit
    setName('')
    setScore('')
  }

  return (
    <div className="form-wrapper">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <div className="form-group">
          <label htmlFor="studentName">Student Name</label>
          <input
            id="studentName"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="studentScore">Score</label>
          <input
            id="studentScore"
            type="number"
            placeholder="Enter score (0-100)"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            min="0"
            max="100"
          />
        </div>
        <button type="submit" className="add-btn">Add Student</button>
      </form>
    </div>
  )
}

export default AddStudentForm
