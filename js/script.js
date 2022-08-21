let elForm = document.querySelector(".perents__form-js");
let elInputName = elForm.querySelector(".perents__name-js");
let elInputSurename = elForm.querySelector(".perents__surname-js");
let elInputContact = elForm.querySelector(".perents__contact-js");
let elInputRelative = elForm.querySelector(".perents__relative-js");

let elResultList = document.querySelector(".result-list");

let arrResultObject = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let nameValue = elInputName.value;
  let surnameValue = elInputSurename.value;
  let telValue = Number(elInputContact.value);
  let relativeValue = elInputRelative.value;

  const perentsObject = {
    ismi: nameValue,
    familyasi: surnameValue,
    telefon: telValue,
    qarindosh: relativeValue
  }

  arrResultObject.push(perentsObject);

  let elItem = document.createElement("li");
  elItem.className = "hero__item form-control mb-2 "

  let elParagraphName = document.createElement("p");
  let elParagraphSurname = document.createElement("p");
  let elLinkTel = document.createElement("a");
  let elParagraphRelative = document.createElement("p");

  for (let i = 0; i < arrResultObject.length; i++) {
    elParagraphName.textContent = `Ismi: ${arrResultObject[i].ismi}`;
    elParagraphSurname.textContent = `Familyasi: ${arrResultObject[i].familyasi}`;
    elLinkTel.textContent = `Telefon raqami: +${arrResultObject[i].telefon}`;
    elLinkTel.href = `tel: +${arrResultObject[i].telefon}`
    elParagraphRelative.textContent = `Qarindoshligi: ${arrResultObject[i].qarindosh}`;

    if (nameValue.includes(Number(nameValue)) || surnameValue.includes(Number(surnameValue)) || relativeValue.includes(Number(relativeValue))) {
      if (nameValue.includes(Number(nameValue))) {
        elParagraphName.textContent = "Itimos 'ism' ga son kiritmamg";
        delete arrResultObject[i].ismi;
      }
      if (surnameValue.includes(Number(surnameValue))) {
        elParagraphSurname.textContent = "Itimos 'familya' ga son kiritmamg";
        delete arrResultObject[i].familyasi;
      }
      if (relativeValue.includes(Number(relativeValue))) {
        elParagraphRelative.textContent = "Itimos 'qarindosh' ga son kiritmamg";
        delete arrResultObject[i].qarindosh;
      }

      if (isNaN(telValue)) {
        elLinkTel.textContent = "Istimos raqamni son da kiriting";
        elLinkTel.href = `#tel`
        delete arrResultObject[i].telefon;
      }
    }
    else if (isNaN(telValue)) {
      elLinkTel.textContent = "Istimos raqamni son da kiriting";
      elLinkTel.href = `#tel`
      delete arrResultObject[i].telefon;
    }


    elItem.append(elParagraphName, elParagraphSurname, elLinkTel, elParagraphRelative)
    elResultList.appendChild(elItem)
  }


  console.log(arrResultObject);

  elInputName.value = "";
  elInputSurename.value = "";
  elInputContact.value = "";
  elInputRelative.value = ""
})

elForm.addEventListener("reset", function () {

  arrResultObject.splice(0, arrResultObject.length);
  elResultList.innerHTML = "";

  console.log(arrResultObject);

  elInputName.value = "";
  elInputSurename.value = "";
  elInputContact.value = "";
  elInputRelative.value = ""
})
