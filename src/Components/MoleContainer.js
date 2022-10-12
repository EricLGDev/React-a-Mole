import { useState } from "react";


const moleContainer = (props) => {
    let[theMole, setTheMole] = useState(false)

    let displayMole = theMole ? <Mole toggle={setTheMole} handleClick={handleClick} /> : <EmptySlot toggle={setTheMole} />
}