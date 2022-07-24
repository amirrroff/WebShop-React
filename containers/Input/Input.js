const Input = ({type="text" , placeholder , onChange}) => {

    const handleOnChange =(event)=>{
        onChange(event.target.value)
    }
    return ( 
        <div>
            <input type={type} placeholder={placeholder} onChange={handleOnChange} className="p-4 sm:w-5/6 md:w-5/6 mb-4 rounded-2xl mx-auto block w-6/12" />
        </div>
     );
}
 
export default Input;