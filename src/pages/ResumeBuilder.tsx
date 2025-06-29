import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Settings, 
  Download,
  Eye,
  Save,
  Plus,
  Edit3,
  Trash2
} from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ResumeData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    website: string;
  };
  summary: string;
  experience: Array<{
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    gpa: string;
  }>;
  skills: string[];
}

const ResumeBuilder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      website: ''
    },
    summary: '',
    experience: [],
    education: [],
    skills: []
  });
  const [showPreview, setShowPreview] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const steps = [
    { title: 'Personal Info', icon: <User className="h-5 w-5" /> },
    { title: 'Summary', icon: <Edit3 className="h-5 w-5" /> },
    { title: 'Experience', icon: <Briefcase className="h-5 w-5" /> },
    { title: 'Education', icon: <GraduationCap className="h-5 w-5" /> },
    { title: 'Skills', icon: <Settings className="h-5 w-5" /> }
  ];

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, {
        company: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: ''
      }]
    }));
  };

  const removeExperience = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, {
        institution: '',
        degree: '',
        field: '',
        startDate: '',
        endDate: '',
        gpa: ''
      }]
    }));
  };

  const removeEducation = (index: number) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            value={resumeData.personalInfo.fullName}
            onChange={(e) => setResumeData(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, fullName: e.target.value }
            }))}
            placeholder="John Doe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            value={resumeData.personalInfo.email}
            onChange={(e) => setResumeData(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, email: e.target.value }
            }))}
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
          <input
            type="tel"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            value={resumeData.personalInfo.phone}
            onChange={(e) => setResumeData(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, phone: e.target.value }
            }))}
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            value={resumeData.personalInfo.location}
            onChange={(e) => setResumeData(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, location: e.target.value }
            }))}
            placeholder="San Francisco, CA"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
          <input
            type="url"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            value={resumeData.personalInfo.linkedin}
            onChange={(e) => setResumeData(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, linkedin: e.target.value }
            }))}
            placeholder="https://linkedin.com/in/johndoe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
          <input
            type="url"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            value={resumeData.personalInfo.website}
            onChange={(e) => setResumeData(prev => ({
              ...prev,
              personalInfo: { ...prev.personalInfo, website: e.target.value }
            }))}
            placeholder="https://johndoe.com"
          />
        </div>
      </div>
    </div>
  );

  const renderSummary = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Summary</h3>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Summary</label>
        <textarea
          className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
          value={resumeData.summary}
          onChange={(e) => setResumeData(prev => ({ ...prev, summary: e.target.value }))}
          placeholder="Write a compelling 2-3 sentence summary highlighting your key strengths and career objectives..."
        />
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">AI Suggestion</h4>
        <p className="text-blue-800 text-sm">
          Consider highlighting your years of experience, key skills, and career achievements. 
          Mention specific technologies or methodologies you're proficient in.
        </p>
      </div>
    </div>
  );

  const renderExperience = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Work Experience</h3>
        <button
          onClick={addExperience}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Add Experience</span>
        </button>
      </div>

      {resumeData.experience.map((exp, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-6 relative">
          <button
            onClick={() => removeExperience(index)}
            className="absolute top-4 right-4 text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                value={exp.company}
                onChange={(e) => {
                  const newExp = [...resumeData.experience];
                  newExp[index].company = e.target.value;
                  setResumeData(prev => ({ ...prev, experience: newExp }));
                }}
                placeholder="Google"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Position *</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                value={exp.position}
                onChange={(e) => {
                  const newExp = [...resumeData.experience];
                  newExp[index].position = e.target.value;
                  setResumeData(prev => ({ ...prev, experience: newExp }));
                }}
                placeholder="Software Engineer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                value={exp.location}
                onChange={(e) => {
                  const newExp = [...resumeData.experience];
                  newExp[index].location = e.target.value;
                  setResumeData(prev => ({ ...prev, experience: newExp }));
                }}
                placeholder="San Francisco, CA"
              />
            </div>
            <div className="flex space-x-2">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="month"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  value={exp.startDate}
                  onChange={(e) => {
                    const newExp = [...resumeData.experience];
                    newExp[index].startDate = e.target.value;
                    setResumeData(prev => ({ ...prev, experience: newExp }));
                  }}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                <input
                  type="month"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-100"
                  value={exp.endDate}
                  onChange={(e) => {
                    const newExp = [...resumeData.experience];
                    newExp[index].endDate = e.target.value;
                    setResumeData(prev => ({ ...prev, experience: newExp }));
                  }}
                  disabled={exp.current}
                />
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={exp.current}
                onChange={(e) => {
                  const newExp = [...resumeData.experience];
                  newExp[index].current = e.target.checked;
                  if (e.target.checked) {
                    newExp[index].endDate = '';
                  }
                  setResumeData(prev => ({ ...prev, experience: newExp }));
                }}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">I currently work here</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              className="w-full h-24 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              value={exp.description}
              onChange={(e) => {
                const newExp = [...resumeData.experience];
                newExp[index].description = e.target.value;
                setResumeData(prev => ({ ...prev, experience: newExp }));
              }}
              placeholder="• Developed and maintained web applications using React and Node.js&#10;• Collaborated with cross-functional teams to deliver high-quality products&#10;• Improved application performance by 40% through code optimization"
            />
          </div>
        </div>
      ))}

      {resumeData.experience.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No work experience added yet</p>
          <button
            onClick={addExperience}
            className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
          >
            Add your first job
          </button>
        </div>
      )}
    </div>
  );

  const renderEducation = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Education</h3>
        <button
          onClick={addEducation}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Add Education</span>
        </button>
      </div>

      {resumeData.education.map((edu, index) => (
        <div key={index} className="bg-gray-50 rounded-lg p-6 relative">
          <button
            onClick={() => removeEducation(index)}
            className="absolute top-4 right-4 text-red-500 hover:text-red-700"
          >
            <Trash2 className="h-4 w-4" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Institution *</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                value={edu.institution}
                onChange={(e) => {
                  const newEdu = [...resumeData.education];
                  newEdu[index].institution = e.target.value;
                  setResumeData(prev => ({ ...prev, education: newEdu }));
                }}
                placeholder="University of California, Berkeley"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Degree *</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                value={edu.degree}
                onChange={(e) => {
                  const newEdu = [...resumeData.education];
                  newEdu[index].degree = e.target.value;
                  setResumeData(prev => ({ ...prev, education: newEdu }));
                }}
                placeholder="Bachelor of Science"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Field of Study</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                value={edu.field}
                onChange={(e) => {
                  const newEdu = [...resumeData.education];
                  newEdu[index].field = e.target.value;
                  setResumeData(prev => ({ ...prev, education: newEdu }));
                }}
                placeholder="Computer Science"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">GPA (Optional)</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                value={edu.gpa}
                onChange={(e) => {
                  const newEdu = [...resumeData.education];
                  newEdu[index].gpa = e.target.value;
                  setResumeData(prev => ({ ...prev, education: newEdu }));
                }}
                placeholder="3.8/4.0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="month"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                value={edu.startDate}
                onChange={(e) => {
                  const newEdu = [...resumeData.education];
                  newEdu[index].startDate = e.target.value;
                  setResumeData(prev => ({ ...prev, education: newEdu }));
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="month"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                value={edu.endDate}
                onChange={(e) => {
                  const newEdu = [...resumeData.education];
                  newEdu[index].endDate = e.target.value;
                  setResumeData(prev => ({ ...prev, education: newEdu }));
                }}
              />
            </div>
          </div>
        </div>
      ))}

      {resumeData.education.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <GraduationCap className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No education added yet</p>
          <button
            onClick={addEducation}
            className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
          >
            Add your education
          </button>
        </div>
      )}
    </div>
  );

  const renderSkills = () => {
    const [newSkill, setNewSkill] = useState('');

    const addSkill = () => {
      if (newSkill.trim()) {
        setResumeData(prev => ({
          ...prev,
          skills: [...prev.skills, newSkill.trim()]
        }));
        setNewSkill('');
      }
    };

    const removeSkill = (index: number) => {
      setResumeData(prev => ({
        ...prev,
        skills: prev.skills.filter((_, i) => i !== index)
      }));
    };

    return (
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Skills</h3>
        
        <div className="flex space-x-2">
          <input
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addSkill()}
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            placeholder="Add a skill (e.g., JavaScript, Project Management)"
          />
          <button
            onClick={addSkill}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add
          </button>
        </div>

        {resumeData.skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center space-x-2"
              >
                <span>{skill}</span>
                <button
                  onClick={() => removeSkill(index)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-medium text-green-900 mb-2">Popular Skills</h4>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'Python', 'React', 'Node.js', 'SQL', 'AWS', 'Docker', 'Git'].map((skill) => (
              <button
                key={skill}
                onClick={() => {
                  if (!resumeData.skills.includes(skill)) {
                    setResumeData(prev => ({
                      ...prev,
                      skills: [...prev.skills, skill]
                    }));
                  }
                }}
                className="bg-white border border-green-300 text-green-800 px-3 py-1 rounded-full text-sm hover:bg-green-100 transition-colors"
              >
                + {skill}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: return renderPersonalInfo();
      case 1: return renderSummary();
      case 2: return renderExperience();
      case 3: return renderEducation();
      case 4: return renderSkills();
      default: return renderPersonalInfo();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              AI Resume Builder
            </h1>
            <p className="text-lg text-gray-600">
              Create a professional resume with AI-powered suggestions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Step Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
                <h3 className="font-semibold text-gray-900 mb-4">Steps</h3>
                <div className="space-y-3">
                  {steps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-colors ${
                        currentStep === index
                          ? 'bg-blue-100 text-blue-700 border border-blue-200'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <div className={`${currentStep === index ? 'text-blue-600' : 'text-gray-400'}`}>
                        {step.icon}
                      </div>
                      <span className="font-medium">{step.title}</span>
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setShowPreview(!showPreview)}
                      className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Preview</span>
                    </button>
                    <button className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      <Save className="h-4 w-4" />
                      <span>Save</span>
                    </button>
                  </div>
                  <button className="w-full mt-2 flex items-center justify-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                {renderStepContent()}

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>
                  
                  <div className="text-sm text-gray-500">
                    Step {currentStep + 1} of {steps.length}
                  </div>
                  
                  <button
                    onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                    disabled={currentStep === steps.length - 1}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Modal */}
          {showPreview && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] w-full overflow-auto">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">Resume Preview</h3>
                    <button
                      onClick={() => setShowPreview(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ×
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  {/* Resume Preview Content */}
                  <div className="max-w-2xl mx-auto bg-white">
                    <div className="text-center mb-6">
                      <h1 className="text-2xl font-bold text-gray-900">{resumeData.personalInfo.fullName || 'Your Name'}</h1>
                      <div className="text-gray-600 mt-2">
                        {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
                        {resumeData.personalInfo.phone && <span> • {resumeData.personalInfo.phone}</span>}
                        {resumeData.personalInfo.location && <span> • {resumeData.personalInfo.location}</span>}
                      </div>
                    </div>

                    {resumeData.summary && (
                      <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-2">Summary</h2>
                        <p className="text-gray-700">{resumeData.summary}</p>
                      </div>
                    )}

                    {resumeData.experience.length > 0 && (
                      <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Experience</h2>
                        {resumeData.experience.map((exp, index) => (
                          <div key={index} className="mb-4">
                            <div className="flex justify-between items-start mb-1">
                              <h3 className="font-medium text-gray-900">{exp.position}</h3>
                              <span className="text-sm text-gray-600">
                                {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                              </span>
                            </div>
                            <p className="text-gray-700 mb-2">{exp.company} • {exp.location}</p>
                            <p className="text-gray-600 text-sm whitespace-pre-line">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {resumeData.education.length > 0 && (
                      <div className="mb-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Education</h2>
                        {resumeData.education.map((edu, index) => (
                          <div key={index} className="mb-4">
                            <div className="flex justify-between items-start mb-1">
                              <h3 className="font-medium text-gray-900">{edu.degree} in {edu.field}</h3>
                              <span className="text-sm text-gray-600">
                                {edu.startDate} - {edu.endDate}
                              </span>
                            </div>
                            <p className="text-gray-700">{edu.institution}</p>
                            {edu.gpa && <p className="text-gray-600 text-sm">GPA: {edu.gpa}</p>}
                          </div>
                        ))}
                      </div>
                    )}

                    {resumeData.skills.length > 0 && (
                      <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                          {resumeData.skills.map((skill, index) => (
                            <span key={index} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeBuilder;