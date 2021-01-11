import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const customer = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '191222',
  'gender': '남자',
  'job': '백수'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '정인선',
  'birthday': '930601',
  'gender': '여자',
  'job': '트레이더'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '쵸니',
  'birthday': '191222',
  'gender': '여자',
  'job': '프로그래머'
}]

class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.name}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    )
  }
}

export default App;
