export const checkFileExtension = (url) => {
  const extension = url.split('.').pop().toLowerCase();

  const allowedExtensions = ['.doc', '.docx', '.ppt', '.pptx', '.xlsx', '.pdf'];
  const trueType = allowedExtensions.includes(`.${extension}`);
  return trueType;
};
