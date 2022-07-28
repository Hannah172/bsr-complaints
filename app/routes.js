const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'question_answers'
router.post('/question_units_answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howHigh = req.session.data['height']
  var howManyStoreys = req.session.data['storeys']
  var howManyUnits = req.session.data['units']

  // Check whether the variable matches a condition
  if ((howHigh > 17 && howManyUnits > 1) || (howManyStoreys > 6 && howManyUnits > 1)) {

    // Send user to next page
    res.redirect('check-answers')
  } else {
    // Send user to ineligible page
    res.redirect('ineligible')
  }

})
module.exports = router
