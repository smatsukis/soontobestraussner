import NavBar from "./components/NavBar";
import InfoCard from "./components/InfoCard";
import Heading from "./components/Heading";
import Dropdown from "./components/Dropdown";
import Button from "./components/Button";
import Input from "./components/Input";
import { useState, useEffect } from "react";
import Checkbox from "./components/TickBox";
import rsvp from "./assets/rsvp-final.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faAsterisk, faCheck, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

function RSVP() {
  const [numberOfGuests, setNumberOfGuests] = useState();
  const [loading, setLoading] = useState(false);
  const [successToGoogleSheet, setSuccessToGoogleSheet] = useState(false);
  const [mainResponse, setMainResponse] = useState("Select ...");
  const [openSectionIndex, setOpenSectionIndex] = useState(0);

  const handleAccordionToggle = (index) => {
    setOpenSectionIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbz-xkjIxVPSWR7QbWibtEDh5QXh9zJYYC_Uyf6X3GYsitDPO_Sh6M1Oni9Lddx8Q80y/exec";
  const [rsvpObject, setRsvpObject] = useState([
    {
      name: "",
      attending: false,
      contactNumber: "",
      dietaryRequirements: [],
      preferredBurgerMeat: "",
      additionalComments: "",
    },
  ]);
  const [submitForm1, setSubmitForm] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const [isFirstButtonDisabled, setIsFirstButtonDisabled] = useState(true);
  const [isSecondButtonDisabled, setIsSecondButtonDisabled] = useState(true);

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
          additionalComments: "",
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
          {rsvpObject[i].name == "" && (
            <span className="text-xs">* Required </span>
          )}
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
    if (mainResponse !== "Yes! I'm in!") {
      submitFinal();
    }
    setSubmitForm(true);
  };

  const submitFinal = () => {
    setLoading(true);
    rsvpObject.forEach(async (entry) => {
      const body = new FormData();
      body.append("Name", entry.name);
      body.append("Attending", entry.attending);
      body.append("Contact", entry.contactNumber);
      body.append("Dietary Requirements", entry.dietaryRequirements.join(", "));
      body.append("Burger Meat", entry.preferredBurgerMeat);
      body.append("Additional Comments", entry.additionalComments);

      fetch(scriptUrl, {
        method: "POST",
        body: body,
      })
        .then((res) => {
          setSuccessToGoogleSheet(true);
          console.log("SUCCESSFULLY SUBMITTED");
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    });
  };

  useEffect(() => {
    setIsFirstButtonDisabled(
      rsvpObject.every((input) => input.name.trim() !== "") &&
        mainResponse !== "Select ..." &&
        numberOfGuests >= 1
    );

    setIsSecondButtonDisabled(
      rsvpObject.every(
        (input) =>
          input.contactNumber.trim() !== "" &&
          input.preferredBurgerMeat.trim() !== "Select ..." &&
          input.preferredBurgerMeat.trim() !== ""
      )
    );
  }, [rsvpObject, numberOfGuests, mainResponse]);

  useEffect(() => {}, [rsvpObject, numberOfGuests, mainResponse]);

  const handleContactNumberChange = (e, index) => {
    const newContactNumber = e.target.value;

    setRsvpObject((prevRsvpObject) => {
      const newRsvpObject = [...prevRsvpObject];
      newRsvpObject[index].contactNumber = newContactNumber;
      return newRsvpObject;
    });
  };

  const handleDietaryRequirementsChange = (e, index) => {
    const isChecked = e.target.checked;
    const dietaryRequirement = e.target.value;

    setRsvpObject((prevRsvpObject) => {
      const newRsvpObject = [...prevRsvpObject];
      if (isChecked) {
        newRsvpObject[index].dietaryRequirements.push(dietaryRequirement);
      } else {
        const indexToRemove =
          newRsvpObject[index].dietaryRequirements.indexOf(dietaryRequirement);
        if (indexToRemove !== -1) {
          newRsvpObject[index].dietaryRequirements.splice(indexToRemove, 1);
        }
      }
      return newRsvpObject;
    });
  };

  const handlePreferredBurgerMeatChange = (e, index) => {
    const newPreferredBurgerMeat = e.target.value;

    setRsvpObject((prevRsvpObject) => {
      const newRsvpObject = [...prevRsvpObject];
      newRsvpObject[index].preferredBurgerMeat = newPreferredBurgerMeat;
      return newRsvpObject;
    });
  };

  const handleAdditionalCommentsChange = (e, index) => {
    const newAdditionalComments = e.target.value;

    setRsvpObject((prevRsvpObject) => {
      const newRsvpObject = [...prevRsvpObject];
      newRsvpObject[index].additionalComments = newAdditionalComments;
      return newRsvpObject;
    });
  };

  const generateGuestSections = () => {
    return rsvpObject.map((guest, index) => (
      <div key={index}>
        <div
          className="flex justify-between w-full items-center cursor-pointer"
          onClick={() => handleAccordionToggle(index)}
        >
          <div>
            <p className="block mt-4 text-lg leading-tight font-bold text-zinc-800">
            {openSectionIndex === index ? (<FontAwesomeIcon
                icon={faChevronUp}
                className="w-4 h-4 mr-2 inline"
              />):(<FontAwesomeIcon
                icon={faChevronDown}
                className="w-4 h-4 mr-2 inline"
              />)}
             Guest {index + 1} - {guest.name}
            </p>
          </div>
          <div>
            <p className="text-xs text-zinc-800 mt-2.5">
              {guest.contactNumber.trim() != "" && guest.preferredBurgerMeat != "" && guest.preferredBurgerMeat != "Select ..." ? (
                <>
              <FontAwesomeIcon
                icon={faCheck}
                className="w-4 h-4 mt-2 mr-1"
              />
              Complete
              </>
              ): (<>
              <FontAwesomeIcon
                icon={faAsterisk}
                className="w-2 h-2 mt-2 mr-1 mb-0.5"
              />
              Information Required
              </>)}
            
              
            </p>
          </div>
        </div>

        {openSectionIndex === index && (
          <div className="accordion-content">
            <div className="mb-4 mt-2">
              <label className="block text-zinc-800 text-sm font-bold mb-2">
                Contact Number:
              </label>
              <input
                type="text"
                name={`contactNumber${index + 1}`}
                value={guest.contactNumber}
                onChange={(e) => handleContactNumberChange(e, index)}
                className="border w-full border-zinc-800 px-4 py-2 rounded-sm focus:ring-champagne focus:ring focus:border-stone-200 focus:ring-opacity-50"
              />
              {guest.contactNumber == "" && (
                <span className="text-xs">* Required </span>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-zinc-800 text-sm font-bold mb-2">
                Please select any dietary requirements you may have:
              </label>
              <div>
                <Checkbox
                  value="Tree nut and peanut allergies"
                  onChange={(e) => handleDietaryRequirementsChange(e, index)}
                >
                  Tree nut and peanut allergies
                </Checkbox>
                <Checkbox
                  value="Vegetarian"
                  onChange={(e) => handleDietaryRequirementsChange(e, index)}
                >
                  Vegetarian
                </Checkbox>
                <Checkbox
                  value="Vegan"
                  onChange={(e) => handleDietaryRequirementsChange(e, index)}
                >
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
                  "Beef",
                  "Chicken",
                  "Vegetarian",
                  "None of these are suited to my dietary requirements",
                ]}
                defaultValue="Select ..."
                value={guest.preferredBurgerMeat}
                onChange={(e) => handlePreferredBurgerMeatChange(e, index)}
                name={`preferredBurgerMeat${index + 1}`}
              />
              {guest.preferredBurgerMeat == "" &&
                guest.preferredBurgerMeat == "Select ..." && (
                  <span className="text-xs">* Required </span>
                )}
            </div>

            <div className="mb-4">
              <label className="block text-zinc-800 text-sm font-bold mb-2">
                Anything else? Let us know!
              </label>
              <textarea
                type="text"
                name={`additionalComments${index + 1}`}
                value={guest.additionalComments}
                onChange={(e) => handleAdditionalCommentsChange(e, index)}
                className="border w-full border-zinc-800 px-4 py-2 rounded-sm focus:ring-champagne focus:ring focus:border-stone-200 focus:ring-opacity-50"
              />
            </div>
          </div>
        )}
      </div>
    ));
  };

  return (
    <>
      <NavBar />
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
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
                    Please RSVP on the form below for yourself, and any guests
                    that will be accompanying you by the:{" "}
                    <span className="mt-2 text-zinc-800 font-bold">
                      17 June 2024
                    </span>
                  </p>

                  <div className="mt-4 mb-4"></div>
                  <div className="mb-4">
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

                    <label className="block text-zinc-800 text-sm font-bold mb-2">
                      Number of Guests:
                    </label>

                    <Input
                      id="guest-number"
                      type="text"
                      value={numberOfGuests}
                      onChange={handleNumberOfGuestsChange}
                    ></Input>

                    {generateInputBoxes()}

                    {loading ? (
                      <FontAwesomeIcon
                        icon={faSpinner}
                        className="w-6 h-6 mr-2 py-2 pt-2 pb-2 mt-5 text-zinc-800 animate-spin animate-spin-slow"
                      />
                    ) : (
                      <Button
                        disabled={!isFirstButtonDisabled}
                        onClick={submit}
                      >
                        Submit
                      </Button>
                    )}
                  </div>
                </>
              )}
              {submitForm1 &&
                mainResponse === "Yes! I'm in!" &&
                !successToGoogleSheet && (
                  <>
                    <p className="block mt-1 text-lg leading-tight font-bold text-zinc-800">
                      We're so glad that you can make it!
                    </p>
                    <p className="mt-2 text-zinc-800">
                      Please complete all the dietary requirements below for you
                      and your guests.
                    </p>
                    <div className="mt-4 mb-4"></div>

                    {generateGuestSections()}

                    {loading ? (
                      <FontAwesomeIcon
                        icon={faSpinner}
                        className="w-6 h-6 mr-2 mb-2 text-zinc-800 animate-spin animate-spin-slow"
                      />
                    ) : (
                      <>
                        <Button
                          disabled={!isSecondButtonDisabled}
                          onClick={submitFinal}
                        >
                          Submit
                        </Button>
                        {!isSecondButtonDisabled && (
                          <>
                            <br></br>
                            <span className="pt-2 text-xs">
                              * Please enter a contact number and select a
                              burger meat choice for all guests before
                              submitting{" "}
                            </span>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}{" "}
              {submitForm1 &&
                mainResponse === "No! Unfortunately I can't make it." && (
                  <>
                    <p className="block mt-1 text-lg leading-tight font-bold text-zinc-800">
                      We're so sad that you can't make it!
                    </p>
                    <p className="mt-2 text-zinc-800">
                      Thanks for letting us know. We will still think of you on
                      the day and have a toast from afar!
                    </p>
                  </>
                )}
              {successToGoogleSheet && mainResponse != "No! Unfortunately I can't make it." && (
                  <>
                    <p className="block mt-1 text-lg leading-tight font-bold text-zinc-800">
                      Success!
                    </p>
                    <p className="mt-2 text-zinc-800">
                      We can't wait to eat, drink, and dance the night away with
                      you! See you in{" "}
                      {Math.floor(
                        (new Date("2024-08-17T15:00:00") - new Date()) /
                          (1000 * 60 * 60 * 24)
                      )}{" "}
                      days!
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
