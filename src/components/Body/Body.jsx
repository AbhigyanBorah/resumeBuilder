import React, { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import { Button } from '@mui/material';
import Modal from '@mui/material/Modal';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

import "@fontsource/bevan"
import styles from "./Body.module.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function Body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
  const sections = {
    profile: "Profile",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    skills: "Skills",
    summary: "Summary",
    other: "Other",
  };
  const resumeRef = useRef();
  const resumeRef2 = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.profile]: {
      id: sections.profile,
      sectionTitle: sections.profile,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>
        <span>Let's build your</span>
        <span>Resume !</span>
      </p>
      <div className={styles.toolbar}>
        <div className={styles.resumeButtons}>
          <Button color='secondary' size='large' variant='outlined' onClick={handleOpen} sx={{
            ':hover': {
              bgcolor: 'secondary.dark',
              border: '2px solid',
              color: 'white',
            },
            fontWeight: '700',
            border: '2px solid'
          }} endIcon={<VisibilityIcon />}>Preview</Button>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Resume
              ref={resumeRef}
              sections={sections}
              information={resumeInformation}
              activeColor={activeColor}
            />
          </Box>
        </Modal>
        <ReactToPrint
          trigger={() => {
            return (
              <Button color='primary' size='large' variant='outlined' sx={{
                ':hover': {
                  bgcolor: 'primary.dark',
                  border: '2px solid',
                  color: 'white',
                },
                fontWeight: '700',
                border: '2px solid'
              }} endIcon={<DownloadIcon />}>Download</Button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
              ref={resumeRef2}
              sections={sections}
              information={resumeInformation}
              activeColor={activeColor}
            />

      </div>
    </div>
  );
}

export default Body;
