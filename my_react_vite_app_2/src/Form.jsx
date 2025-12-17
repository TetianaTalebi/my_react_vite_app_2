function Form(){

    function handleFormSubmit(e){
        e.preventDefault();
        console.log("Submitted the form!");
    }

    return (
        <form>
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}
export default Form