import React from 'react'
import TodoItem from './TodoItem'

function Todolist({ getTaskData }) {
  // console.log(getTaskData)
  return (
    <div>
      {getTaskData?.length === 0 ? (
        <p className="notfound">No Data is Found</p>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div
                className="card-body"
                style={{
                  display: 'flex',
                }}
              >
                <table className="col-md-12">
                  <thead className="text-white bg-success text-center">
                    <tr style={{ marginBottom: '20px' }}>
                      <th className="tablehead">Check Task</th>
                      <th>Task Title</th>
                      <th>Task Description</th>
                      <th>Status</th>
                      <th colSpan={2}>Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {getTaskData?.map((ele, index) => {
                      console.log(ele)
                      return <TodoItem key={index} getTask={ele} />
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Todolist
