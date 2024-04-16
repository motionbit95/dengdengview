import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./Config";

export const uploadFile = async (dir, file) => {
  console.log(file);
  const storageRef = ref(storage, dir + "/" + file.name);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(snapshot.ref);
  return downloadURL;
};
