import { storage } from '../services/firebase';

function UploadFile(file, fileName) {
  const storageRef = storage().ref().child(fileName);
  return storageRef.put(file);
}
export default UploadFile;
