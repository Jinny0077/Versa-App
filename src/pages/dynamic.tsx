// import { useState } from "react";
// import * as Yup from "yup";

// const Dynamic = () => {
//   const [questions, setQuestions] = useState([{ question: "", answers: [""] }]);
//   const [validationErrors, setValidationErrors] = useState([]);

//   const schema = Yup.array().of(
//     Yup.object().shape({
//       question: Yup.string().required("Question is required"),
//       answers: Yup.array().of(Yup.string().required("Answer is required")),
//     })
//   );

//   const handleAddQuestion = () => {
//     const updatedQuestions = [...questions, { question: "", answers: [""] }];
//     setQuestions(updatedQuestions);
//   };

//   const handleAddAnswer = (questionIndex) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].answers.push("");
//     setQuestions(updatedQuestions);
//   };

//   const handleChangeQuestion = (e, questionIndex) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].question = e.target.value;
//     setQuestions(updatedQuestions);
//   };

//   const handleChangeAnswer = (e, questionIndex, answerIndex) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].answers[answerIndex] = e.target.value;
//     setQuestions(updatedQuestions);
//   };

//   const handleDeleteQuestion = (questionIndex) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions.splice(questionIndex, 1);
//     setQuestions(updatedQuestions);
//     setValidationErrors([]);
//   };

//   const handleDeleteAnswer = (questionIndex, answerIndex) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[questionIndex].answers.splice(answerIndex, 1);
//     setQuestions(updatedQuestions);
//     setValidationErrors([]);
//   };

//   const handleSubmit = async () => {
//     try {
//       await schema.validate(questions, { abortEarly: false });
//       console.log("Form is valid:", questions);
//       setValidationErrors([]);
//     } catch (error) {
//       setValidationErrors(error.inner);
//     }
//   };

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         {questions.map((question, questionIndex) => (
//           <div key={questionIndex} style={{ marginBottom: "20px" }}>
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <label style={{ fontWeight: "bold" }}>{`Question ${
//                 questionIndex + 1
//               } :`}</label>
//               <input
//                 value={question.question}
//                 onChange={(e) => handleChangeQuestion(e, questionIndex)}
//                 style={{ marginLeft: "10px" }}
//               />
//               <button
//                 onClick={() => handleDeleteQuestion(questionIndex)}
//                 style={{
//                   width: "30px",
//                   height: "30px",
//                   borderRadius: "10%",
//                   marginLeft: "3px",
//                   borderColor: "red",
//                   color: "red",
//                 }}
//               >
//                 &times;
//               </button>
//               {validationErrors.map((error) => {
//                 if (error.path === `[${questionIndex}].question`) {
//                   return (
//                     <p
//                       key={error.path}
//                       style={{ color: "red", marginLeft: "10px" }}
//                     >
//                       {error.message}
//                     </p>
//                   );
//                 }
//                 return null;
//               })}
//             </div>
//             {question.answers.map((answer, answerIndex) => (
//               <div
//                 key={answerIndex}
//                 style={{
//                   marginTop: "5px",
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <label>{`Answer ${answerIndex + 1} : `}</label>
//                 <input
//                   value={answer}
//                   onChange={(e) =>
//                     handleChangeAnswer(e, questionIndex, answerIndex)
//                   }
//                   style={{ marginLeft: "40px" }}
//                 />
//                 <button
//                   onClick={() => handleDeleteAnswer(questionIndex, answerIndex)}
//                   style={{
//                     width: "30px",
//                     height: "30px",
//                     borderRadius: "10%",
//                     marginLeft: "3px",
//                     borderColor: "red",
//                     color: "red",
//                   }}
//                 >
//                   &times;
//                 </button>
//                 {validationErrors.map((error) => {
//                   if (
//                     error.path === `[${questionIndex}].answers[${answerIndex}]`
//                   ) {
//                     return (
//                       <p
//                         key={error.path}
//                         style={{ color: "red", marginLeft: "40px" }}
//                       >
//                         {error.message}
//                       </p>
//                     );
//                   }
//                   return null;
//                 })}
//               </div>
//             ))}
//             <button
//               onClick={() => handleAddAnswer(questionIndex)}
//               style={{
//                 marginTop: "3px",
//                 width: "90px",
//                 borderColor: "green",
//                 color: "green",
//               }}
//             >
//               + Answer
//             </button>
//           </div>
//         ))}
//         <button
//           onClick={handleAddQuestion}
//           style={{ width: "90px", borderColor: "blue", color: "blue" }}
//         >
//           + Question
//         </button>
//         <button
//           onClick={handleSubmit}
//           style={{
//             marginTop: "20px",
//             width: "90px",
//             borderColor: "black",
//             color: "black",
//           }}
//         >
//           Submit
//         </button>
//       </div>
//     </>
//   );
// };

// export default Dynamic;
