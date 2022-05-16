import { createUserWithEmailAndPassword, deleteUser, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { typeRegistration } from "../types/types.js";
import { google } from "../../firebase/Firebase.js";
import { facebook } from "../../firebase/Firebase.js";
import swal from 'sweetalert';

export const logoutAsync = () => {
  return (dispatch) => {
    const auth = getAuth()
    const userBorrar = auth.currentUser;
    console.log(userBorrar)
    // Eliminar usuario con logout
    deleteUser(userBorrar)
      .then(() => {
        console.log("usuario eliminado")
      })
      .catch(error => {
        console.warn("nose pudo eliminar", error)
      })
    //-------------
    signOut(auth)
      .then((user) => {
        console.log('Hasta Pronto')
        dispatch(logout())

      })
      .catch(error => {
        console.warn(error)
      })
  }
}
export const logout = () => {
  return {
    type: typeRegistration.logout
  }
}
export const loginAsync = (email, password) => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSync(user.email, user.password))
        console.log('Usuario autorizado (login Async)')
      })
      .catch(error => {
        console.warn(error, 'No autorizado (login Async)')
      })
  }
}
export const loginSync = (user, pass) => {
  return {
    type: typeRegistration.login,
    payload: { user, pass }
  }
}
export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth()
    signInWithPopup(auth, google)
      .then(({ user }) => {
        console.log(user, 'Usuario autorizado (Login Google)')
      })
      .catch(error => {
        console.warn(error, 'No autorizado (Login Google)')
      })
  }
}
export const RegisterAsync = (email, password, Username, file) => {
  return (dispatch) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        console.log(user)
        await updateProfile(auth.currentUser, { displayName: Username, photoUrl: file })
        dispatch(RegisterSync(email, password, Username));
        swal("Bienvenido!", "Disfruta de todos nuestros contenidos", "success")
      })
      .catch(error => {
        console.warn(error, swal("Verifica tu informacion!", "Aun no fuiste registrado verifica la informacion nuevamente", "error"))
      })
  }
}
export const RegisterSync = (email, password, Username) => {
  return {
    type: typeRegistration.register,
    payload: {
      email, password, Username
    }
  }
}
export const loginFacebookAction = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then((user) => console.log(user))
  }
}
// export const getPerfil = () => {
//   return (dispatch) => {
//     const auth = getAuth();
//     const user = auth.currentUser;
//     if (user !== null) {
//       const displayName = user.displayName;
//       const email = user.email;
//       const photoURL = user.photoURL;
//       const uid = user.uid;
//     }
//   }
// }