require("datejs");

function combineUsers(...args) {
   const combinedObject = {
      users: []
   };

   args.forEach(arr => {
    combinedObject.users = [...combinedObject.users, ...arr];
   });

  combinedObject.merge_date = new Date().toString("M/d/yyyy");

  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};