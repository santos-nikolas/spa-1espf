import { useNavigate } from "react-router-dom";

export default function Home() {
  document.title = "HOME";
  
  if(sessionStorage.getItem("token-user")){
  return (
    <div>
      <h1>Home</h1>
      <h2>Grande Oferta!</h2>

      <div>
        <figure>
          <img src="/black-home_640x360.png" alt="Logo"/>
          <figcaption></figcaption>
        </figure>
      </div>

    </div>
  )}else{
    window.location = "/login";
    
  }
}
