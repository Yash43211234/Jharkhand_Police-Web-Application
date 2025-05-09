import React, { useState } from 'react';
import axios from 'axios';

function PoliceSurveyForm() {
    const [formData, setFormData] = useState({
        email: '',
        safetyConcerns: '',
        policePresence: '',
        policeEffectiveness: '',
        communityManagement: '',
        policingPriorities: '',
        suggestions: '',
        satisfaction: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
       
    try {
      const response = await axios.post('http://localhost:3001/submit-survey', formData);
      console.log(response.data);
      
      // Optionally, reset the form after submission
      setFormData({
        email: '',
        safetyConcerns: '',
        policePresence: '',
        policeEffectiveness: '',
        communityManagement: '',
        policingPriorities: '',
        suggestions: '',
        satisfaction: ''
      });
    } catch (error) {
      console.error('Error submitting missing person report:', error);
    }
  };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Community Police Survey</h1>
            
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label>Safety Concerns:</label>
            <textarea
                name="safetyConcerns"
                value={formData.safetyConcerns}
                onChange={handleChange}
                required
            />

            <label>Police Presence:</label>
            <input
                type="text"
                name="policePresence"
                value={formData.policePresence}
                onChange={handleChange}
            />

            <label>Effectiveness of Police:</label>
            <input
                type="text"
                name="policeEffectiveness"
                value={formData.policeEffectiveness}
                onChange={handleChange}
            />

            <label>Community Management:</label>
            <input
                type="text"
                name="communityManagement"
                value={formData.communityManagement}
                onChange={handleChange}
            />

            <label>Priorities for Policing:</label>
            <input
                type="text"
                name="policingPriorities"
                value={formData.policingPriorities}
                onChange={handleChange}
            />

            <label>Suggestions for Improvement:</label>
            <textarea
                name="suggestions"
                value={formData.suggestions}
                onChange={handleChange}
            />

            <label>Overall Satisfaction (1-10):</label>
            <input
                type="number"
                name="satisfaction"
                min="1"
                max="10"
                value={formData.satisfaction}
                onChange={handleChange}
            />

            <button type="submit">Submit Survey</button>
        </form>
    );
}

export default PoliceSurveyForm;
