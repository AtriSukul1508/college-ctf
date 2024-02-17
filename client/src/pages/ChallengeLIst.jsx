import { Done } from "@mui/icons-material";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useAuthContext } from "../hooks/useAuthContext";
import apiConfig from "../api.config";
const ChallengeList = ({ challenge,index }) => {
    const [open, setOpen] = React.useState(false);
    const [challengeId,setChallengeId] = React.useState(challenge._id);
    const [answerInput,setAnswerInput] = React.useState('');
    const [solvedBy,setSolvedBy] = useState(challenge.solvedBy);
    const [isFlagValid,setIsFlagValid] = useState(null);
    const [isAlreadySolved,setIsAlreadySolved] = useState(false);
    const {user} = useAuthContext();
    console.log(answerInput,challenge)
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    // const filteredChallenges = challenges.filter(
    //     (challenge) => challenge.category === category
    // );
    React.useEffect(() => {
        if(solvedBy.includes(user.user._id)){
            setIsAlreadySolved(true);
            
        }
    

    }, [])
    

    const validateFlag = async (event) => {
        event.preventDefault();
        try {
            const resp = await fetch(apiConfig.URL + '/challengeapi/solution', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    "Content-type": "application/json",
                },
                body: JSON.stringify({challengeId,answerInput})
            })
            const data = await resp.json();
            if (!resp.ok) {
                console.log('kichu ekta',resp)
                // setEmptyFields(data.emptyFields)
            }
            if (resp.ok) {
                console.log(data)
                setIsFlagValid(data.correct);
                // setOpen(false);
                if(data.correct){
                    window.location.reload();
                }
                // console.log(isFlagValid);
            }
        } catch (err) {
            console.log(`Error while sending answer - ${err}`);
        }
    }

    const styles = theme => ({
        input: {
            border: '#2fbc1d'
        }
    });

    return (
            <div>
                {/* <h2 className="text-white my-4">{category}</h2> */}
                {/* <ul > */}
                    {/* {filteredChallenges.map((challenge, index) => ( */}
                        <>
                        <li key={index} className={`flex flex-col min-w-40 justify-center items-center p-4 rounded-md bg-clip-padding backdrop-filter ${isAlreadySolved?'bg-[#2fbc1d] bg-opacity-50':'bg-gray-400 bg-opacity-10'} backdrop-blur-sm border border-gray-100`}  onClick={isAlreadySolved ?undefined :handleClickOpen}>
                            <h3 className="border-none flex items-center gap-2">{challenge.name} {isAlreadySolved?<Done/>:''} </h3>
                            <p>{challenge.score}</p>
                        </li>

                            <Dialog 
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
          style:{
            borderRadius:'0px',
            backgroundColor:'rgba(255,255,255,0.4)',
            backdropFilter:'blur(10px)'
          }
        }}
      >
        <DialogTitle  sx={{fontSize:'1.4rem',fontWeight:'bold',textAlign:'center'}}><span className="bg-[#2fbc1d] px-2 font-extrabold text-[2rem] text-black border-r-2 border-black">{challenge.name}</span> <span className=" text-white"> {solvedBy.length} solves</span></DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <DialogContentText sx={{color:'#fff'}}>
            {challenge.description}
          </DialogContentText>
          <DialogContentText sx={{fontSize:'1.4rem',fontWeight:'bold',display:'flex',gap:'1rem'}}>
            {challenge.file.map((link,index)=>(<a href={link} target="_blank" className="text-blue-400 underline">File{index+1}</a>) )}
          </DialogContentText>
          <div className="flex items-center gap-2 mt-2">

          <input
            required
            // margin="dense"
            id="flag"
            name="flag"
            // label="SLAY{Flag}"
            placeholder="Flag"
            type="text"
            onChange={(e)=>{setAnswerInput(e.target.value)}}
            style={{ borderRadius:'0px',border:'2px solid #2fbc1d',height:'40px',outline:'none',background:'transparent'}}
            className="focus:outline-none focus:border-2"
            // fullWidth
            // sx={{borderRadius:'0px',paddingLeft:'5px'}}
          />
          <Button type="submit" onClick={validateFlag} className="text-white bg-[#2c7420] border-none p-2 items-center" sx={{color:'white',background:'#2fbc1d',border:'none',padding:'8px',"&:hover": {backgroundColor: "#2c7420"}}} >Submit</Button>
          </div>
          {isFlagValid===false && <DialogContentText sx={{color:'#f60c0ccc',fontWeight:'bold',fontSize:'1.2rem'}}>
            Invalid Flag
          </DialogContentText>}
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
                            {/* <p>File: {challenge.file}</p> */}
                            {/* <p>Input: {challenge.input}</p>
            <p>Score: {challenge.score}</p> */}</>
                    {/* ))} */}
                {/* </ul> */}

            </div>
    );
};

export default ChallengeList;