import React from 'react'
import {Link} from 'react-router-dom'

export const BookList = ({ links }) => {
  if (!links.length) {
    return <p className="center">Книг пока нет</p>
  }
  return (
    <table>
      <thead>
      <tr>
        <th>№</th>
        <th>Название</th>
        <th>Автор</th>
        <th>Жанр</th>
      </tr>
      </thead>

      <tbody>
      { links.map((link, index) => {
        return (
          <tr key={link._id}>
            <td>{index + 1}</td>
            <td>{link.from}</td>
            <td>{link.to}</td>
            <td>
              <Link to={`/detail/${link._id}`}>Открыть</Link>
            </td>
          </tr>
        )
      }) }
      </tbody>
    </table>
  )
}