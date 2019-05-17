import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';


const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '길라임',
    'birthday': '011211',
    'gender': '여',
    'job': '직장인'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/any',
    'name': '강동원',
    'birthday': '840212',
    'gender': '남',
    'job': '직장인'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '이하늬',
    'birthday': '881213',
    'gender': '여',
    'job': '배우'
  },
  {
    'id': 4,
    'image': 'https://placeimg.com/64/64/any',
    'name': '조보아',
    'birthday': '920131',
    'gender': '여',
    'job': '유치원교사'
  },
  {
    'id': 5,
    'image': 'https://placeimg.com/64/64/any',
    'name': '전현무',
    'birthday': '750203',
    'gender': '남',
    'job': '간호장교'
  }
]


class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                gender={c.gender}
                job={c.job} />
            );
          })
        }
      </div>
    );
  }
}

export default App;
