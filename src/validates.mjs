const regexFolderName = /^[A-Za-z]+$/g;

export const validateName = (value) => {
  if (regexFolderName.test(value)) {
    return true;
  }

  return 'Please enter a valid name';
}