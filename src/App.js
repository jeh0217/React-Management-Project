import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'http://via.placeholder.com/60x60/BDBDBD/000000?text=64X64', //해당 링크는 랜덤 이미지 웹사이트
    'name': '은호',
    'birthday': '000217',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'http://via.placeholder.com/60x60/BDBDBD/000000?text=60X60', //해당 링크는 랜덤 이미지 웹사이트
    'name': '효주',
    'birthday': '990505',
    'gender': '여자',
    'job': '관리사'
  },
  {
    'id': 3,
    'image': 'http://via.placeholder.com/60x60/BDBDBD/000000?text=60X60', //해당 링크는 랜덤 이미지 웹사이트
    'name': '호래',
    'birthday': '000112',
    'gender': '남자',
    'job': '디자인'
  }
]


class App extends Component {
  render() {
    return (
      <div>  
        {customers.map(c => { return (<Customer key={c.id}id={c.id}image={c.image}name={c.name}birthday={c.birthday}gender={c.gender}job={c.job}/>);})}
      </div>
    );
  }
}

export default App;
