import { useState } from 'react'
import './StudentRow.css'

function StudentRow({ student, onScoreUpdate }) {
  const [newScore, setNewScore] = useState('')

  const isPass = student.score >= 40

  function handleUpdate() {
    // basic validation
    if (newScore === '') return
    const parsed = parseInt(newScore)
    if (isNaN(parsed) || parsed < 0 || parsed > 100) {
      alert('Please enter a valid score between 0 and 100')
      return
    }
    onScoreUpdate(student.id, parsed)
    setNewScore('')
  }

  return (
    <tr className="student-row">
      <td>{student.name}</td>
      <td>{student.score}</td>
      <td>
        <span className={isPass ? 'badge pass' : 'badge fail'}>
          {isPass ? 'Pass' : 'Fail'}
        </span>
      </td>
      <td className="update-cell">
        <input
          type="number"
          placeholder="New score"
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
          min="0"
          max="100"
        />
        <button onClick={handleUpdate} className="update-btn">Update</button>
      </td>
    </tr>
  )
}

export default StudentRow
