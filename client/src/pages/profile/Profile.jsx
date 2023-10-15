import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/386092716_4233557543445387_6004400864635512682_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeFzvq_X7KyU3TmpUxSj7x9zjxa22WgL982PFrbZaAv3zRQVPuzs4EeTx8O3T1tJpz1NViIk8Edf-Cpaqawm-_et&_nc_ohc=BmzJmiIdBFkAX9gToS1&_nc_ht=scontent.fceb2-2.fna&oh=00_AfAoqUMDFQ-BhqgMbw76qENCSunQDuCcUkdSy2AGE8uPfw&oe=652A0195"
          alt=""
          className="cover"
        />
        <img
          src="https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/278724964_3592756774192137_3561195709553018134_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeECJNAUEOUjItdPB7OCPJrfQs7ZiD05_29CztmIPTn_b1BbrL2TlMiTnKlUxadEstVXW0rMxlF0PeE9d2bqC37h&_nc_ohc=Wrz9XOekyVwAX_N6AcX&_nc_ht=scontent.fmnl25-4.fna&oh=00_AfBBnx8UzXGW5TaQwhQ6FN_rTOV64cmJuyEjRuwqHJhJFA&oe=6529B879"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>André Erasmo</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Daanbtanayan</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>TeknoKonek.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
