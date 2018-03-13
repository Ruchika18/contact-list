var api = {
    getContactData: getContactData
};

module.exports = api

function getContactData(){
    return [{ 
      'id': 1,
      'name':'Ruchika Bhavsar',
      'emailId': [{
          'type': 'Work',
          'emailId': 'ruchibhavsar@gmail.com'
      },{
          'type': 'Personal',
          'emailId': 'ruchikabhavsar@domain.com'
      }],
      'contactNo': [{
          'type':'Work',
          'phoneNo': '044 21606'
      },{
          'type':'Personal',
          'phoneNo': 8145986253
      }]
    },{ 
      'id': 2,
      'name':'Gopala Krishnan',
      'emailId': [{
          'type': 'Work',
          'emailId': 'gopalakrishnan@gmail.com'
      },{
          'type': 'Personal',
          'emailId': 'gopalakrishnan@domain.com'
      }],
      'contactNo': [{
          'type':'Work',
          'phoneNo': '044 122105'
      },{
          'type':'Personal',
          'phoneNo': 7875642315
      }]
    },{ 
      'id': 3,
      'name':'Gopla Krishnan',
      'emailId': [{
          'type': 'Work',
          'emailId': 'goplakrishnan@gmail.com'
      },{
          'type': 'Personal',
          'emailId': 'goplakrishnan@domain.com'
      }],
      'contactNo': [{
          'type':'Work',
          'phoneNo': '044 457632'
      },{
          'type':'Personal',
          'phoneNo': 865347896
      }]
    },{ 
      'id': 4,
      'name':'Gopinath',
      'emailId': [{
          'type': 'Work',
          'emailId': 'gopinath@gmail.com'
      },{
          'type': 'Personal',
          'emailId': 'gopinath@domain.com'
      }],
      'contactNo': [{
          'type':'Work',
          'phoneNo': '044 4456823'
      },{
          'type':'Personal',
          'phoneNo': 9124588635
      }]
    }];
}