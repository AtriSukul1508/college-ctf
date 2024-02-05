import { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import Layout from '../components/Layout/Layout'
import ParticlesBackground from "../components/Layout/ParticlesBackground";
import { MaximizeRounded } from "@mui/icons-material";


export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <ParticlesBackground/>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "375px",
          mx: "auto",
          p: 2,
          border: "2px solid  #000000",
          borderRadius: "12px",
          boxShadow: 1,
          backgroundColor:"white"
        }}
      >
        <Typography variant="h4" align="center" mb={2} sx={{color:"#ff004e"}}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            // fullWidth

            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            color="primary"
            // fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button
            fullWidth
            type="submit"
            sx={{
              mt: 2,
              backgroundColor: "#000",
              color: "#fff",
              transition: "0.4s",
              "&:hover": {
                transition: "0.4s",
                backgroundColor: "#111",
              },
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
    </Layout>
  );
}