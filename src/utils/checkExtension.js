export const checkFileExtension = (url) => {
  const extension = url.split('.').pop().toLowerCase();

  const allowedExtensions = ['.doc', '.docx', '.ppt', '.pptx', '.xlsx', '.pdf'];
  const trueType = allowedExtensions.includes(`.${extension}`);
  return trueType;
};

export const checkImageExtension = (url) => {
  if (!url || typeof url !== 'string') {
    return false;
  }

  const extension = url.split('.').pop().toLowerCase();
  const allowedExtensions = ['.jpg', '.jpeg', '.svg', '.gif', '.png'];
  const trueType = allowedExtensions.includes(`.${extension}`);
  return trueType;
};
