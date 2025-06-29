import React, { createContext, useContext, useState } from 'react';

interface Resume {
  id: string;
  name: string;
  content: string;
  atsScore: number;
  createdAt: Date;
  lastModified: Date;
  suggestions: string[];
  keywords: string[];
}

interface ResumeContextType {
  resumes: Resume[];
  currentResume: Resume | null;
  addResume: (resume: Omit<Resume, 'id' | 'createdAt' | 'lastModified'>) => void;
  updateResume: (id: string, updates: Partial<Resume>) => void;
  deleteResume: (id: string) => void;
  setCurrentResume: (resume: Resume | null) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [currentResume, setCurrentResume] = useState<Resume | null>(null);

  const addResume = (resumeData: Omit<Resume, 'id' | 'createdAt' | 'lastModified'>) => {
    const newResume: Resume = {
      ...resumeData,
      id: Date.now().toString(),
      createdAt: new Date(),
      lastModified: new Date()
    };
    setResumes(prev => [...prev, newResume]);
    setCurrentResume(newResume);
  };

  const updateResume = (id: string, updates: Partial<Resume>) => {
    setResumes(prev => prev.map(resume => 
      resume.id === id 
        ? { ...resume, ...updates, lastModified: new Date() }
        : resume
    ));
    if (currentResume?.id === id) {
      setCurrentResume(prev => prev ? { ...prev, ...updates, lastModified: new Date() } : null);
    }
  };

  const deleteResume = (id: string) => {
    setResumes(prev => prev.filter(resume => resume.id !== id));
    if (currentResume?.id === id) {
      setCurrentResume(null);
    }
  };

  const value = {
    resumes,
    currentResume,
    addResume,
    updateResume,
    deleteResume,
    setCurrentResume
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
};