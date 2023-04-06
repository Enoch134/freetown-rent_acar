import React,{useState} from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import axios from 'axios'

const BookingForm = () => {
  
  const[firstName, setFirstName] =useState("")
  const[lastName, setLastName] =useState("")
  const[email, setEmail] =useState("")
  const[phoneNumber, setPhoneNumber] =useState("")
  const[fromAddress, setFromAddress] =useState("")
  const[toAddress, setToAddress] =useState("")
  const[amount, setAmount] =useState("")
  const[typeCars, setTypeCars] =useState("")
  const[journeyDate, setJourneyDate] =useState("")
  const[journeyTime, setJourneyTime] =useState("")
  const [message, setMessage] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:5023/sending-email/", {
          firstName : firstName,
          email: email,
          lastName:lastName,
          phoneNumber:phoneNumber,
          fromAddress:fromAddress,
          toAddress:toAddress,
          amount:amount,
          typeCars:typeCars,
          journeyDate:journeyDate,
          journeyTime:journeyTime,


        });
    
    } catch (error) {
        if (error.response) {
            setMessage(error.response.data.message);
        }
    }
};
  return (
    <Form onSubmit={handleSubmit}>
      <p>{message}</p>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text"
         placeholder="First Name"
          value={firstName} 
          onChange={(e) =>setFirstName(e.target.value)}
          />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text"
         placeholder="Last Name"
         value={lastName}
         onChange={(e) =>setLastName(e.target.value)}
          />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email"
         placeholder="Email"
         value={email}
         onChange={(e) =>setEmail(e.target.value)}
          />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number"
         placeholder="Phone Number"
         value={phoneNumber}
         onChange={(e) =>setPhoneNumber(e.target.value)}
          />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text"
         placeholder="From Address" 
         value={fromAddress}
         onChange={(e) =>setFromAddress(e.target.value)}
         />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text"
         placeholder="To Address"
         value={toAddress}
         onChange={(e) =>setToAddress(e.target.value)}
          />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text"
         placeholder="choose the amount above"
         value={amount}
         onChange={(e) =>setAmount(e.target.value)}
          />
      </FormGroup>


      <FormGroup 
      className="booking__form d-inline-block ms-1 mb-4">
        <select 
        name="" 
        id=""
        value={typeCars}
        onChange={(e) =>setTypeCars(e.target.value)}
        >
          {/* <option value="Honda">4*4 5 seater</option> */}
          <option value="FJ CRUISER">4*4 5 seater Rugged off roader</option>
          <option value="Subaru">4*4 7 seater</option>
          <option value="Citroen">4*4 5 seater</option>
        </select>
      </FormGroup>
      
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date"
         placeholder="Journey Date"
         value={journeyDate}
         onChange={(e) =>setJourneyDate(e.target.value)}
          />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
          value={journeyTime}
          onChange={(e) =>setJourneyTime(e.target.value)}
        />
      </FormGroup>
      <FormGroup className="form__group">
          <button type="submit" className="btn find__car-btn">Submit Request</button>
        </FormGroup>
    </Form>
  );
};

export default BookingForm;
