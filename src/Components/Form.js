import React, {useState} from 'react';

function Form() {
    const [pages, setPages] = useState('');
    const [eachPage, setEachPage] = useState('');
    const [frontPage, setFrontPage] = useState(0);
    const [backPage, setBackPage] = useState(0);

    const calculate = (pages, eachPage)=> {
        let count = 1;
        const old =[];
        const orqa =[];

        for(let i = 1; i<=pages; i++) {
            if(count <= eachPage) {
                old.push(i);
                count++;
            } else if(count > eachPage && count <= (eachPage === 2 ? 4 : 8)){
                orqa.push(i);
                count++;
                if(count === (eachPage === 4 ? 5 : 9)) {
                    count = 1
                }
            }
        }
        setFrontPage(old);
        setBackPage(orqa);
        console.log(pages + " " + eachPage);
    }
  return (
    <div>
       <form onSubmit={(e)=>{
          e.preventDefault();
          calculate(pages, eachPage)
          }}>
            <label htmlFor="pages">Necha bet:</label>
            <input 
                type="number" 
                id='pages' 
                value={pages} 
                onChange={(e)=>{
                    setPages(e.target.value);
                }}    
                /><br />

            <label htmlFor="eachPage">1 sahifada necha bet:</label>
            <input 
                type="number" 
                id='eachPage' 
                value={eachPage} 
                onChange={(e)=>{
                    setEachPage(e.target.value);
                }}     
                /><br />
            
            <h3>Everything is OK</h3>
            <h2>Old taraf:</h2>
            <input readOnly type="text" value={frontPage} />
            <h2>Orqa taraf: </h2>
            <input readOnly type="text" value={backPage} />

            <input type="submit" />
            
       </form>
    </div>
  )
}

export default Form