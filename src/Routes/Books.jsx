import React, { Component } from 'react'
import Book from '../components/Book'
import NewBook from '../components/NewBook'

export default class Books extends Component {
  render() {
    return (
      <><ul className="books">
        <li><Book category="history" author="Timmy's dad" title="The little dolphin who cried" /></li>
        <li><Book category="history" author="Timmy's dad" title="The little dolphin who cried" /></li>
        <li><Book category="history" author="Timmy's dad" title="The little dolphin who cried" /></li>
      </ul><div className="horizontal-divider"></div><NewBook /></>
    )
  }
}
