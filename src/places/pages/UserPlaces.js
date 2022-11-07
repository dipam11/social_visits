import React from "react";
import { useParams } from "react-router-dom";

import PLaceList from "../components/PLaceList";

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

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = Dummy_Places.filter(place => place.creator === userId);
  return <PLaceList items={loadedPlaces} />;
};

export default UserPlaces;
