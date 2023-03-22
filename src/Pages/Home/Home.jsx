import React from "react";
import "./home.css";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <Navbar />
      <h1>Welcome {user.name}</h1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Facilisi morbi tempus
      iaculis urna id volutpat lacus laoreet non. Imperdiet massa tincidunt nunc
      pulvinar sapien et. Laoreet non curabitur gravida arcu. Sem viverra
      aliquet eget sit amet tellus cras. Elit sed vulputate mi sit amet mauris
      commodo quis imperdiet. At varius vel pharetra vel turpis. Porta non
      pulvinar neque laoreet suspendisse interdum consectetur libero. Eget duis
      at tellus at. Blandit aliquam etiam erat velit scelerisque in. Arcu felis
      bibendum ut tristique et egestas quis ipsum suspendisse. Id diam vel quam
      elementum pulvinar. Eu consequat ac felis donec et odio. Risus commodo
      viverra maecenas accumsan. Scelerisque in dictum non consectetur a erat
      nam. Quisque id diam vel quam elementum pulvinar. Porttitor lacus luctus
      accumsan tortor posuere ac ut. Tincidunt vitae semper quis lectus. Lectus
      sit amet est placerat in.
    </div>
  );
};

export default Home;
