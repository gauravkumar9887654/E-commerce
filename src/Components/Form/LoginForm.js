import React, { useState } from 'react';
import classes from './LoginForm.module.css';
const LoginForm=()=>{
    const [fname,setFname]=useState('');
    const [isValidFname,setValidFname]=useState(false);
   const [Lname,setLname]= useState('');
   const [isValidLname,setValidlLname]=useState(false);
   const [gender,setgender]=useState('');
   const[isValidGender,setValidGender]=useState(false);
   const [date,setDate]=useState('')
   const[isDateValid,setDateValid]=useState(false);
   const [isFormValid,setFormValid]=useState(false);
   const [formInputs,setFormInputs]=useState(false);
   const [mName,setmName]=useState('');
   const [qualification,setqualification]=useState('');

    const FnameHandler=(e)=>{
        setFname(e.target.value);
        if(/\d+/g.test(e.target.value)){
            setValidFname(true);
        }
        else{
            setValidFname(false);
        }
    }
    const LnameHandler=(e)=>{
        setLname(e.target.value);
        if(e.target.value.length>16){
            setValidlLname(true);
        }
        else {
            setValidlLname(false); 
        }


    }
    const genderHandler=(e)=>{
        if(e.target.value===''){
            setValidGender(true);
        }
setgender(e.target.value);


    }
    const dateHandler=(e)=>{
      
        setDate(e.target.value);

    }

  
    const mNameHandler=(e)=>{
setmName(e.target.value);
    }
    const qualificationHandler=(e)=>{
setqualification(e.target.value);
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        if(fname=='' || Lname=='' || gender==' ' || date==''){
            setFormInputs(true);
            return;
        }
     
 if(isValidFname || isValidFname || gender===''){
    setFormValid(true);
    return;
}

const newObj={
    fName:fname,
    lName:Lname,
    mName:mName,
    gender:gender,
    date:date,
    qualification:qualification
}
setFname('');
setLname('');
setgender('')
setmName('');
setDate('');

console.log(newObj)
    }

   
    
    return (
        <>
        <h1>
            LoginForm
        </h1>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes['form-control']} > 
                <label>First Name:</label>
                <input type="text" onChange={FnameHandler}  value={fname}
    />
               {isValidFname &&  <p className={classes.isValid}>FName should not contain any digit</p>}
            </div>

            <div className={classes['form-control']}> 
                <label>Last Name:</label>
                <input type="text" onChange={LnameHandler} value={Lname}/>
              {isValidLname &&   <p className={classes.isValid}>Last Name length should not greater than 16</p>}
            </div>

            <div className={classes['form-control']} > 
                <label>Midlle Name:</label>
                <input type="text" onChange={mNameHandler} value={mName}/>
            </div>

            <div className={classes['form-control']} > 
                <label>Age:</label>
                <input type="date" onChange={dateHandler}  value={date
        } max=''
         />
                {isDateValid && <p>Your birth year must be less than 2023</p> }
               
            
            </div>

            <div className={classes['form-control']} value={gender} onChange={genderHandler} >
                Gender:
                <label>Male:</label>
                <input  type="radio" value='male' checked={gender==="male"}/>
                <label>Female:</label>
                <input type="radio" value='female' checked={gender==='female'}/>
            </div>

            <div className={classes['form-control']}>
                <label>Qualifications :</label>
                <select onChange={qualificationHandler} >
                    <option value="bachelor">Bachelor</option>
                    <option value="masters">Masters</option>
                    
                </select>
            </div>
           {isFormValid &&  <p className={classes.isValid}>All inputs should be validate........</p>
}
{formInputs && <p className={classes.isValid}>Form inputs must not be empty.....</p>}
            <button>submit</button>
        </form>
        </>
    )
}
export default LoginForm