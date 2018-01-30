(function() {
  var form = document.getElementById('form-card');

  function find(array, value) {
    if (array.indexOf) {
      return value;
    }

    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) return value;
    }

    return -1;
  }
  var arrCardType = ["visa", "mastercard", "amex", "diners", "jcb", "discover"];
  var cardType = "";
  if (form) {
    var inputCreditCard = new Cleave('#form-card', {
      creditCard: true,
      onCreditCardTypeChanged: function(type) {
        const creditCardType = document.querySelector('.creditCardType');
        cardType = find(arrCardType, type);
        let newClass = 'icon-cc-' + cardType;
        console.log(newClass);
        if (cardType !== "unknown") {
          creditCardType.classList.add(newClass);
        } else {
          creditCardType.className = "creditCardType";
        }
      }
    });

    var inputExpDate = new Cleave('#form-exp-data', {
      numericOnly: true,
      blocks: [2, 2],
      delimiter: ' / ',
    });

    var inputCVV = new Cleave('#form-cvv', {
      numericOnly: true,
      blocks: [3],
    });
  }
})();