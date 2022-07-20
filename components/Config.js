

const Config = ({handleClose , children}) => {
    
    return ( 
        <div className="send-backdrop">
            <div className="send">
                {children}
                <button onClick={handleClose} className="bg-gray-100 px-4 rounded-md">close</button>
            </div>
        </div>
     );
}
 
export default Config;