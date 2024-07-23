import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiTwotoneFire } from "react-icons/ai";
import { IoMusicalNoteSharp } from "react-icons/io5";
import { SiYoutubegaming } from "react-icons/si";
import { TfiCup } from "react-icons/tfi";
import { Tooltip } from "react-tooltip";


const NavItem = ({ icon: Icon, title, active, onClick }) => {
    return (
      <li 
        data-tooltip-id={title}
        className={`text-base font-medium px-5 py-3 flex items-center gap-5 rounded-lg capitalize cursor-pointer ${active ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-800'}`}
        onClick={onClick}
      >
        <Icon className='text-2xl' />
        {title}
        <Tooltip id={title} content={title} className="bg-red-500" />
      </li>
    );
  };

const navItems = [
    {id: 1, icon: IoMdHome, title: 'Home' },
    { id: 2, icon: SiYoutubeshorts, title: 'Shorts' },
    { id: 3, icon: MdOutlineSubscriptions, title: 'Subscriptions' },
  ];

const youList = [
    { id: 4, icon: GoHistory, title: 'History' },
    { id: 5, icon: MdOutlinePlaylistPlay, title: 'playlist' },
    { id : 6, icon: MdOutlineWatchLater, title: 'watch later' },
    { id: 7, icon: AiOutlineLike, title: 'liked video' },
  ];

  const exploreList = [
    { id: 8, icon:AiTwotoneFire, title: 'Trending' },
    { id: 9, icon:IoMusicalNoteSharp, title: 'Music' },
    { id: 10, icon:SiYoutubegaming, title: 'Gaming' },
    { id: 11, icon:TfiCup, title: 'Sport' },
  ]

  const moreList = [
    { id: 12, icon:SiYoutubegaming, title: 'youtube premium' },
    { id: 13, icon:SiYoutubegaming, title: 'youtube music' },
    { id: 14, icon:SiYoutubegaming, title: 'youtube kids' },
  ]

  export { navItems, NavItem, youList, exploreList }