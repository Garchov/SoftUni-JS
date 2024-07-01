function extractFile(filePath) {
  const path = filePath.split("\\");
  const lastPart = path.pop();
  const lastDotIndex = lastPart.lastIndexOf(".");
  const fileName = lastPart.slice(0, lastDotIndex);
  const fileExtension = lastPart.slice(lastDotIndex + 1);

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${fileExtension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
extractFile("C:\\Projects\\Data-Structures\\LinkedList.cs");
