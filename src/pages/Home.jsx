import React, { useState } from 'react';
import Modal from 'react-modal';
import plusBtn from '../assets/plusBtn.svg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '500px',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    position: 'relative',
  },
};

Modal.setAppElement('#root');

function Home() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setUsername('');
    setEmail('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Username: ${username}, Email: ${email}`);
    closeModal();
  }

  return (
    <div className='w-full max-w-[1200px]'>
      <div className='flex justify-between w-full'>
        <h1 className='font-bold text-[#0C0E16] text-[32px]'>Haydovchilar</h1>
        <button onClick={openModal} className="hidden md:flex items-center gap-[8px] bg-[#FCE000] p-[6px] pr-[14px] rounded-[24px] text-[12px] text-white active:scale-95 transition-[0.3s] cursor-pointer">
          <img src={plusBtn} alt="New" /> Yangi Haydovchi
        </button>
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Yangi Haydovchi Qo'shish">
        <h2 className="mb-4 font-semibold text-[24px]">Yangi Haydovchi Qo'shish</h2>
        <button onClick={closeModal} className="top-[18px] right-[30px] absolute text-[35px] rotate-[45deg] cursor-pointer">+</button>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
          <label className="flex flex-col gap-[5px]">
            Username:
            <input value={username} onChange={(e) => setUsername(e.target.value)} className="px-3 py-2 border rounded-md outline-none" placeholder="Username kiriting" required />
          </label>
          <label className="flex flex-col gap-[5px]">
            Email:
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="px-3 py-2 border rounded-md outline-none" placeholder="Email kiriting" type="email" required />
          </label>
          <button type="submit" className="bg-[#FCE000] mt-[10px] px-3 py-2 rounded-md w-full active:scale-95 transition-[0.3s] cursor-pointer">Qo'shish</button>
        </form>
      </Modal>
    </div>
  );
}

export default React.memo(Home);
