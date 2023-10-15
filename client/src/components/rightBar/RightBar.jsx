import "./rightBar.scss";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/312257846_10114737758665291_6588360857015169674_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGBZeb5K4TpwXV6K9TUa4eqb3tzEriMmA5ve3MSuIyYDuQonVl4YkxTdWGFvRMbMVkVqTIqp0k6nFieBcpEplkY&_nc_ohc=zI1yHdQQmz8AX978jjF&_nc_ht=scontent.fceb1-2.fna&oh=00_AfABhItGfFTeRrN8epSB9P0OE8lcFqD9Xk8PZ-qCyRPejw&oe=6530136E"
                alt=""
              />
              <span>Mark Zuckerberg</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/354590048_6677174192402558_1668432331649705545_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFVMlwJC_WQQ_mMJmAxkmeNP6y6j_fw_Ik_rLqP9_D8icfuIXScM1gs626euACF8xLkyOyK2n5udthq_Xc0szCU&_nc_ohc=V8DngHj7m1AAX_YnRl6&_nc_ht=scontent.fceb1-2.fna&oh=00_AfDlRnHQ0qPMF143TcHm60TDWC_lzXZkZM_4OTDwU1SXWQ&oe=652E9AA3"
                alt=""
              />
              <span>John Embate</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/367681314_946150133126320_819487847393212774_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH9Mdg_t89TJbD5pJwkxCElydOlD5ZeyQrJ06UPll7JCnRJfuoTPeJ5dlxHN8Mk0Q5cGGlwHPquxy_0plTJV5Zw&_nc_ohc=ow_KXEyh3SUAX-TEbn0&_nc_ht=scontent.fceb1-3.fna&oh=00_AfBpubPnXHd_Jl427PRk8JqebJtgOib5yPYfo74wVMkaiA&oe=6530368B"
                alt=""
              />
              <p>
                <span>Aubrey Pagdalian</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/239867081_690255868597800_7920014300264565006_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFvlyXDHRpFOAxZsnkpG9bObaqRc9GMnJZtqpFz0YycliKJzgEZ7p3VIT3Lkw7zjduA8ITd6CGKZTT7Is-LqgGa&_nc_ohc=NHIYOQysR7sAX_f_j5W&_nc_ht=scontent.fceb1-1.fna&oh=00_AfCtubFVK3A5mSViBbOR3dStbLCfipbi15FuJHEOHgg9mw&oe=652EC270"
                alt=""
              />
              <p>
                <span>Mark Jhon Comaingking</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/344742946_2106579389551483_2610917201948647038_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGz6JbWKtgaiHbxzBqgROWkvknzgcLJSp6-SfOBwslKnrX_li5PfumeCuHEk9ePsqC5_TS1xHp8XG5cqMRqL2tG&_nc_ohc=Z9tJHvvangkAX9IBomG&_nc_ht=scontent.fceb1-1.fna&oh=00_AfAjxHNc9EpXLvNUCBRRtlM_tYtkazHM_w6zVyp_fDSUGg&oe=652F1C41"
                alt=""
              />
              <p>
                <span>Angel Rose Comajes</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/277095660_5107139099366724_4289601699008158440_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGF2MxFdyIV2s0IMqzalDR_ZOuMmqZuzUNk64yapm7NQ7TIPWnSkUAIztRPS6Pwa79mHFVuoQBulxcpyz3Mh80Q&_nc_ohc=d5BNCnE_faYAX-gtr4Y&_nc_ht=scontent.fceb1-3.fna&oh=00_AfCBnBR3k_lHgfyhO0xpsfOXxd02MEdM3Jz8-XpgEayjyQ&oe=65300487"
                alt=""
              />
              <p>
                <span>Kristian Raganas</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fceb1-1.fna.fbcdn.net/v/t39.30808-6/344742946_2106579389551483_2610917201948647038_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGz6JbWKtgaiHbxzBqgROWkvknzgcLJSp6-SfOBwslKnrX_li5PfumeCuHEk9ePsqC5_TS1xHp8XG5cqMRqL2tG&_nc_ohc=Z9tJHvvangkAX9IBomG&_nc_ht=scontent.fceb1-1.fna&oh=00_AfAjxHNc9EpXLvNUCBRRtlM_tYtkazHM_w6zVyp_fDSUGg&oe=652F1C41"
                alt=""
              />
              <div className="online" />
              <span>Angel Rose Comajes</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/355846535_3605233219800301_4632980754228916372_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF1CQWvg8eTR_MPfKLNswHUPRDgs1_z9-c9EOCzX_P353tMZgruzh2_85nJETLdl7YSCERIxgubM-wIGOKEBnde&_nc_ohc=xQjjzuJ-EicAX_6mH_I&_nc_ht=scontent.fceb1-2.fna&oh=00_AfDJVkzzxJbDFuKwQRt_5tLhKAeKrASbz6sns0GNTg4ZXw&oe=652F920B"
                alt=""
              />
              <div className="online" />
              <span>Vanessa Cosep</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/283095174_1877945132414647_7667830361863221389_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEaOGGTtZY-6EHfJZSb_bCEMRbsBcBtHO0xFuwFwG0c7VsDvpLJjdlWwy8vK4VAvCJ6tFP7l_XrFMB7LpEgPN0I&_nc_ohc=P8X_KcCMkYQAX_cNPE8&_nc_ht=scontent.fceb1-2.fna&oh=00_AfDF6udCHI450kx_U9zFh1v8d1XrC1k0TVcWfQYvH0YZ1A&oe=652F0799"
                alt=""
              />
              <div className="online" />
              <span>Khent Desierto</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fdvo1-2.fna.fbcdn.net/v/t1.6435-9/132588361_3702751633118989_7612177087339102004_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeHonttw4RbK0SdhiO8JJT60HZNFP2vvBIEdk0U_a-8EgauigSPVOJ0R2dyqIKii0Vy8_adL9raRuwnQgLC8VwR9&_nc_ohc=StMlCVJxksQAX-w-O8M&_nc_ht=scontent.fdvo1-2.fna&oh=00_AfBYf6iJmU7CqRIGmVWRECC_0Jfn6SfUQElVgBPpyjI3EA&oe=6552052A"
                alt=""
              />
              <div className="online" />
              <span>Jam Cotejo</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-1/346789210_112614178484913_782258326635256979_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGZlOyNRSNa7JDozc2umnXeePf8JN6mIJt49_wk3qYgm_9EJ41oMBcBrNjUwGSPI20G8bKJ88eRwpAX7PHt8DCi&_nc_ohc=o41g1q9D7w8AX9BeWzT&_nc_ht=scontent.fceb1-3.fna&oh=00_AfAhm7s3ayyE6eXGp5NxZHCiQVDYn9mpXggVT7gwRGWo6g&oe=652FF897"
                alt=""
              />
              <div className="online" />
              <span>John Lester Pansoy</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fceb1-1.fna.fbcdn.net/v/t1.6435-9/196468884_646374242985963_2630365311574076766_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeExYluP7adhFlISepRNgHOYNakDEk599oE1qQMSTn32gRgzLQbxhGKTBxY1Vjaj2hR5_aQsbQF1BUfNRTtduhHv&_nc_ohc=En6UzHXW67EAX9dyVqt&_nc_ht=scontent.fceb1-1.fna&oh=00_AfBXNQpNaeW_oslOZn5Us-lBs-MODPkueZd7Iq5ihpoaRA&oe=655202A9"
                alt=""
              />
              <div className="online" />
              <span>Mark Jhon Comainking</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/355086540_6355564227864301_6362806547710179108_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGQER0Zym0VBjEbQNp1cz02yCAXI3bYW0zIIBcjdthbTLkOltMFuyYqnpgVhIzjYyH2RPT52Gm5GtyJXmL0uVlE&_nc_ohc=u5Di9zFBI8gAX_UvAVh&_nc_ht=scontent.fdvo1-1.fna&oh=00_AfD09E7JY3ZeZYby4Z9v1dNr8W4bJhs99jIzIf0ZaZMQcg&oe=652F0A9B"
                alt=""
              />
              <div className="online" />
              <span>Jermyn Josh Kaquilala</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fdvo1-1.fna.fbcdn.net/v/t39.30808-6/339451926_165523976029036_6767963034282446909_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEUCSt5yPBz1jgLjHJVhac1FvEW1LLdxi8W8RbUst3GL_7EclBXXFwhnW31osylviFqET5nSlFDUaC7w79pItEJ&_nc_ohc=xJX5SvmxMzwAX-RcEGs&_nc_oc=AQl0VLv6_V_EQCp64FIiqFijvi3Tgofz2_GFbx_KBQNtO9QQAsH8-j8p-BD_HyObrGAcCFtPc1cOCxWyB6V5Ppri&_nc_ht=scontent.fdvo1-1.fna&oh=00_AfBGac5e6-iFtbPiDxtAQbw6-KkViyfTMHG_xmNXHvOHOA&oe=652FAEDE"
                alt=""
              />
              <div className="online" />
              <span>James Kenneth Retubado</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/354590048_6677174192402558_1668432331649705545_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFVMlwJC_WQQ_mMJmAxkmeNP6y6j_fw_Ik_rLqP9_D8icfuIXScM1gs626euACF8xLkyOyK2n5udthq_Xc0szCU&_nc_ohc=V8DngHj7m1AAX_YnRl6&_nc_ht=scontent.fceb1-2.fna&oh=00_AfDlRnHQ0qPMF143TcHm60TDWC_lzXZkZM_4OTDwU1SXWQ&oe=652E9AA3"
                alt=""
              />
              <div className="online" />
              <span>John Embate</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/356025963_6344993138952987_8341755211362946945_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHHlfZS95v1nzyh4KQtqdQjpXG8SwlJRhilcbxLCUlGGNl63nhbOSVY_BVI5PagN8oTBEk6SYIX1v2CyozWybN3&_nc_ohc=DcVbhoFPsUAAX9HSLlo&_nc_ht=scontent.fceb1-2.fna&oh=00_AfCtS6fcBWI13aC72kdUuIP32b0-YLpQVbbJcBLS9SBycg&oe=652E9B7B"
                alt=""
              />
              <div className="online" />
              <span>Ronerr Villacarlos</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://scontent.fceb1-2.fna.fbcdn.net/v/t39.30808-6/313084525_3348382395439056_2772753504124357660_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGcmSZCXYhAQFRgw9-sn5VdUSXPCY9FCyBRJc8Jj0ULIEkdZz0zHjqShDctZCuJonaIGx27mJuvBeT-O1zp7A8_&_nc_ohc=tQ69BcsY5J4AX-XPRAv&_nc_ht=scontent.fceb1-2.fna&oh=00_AfBlBGaH9l8QrwvtZQvPmArfypFts-GKbuRajujkyItqxg&oe=652F3ADB"
                alt=""
              />
              <div className="online" />
              <span>Angel Flores Arlene</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
