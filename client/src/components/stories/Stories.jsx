import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"
import PPic from "../../assets/profile.jpg";

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Khent Desierto",
      img: "https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/283095174_1877945132414647_7667830361863221389_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeEaOGGTtZY-6EHfJZSb_bCEMRbsBcBtHO0xFuwFwG0c7VsDvpLJjdlWwy8vK4VAvCJ6tFP7l_XrFMB7LpEgPN0I&_nc_ohc=7KjjjYctaSIAX_jdpkD&_nc_ht=scontent.fmnl25-4.fna&oh=00_AfBRIJaFkbz-NJpm7NJBZwZ0mtIElsotDcUvC6dRdGBluQ&oe=652918D9",
    },
    {
      id: 2,
      name: "Vanessa Cosep",
      img: "https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/355363041_3605233216466968_1452817038607030893_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_eui2=AeF7rZrmvGPKk7ZlYW_NjNA6cg_HUyywj1RyD8dTLLCPVPYuZoUjqo63PTSTApHNyIUHcFB88E0B1bi4wm8lCyb4&_nc_ohc=feny0doerigAX9B5nPr&_nc_ht=scontent.fmnl25-4.fna&oh=00_AfBUXgJ3hZnsIS9sPNIzf_kR8SI0rW6h0EOs4GkHzzhw_g&oe=652AA96E",
    },
    {
      id: 3,
      name: "John Lester Pansoy",
      img: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/346789210_112614178484913_782258326635256979_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGZlOyNRSNa7JDozc2umnXeePf8JN6mIJt49_wk3qYgm_9EJ41oMBcBrNjUwGSPI20G8bKJ88eRwpAX7PHt8DCi&_nc_ohc=IVxHfzRUj6oAX9UoltT&_nc_ht=scontent.fceb2-1.fna&oh=00_AfDln9ARlEFi__dr2wmioTk0Gk64CltoUbpEauije0mTgQ&oe=652ABA35",
    },
    {
      id: 4,
      name: "Jam Cotejo",
      img: "https://scontent.fceb2-1.fna.fbcdn.net/v/t1.6435-9/132588361_3702751633118989_7612177087339102004_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeHonttw4RbK0SdhiO8JJT60HZNFP2vvBIEdk0U_a-8EgauigSPVOJ0R2dyqIKii0Vy8_adL9raRuwnQgLC8VwR9&_nc_ohc=4qPEikcK2EUAX_EezOe&_nc_ht=scontent.fceb2-1.fna&oh=00_AfB_nJ-ryjgBQYMVu8gJGGye5LUCs8sAO5HxaCEJ-DMiUQ&oe=654C86EA",
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src={PPic} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories