// // components/SignInModal.jsx
// import styles from '../styles/SignInModal.module.css'; // Adjust the path to your CSS module

// const SignInModal = ({ isOpen, onClose }) => {
//     if (!isOpen) return null; // Render nothing if modal is not open

//     return (
//         <div className={styles.modalOverlay} onClick={onClose}>
//             <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//                 <button className={styles.closeButton} onClick={onClose}>X</button>
//                 <h2>Sign In</h2>
//                 {/* Add your sign-in form here */}
//                 <form>
//                     <label>
//                         Email:
//                         <input type="email" required />
//                     </label>
//                     <label>
//                         Password:
//                         <input type="password" required />
//                     </label>
//                     <button type="submit">Sign In</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SignInModal;
