import { getDatabase, child, ref, get } from "firebase/database";

const getUserInfo = function (userId) {
  let userInfo = "undefined";
  const dbRef = ref(getDatabase());
  const response = get(child(dbRef, `users/${userId}`));
  return response;
};

export default getUserInfo;
