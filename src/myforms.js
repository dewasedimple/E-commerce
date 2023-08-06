export const Myform = (props) =>{
    return(<div>
        <form onSubmit={props.handleSubmit}>
            <input type="text"/>
            <button>submit</button>
        </form>
    </div>)
}

