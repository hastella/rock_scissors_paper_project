import {useState} from "react";
import './App.css';
import Box from "./component/Box"

// 1. 박스 2개 (유저, 사진정보, 결과값)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보인다.
// 4. 컴퓨터는 랜덤하게 가위 바위 보를 보여준다.
// 5. 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다.

const choice = {
  rock: {
    name: "바위",
    img: "https://www.seekpng.com/png/detail/816-8161371_rock-paper-scissor-icon-png.png",
  },
  scissors: {
    name: "가위",
    img: "https://static.thenounproject.com/png/88666-200.png"
  },
  paper: {
    name: "보",
    img: "https://static.thenounproject.com/png/477912-200.png"
  }
}

function App() {

  const [userSelect,setUserSelect] = useState(null)
  const [computerSelect,setComputerSelect] = useState(null)

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
  }

  const randomChoice=()=> {
    let itemArray = Object.keys(choice);    //객체(choice)의 키값만 뽑아서 어레이로 만들어주는 함수
    console.log("item array", itemArray)

    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    return choice[final]
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect}/>
        <Box title="Computer" item={computerSelect}/>
      </div>
      <div className="main">
        <button onClick={ () => play("scissors")}>가위</button> 
        <button onClick={ () => play("rock")}>바위</button>
        <button onClick={ () => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
