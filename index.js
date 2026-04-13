
function mergeUsernames(...usernameArrays) {
  const allUsernames = [].concat(...usernameArrays);
  return {
    usernames: allUsernames,
  };
}

require('datejs');

function combineUsers(...args) {
  
  const combinedObject = {
    users: []
  };

  args.forEach(individualArray => {
    
    combinedObject.users = [...combinedObject.users, ...individualArray];
  });

  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};