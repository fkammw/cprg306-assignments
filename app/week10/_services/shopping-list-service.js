
import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

//get item by userId
export const getItems = async (userId) => {
    try {

        //get the collection of items from firebase
      const itemRef = collection(db, "users", userId, "items");
      const q = query(itemRef);
      //fetch the data from firebase
      const docSnap = await getDocs(q);
    
      //initialize an empty array to store items that fetched from firebase
      const itemsArray = [];
        docSnap.forEach((doc) => {
            itemsArray.push({ id: doc.id, ...doc.data() });
        });
  
        return itemsArray;

    } catch (error) {
      console.error("Error in getEItems: ", error);
    }
  };

  // Add a new item
export const addItem = async (userId, item) => {
    try {

        const itemRef = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemRef, item);

        return docRef.id;

    } catch (error) {
      console.error("Error in addItem:", error);
    }
  };