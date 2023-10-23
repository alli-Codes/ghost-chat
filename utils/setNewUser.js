import { getDatabase, ref, set } from "firebase/database";

const setNewUser = function (userId, email) {
  const db = getDatabase();
  const DB_Ref = ref(db, "users/" + userId);
  set(DB_Ref, {
    username: `user_${userId.slice(0, 5)}`,
    email: email,
  });
};

export default setNewUser;
