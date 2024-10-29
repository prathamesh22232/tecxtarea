  import React , {useState} from 'react'
  import prototype from 'prop-types';

      export default function TextForm(props) {
          const downClicked = () =>{
            const mytext = text.toLowerCase();
            setText(mytext);
          }

          const handleChange = (event) =>{
              setText(event.target.value);
            
          }

          const upClicked = () =>{
            
              let newText = text.toUpperCase();
              setText(newText);
          }

          const myMail =()=>{
            const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

            // Find all matches in the text
            const emails = text.match(emailRegex);
            setText(emails ? emails.join(', ') : 'No emails found');
          }

          const [text, setText] = useState('set the text');
        return (
          <>
                  <div className={`container my-4 ${props.mode}`} >    
              <div className="mb-3">
                <label className="form-label"><h1>Example textarea</h1></label>
                <textarea className="form-control" value={text} onChange={handleChange} rows="8"></textarea>
              </div>
                    <button className="firstOne mx-2" color='blue' onClick={upClicked}>makeAllUpperCase</button>
                    <button className="secongOne mx-2" color='red' onClick={downClicked} >makeAllLowerCase</button>
                    <button className="thirdtOne mx-2" onClick={myMail}>mail id</button>
                  </div>
                      <div className="container my-3">
                        <h2>Your text summary</h2>
                        <p>{text.split(" ").length}words and {text.length} characters</p>
                        <p>{0.008*text.split(" ").length} minutes to read</p>
                        <h2>Preview</h2>
                        <p>{text}</p>
              </div>
          </>
        )
      }
