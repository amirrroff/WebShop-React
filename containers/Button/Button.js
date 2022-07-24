const Button = ({children, type="button",className}) => {
    return ( 
        <div>
            <button type={type} className={className} >
                {children}
            </button>
        </div>
     );
}
 
export default Button;