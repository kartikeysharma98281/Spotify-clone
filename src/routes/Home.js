import { Icon } from "@iconify/react";
import spotify_logo from "../assets/images/spotify_logo_white.svg";
import IconText from "../components/shared/IconText";
import TextWithHover from "../components/shared/TextWithHover";


const focusCardsData = [
  {
    title: "galgknaslg",
    description: "gagngks  knskagn gksn  alnngnn",
    imgUrl: "https://images.unsplash.com/photo-1705280218521-ecab783647a3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "galgknaslg",
    description: "gagngks  knskagn gksn  alnngnn",
    imgUrl: "https://images.unsplash.com/photo-1705260527801-0bfd739f8c57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "galgknaslg",
    description: "gagngks  knskagn gksn  alnngnn",
    imgUrl: "https://images.unsplash.com/photo-1705260527801-0bfd739f8c57?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "galgknaslg",
    description: "gagngks  knskagn gksn  alnngnn",
    imgUrl: "https://images.unsplash.com/photo-1705280218521-ecab783647a3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "galgknaslg",
    description: "gagngks  knskagn gksn  alnngnn",
    imgUrl: "https://images.unsplash.com/photo-1705280218521-ecab783647a3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
]

const Home = () => {
  return (
    <div className="h-full w-full flex">
      <div className="h-full  w-1/5 bg-black flex flex-col justify-between pb-10">
        <div>
          <div className="logoDiv p-6">
            <img src={spotify_logo} alt="spotify logo" width={125} />
          </div>
          <div className="py-5">
            <IconText
              iconName={"material-symbols:home"}
              displayText={"home"}
              active
            />
            <IconText
              iconName={"material-symbols:search-rounded"}
              displayText={"search"}
            />
            <IconText iconName={"icomoon-free:books"} displayText={"Library"} />
          </div>
          <div className="pt-5">
            <IconText
              iconName={"material-symbols:add-box"}
              displayText={"Create Playlist"}
            />
            <IconText
              iconName={"mdi:cards-heart"}
              displayText={"Liked Songs"}
            />
          </div>
        </div>
        <div className="px-5">
          <div className="border border-gray-100 text-white w-2/5 flex px-2 py-1 rounded-full items-center justify-center hover:border-white cursor-pointer">
            <Icon icon="carbon:earth-europe-africa" />
            <div className="ml-2  text-sm font-semibold">English</div>
          </div>
        </div>
      </div>
      <div className="h-full w-4/5 bg-app-black overflow-auto">
        <div className="navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end">
          <div className="w-1/2 flex h-full">
            <div className="w-3/5 flex justify-around items-center">
              <TextWithHover displayText={"Premium"} />
              <TextWithHover displayText={"Support"} />
              <TextWithHover displayText={"Download"} />
              {/* <TextWithHover displayText={"Sign up"} /> */}
              <div className="h-1/2 border-r border-white"></div>
            </div>
            <div className="w-2/5 flex justify-around h-full items-center">
              <TextWithHover displayText={"Sign up"} />
              <div className="bg-white h-2/3 px-8 rounded-full flex items-center justify-center font-semibold cursor-pointer">
                Log in
              </div>
            </div>
          </div>
        </div>
        <div className="content p-8 pt-0">
          <PlayListView titleText="Focus" cardsData={focusCardsData}/>
          <PlayListView titleText="Spotify Playlist" cardsData={focusCardsData}/>
          <PlayListView titleText="Sound of India" cardsData={focusCardsData}/>
        </div>
      </div>
    </div>
  );
};

const PlayListView = ({titleText , cardsData}) => {
  return (
    <div className="text-white mt-8">
      <div className="text-2xl font-semibold mb-5">
        {titleText}
      </div>
      <div className="w-full flex justify-between space-x-4">
        {
          cardsData.map((item)=>{
            return <Card title={item.title} description={item.description} imgUrl={item.imgUrl} />
          })
        }
      </div>
    </div>
  );
};

const Card = ({title , description , imgUrl})=>{
  return (
    <div className="bg-black bg-opacity-40 w-1/5 p-4 rounded-lg">
        <div className="pb-4 pt-2">
          <img className="w-full rounded-md" src={imgUrl}
          alt="label"
           />
        </div>
        <div className="text-white  font-semibold py-3">
          {title}
        </div>
        <div className="text-gray-500 text-sm">
          {description}
        </div>
    </div>
  )
}


export default Home;
