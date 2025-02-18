import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import EyesOpen from '../assets/eyesOpen.svg';
import EyesClosed from '../assets/eyesClosed.svg';
import { LoginPasswordContext, LoginUsernameContext } from '../App';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '650px',
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    position: 'relative',
  },
};

Modal.setAppElement('#root');

function Settings() {
  const { logUsername, setLogUsername } = useContext(LoginUsernameContext);
  const { logPass, setLogPass } = useContext(LoginPasswordContext);
  const [type1, setType1] = useState(true);
  const [type2, setType2] = useState(true);
  const [type3, setType3] = useState(true);
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [conPass, setConPass] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [statusModal, setStatusModal] = useState('username')

  function validate() {
    let ContextVal = statusModal == 'username' ? logUsername : logPass
    if (!oldPass) {
      alert(`Eski ${statusModal}ni kiriting!`);
      return false;
    }
    if (oldPass !== ContextVal) {
      alert(`Eski ${statusModal}ni notog'ri kiritdingiz!`);
      return false;
    }
    if (!newPass) {
      alert(`Yangi ${statusModal}ni kiriting!`);
      return false;
    }
    if (newPass == ContextVal) {
      alert(`Oldingi ${statusModal} bilan birxil iltimos boshqacha ${statusModal} qo\'ying!`);
      return false;
    }
    if (!conPass) {
      alert(`Yangi ${statusModal}ni tastiqlang!`);
      return false;
    }
    if (newPass !== conPass) {
      alert(`${statusModal}ni notog'ri tastiqladingiz!`);
      return false;
    }
    return true;
  }

  function handleSubmit(event) {
    event.preventDefault();

    let isValid = validate();
    if (!isValid) {
      return;
    }

    let isChange = confirm(`Rostdanham ${statusModal}ni o'zgartirmoqchimisiz?`);
    if (isChange) {
      if (statusModal == 'username') {
        setLogUsername(setNewPass)
      } else {
        setLogPass(setNewPass)
      }
      setOldPass('');
      setNewPass('');
      setConPass('');
      setIsOpen(false);
    }
  }

  function openModal(arg) {
    setIsOpen(true)
    setStatusModal(arg)
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="text-[#0C0E16] select-none">
      <div className="flex gap-[7px] text-[12px]">
        <Link className="hover:underline" to='/'> Bosh sahifa </Link>{' '}
        <span className="text-gray-400">/</span> <p>Sozlamalar</p>
      </div>
      <h1 className="font-bold text-[#0C0E16] text-[32px]">Sozlamalar</h1>
      <button onClick={() => { openModal('username') }} className="bg-[#FCE000] mt-[40px] px-3 py-2 rounded-md w-full max-w-2xl font-medium active:scale-95 transition-[0.3s] cursor-pointer" > Username o'zgartirish </button>
      <button onClick={() => { openModal('password') }} className="bg-[#FCE000] mt-[20px] px-3 py-2 rounded-md w-full max-w-2xl font-medium active:scale-95 transition-[0.3s] cursor-pointer" > Parolni o'zgartirish </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel={`${statusModal} o'zgartirish modal`}>
        <h2 className="mb-4 font-semibold text-[24px] select-none"><span className='capitalize'>{statusModal}</span> o'zgartirish</h2>
        <button onClick={closeModal} className="top-[18px] right-[30px] absolute text-[35px] rotate-[45deg] cursor-pointer select-none" > + </button>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
          <label className="relative flex flex-col gap-[10px]"> Oldingi {statusModal} kiriting:
            <input value={oldPass} onChange={(e) => { setOldPass(e.target.value); }} placeholder={`oldingi ${statusModal}`} type={type1 ? 'password' : 'text'} className="bg-white shadow-sm px-3 py-2 border focus:border-[#FCE000] rounded-md outline-none focus:ring-0 w-full min-w-20 max-w-2xl font-medium text-[#0C0E16] placeholder:text-[#0C0E16] text-sm transition-all[0.4s]" />
            <img onClick={() => { setType1(!type1); }} className="right-[14px] bottom-2 z-10 absolute w-[20px] cursor-pointer" src={type1 ? EyesOpen : EyesClosed} />
          </label>
          <label className="relative flex flex-col gap-[10px]">  Yangi {statusModal}ingizni kiriting:
            <input value={newPass} onChange={(e) => { setNewPass(e.target.value); }} placeholder={`yangi ${statusModal}`} type={type2 ? 'password' : 'text'} className="bg-white shadow-sm px-3 py-2 border focus:border-[#FCE000] rounded-md outline-none focus:ring-0 w-full min-w-20 max-w-2xl font-medium text-[#0C0E16] placeholder:text-[#0C0E16] text-sm transition-all[0.4s]" />
            <img onClick={() => { setType2(!type2); }} className="right-[14px] bottom-2 z-10 absolute w-[20px] cursor-pointer" src={type2 ? EyesOpen : EyesClosed} />
          </label>
          <label className="relative flex flex-col gap-[10px]"> Yangi {statusModal}ingizni tastiqlang:
            <input value={conPass} onChange={(e) => { setConPass(e.target.value); }} placeholder={`${statusModal}ni tastiqlash`} type={type3 ? 'password' : 'text'} className="bg-white shadow-sm px-3 py-2 border focus:border-[#FCE000] rounded-md outline-none focus:ring-0 w-full min-w-20 max-w-2xl font-medium text-[#0C0E16] placeholder:text-[#0C0E16] text-sm transition-all[0.4s]" />
            <img onClick={() => { setType3(!type3); }} className="right-[14px] bottom-2 z-10 absolute w-[20px] cursor-pointer" src={type3 ? EyesOpen : EyesClosed} />
          </label>
          <button type="submit" className="bg-[#FCE000] mt-[10px] px-3 py-2 rounded-md w-full max-w-2xl active:scale-95 transition-[0.3s] cursor-pointer" > Yangilash </button>
        </form>
      </Modal>
    </div>
  );
}

export default React.memo(Settings);