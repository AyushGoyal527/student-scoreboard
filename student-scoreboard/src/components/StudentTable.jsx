import StudentRow from './StudentRow'
import './StudentTable.css'

function StudentTable({ students, onScoreUpdate }) {
  return (
    <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update Score</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="4" className="no-data">No students added yet.</td>
            </tr>
          ) : (
            students.map((student) => (
              <StudentRow
                key={student.id}
                student={student}
                onScoreUpdate={onScoreUpdate}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable
