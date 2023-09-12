import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'http://via.placeholder.com/60x60/BDBDBD/000000?text=60X60', //해당 링크는 랜덤 이미지 웹사이트
    'name': 'enho',
    'birthday': '000217',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'image': 'http://via.placeholder.com/60x60/BDBDBD/000000?text=60X60', //해당 링크는 랜덤 이미지 웹사이트
    'name': '효효',
    'birthday': '990505',
    'gender': '남자',
    'job': '셀비오'
  },
  {
    'id': 3,
    'image': 'http://via.placeholder.com/60x60/BDBDBD/000000?text=60X60', //해당 링크는 랜덤 이미지 웹사이트
    'name': '호호',
    'birthday': '000112',
    'gender': '남자',
    'job': '디자인'
  }
]


class App extends Component {
  render() {
    return (
      <div>  
        {   
        //map함수를 이용 긴 코드가 짧아짐으로써 수월해짐
        customers.map(c => {
          return (
          <Customer
            key={c.id} //key 이용 안하면 자바스크립트 콘솔에 오류 뜸
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            
            />
            );
        
        })
      }
      </div>

    );
  }
}

export default App;
