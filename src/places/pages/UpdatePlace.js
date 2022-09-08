import React from "react";
import { useParams } from "react-router-dom";

import "./PlaceForm.css";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/Util/Validator";

const Dummy_Places = [
  {
    id: "p1",
    title: "Shaniwar Wada",
    description: "18th - century Peshwa fort with large gate",
    imageUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRfomVftuHoWomlN8tvc565eh7ME0MGFVlb9IZdy24z6YT_AYekwrO5zFg0TPJ1hybyiB99Zdie13GwcUouvLF3lA",
    address: "Shaniwar Peth, Pune, Maharashtra 411030",
    location: {
      lat: 18.5181,
      lng: 73.8533,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Neon ",
    description: "One of the most famous sky scrapers in the world",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/375px-Empire_State_Building_%28aerial_view%29.jpg",
    address: "20 W 34th St, New York NY 1001",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = Dummy_Places.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could Not find Place!</h2>
      </div>
    );
  }
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText = "Please enter a valid title"
        onInput = {() => {}}
        value= {identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText = "Please enter a valid description"
        onInput = {() => {}}
        value= {identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled ={true}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
