import React, { useState } from "react";
import "./stars.css";
import { FaStar } from "react-icons/fa";

export default function Stars() {
    const createArray = (length) => [...Array(length)]; //this is a helper function to create Arrays, createArray is going to take in the length, and return an array with that number of items.

    function Star({ selected = false, onSelect }) {
        return (
            <FaStar
                color={selected ? "gold" : "gray"}
                onClick={onSelect}
                style={{ cursor: "pointer" }}
            />
        ); //FaStar is one of many icons that react-icon supplies.
    }

    const [selectedStars, setSelectedStars] = useState(0);
    function StarRating({ numberOfStars = 5 }) {
        //this is going to return a certain number of stars.
        //numberOfStars is the total number of star that we want. '5' is a default property
        return (
            <>
                {
                    createArray(numberOfStars).map((n, i) => (
                        <Star
                            key={i}
                            selected={selectedStars > i}
                            onSelect={() => setSelectedStars(i + 1)}
                        />
                    ))
                    //"selectedStars > i" is going to keep track based on index of how many stars are selected.
                    //to select star, we are useing its index + 1 , brcause Js is zero-based index.
                }

            </>
        );
    }
    console.log('stars is:', selectedStars)

    return (
        <div className="component">
            <StarRating numberOfStars={5} />
        </div>
    );
}
