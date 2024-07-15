function FormList() {
    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <form>
                <input type="text" name="toDo" id="toDo" onChange={handleChange} />
            </form>
        </div>
    )
}

export default FormList