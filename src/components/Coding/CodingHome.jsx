import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { chatSession } from "./utils/GeminiAiModel";
import { db } from "./utils/db";
import { Coding } from "./utils/schema";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [language, setLanguage] = useState("");
  const [details, setDetails] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const { user } = useUser();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const inputPrompt = `Coding Language: ${language}, About the question: ${details}, Number of questions: ${number}. Based on this, generate coding questions in which first explain the question in detail and then show some example input and output and then give an input value and also display the expected result like a professional DSA Question in valid JSON format (array of objects with fields: question, example, input, output, concept, difficulty). Show complete questions.`;

    try {
      const result = await chatSession.sendMessage(inputPrompt);
      const rawText = await result.response.text();
      const cleanText = rawText
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();
      const parsedJson = JSON.parse(cleanText);
      setJsonResponse(parsedJson);

      const mockId = uuidv4();

      const resp = await db
        .insert(Coding)
        .values({
          mockId,
          jsonMockResp: cleanText,
          launguage: language,
          details,
          number,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: new Date().toISOString(),
        })
        .returning({ mockId: Coding.mockId });

      if (resp) {
        setOpenDialog(false);
        toast.success("Interview generated successfully!");
        console.log("Interview created with ID:", resp[0]?.mockId);
        navigate(`/coding/${resp[0]?.mockId}`);
      }
    } catch (err) {
      toast.error("Error generating or saving interview:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="p-10 justify-center border rounded-lg hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer"
        onClick={() => setOpenDialog(true)}
      >
        <h2
          style={{
            width: "23rem",
            fontWeight: "700",
            cursor: "pointer",
            fontSize: "1.5rem",
            textAlign: "center",
            padding: "20px 10px",
            border: "2px solid #ccc",
            borderRadius: "8px",
            marginBottom: "2rem",
          }}
        >
          + Add Your Coding Details
        </h2>
      </div>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Choose Language for Interview</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Add details about language and number of questions.
          </Typography>

          <TextField
            label="Desired Language"
            fullWidth
            required
            margin="normal"
            placeholder="e.g. JavaScript, Python, Java, C++"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />

          <TextField
            label="Describe your expectations"
            fullWidth
            required
            multiline
            rows={4}
            margin="normal"
            placeholder="e.g. I want to be asked about data structures, algorithms, and problem-solving skills."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <TextField
            label="Number of Questions"
            fullWidth
            required
            type="number"
            margin="normal"
            placeholder="e.g. 5"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={onSubmit}
            disabled={loading}
            variant="contained"
            color="primary"
          >
            {loading ? (
              <>
                <CircularProgress
                  size={20}
                  color="inherit"
                  sx={{ marginRight: 1 }}
                />
                Generating...
              </>
            ) : (
              "Start Interview"
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddNewInterview;
