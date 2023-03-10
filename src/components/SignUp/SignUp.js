import { useRef } from 'react';
import Button from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { setDoc, doc } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import Form from '../Form/Form';

const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        const formDataCopy = {
          email: emailRef.current.value,
          watchlist: [],
          favorites: [],
        };

        setDoc(doc(db, 'users', authUser.user.uid), formDataCopy);
        navigate('/');
      })
      .catch((err) => toast.error('Invalid email or password'));
  };

  return (
    <Form
      signinForm={false}
      handleSubmit={handleSubmit}
      emailRef={emailRef}
      passwordRef={passwordRef}
    />
    // <section className="mt-[200px] md:mt-[20px]">
    //   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    //     <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-cyan-900">
    //       <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    //         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
    //           Sign Up
    //         </h1>
    //         <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
    //           <div>
    //             <label
    //               htmlFor="email"
    //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Your email
    //             </label>
    //             <input
    //               ref={emailRef}
    //               type="email"
    //               name="email"
    //               id="email"
    //               className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black"
    //               placeholder="name@company.com"
    //               required=""
    //             />
    //           </div>
    //           <div>
    //             <label
    //               htmlFor="password"
    //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Password
    //             </label>
    //             <input
    //               ref={passwordRef}
    //               type="password"
    //               name="password"
    //               id="password"
    //               placeholder="????????????????????????"
    //               className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 text-black"
    //               required="true"
    //             />
    //           </div>
    //           <div className="flex items-center justify-between">
    //             <div className="flex items-start">
    //               <div className="ml-3 text-sm"></div>
    //             </div>
    //           </div>
    //           <Button outline={true}>Sign in</Button>
    //           <p className="text-sm font-light text-gray-500 dark:text-gray-400">
    //             Already have an account?{' '}
    //             <Link
    //               to="/signin"
    //               className="font-medium text-primary-600 hover:underline dark:text-primary-500"
    //             >
    //               Sign up
    //             </Link>
    //           </p>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default SignUp;
