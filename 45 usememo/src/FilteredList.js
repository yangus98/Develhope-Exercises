import { useMemo } from "react";
export default function FilteredList() {

    let dataUsers = [
        {
          "id" : 1,
          "name" : "Giovanni Palladino",
          "age" : 23 
        },

        {
            "id" : 2,
            "name" : "Michele Bisanzio",
            "age" : 40 
        },

        {
            "id" : 3,
            "name" : "Giulio Cesare",
            "age" : 19
        },

        {
            "id" : 4,
            "name" : "Marzio Ancora",
            "age" : 22
        },

        {
            "id" : 5,
            "name" : "Peter Parker",
            "age" : 10
        },

        {
            "id" : 6,
            "name" : "Tony Stark",
            "age" : 15
        },

        {
            "id" : 7,
            "name" : "Emma Marrone",
            "age" : 18
        }
    ]

    const adults = dataUsers.filter(el => el.age > 17)
    const memoizeAdults = useMemo(() => adults , [adults]);

    return(
        <>
        {memoizeAdults.map((arr) =>
        <div>
            <li>
            <h3>{arr.name}</h3>
            <div>id: {arr.id} - age: {arr.age}</div>
            <hr></hr>
            </li>
        </div>
        )}
        </>
    )
}