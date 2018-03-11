var api = {
    getContactData: getContactData
};

module.exports = api

function getContactData(){
    return [{ 
      'id': 1,
      'name':'Ruchika Bhavsar',
      'emailId': {
          'work': 'ruchibhavsar@gmail.com',
          'personal': 'ruchikabhavsar@domain.com'
      },
      'contactNo': {
          'work':'21606',
          'personal': 8145986253
      }
    },{ 
      'id': 2,
      'name':'Gopala Krishnan',
      'emailId': {
          'work': 'gopalakrishnan@gmail.com',
          'personal': 'gopalakrishnan@domain.com'
      },
      'contactNo': {
          'work':'044 432105',
          'personal': 9875642315
      }
    },{ 
      'id': 3,
      'name':'Gopla Krishnan',
      'emailId': {
          'work': 'gopalakrishnan@gmail.com',
          'personal': 'gopalakrishnan@domain.com'
      },
      'contactNo': {
          'work':'044 432105',
          'personal': 9875642315
      }
    },{ 
      'id': 4,
      'name':'Gopala Krishnan',
      'emailId': {
          'work': 'gopalakrishnan@gmail.com',
          'personal': 'gopalakrishnan@domain.com'
      },
      'contactNo': {
          'work':'044 432105',
          'personal': 9875642315
      }
    }];
}