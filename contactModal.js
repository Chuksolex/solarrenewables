const { useState } = React;

const InteractiveForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    solarFor: '',
    homeType: '',
    solarInstalled: '',
    solarProducts: '',
    electricityBill: '',
    email: '',
    fullName: '',
    phone: '',
  });

  const handleNext = (key, value) => {
    setFormData({ ...formData, [key]: value });
    setStep(step + 1);
    console.log(formData);

  };

  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted!');
  };

  return (
    <div className="form-container">
      {step === 1 && (
        
<div>
<h3>Do you need Solar for your home or business?</h3>
<div class="enquiry-form-step-radio-input-container">
  <div data-selected="false" class="enquiry-form-radio-input">
    <input type="radio" name="solartype" value="home" class="enquiry-form-radio-input-toggle" onClick={() => handleNext('solarFor', 'home')} />
    <label for="home" class="enquiry-form-radio-input-text" >Home</label>
  </div>
  <div data-selected="false" class="enquiry-form-radio-input">
    <input type="radio" name="solartype" value="business" class="enquiry-form-radio-input-toggle" onClick={() => handleNext('solarFor', 'business')} />
    <label for="business" class="enquiry-form-radio-input-text"  >Business</label>
  </div>

</div>

</div>
      )}

      {step === 2 && formData.solarFor === 'home' && (
       


<div>
    <h3>Are you a homeowner or tenant??</h3>
    <div class="enquiry-form-step-radio-input-container">
        <div data-selected="false" class="enquiry-form-radio-input">
            <input type="radio" name="solartype" value="home" class="enquiry-form-radio-input-toggle" onClick={() => handleNext('homeType', 'homeowner')} />
            <label for="home" class="enquiry-form-radio-input-text" >Homeowner</label>
        </div>
        <div data-selected="false" class="enquiry-form-radio-input">
            <input type="radio" name="solartype" value="business" class="enquiry-form-radio-input-toggle" onClick={() => handleNext('homeType', 'tenant')} />
            <label for="business" class="enquiry-form-radio-input-text"  >Tenant</label>
        </div>
        <button onClick={handleBack}>Previous</button>

    </div>
</div>
      )}

      {step === 2 && formData.solarFor === 'business' && (
       

<div>
    <h3>Do you already have solar installed?</h3>
    <div class="enquiry-form-step-radio-input-container">
        <div data-selected="false" class="enquiry-form-radio-input">
            <input type="radio" name="solartype" value="home" class="enquiry-form-radio-input-toggle"onClick={() => handleNext('solarInstalled', 'yes')} />
            <label for="home" class="enquiry-form-radio-input-text" >Yes</label>
        </div>
        <div data-selected="false" class="enquiry-form-radio-input">
            <input type="radio" name="solartype" value="business" class="enquiry-form-radio-input-toggle" onClick={() => handleNext('solarInstalled', 'no')} />
            <label for="business" class="enquiry-form-radio-input-text"  >No</label>
        </div>
        <button onClick={handleBack}>Previous</button>

    </div>
</div>

            

      )}

      {step === 3 && formData.solarFor === 'home' && (
       

       

        <div>
        <h3>What is your average monthly electricity bill?</h3>
        <div className="enquiry-form-step-radio-input-container">
          <div className="enquiry-form-radio-input">
            <input
              type="radio"
              name="electricityBill"
              value="less_than_20000"
              className="enquiry-form-radio-input-toggle"
              onClick={() => handleNext('electricityBill', 'Less than ₦100,000')}
            />
            <label className="enquiry-form-radio-input-text">Less than ₦100,000</label>
          </div>
          <div className="enquiry-form-radio-input">
            <input
              type="radio"
              name="electricityBill"
              value="20000_50000"
              className="enquiry-form-radio-input-toggle"
              onClick={() => handleNext('electricityBill', '₦100,000-₦300,000')}
            />
            <label className="enquiry-form-radio-input-text">₦100,000-₦300,000</label>
          </div>
          <div className="enquiry-form-radio-input">
            <input
              type="radio"
              name="electricityBill"
              value="50000_100000"
              className="enquiry-form-radio-input-toggle"
              onClick={() => handleNext('electricityBill', '₦300,000-₦6000,000')}
            />
            <label className="enquiry-form-radio-input-text">₦300,000-₦600,000</label>
          </div>
          <div className="enquiry-form-radio-input">
            <input
              type="radio"
              name="electricityBill"
              value="more_than_100000"
              className="enquiry-form-radio-input-toggle"
              onClick={() => handleNext('electricityBill', 'More than ₦600,000')}
            />
            <label className="enquiry-form-radio-input-text">More than ₦600,000</label>
          </div>
          <button onClick={handleBack}>Previous</button>
        </div>
      </div>
        
      )}



      {step === 3 && formData.solarFor === 'business' && (
       
        <div>
        <h3>What is your average monthly electricity bill?</h3>
        <div class="enquiry-form-step-radio-input-container">
            <div data-selected="false" class="enquiry-form-radio-input">
                <input type="radio" name="solartype" value="home" class="enquiry-form-radio-input-toggle" onClick={() => handleNext('electricityBill', 'Less than ₦200000')} />
                <label for="home" class="enquiry-form-radio-input-text" >Less than ₦200,000</label>
            </div>
            <div data-selected="false" class="enquiry-form-radio-input">
                <input type="radio" name="solartype" value="business" class="enquiry-form-radio-input-toggle" onClick={() => handleNext('electricityBill', '₦200000-₦500000')} />
                <label for="business" class="enquiry-form-radio-input-text"  >₦200,000-₦500,000</label>
            </div>
            <div data-selected="false" class="enquiry-form-radio-input">
                <input type="radio" name="solartype" value="business" class="enquiry-form-radio-input-toggle" onClick={() => handleNext('electricityBill', '₦500000-₦1000000')} />
                <label for="business" class="enquiry-form-radio-input-text"  >₦500,000-₦1,000,000</label>
            </div>
            <div data-selected="false" class="enquiry-form-radio-input">
                <input type="radio" name="solartype" value="business" class="enquiry-form-radio-input-toggle" onClick={() => handleNext('electricityBill', 'More than ₦1000000')} />
                <label for="business" class="enquiry-form-radio-input-text"  >More than ₦1,000,000</label>
            </div>
            <button onClick={handleBack}>Previous</button>

        </div>
    </div>
      )}

{step === 4 && formData.solarFor === 'home' && (
       

       <div>
           <h3>What type of solar products do you need?</h3>
           <div class="enquiry-form-step-radio-input-container">
               <div data-selected="false" class="enquiry-form-radio-input">
                   <input type="radio" name="solartype" value="home" class="enquiry-form-radio-input-toggle" onClick={() => handleNext('solarProducts', 'panels')} />
                   <label for="home" class="enquiry-form-radio-input-text" >Panels</label>
               </div>
               <div data-selected="false" class="enquiry-form-radio-input">
                   <input type="radio" name="solartype" value="business" class="enquiry-form-radio-input-toggle" onClick={() => handleNext('solarProducts', 'batteries')} />
                   <label for="business" class="enquiry-form-radio-input-text"  >Batteries</label>
               </div>
               <div data-selected="false" class="enquiry-form-radio-input">
                   <input type="radio" name="solartype" value="business" class="enquiry-form-radio-input-toggle" onClick={() => handleNext('solarProducts', 'panels+batteries')} />
                   <label for="business" class="enquiry-form-radio-input-text"  >Panels + Batteries</label>
               </div>
               <button onClick={handleBack}>Previous</button>

           </div>
       </div>
)}
{step === 4 && formData.solarFor === 'business' && (
       

       <div>
           <h3>What type of solar products do you need?</h3>
           <div class="enquiry-form-step-radio-input-container">
               <div data-selected="false" class="enquiry-form-radio-input">
                   <input type="radio" name="solartype" value="home" class="enquiry-form-radio-input-toggle" onClick={() => handleNext('solarProducts', 'panels')} />
                   <label for="home" class="enquiry-form-radio-input-text" >Panels</label>
               </div>
               <div data-selected="false" class="enquiry-form-radio-input">
                   <input type="radio" name="solartype" value="business" class="enquiry-form-radio-input-toggle" onClick={() => handleNext('solarProducts', 'batteries')} />
                   <label for="business" class="enquiry-form-radio-input-text"  >Batteries</label>
               </div>
               <div data-selected="false" class="enquiry-form-radio-input">
                   <input type="radio" name="solartype" value="business" class="enquiry-form-radio-input-toggle" onClick={() => handleNext('solarProducts', 'panels+batteries')} />
                   <label for="business" class="enquiry-form-radio-input-text"  >Panels + Batteries</label>
               </div>
               <button onClick={handleBack}>Previous</button>

           </div>
       </div>
)}

      {step === 5 && (
        <form onSubmit={handleSubmit}>
          <h2>Provide your contact details</h2>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="input"
          />
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
            className="input"

          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="input"

          />
          <button onClick={handleBack}>Previous</button>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

// Render to the DOM
ReactDOM.render(<InteractiveForm />, document.getElementById('contactModalContainer'));
