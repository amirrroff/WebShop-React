import Button from '../containers/Button/Button';
import Head from 'next/head'
import InputEmail from '../containers/InputEmail/InputEmail';
import InputPassword from '../containers/InputPassword/InputPassword';
import InputText from '../containers/InputText/InputText';


const Register = () => {
    return ( 
        <div className='background'>
          <style jsx>{`
              .background {
                background-image: url("https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_960_720.jpg");
              }
        `}
      </style>
        <Head>
        <title>Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <form className='py-36 min-h-screen'>
        <div className="bg-gray-200 rounded-md p-2 mx-auto w-8/12 h-8/12  ">
            <div className="text-left ml-8">
                <h2 className="pb-2 text-center font-bold text-2xl">Register</h2>
                <p>Please fill in this form to create an account.</p>
                <hr className="border-2 border-gray-400 mb-4" />
                <label className="font-bold ">First Name</label>
                <br className='mb-2' />
                    <InputText  placeholder="First Name" required />
                    <br />
                    <label className="font-bold ">Family Name</label>
                <br className='mb-2' />
                    <InputText  placeholder="Family Name" required />
                    <br />
                    <label className="font-bold ">Email</label>
                <br className='mb-2' />
                    <InputEmail placeholder="Email Adresse" required />
                    <br />
                    <label className="font-bold mb-2">Password</label>
                    <br className='mb-2' />
                    <InputPassword placeholder="Password" required/>
                    <br />
                    <Button type='submit'>Create Account</Button>
                    <br />
            </div>
            </div>
            </form>
      </div>
      </div>
        
     );
}
 
export default Register;