import React, {useEffect,useState} from 'react';

export default function Register() {

  const hidden = 'flex flex-col justify-center items-center absolute w-full h-5/6 border'
  const show = 'hidden'

  const [styleComponent , setStyleComponent] = useState(show)

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setStyleComponent(hidden)
    },5000);
  
  },[])

  const close = () => {
    setStyleComponent(show)
  }
  
  return (
    <div className={styleComponent}>
      <button className='text-white' onClick={close}>
          close
      </button>
      <div className='bg-zinc-900 w-3/12 h-5/6 border'>
        <div>
          <form className='flex flex-col justify-center items-center gap-2'>
            <input />
            <input />
            <button>

            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

// import React, {useEffect,useState} from 'react';
// import Slide from '@mui/material/Slide';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// const icon = (
//   <Modal
//   open={open}
//   // onClose={handleClose}
//   aria-labelledby="modal-modal-title"
//   aria-describedby="modal-modal-description"
//   >
//   <Box sx={style}>
//     hi
//   </Box>
// </Modal>
// );

// export default function Register() {

//   const [checked,setChecked] = useState(false);
//   const [open,setOpen] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setChecked(true)
//     },5000);
//   },[])

//   return (
//     <>
//       <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
//         {/* <Modal
//           open={true}
//           // onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//           >
//           <Box sx={style}>
//             hi
//           </Box>
//         </Modal> */}

//         hiiiiiiiiii
//       </Slide>
//     </>
//   )
// }

