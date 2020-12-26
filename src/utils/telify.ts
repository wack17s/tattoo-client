import { findPhoneNumbersInText } from 'libphonenumber-js';

export const telify = (origText) => {
  let newText = origText
  const getPhoneNum = findPhoneNumbersInText(newText, 'UA');

  if (newText?.length) {
    getPhoneNum.forEach((match) => {
      const pattern = origText.substring(match.startsAt, match.endsAt);
      newText = newText.replace( pattern, `<a href="tel:${match.number.number}")>${pattern}</a>`);
      
    });
  }
  return newText;
}
