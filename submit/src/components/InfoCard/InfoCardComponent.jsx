// Card.jsx
import React from 'react';
import './InfoCardStyles.css';
import { FaCircle } from "react-icons/fa";
import UserIcon from '../ProfileIcon/ProfileIconComponent';

const Card = ({ ticket, user, icon, statusIcon, statusColor, bgColor }) => {
    const userInitials = user?.name.split(' ').map(word => word.charAt(0)).join('');

    const truncateTitle = (title) => {
        const words = title.split(' ');
        if (words.length > 7) {
            return words.slice(0, 6).join(' ') + '...';
        }
        return title;
    };

    return (
        <div className='card'>
            <div className='card_header'>
                <p className='card_id'>{ticket?.id}</p>
                {user && <UserIcon initials={userInitials} available={user?.available} bgColor={bgColor} />}
            </div>
            <div className='card_info'>
                <span style={{ color: statusColor }}>{statusIcon}</span>
                <p>{truncateTitle(ticket?.title)}</p>
            </div>
            <div className='card_footer'>
                {icon && <div>{icon}</div>}
                <div className="card_tag">
                    <FaCircle />
                    {ticket?.tag.map((tg, id) => (
                        <p key={id}>{tg}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;

// import './InfoCardStyles.css'

// import { FaCircle } from "react-icons/fa";
// import UserIcon from '../ProfileIcon/ProfileIconComponent';
// const Card = ({ ticket, user, icon, statusIcon, statusColor, bgColor }) => {
//     const userIntials = user?.name.split(' ').map(word => word.charAt(0)).join('');
//     return (
//         <div className='card'>
//             <div className='card_header'>
//                 <p className='card_id'>{ticket?.id}</p>
//                 {user && <UserIcon intials={userIntials} available={user?.available} bgColor={bgColor} />}
//             </div>
//             <div className='card_info'>
//                 <span style={{ color: statusColor }}>{statusIcon}</span>
//                 <p>
//                     {ticket?.title}
//                 </p>
//             </div>
//             <div className='card_footer'>
//                 {icon && <div>
//                     {icon}
//                 </div>}
//                 <div className="card_tag">
//                     <FaCircle />
//                     {
//                         ticket?.tag.map((tg, id) => (
//                             <p key={id} >{tg}</p>
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Card