import NavBar from "./components/NavBar";
import InfoCard from "./components/InfoCard";
import Heading from "./components/Heading";
import Dropdown from "./components/Dropdown";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState, useEffect } from "react";
import Checkbox from "./components/TickBox";
import rsvp from './assets/rsvp-final.jpg';


function RSVP() {
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [mainResponse, setMainResponse] = useState("Select ...");
  const [rsvpObject, setRsvpObject] = useState([{
    name: "",
    attending: false,
    contactNumber: "",
    dietaryRequirements: [],
    preferredBurgerMeat: "",
    additionalComments: ""

  }])
  const [submitForm1, setSubmitForm] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);



  const handleNumberOfGuestsChange = (e) => {
    const newNumberOfGuests = parseInt(e.target.value, 10) || 1;

    setNumberOfGuests(newNumberOfGuests);

    // Update rsvpObject length based on the number of guests
    setRsvpObject((prevRsvpObject) => {
      const newRsvpObject = [...prevRsvpObject];

      while (newRsvpObject.length < newNumberOfGuests) {
        newRsvpObject.push({
          name: "",
          attending: false,
          contactNumber: "",
          dietaryRequirements: [],
    preferredBurgerMeat: "",
    additionalComments: ""
        });
      }

      return newRsvpObject.slice(0, newNumberOfGuests);
    });
  };

  const handleResponseChange = (e) => {
    setMainResponse(e.target.value);
  };

  const handleGuestNameChange = (e, index) => {
    const newName = e.target.value;

    setRsvpObject((prevRsvpObject) => {
      const newRsvpObject = [...prevRsvpObject];
      newRsvpObject[index].name = newName;
      return newRsvpObject;
    });
  };

  const generateInputBoxes = () => {
    const inputBoxes = [];
    for (let i = 0; i < numberOfGuests; i++) {
      inputBoxes.push(
        <div key={i} className="mb-4">
          <label className="block w-full text-zinc-800 text-sm font-bold mb-2">
            Name of Guest {i + 1}:
          </label>
          <input
            type="text"
            value={rsvpObject[i].name}
            onChange={(e) => handleGuestNameChange(e, i)}
            className="border w-full border-zinc-800 px-4 py-2 rounded-sm focus:ring-champagne focus:ring focus:border-stone-200 focus:ring-opacity-50"
          />
        </div>
      );
    }
    return inputBoxes;
  };

  const submit = () => {
   
    const updatedRsvpObject = rsvpObject.map((guest) => ({
      ...guest,
      attending: mainResponse === "Yes! I'm in!",
    }));

    setRsvpObject(updatedRsvpObject);
    setSubmitForm(true);
    
  }


  const generateGuestSections = () => {
    return rsvpObject.map((guest, index) => (
      <div key={index}>
       <p className="block mt-1 text-lg leading-tight font-bold text-zinc-800">
            Guest {index + 1} - {guest.name}:
          </p>

          <div className="mb-4 mt-2">
          <label className="block text-zinc-800 text-sm font-bold mb-2">
            Contact Number:
          </label>
          <input
            type="text"
            name={`contactNumber${index + 1}`}
            className="border w-full border-zinc-800 px-4 py-2 rounded-sm focus:ring-champagne focus:ring focus:border-stone-200 focus:ring-opacity-50"
          />
        </div>
          

        <div className="mb-4">
          <label className="block text-zinc-800 text-sm font-bold mb-2">
            Please select any dietary requirements you may have:
          </label>
          <div>
          
              <Checkbox>Tree nut and peanut allergies</Checkbox>
            <Checkbox>
              Vegetarian
            </Checkbox>
            <Checkbox>
              Vegan
            </Checkbox>
              
            
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-zinc-800 text-sm font-bold mb-2">
            Select your preferred burger meat:
          </label>
          <Dropdown
            dropdownValues={[
              'Beef',
              'Chicken',
              'Vegetarian',
              "None of these are suited to my dietary requirements",
            ]}
            defaultValue="Select ..."
            name={`preferredBurgerMeat${index + 1}`}
          />
        </div>

        <div className="mb-4">
          <label className="block text-zinc-800 text-sm font-bold mb-2">
            Anything else? Let us know!
          </label>
          <textarea
            type="text"
            name={`additionalComments${index + 1}`}
            className="border w-full border-zinc-800 px-4 py-2 rounded-sm focus:ring-champagne focus:ring focus:border-stone-200 focus:ring-opacity-50"
          />
        </div>

        <hr className="border-t-2 border-champagne mt-4 mb-4" />


      </div>
    ));
  };

  return (
    <>
      <NavBar />
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="bg-champagne bg-cover bg-fixed min-h-screen">
      <div className="container p-8">
        <Heading header="RSVP" />

        

        

        <InfoCard image={rsvp} includeImage={true}>

          {!submitForm1 && (
            <>
            <p className="block mt-1 text-lg leading-tight font-bold text-zinc-800">
            We can't wait to celebrate with you!
          </p>
          <p className="mt-2 text-zinc-800">
            Please RSVP on the form below for yourself, and any guests that will
            be accompanying you by the: <span className="mt-2 text-zinc-800 font-bold">
            17 June 2024
          </span>
          </p>
          
          
          <hr className="border-t-4 border-champagne mt-4 mb-4" />
          <div className="mb-4">
            <label className="block text-zinc-800 text-sm font-bold mb-2">
              Number of Guests:
            </label>

            <Input
              id="guest-number"
              type="number"
              value={numberOfGuests}
              onChange={handleNumberOfGuestsChange}
            >
              1
            </Input>

            {generateInputBoxes()}

            <label
              className="block text-zinc-800 text-sm font-bold mb-2"
              htmlFor="dropdown"
            >
              Will you be attending?
            </label>
            <Dropdown
              dropdownValues={[
                "Yes! I'm in!",
                "No! Unfortunately I can't make it.",
              ]}
              defaultValue="Select ..."
              onChange={handleResponseChange}
            />
            <Button disabled={mainResponse==="Select ..."} onClick={submit}>Submit</Button>
          </div>
            
            </>

          ) }

          {submitForm1 && mainResponse === "Yes! I'm in!" && (
            <>
            <p className="block mt-1 text-lg leading-tight font-bold text-zinc-800">
            We're so glad that you can make it!
          </p>
          <p className="mt-2 text-zinc-800">
            Please complete all the dietary requirements below for you and your guests.
          </p>
          <hr className="border-t-2 border-champagne mt-4 mb-4" />
          

          {generateGuestSections()} 
          <Button disabled={mainResponse==="Select ..."} onClick={submit}>Submit</Button>

            
            </>
          )} {submitForm1 && mainResponse === "No! Unfortunately I can't make it." && (

            <>
            <p className="block mt-1 text-lg leading-tight font-bold text-zinc-800">
            We're so sad that you can't make it!
          </p>
          <p className="mt-2 text-zinc-800">
            Thanks for letting us know. We will still think of you on the day and have a toast from afar!
          </p>
            </>
          )}
          
        </InfoCard>
      </div>
    </div>
    </div>
    </>
  );
}

export default RSVP;
