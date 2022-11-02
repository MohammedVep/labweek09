function StudentInfo(props) {
    return (
        <>
            <h3>{props.id}</h3>
            <h4>{props.name}</h4>
            <h5>{props.college}</h5>
        </>
    )
}
export default StudentInfo