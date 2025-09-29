import react, {useState} from 'react'

function App(){

  const[num,setNum]=useState();
  const[a,setA]=useState(0);
  const[b,setB]=useState(0);
  const[c,setC]=useState(0);
  const[d,setD]=useState(0);
  const[adis,setAdis]=useState(0);
  const[bdis,setBdis]=useState(0);
  const[cdis,setCdis]=useState(0);
  const[ddis,setDdis]=useState(0);
  let a1=num;
  let b1=num*2;
  let c1=b1*2;
  let d1=c1*2;

  function Init(){
    setA(a1);
    setB(b1);
    setC(c1);
    setD(d1);
  }

function choice1(){
  let a2=a1*2;
  let b2=b1*2;
  let c2=c1*2;
  let d2=d1*2;
  setA(a2);
  setB(b2);
  setC(c2);
  setD(d2);
}



function choice2(){
  let a2=0;
  let b2=0;
  let c2=0;
  let d2=a1+b1+c1+d1;
  setA(a2);
  setB(b2);
  setC(c2);
  setD(d2);
}

function choice3(){
  let a2=0;
  let b2=a1+b1;
  let c2=0;
  let d2=c1+d1;
  setA(a2);
  setB(b2);
  setC(c2);
  setD(d2);
}

  return(
    <div className="container">
      <h1>Box and Balls</h1>

      <input className="in" type="number" value={num} onChange={(e) => setNum(Number(e.target.value))}
      />
      <button onClick={Init}>Initialize</button>

      <div className='subbox'>
        <p>Violet: {a}</p>
        <p>Orange: {b}</p>
        <p>Green: {c}</p>
        <p>White: {d}</p>
      </div>

      <div>
        <button onClick={choice1}>Choice 1</button>
        <button onClick={choice2}>Choice 2</button>
        <button onClick={choice3}>Choice 3</button>
      </div>
    </div>
  )
}
export default App