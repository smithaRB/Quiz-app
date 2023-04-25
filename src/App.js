import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import Trivia from './components/Trivia';
import Timer from './components/Timer';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
   {
    id: 1,
    question: 'Rolex is a company that specializes in what type of product?',
    answers: [
      {
        text: 'Phone',
        correct: false,
      },
      {
        text: 'watches',
        correct: true,
      },
      {
        text: 'Food',
        correct: false,
      },
      {
        text: 'Cosmetic',
        correct: false,
      },
      
    ]
  },
      {
        id: 2,
        question: 'When did the website `Facebook` launch',
        answers: [
          {
            text:'2004',
            correct: true,
          },
          {
            text:'2005',
            correct: false,
          },
          {
            text:'2001',
            correct: false
            ,
          },
          {
            text:'2006',
            correct: false,
          },
        ]
      },
          {
            id:3,
            question:'Inside which HTML element do we Put the the JavaScript?',
            answers: [
              {
                text:'<Scripting>',
                correct: false,
               },
               {
                text:'<script>',
                correct: true,
               },
               {
                text:'<javascript>',
                correct: false,
               },
               {
                text:'<js>',
                correct: false,
               },
            ] 
          }  
  ]

  const moneyPyramid = useMemo(()=>
    [
      {id:1, amount:'$100'},
      {id:2, amount:'$200'},
      {id:3, amount:'$300'},
      {id:4, amount:'$500'},
      {id:5, amount:'$1,000'},
      {id:6, amount:'$2,000'},
      {id:7, amount:'$4,000'},
      {id:8, amount:'$8,000'},
      {id:9, amount:'$16,000'},
      {id:10, amount:'$32,000'},
      {id:11, amount:'$64,000'},
      {id:12, amount:'$1,25,000'},
      {id:13, amount:'$25,00,000'},
      {id:14, amount:'$50,00,000'},
      {id:15, amount:'$1,00,00,000'}, 
    ].reverse(),
  []
  );
  useEffect(()=>{
questionNumber > 1 && setEarned(moneyPyramid.find((m)=>m.id === questionNumber -1).amount)
  },[moneyPyramid, questionNumber]);
  return (
    <div className="App">
      <div className='main'>
      
        {stop ? (<h1 className='endText'>You earnded : {earned} </h1> ): (
            <>
        <div className='top'>
          <div className='timer'>
            <Timer setStop={setStop} questionNumber={questionNumber}/>
            </div>
        </div>
        <div className='bottom'><Trivia data={data} setStop={setStop}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}/>
        </div>
         </>
        )}
       
      </div>
      <div className='pyramid'>
        <ul className='moneyList'>
          {moneyPyramid.map((m)=>(
          <li className={questionNumber === m.id ? 'moneyListItem active ' : 'moneyListItem'} >
          <span className='moneyListItemNumber'>{m.id}</span>
          <span className='moneyListItemAmount'>{m.amount}</span>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
