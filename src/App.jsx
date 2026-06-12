import { useState } from 'react';
import ProfileHeader from './components/ProfileHeader';
import Tabs from './components/Tabs';
import Inventory from './components/Inventory';
import Referral from './components/Referral';
import Tasks from './components/Tasks';
import ChatBubble from './components/ChatBubble';
import './App.css';

const PLAYER = {
  name: 'Player name long',
  coins: 256,
  shovels: 6,
  graves: 100,
  gifts: 6,
  regDate: '12.20.1933',
};

export default function App() {
  const [activeTab, setActiveTab] = useState('Инвентарь');

  return (
    <div className="app">
      <ProfileHeader player={PLAYER} />
      <Tabs active={activeTab} onChange={setActiveTab} />

      <div className="content">
        {activeTab === 'Инвентарь' && <Inventory />}
        {activeTab === 'Рефералка' && <Referral />}
        {activeTab === 'Задания' && <Tasks />}
      </div>

      <ChatBubble
        sender="Player Name"
        message="Hi there! Do you wanna check che wanna chaf wanna..."
      />
    </div>
  );
}