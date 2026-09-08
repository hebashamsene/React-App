import './FormStyles.css';
import Modal from './Modal';
import {useState } from 'react';


export default function LoanForm(){
    const [errorMessage,setErrorMassage]=useState(null);
    const [showModal,setShowModal]=useState(false);
    const [loanInputs,setLoanInputs]=useState({
        name:"",
        phoneNumber:"",
        age:"",
        isEmployee:false,
        salaryRange:"",
    });

    function handleFormSubmit(event){
        event.preventDefault();
        setErrorMassage(null);
        if(loanInputs.age<18 || loanInputs.age>100){
            setErrorMassage("The age is not allowed")
        }else if(loanInputs.phoneNumber.length<10 || loanInputs.phoneNumber.length>12){
            setErrorMassage("The PhoneNumber Formare is  InCorrect");
        }
       setShowModal(true);
       
    }
    function handleDivClick(){
        if(showModal){
        setShowModal(false);
        }
    }
    const btnIsDisabled=loanInputs.name == "" || loanInputs.age == "" || loanInputs.phoneNumber == "";
    
    return(
        <div onClick={handleDivClick} className="flex" style={{flexDirection:"column"}}>
            <form id="loan-form" className="flex" style={{flexDirection:"column"}}>
                <h1>Requesting a Loan</h1>
                <hr/>
                <label>Name: </label>
                <input value={loanInputs.name} onChange={(event)=>{
                    setLoanInputs({...loanInputs,name:event.target.value})
                }}/>

                <label>Phone Number: </label>
                <input value={loanInputs.phoneNumber} onChange={(event)=>{
                    setLoanInputs({...loanInputs,phoneNumber:event.target.value})
                }}/>

                <label>Age: </label>
                <input value={loanInputs.age} onChange={(event)=>{
                    setLoanInputs({...loanInputs,age:event.target.value})
                }}/>

                <label style={{marginTop:"30px"}}>Are You an Employee?</label>
                <input type='checkbox' checked={loanInputs.isEmployee} onChange={(event)=>{
                    setLoanInputs({...loanInputs,isEmployee:event.target.checked})
                }} />

                <label>Salsry: </label>
                <select value={loanInputs.salaryRange} onChange={(event)=>{
                    setLoanInputs({...loanInputs,salaryRange:event.target.value})
                }}>
                    <option>Less than 500$</option>
                    <option>Between 500$ and 2000$</option>
                    <option>Above 2000$</option>
                </select>

                <button 
                className={btnIsDisabled ? "disabled" : ""}
                onClick={handleFormSubmit} 
                disabled={btnIsDisabled} 
                id="submit-loan-button">Submit</button>
            </form>
            <Modal isVisible={showModal} errorMessage={errorMessage}/>
        </div>
    )
}