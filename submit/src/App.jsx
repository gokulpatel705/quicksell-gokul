import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/HeaderBar/HeaderBarComponent';
import Board from './components/TaskBoard/TaskBoardComponent';
import { status } from './helpers/data';

function App() {
  const [tickets, setTickets] = useState([]); // No TypeScript type annotation
  const [users, setUsers] = useState([]); // No TypeScript type annotation
  const defaultGroup = localStorage.getItem('selectedGroup');
  const defaultOrder = localStorage.getItem('selectedOrder');

  const [group, setGroup] = useState(defaultGroup ? defaultGroup : 'status');
  const [order, setOrder] = useState(defaultOrder ? defaultOrder : 'priority');

  const handleGroupChange = (groupSelected) => {
    setGroup(groupSelected);
    localStorage.setItem("selectedGroup", groupSelected);
  };

  const handleOrderChange = (orderSelected) => {
    setOrder(orderSelected);
    localStorage.setItem("selectedOrder", orderSelected);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await res.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.log("Unable to fetch data! ", error);
    }
  };

  return (
    <div className="App scroll-container">
      <Navbar group={group} order={order} onGroupChange={handleGroupChange} onOrderChange={handleOrderChange} />
      <div className='boards_container'>
        <div className='app_boards'>
          {
            group === 'status' && status.map((opt, id) => (
              <Board order={order} data={opt} key={id} tickets={tickets} users={users} group={group} />
            ))
          }
          {
            group === 'user' && users.map((user, id) => (
              <Board order={order} data={user} key={id} tickets={tickets} users={users} group={group} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
