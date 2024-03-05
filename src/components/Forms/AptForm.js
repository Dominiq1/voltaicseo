import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  Checkbox,
  Alert,
  Paper,
} from '@mui/material';
import { useMutation } from '@apollo/client';
import { PUSH_NEW_COMPANY_LEAD } from '../../graphql/mutations/CRM.graphql';

const AptForm = () => {
  const [formState, setFormState] = useState({
    ownerName: '',
    leadgen: '',
    rep: '',
    installer: '',
    notes: '',
    followUpDateTime: '',
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formValid, setFormValid] = useState(true);

  const [pushNewLead, { loading, error }] = useMutation(PUSH_NEW_COMPANY_LEAD);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (!event.target.checked) {
      setFormState({ ...formState, followUpDateTime: '' }); // Reset follow-up date when checkbox is unchecked
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formValid) {
      try {
        await pushNewLead({
          variables: {
            homeowner: formState.ownerName,
            electricBill: formState.leadgen,
            primaryStatus: formState.rep,
            secondaryStatus: formState.installer,
            FollowUp: isChecked ? "Yes" : "No",
            Datetime: isChecked ? formState.followUpDateTime : null,
            Notes: formState.notes,
          },
        });
        setIsSubmitted(true);
        setFormValid(true); // Reset form validity for new submissions
      } catch (submissionError) {
        console.error("Error submitting form:", submissionError);
        setFormValid(false);
      }
    } else {
      setFormValid(false);
    }
  };

  if (isSubmitted) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Typography variant="h5" gutterBottom>Thank you for submitting!</Typography>
        <Button variant="contained" onClick={() => setIsSubmitted(false)}>Submit another lead</Button>
      </Box>
    );
  }

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4, mx: 'auto', width: '80%', maxWidth: '600px' }}>
      <Typography variant="h4" gutterBottom>New Lead</Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          required
          fullWidth
          label="Homeowner's Name"
          name="ownerName"
          value={formState.ownerName}
          onChange={handleInputChange}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Average Electric Bill</InputLabel>
          <Select
            name="leadgen"
            value={formState.leadgen}
            onChange={handleInputChange}
            required
          >
            <MenuItem value="0-$50">0-$50</MenuItem>
            <MenuItem value="$51-100">$51-100</MenuItem>
            <MenuItem value="$101-$150">$101-$150</MenuItem>
            <MenuItem value="$151-$200">$151-$200</MenuItem>
            <MenuItem value="$200+">$200+</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Primary Appt Status</InputLabel>
          <Select
            name="rep"
            value={formState.rep}
            onChange={handleInputChange}
            required
          >
            <MenuItem value="Held">Held</MenuItem>
            <MenuItem value="Not Held">Not Held</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel>Secondary Appt Status</InputLabel>
          <Select
            name="installer"
            value={formState.installer}
            onChange={handleInputChange}
            required
          >
            <MenuItem value="No Sale">No Sale</MenuItem>
            <MenuItem value="Follow Up">Follow Up</MenuItem>
            <MenuItem value="Sold">Sold</MenuItem>
          </Select>
        </FormControl>
        <FormControlLabel
          control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
          label="Follow Up Required"
        />
        {isChecked && (
          <TextField
            required
            fullWidth
            label="Follow Up Date and Time"
            type="datetime-local"
            name="followUpDateTime"
            value={formState.followUpDateTime}
            onChange={handleInputChange}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        )}
        <TextField
          required
          fullWidth
          label="Notes"
          name="notes"
          value={formState.notes}
          onChange={handleInputChange}
          margin="normal"
          multiline
          rows={4}
        />
        {!formValid && <Alert severity="error" sx={{ mt: 2 }}>Please fill out all required fields.</Alert>}
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={loading}>
          Submit
        </Button>
        {error && <Alert severity="error" sx={{ mt: 2 }}>{error.message}</Alert>}
      </Box>
    </Paper>
  );
};

export default AptForm;
