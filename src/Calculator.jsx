import React, {useState} from 'react'

function Calculator(){

  const [show, setShow] = useState('')
  

  function displayNumber(newShow){
    setShow(n => n += newShow)
    
  }

  function getNumber(event){
    const newShow = event.target.value
    displayNumber(newShow)
  }
  function deleteNumber(){
    setShow('')
    
  }
  function oneNumber(){
    const one = show.toString().slice(0,-1)
    setShow(one)
  }
  function answerNumber(){
    const answer = eval(show)
    setShow(answer)
  }

  return(<>

    <div className="container">
      <div className="calculator">

        <form>
          <div className="display">
            <input type="text" name="display" value={show} />
          </div>

          <div>
            <input type="button" value="AC" onClick={deleteNumber} className="operator"/>
            <input type="button" value="DE" onClick={oneNumber} className="operator"/>
            <input type="button" value="." onClick={getNumber} className="operator"/>
            <input type="button" value="/" onClick={getNumber} className="operator"/>
          </div>

          <div>
            <input type="button" value="7" onClick={getNumber}/>
            <input type="button" value="8" onClick={getNumber}/>
            <input type="button" value="9" onClick={getNumber}/>
            <input type="button" value="*" onClick={getNumber} className="operator"/>
          </div>

          <div>
            <input type="button" value="4" onClick={getNumber}/>
            <input type="button" value="5" onClick={getNumber}/>
            <input type="button" value="6" onClick={getNumber}/>
            <input type="button" value="-" onClick={getNumber} className="operator" />
          </div>

          <div>
            <input type="button" value="1" onClick={getNumber}/>
            <input type="button" value="2" onClick={getNumber}/>
            <input type="button" value="3" onClick={getNumber}/>
            <input type="button" value="+" onClick={getNumber} className="operator"/>
          </div>

          <div>
            <input type="button" value="00" onClick={getNumber}/>
            <input type="button" value="0" onClick={getNumber}/>
            <input type="button" value="=" className="equal operator" onClick={answerNumber}/>
          </div>

        </form>

      </div>
      <div class="end">
        <p>Created by <span>Tobechukwu Samuel Omeje</span>, August 2024</p>
      </div>
    </div>


  </>
  )
}

export default Calculator