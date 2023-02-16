import Card from "../Cards/Card";


function UsersList() {

    const users = [
        {
            id: 1,
            name: "Kamal",
            age: 30,
        },
        {
            id: 2,
            name: "Jamal",
            age: 30,
        },
        {
            id: 3,
            name: "Yamal",
            age: 35,
        },
    ];
    
    return(
        <>
            <Card name="Ibrohim"/>
        </>
    )
}

export default UsersList;