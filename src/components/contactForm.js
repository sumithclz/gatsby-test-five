import React from "react"

const functionURL = "https://sunglow-seagull-5848.twil.io/send-email" // replace this with your function URL

class ContactForm extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     buttonDisabled: true,
     message: { 
      propertyName: "",
      propertyType: "",
      NoOfRooms: "",
      Name: "",
      emailAddress: "",
      phone: "",
      country: "",
      channelManager: "",
      kiosk: "",
      HotelSelfServiceApp: "",
      SmartHotelAPPGuest: "",
      VisitorManagement: "",
      BookingEngine: "",
      message: "",
      },
     submitting: false,
     error: null,
   }
 }

 onClick = async event => {
   event.preventDefault()
   this.setState({ submitting: true })
   const { propertyName, propertyType, NoOfRooms, Name, emailAddress, phone, country, channelManager,
    kiosk, HotelSelfServiceApp, SmartHotelAPPGuest, VisitorManagement, BookingEngine, message } = this.state.message

   const response = await fetch(functionURL, {
     method: "post",
     headers: {
       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
     },
     body: new URLSearchParams({ propertyName, propertyType, NoOfRooms, Name, emailAddress, phone, country, channelManager,
      kiosk, HotelSelfServiceApp, SmartHotelAPPGuest, VisitorManagement, BookingEngine, message }).toString(),
   })
   if (response.status === 200) {
     this.setState({
       error: null,
       submitting: false,
       message: {
         propertyName: "",
         propertyType: "",
         NoOfRooms: "",
         Name: "",
         emailAddress: "",
         phone: "",
         country: "",
         channelManager: "",
         kiosk: "",
         HotelSelfServiceApp: "",
         SmartHotelAPPGuest: "",
         VisitorManagement: "",
         BookingEngine: "",
         message: "",

       },
     })
   } else {
     const json = await response.json()
     this.setState({
       error: json.error,
       submitting: false,
     })
   }
 }

 onChange = event => {
   const name = event.target.getAttribute("name")
   this.setState({
     message: { ...this.state.message, [name]: event.target.value },
   })
 }


 render() {
   return (
     <>
       <div>{this.state.error}</div>
       <form  method="post" action={functionURL} >
          <div className="form-group">
            <input type="text" name="propertyName" id="propertyName" placeholder="Property Name" value={this.state.message.propertyName} onChange={this.onChange}></input>
          </div>
          <div className="form-group">
            <select name="Property-Type" id="propertyType" placeholder="Property Type" value={this.state.message.propertyType} onChange={this.onChange}>
              <option value="Property Type">Property Type</option>
              <option value="Hotel">Hotel</option>
              <option value="Hostel">Hostel</option>
              <option value="Boutique hotel">Boutique hotel</option>
              <option value="Motel">Motel</option>
            </select>
          </div>
          <div className="form-group">
            <input type="text" name="NoOfRooms" id="NoOfRooms" placeholder="No of rooms" value={this.state.message.NoOfRooms} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <input type="text" name="Name" id="Name" placeholder="Name" value={this.state.message.Name} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <input type="text" name="emailAddress" id="emailAddress" placeholder="Email Address" value={this.state.message.emailAddress} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <input type="text" name="phone" id="phone" placeholder="phone" value={this.state.message.phone} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <input type="text" name="country" id="country" placeholder="Country" value={this.state.message.country} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <input type="checkbox" name="channelManager" id="channelManager" value={this.state.message.channelManager} onChange={this.onChange}/>
            <label for="channelManager"> Channel Manager </label><br></br>
          </div>
          <div className="form-group">
            <input type="checkbox" name="kiosk" id="kiosk" value={this.state.message.kiosk} onChange={this.onChange}/>
            <label for="kiosk"> Kiosk </label><br></br>
          </div>
          <div className="form-group">
            <input type="checkbox" name="HotelSelfServiceApp" id="HotelSelfServiceApp" value={this.state.message.HotelSelfServiceApp} onChange={this.onChange}/>
            <label for="HotelSelfServiceApp"> Hotel Self Service App </label><br></br>
          </div>
          <div className="form-group">
            <input type="checkbox" name="SmartHotelAPPGuest" id="SmartHotelAPPGuest" value={this.state.message.SmartHotelAPPGuest} onChange={this.onChange}/>
            <label for="SmartHotelAPPGuest"> Smart Hotel APP Guest </label><br></br>
          </div>
          <div className="form-group">
            <input type="checkbox" name="VisitorManagement" id="VisitorManagement" value={this.state.message.VisitorManagement} onChange={this.onChange}/>
            <label for="VisitorManagement"> Visitor Management </label><br></br>
          </div>
          <div className="form-group">
            <input type="checkbox" name="BookingEngine" id="BookingEngine" value={this.state.message.BookingEngine} onChange={this.onChange}/>
            <label for="BookingEngine"> Booking Engine </label><br></br>
          </div>
          <div className="form-group">
            <textarea name="message" id="message" rows="5" placeholder="Remarks" value={this.state.message.message} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <button type="submit" disabled={this.state.submitting} onClick={this.onClick} > Send message </button>
          </div>
       </form>
     </>
   )
 }
}

export default ContactForm