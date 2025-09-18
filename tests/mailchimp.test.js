require('dotenv').config();
const mailchimp = require('@mailchimp/mailchimp_marketing');

// Configure Mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_KEY?.split('-')[1] || 'us6',
});

// Function to add donor to Mailchimp audience
async function addDonorToMailchimp(email, firstName = '', lastName = '', donationAmount = 0) {
  try {
    const response = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      },
      tags: ['crowdfunding-donor'],
    });
    
    console.log(`Successfully added ${email} to Mailchimp audience`);
    return response;
  } catch (error) {
    console.error('Mailchimp error:', error.response?.body || error.message);
    console.error('Full error object:', JSON.stringify(error.response?.body || error, null, 2));
    return { error: error.response?.body || error.message };
  }
}

// Test function for Mailchimp integration
async function testMailchimpIntegration() {
  try {
    console.log('Testing Mailchimp integration with mock data...');
    
    // Mock data that would typically come from Stripe checkout
    const mockData = [
      {
        email: 'john.explorer@gmail.com',
        firstName: 'John',
        lastName: 'Doe',
        donationAmount: 200,
        tier: 'Explorer'
      },
      {
        email: 'jane.steamer@gmail.com', 
        firstName: 'Jane',
        lastName: 'Smith',
        donationAmount: 600,
        tier: 'Steamer'
      },
      {
        email: 'bob.ygber@gmail.com',
        firstName: 'Bob',
        lastName: 'Johnson',
        donationAmount: 1000,
        tier: 'YGBer'
      },
      {
        email: 'alice.onetime@gmail.com',
        firstName: 'Alice',
        lastName: 'Wilson',
        donationAmount: 75,
        tier: 'One-Time Gift'
      }
    ];

    const results = [];
    
    for (const data of mockData) {
      console.log(`Testing Mailchimp for ${data.email} - ${data.tier} ($${data.donationAmount})`);
      
      const result = await addDonorToMailchimp(
        data.email,
        data.firstName,
        data.lastName,
        data.donationAmount
      );
      
      results.push({
        email: data.email,
        tier: data.tier,
        amount: data.donationAmount,
        success: result !== null && !result.error,
        result: result
      });
    }
    
    return {
      success: true,
      message: 'Mailchimp test completed',
      results: results,
      mailchimp_config: {
        audience_id: process.env.MAILCHIMP_AUDIENCE_ID,
        api_key_server: process.env.MAILCHIMP_API_KEY?.split('-')[1] || 'unknown'
      }
    };
    
  } catch (error) {
    console.error('Mailchimp test error:', error);
    return { 
      success: false, 
      error: error.message,
      mailchimp_config: {
        audience_id: process.env.MAILCHIMP_AUDIENCE_ID,
        api_key_server: process.env.MAILCHIMP_API_KEY?.split('-')[1] || 'unknown'
      }
    };
  }
}

// Export for use in other test files
module.exports = {
  addDonorToMailchimp,
  testMailchimpIntegration
};

// Run test if called directly
if (require.main === module) {
  testMailchimpIntegration()
    .then(result => console.log(JSON.stringify(result, null, 2)))
    .catch(error => console.error(error));
}