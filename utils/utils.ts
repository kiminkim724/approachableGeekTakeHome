export enum Details {
  Name = 'fullName',
  Email = 'email',
  Phone = 'phone',
  Bio = 'bio',
  Picture = 'picture',
}

export interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  picture: string;
}

export const getLabel = (type: Details): string => {
  switch (type) {
    case Details.Email:
      return 'Your email address';
    case Details.Phone:
      return 'Your phone number';
    case Details.Bio:
      return 'Write a little bit about yourself. Do you like chatting? Are you a smoker? Do you bring pets with you? Etc.';
    default:
      return '';
  }
};

export const getTitle = (type: Details): string => {
  switch (type) {
    case Details.Name:
      return "What's your name?";
    case Details.Email:
      return "What's your email?";
    case Details.Phone:
      return "What's your phone number?";
    case Details.Bio:
      return 'What type of passenger are you?';
    case Details.Picture:
      return 'Upload a photo of yourself:';
    default:
      return '';
  }
};

export const getPlaceholder = (type: Details): string => {
  switch (type) {
    case Details.Email:
      return 'Timcook@icloud.com';
    case Details.Phone:
      return '(208)206-5039';
    case Details.Bio:
      return 'Write a little bit about yourself. Do you like chatting? Are you a smoker? Do you bring pets with you? Etc.';
    default:
      return '';
  }
};

export const formatPhoneNumber = (number: string): string => {
  const numericInput = number.replace(/\D/g, '');

  let formattedNumber = '';
  if (numericInput.length >= 0) {
    formattedNumber = `(${numericInput.slice(0, 3)}`;
  }
  if (numericInput.length >= 3 && number.length !== 4) {
    formattedNumber += ')';
  }
  if (numericInput.length > 3) {
    formattedNumber += ` ${numericInput.slice(3, 6)}`;
  }
  if (numericInput.length > 6) {
    formattedNumber += `-${numericInput.slice(6, 10)}`;
  }

  return formattedNumber;
};

export const checkFormat = (data: string, type: Details): boolean => {
  let reg;
  let error = 'Undefined';
  switch (type) {
    case Details.Email:
      reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      error = 'Email';
      break;
    case Details.Phone:
      reg = /^\(\d{3}\) \d{3}-\d{4}$/;
      error = 'Phone';
      break;
    default:
      return true;
  }
  if (reg?.test(data)) {
    return true;
  } else {
    throw Error(`Invalid ${error} format`);
  }
};
