import { Question } from './Question';
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function fetchQuestions() {
    const querySnapshot = await getDocs(collection(db, "questions"));
    
    // Convert Firestore documents to Question instances
    const questionList = querySnapshot.docs.map(doc => {
        console.log("DOC ID: " + doc.id)

        console.log("DOC " + typeof(doc))

      const data = doc.data();
      console.log("DATA " + typeof(data))

      return new Question(data.title, data.choices);
    });
  
    console.log("LIST " + typeof(questionList))
    return questionList;
}

//export default fetchQuestions;
