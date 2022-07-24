const Button = ({children, type="button"}) => {
    return ( 
        <div>
            <button type={type} className="border-1 bg-cyan-500 rounded-xl h-8 text-white hover:bg-cyan-700 mb-8 sm:w-5/6 md:w-5/6 mx-auto w-8/12" >
                {children}
            </button>
        </div>
     );
}
 
export default Button;