import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Andre Erasmo",
      userId: 1,
      profilePic:
        "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/278724964_3592756774192137_3561195709553018134_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeECJNAUEOUjItdPB7OCPJrfQs7ZiD05_29CztmIPTn_b1BbrL2TlMiTnKlUxadEstVXW0rMxlF0PeE9d2bqC37h&_nc_ohc=Wrz9XOekyVwAX_N6AcX&_nc_ht=scontent.fceb2-2.fna&oh=00_AfBh-s3yy0GeOOlN_Rt65Lye4YPpQWTAmvPX-bv6lthNfg&oe=6529B879",
      desc: "Mga Maangas Kong Kaibigan",
      img: "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/386092716_4233557543445387_6004400864635512682_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeFzvq_X7KyU3TmpUxSj7x9zjxa22WgL982PFrbZaAv3zRQVPuzs4EeTx8O3T1tJpz1NViIk8Edf-Cpaqawm-_et&_nc_ohc=BmzJmiIdBFkAX9gToS1&_nc_ht=scontent.fceb2-2.fna&oh=00_AfAoqUMDFQ-BhqgMbw76qENCSunQDuCcUkdSy2AGE8uPfw&oe=652A0195",
    },
    {
      id: 2,
      name: "Andre Erasmo",
      userId: 2,
      profilePic:
        "https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/278724964_3592756774192137_3561195709553018134_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeECJNAUEOUjItdPB7OCPJrfQs7ZiD05_29CztmIPTn_b1BbrL2TlMiTnKlUxadEstVXW0rMxlF0PeE9d2bqC37h&_nc_ohc=Wrz9XOekyVwAX_N6AcX&_nc_ht=scontent.fceb2-2.fna&oh=00_AfBh-s3yy0GeOOlN_Rt65Lye4YPpQWTAmvPX-bv6lthNfg&oe=6529B879",
      desc: "LMSC!",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
