// import logo from './logo.svg';
import reactionLogo from './assets/images/icon-reaction.svg'
import memoryLogo from './assets/images/icon-memory.svg';
import verbalLogo from './assets/images/icon-verbal.svg';
import visualLogo from './assets/images/icon-visual.svg'
import './App.css';
import ResultsTableItem from './components/resultstableitem'

import Data from './assets/data/data.json'

function App() {

  // Parse json
  let itemlist = [];
  
  let colors = [['hsla(0, 100%, 67%, 1)', 'hsla(0, 100%, 67%, 0.05)'], 
            ['hsla(39, 100%, 56%, 1)', 'hsla(39, 100%, 56%, 0.05)'], 
            ['hsla(166, 100%, 37%, 1)', 'hsla(166, 100%, 37%, 0.05)'], 
            ['hsla(234, 85%, 45%, 1)', 'hsla(234, 85%, 45%, 0.05)']
          ];
  let logos = [reactionLogo, memoryLogo, verbalLogo, visualLogo]
  itemlist = Data.map((data,index)=>{
      // var svg = open(data.icon,)
      
      return <ResultsTableItem key={index} textitem={data.category} percentageitem={data.score} backgroundcoloritem={colors[index][1]} textcoloritem={colors[index][0]} mylogo={logos[index]}>
              </ResultsTableItem>
    })
  
  return (
    <div className="mainmaincontent">
        <div className="menuitem1">
          <p className="para">
            Your Result
          </p>
          <div className="circlecontent">
            <p className="bigfont">
              76
            </p>
            <p className="para" style={{paddingTop: 0, fontSize: '11px', marginBottom: '50%', marginTop: 0}}>
              of 100
            </p>
          </div>
          <p className="para" style={{color: 'white', paddingTop: '20px', fontSize: '20px', marginBottom: '0%', marginTop: 0}}>
            Great
          </p>
          <p className="para" style={{paddingTop: '12px', fontSize: '13px', marginTop: 0, textAlign: 'center', marginLeft: '15%', marginRight: '15%'}}>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="premain">
          <div className="menuitem2">
            <p style={{textAlign: 'left', marginBottom: '15px', fontSize: 'medium'}}>
              Summary
            </p>
            {itemlist}
            
            
            
            
            <button style={{flex: 1, marginTop: '5%', textAlign: 'center', border: 0, borderRadius: '22.5px'}}>
              Continue
            </button>
          </div>
        </div>
      </div>
  );
}

export default App;
