import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, CheckCircle, AlertCircle, TrendingUp, Target, Award, Lightbulb, Zap, Brain, Eye, ArrowRight, Sparkles, Activity, Shield, Cpu, Layers, RefreshCw, ChevronRight, Info, AlertTriangle, CheckCircle2, XCircle, Home, BarChart3, Settings, HelpCircle, Star, Lock, Download, ExternalLink, ChevronDown, ChevronUp, User, Mail, Phone, MapPin, Calendar, Building, BookOpen, Users, Clock, Briefcase, Scan, Database, Code, Globe, Rocket, Gauge, Search, Filter, Repeat, Wrench, Palette, MessageSquare, TrendingDown, AlertOctagon, CheckSquare, FileCheck, Crosshair, Radar, Microscope, Atom, Binary, BrainCircuit as Circuit, Fingerprint, Hexagon, Network, Orbit, Wifi, Workflow } from 'lucide-react';
import { useResume } from '../contexts/ResumeContext';
import toast from 'react-hot-toast';

interface SuggestionItem {
  category: string;
  issue: string;
  impact: 'high' | 'medium' | 'low';
  currentExample?: string;
  suggestedAlternatives: string[];
  explanation: string;
  section: string;
  severity: 'error' | 'warning' | 'success';
  isPro?: boolean;
  icon: React.ReactNode;
}

interface AnalysisCheck {
  title: string;
  status: 'pass' | 'fail' | 'warning';
  description: string;
  impact: string;
  isPro?: boolean;
  icon: React.ReactNode;
}

interface InsightTip {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'keyword' | 'format' | 'content' | 'strategy';
  actionable: string;
  gradient: string;
}

const ResumeAnalyzer: React.FC = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [selectedSuggestion, setSelectedSuggestion] = useState<SuggestionItem | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'suggestions' | 'strengths'>('overview');
  const [showMoreIssues, setShowMoreIssues] = useState(false);
  const [expandedSuggestion, setExpandedSuggestion] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [allIssuesVisible, setAllIssuesVisible] = useState(false);
  const { addResume } = useResume();

  const insightTips: InsightTip[] = [
    {
      title: "Neural Keyword Optimization",
      description: "AI-powered keyword analysis ensures your resume matches job requirements with 95% accuracy.",
      icon: <Brain className="h-5 w-5" />,
      category: "keyword",
      actionable: "Add 5-7 AI-recommended keywords from target job postings",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Quantum Impact Metrics",
      description: "Transform vague descriptions into powerful, quantified achievements that recruiters can't ignore.",
      icon: <Atom className="h-5 w-5" />,
      category: "content",
      actionable: "Replace 80% of descriptions with specific metrics and percentages",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Cybernetic Action Verbs",
      description: "Deploy advanced action verbs that demonstrate leadership and technical prowess.",
      icon: <Zap className="h-5 w-5" />,
      category: "content",
      actionable: "Upgrade to power verbs: 'architected', 'spearheaded', 'optimized'",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "ATS Matrix Compatibility",
      description: "Ensure 100% ATS parsing success with neural-optimized formatting protocols.",
      icon: <Circuit className="h-5 w-5" />,
      category: "format",
      actionable: "Apply ATS-optimized structure with standard headers",
      gradient: "from-amber-500 to-orange-500"
    },
    {
      title: "Adaptive Role Targeting",
      description: "Create dynamic resume variants that adapt to different role requirements.",
      icon: <Radar className="h-5 w-5" />,
      category: "strategy",
      actionable: "Generate 3 specialized versions for different role types",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Executive Summary Engine",
      description: "Craft compelling summaries that immediately showcase your unique value proposition.",
      icon: <Rocket className="h-5 w-5" />,
      category: "content",
      actionable: "Include experience level, key skills, and career objectives",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      title: "Skills Matrix Optimization",
      description: "Strategic skill placement with proficiency mapping for maximum impact.",
      icon: <Network className="h-5 w-5" />,
      category: "content",
      actionable: "Add 8-12 relevant skills with proficiency indicators",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Credential Amplification",
      description: "Enhance education section with relevant certifications and continuous learning.",
      icon: <Award className="h-5 w-5" />,
      category: "content",
      actionable: "Add certifications, courses, and professional development",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const analyzeResume = useCallback(async (file: File) => {
    setAnalyzing(true);
    
    // Simulate AI analysis with more detailed feedback
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    // Generate dynamic ATS score based on file name/content
    const baseScore = Math.floor(Math.random() * 40) + 50; // 50-90 range
    const fileNameHash = file.name.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    const dynamicScore = Math.abs(fileNameHash % 40) + 50; // Ensures different scores for different files
    
    const detailedSuggestions: SuggestionItem[] = [
      {
        category: 'Repetition',
        issue: 'Use different action words and phrases instead of overusing the same ones',
        impact: 'high',
        currentExample: 'Responsible for managing team projects',
        suggestedAlternatives: [
          'Spearheaded cross-functional team projects',
          'Orchestrated strategic project initiatives',
          'Directed high-impact team deliverables'
        ],
        explanation: 'Strong action verbs immediately grab attention and demonstrate leadership. Replace passive language with dynamic verbs that showcase your impact.',
        section: 'Experience',
        severity: 'error',
        icon: <Repeat className="h-5 w-5" />
      },
      {
        category: 'Weak action verbs',
        issue: 'Replace weak verbs with powerful action words that demonstrate impact',
        impact: 'high',
        currentExample: 'Worked on system improvements',
        suggestedAlternatives: [
          'Engineered system performance improvements by 45%',
          'Architected scalable solutions reducing load times by 2.3 seconds',
          'Optimized system efficiency, processing 10,000+ requests daily'
        ],
        explanation: 'Strong action verbs convey leadership and initiative. They help your resume stand out and show you as a proactive contributor.',
        section: 'Experience',
        severity: 'error',
        icon: <Zap className="h-5 w-5" />
      },
      {
        category: 'Missing quantifiable achievements',
        issue: 'Add specific numbers and metrics to demonstrate your impact',
        impact: 'high',
        currentExample: 'Improved application performance',
        suggestedAlternatives: [
          'Improved application performance by 40% through code optimization',
          'Reduced server response time from 2.5s to 800ms',
          'Increased user engagement by 35% through UI/UX improvements'
        ],
        explanation: 'Quantifiable achievements provide concrete evidence of your value and make your resume stand out to both ATS systems and hiring managers.',
        section: 'Experience',
        severity: 'error',
        icon: <TrendingUp className="h-5 w-5" />
      },
      {
        category: 'Generic job descriptions',
        issue: 'Replace generic descriptions with specific, impactful statements',
        impact: 'medium',
        currentExample: 'Worked on various projects',
        suggestedAlternatives: [
          'Led development of 3 high-priority client projects worth $2M+ in revenue',
          'Architected scalable microservices handling 100K+ daily transactions',
          'Collaborated with 5 cross-functional teams to deliver products ahead of schedule'
        ],
        explanation: 'Specific descriptions help recruiters understand your exact contributions and the scope of your responsibilities.',
        section: 'Experience',
        severity: 'warning',
        icon: <FileText className="h-5 w-5" />
      },
      {
        category: 'Keyword optimization',
        issue: 'Include more industry-relevant keywords to improve ATS compatibility',
        impact: 'high',
        currentExample: 'Software development experience',
        suggestedAlternatives: [
          'Full-stack development with React.js, Node.js, and TypeScript',
          'Agile software development using Scrum methodology',
          'Cloud-native application development on AWS platform'
        ],
        explanation: 'Industry keywords help your resume pass ATS filters and demonstrate technical expertise to hiring managers.',
        section: 'Skills & Experience',
        severity: 'error',
        icon: <Search className="h-5 w-5" />
      },
      {
        category: 'Professional summary',
        issue: 'Add a compelling professional summary to immediately capture attention',
        impact: 'medium',
        suggestedAlternatives: [
          'Results-driven Software Engineer with 5+ years developing scalable web applications',
          'Full-stack developer specializing in React.js and Node.js with proven track record of delivering high-impact solutions',
          'Experienced developer with expertise in cloud technologies and agile methodologies'
        ],
        explanation: 'A strong professional summary immediately communicates your value proposition and encourages recruiters to read further.',
        section: 'Summary',
        severity: 'warning',
        icon: <User className="h-5 w-5" />
      },
      {
        category: 'Skills formatting',
        issue: 'Organize skills section for better ATS parsing and readability',
        impact: 'low',
        suggestedAlternatives: [
          'Technical Skills: JavaScript, React.js, Node.js, Python, SQL',
          'Tools & Platforms: AWS, Docker, Git, Jenkins, MongoDB',
          'Methodologies: Agile, Scrum, Test-Driven Development'
        ],
        explanation: 'Well-organized skills sections help ATS systems categorize your expertise and make it easier for recruiters to quickly assess your qualifications.',
        section: 'Skills',
        severity: 'warning',
        icon: <Settings className="h-5 w-5" />
      }
    ];

    const analysisChecks: AnalysisCheck[] = [
      {
        title: 'Bullet point length',
        status: 'pass',
        description: 'Your bullet points are the optimal length for readability.',
        impact: 'BREVITY',
        icon: <CheckCircle className="h-5 w-5" />
      },
      {
        title: 'Date formatting',
        status: 'pass',
        description: 'Your dates follow industry-standard formatting.',
        impact: 'CONSISTENCY',
        icon: <Calendar className="h-5 w-5" />
      },
      {
        title: 'Verb tenses',
        status: 'pass',
        description: 'Your action verbs use correct tense throughout.',
        impact: 'GRAMMAR',
        icon: <CheckSquare className="h-5 w-5" />
      }
    ];

    const mockAnalysis = {
      atsScore: dynamicScore,
      fileName: file.name,
      detailedSuggestions,
      analysisChecks,
      topFixes: [
        { category: 'Repetition', count: 6, impact: 'high', icon: <Repeat className="h-4 w-4" /> },
        { category: 'Weak action verbs', count: 4, impact: 'high', icon: <Zap className="h-4 w-4" /> },
        { category: 'Missing quantifiable achievements', count: 8, impact: 'high', icon: <TrendingUp className="h-4 w-4" /> },
        { category: 'Generic job descriptions', count: 3, impact: 'medium', icon: <FileText className="h-4 w-4" /> },
        { category: 'Keyword optimization', count: 5, impact: 'high', icon: <Search className="h-4 w-4" /> },
        { category: 'Professional summary', count: 1, impact: 'medium', icon: <User className="h-4 w-4" /> },
        { category: 'Skills formatting', count: 2, impact: 'low', icon: <Settings className="h-4 w-4" /> }
      ],
      completed: [
        { category: 'Dates', count: 10, icon: <Calendar className="h-4 w-4" /> },
        { category: 'Unnecessary sections', count: 10, icon: <Filter className="h-4 w-4" /> }
      ],
      strengths: [
        'Neural-optimized contact information with professional formatting',
        'Chronological work experience with consistent structure',
        'Education section follows ATS-compatible standards',
        'Professional language maintained throughout document'
      ],
      keywords: {
        present: ['JavaScript', 'React', 'Node.js', 'SQL', 'Git', 'Agile'],
        missing: ['TypeScript', 'Docker', 'AWS', 'CI/CD', 'Kubernetes', 'MongoDB'],
        recommended: ['API Development', 'Microservices', 'Cloud Computing', 'DevOps']
      }
    };

    setAnalysisResult(mockAnalysis);
    
    addResume({
      name: file.name,
      content: 'Resume content would be parsed here',
      atsScore: mockAnalysis.atsScore,
      suggestions: mockAnalysis.detailedSuggestions.map(s => s.issue),
      keywords: [...mockAnalysis.keywords.present, ...mockAnalysis.keywords.missing]
    });
    
    setAnalyzing(false);
    toast.success('🚀 Neural Analysis Complete!');
  }, [addResume]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      analyzeResume(file);
    }
  }, [analyzeResume]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/msword': ['.doc']
    },
    maxFiles: 1
  });

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400';
    if (score >= 60) return 'text-amber-400';
    return 'text-red-400';
  };

  const getScoreStroke = (score: number) => {
    if (score >= 80) return '#10b981';
    if (score >= 60) return '#f59e0b';
    return '#ef4444';
  };

  const getScoreGradient = (score: number) => {
    if (score >= 80) return 'from-emerald-500 to-green-500';
    if (score >= 60) return 'from-amber-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const handleShowMoreIssues = () => {
    setAllIssuesVisible(!allIssuesVisible);
    toast.success(allIssuesVisible ? 'Showing fewer issues' : 'Showing all issues');
  };

  const handleFixSuggestion = (suggestion: SuggestionItem, index: number) => {
    setExpandedSuggestion(expandedSuggestion === index ? null : index);
    toast.success(`Viewing fix for: ${suggestion.category}`);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    toast.info(`Viewing ${category} issues`);
  };

  if (!analysisResult && !analyzing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10"></div>
        <div className="absolute inset-0 bg-neural-network"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-3 mb-8"
            >
              <Brain className="h-5 w-5 text-cyan-400 animate-pulse" />
              <span className="text-cyan-300 font-medium">Neural Resume Analysis</span>
              <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
            </motion.div>

            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              AI Resume Analyzer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Upload your resume to get an instant ATS score and AI-powered optimization suggestions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upload Section */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
                    isDragActive 
                      ? 'border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/25' 
                      : 'border-gray-600 hover:border-cyan-400 hover:bg-gray-700/30'
                  }`}
                >
                  <input {...getInputProps()} />
                  <div className="relative">
                    <Upload className="h-20 w-20 text-gray-400 mx-auto mb-6 animate-float" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl opacity-50"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {isDragActive ? 'Drop your resume here' : 'Upload Your Resume'}
                  </h3>
                  <p className="text-gray-300 mb-4 text-lg">
                    Drag and drop your resume or click to browse
                  </p>
                  <p className="text-sm text-gray-400">
                    Supports PDF, DOC, and DOCX files • Max 10MB
                  </p>
                </div>
              </div>

              {/* Job Description Section */}
              <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 mt-6 shadow-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">
                    Job Description (Optional)
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Paste a job description for targeted keyword analysis and role-specific optimization
                </p>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  className="w-full h-32 p-4 bg-gray-900/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none resize-none text-white placeholder-gray-400 transition-all"
                  placeholder="Paste the job description here for AI-powered role matching..."
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <Cpu className="h-6 w-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Neural Analysis Features
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                    <Gauge className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">ATS Compatibility Score</p>
                      <p className="text-sm text-gray-300">0-100 neural-powered rating</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                    <Radar className="h-6 w-6 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">Keyword Intelligence</p>
                      <p className="text-sm text-gray-300">AI-powered keyword optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl border border-emerald-500/20">
                    <Brain className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-white">Smart Suggestions</p>
                      <p className="text-sm text-gray-300">Actionable AI recommendations</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Rocket className="h-8 w-8 text-amber-400" />
                  <div>
                    <h3 className="font-semibold text-white">Pro Tip</h3>
                    <p className="text-sm text-gray-300">
                      Upload a job description for 95% more accurate keyword matching and role-specific optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (analyzing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10"></div>
        <div className="absolute inset-0 bg-neural-network"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-12 text-center max-w-md shadow-2xl"
        >
          <div className="relative mb-8">
            <div className="animate-spin rounded-full h-20 w-20 border-4 border-gray-600 border-t-cyan-400 mx-auto"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl"></div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="h-6 w-6 text-cyan-400 animate-pulse" />
            <h3 className="text-2xl font-semibold text-white">
              Neural Analysis in Progress
            </h3>
          </div>
          
          <p className="text-gray-300 mb-6">
            Our AI is performing deep analysis of your resume for ATS compatibility and optimization opportunities...
          </p>
          
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Scan className="h-4 w-4 animate-pulse" />
              <span>Scanning content</span>
            </div>
            <div className="flex items-center space-x-1">
              <Microscope className="h-4 w-4 animate-pulse" />
              <span>Analyzing keywords</span>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  const visibleSuggestions = allIssuesVisible 
    ? analysisResult.detailedSuggestions 
    : analysisResult.detailedSuggestions.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
      <div className="absolute inset-0 bg-neural-network"></div>

      <div className="flex relative z-10">
        {/* Left Sidebar */}
        <div className="w-80 bg-gray-800/50 backdrop-blur-xl border-r border-gray-700/50 min-h-screen shadow-2xl">
          {/* Score Circle */}
          <div className="p-8 border-b border-gray-700/50">
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-36 h-36">
                <svg className="w-36 h-36 transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke="#374151"
                    strokeWidth="8"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    stroke={getScoreStroke(analysisResult.atsScore)}
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={`${(analysisResult.atsScore / 100) * 314} 314`}
                    className="transition-all duration-2000 filter drop-shadow-lg"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`text-4xl font-bold ${getScoreColor(analysisResult.atsScore)} animate-pulse`}>
                      {analysisResult.atsScore}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                      NEURAL SCORE
                    </div>
                  </div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${getScoreGradient(analysisResult.atsScore)} rounded-full blur-xl opacity-20 animate-pulse`}></div>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-xl font-semibold text-white mb-2">
                Analysis Complete!
              </h2>
              <p className="text-gray-300">Welcome to your neural resume review.</p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
                <Star className="h-5 w-5 text-cyan-400 mx-auto mb-1" />
                <div className="text-xs font-medium text-cyan-300 uppercase tracking-wide">CURRENT SCORE</div>
              </div>
              <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                <TrendingUp className="h-5 w-5 text-purple-400 mx-auto mb-1" />
                <div className="text-xs font-medium text-purple-300 uppercase tracking-wide">IMPROVEMENT</div>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="p-6">
            <div className="space-y-2">
              <button 
                onClick={() => toast.info('Navigating to Home')}
                className="w-full flex items-center space-x-3 px-4 py-3 text-left text-cyan-400 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl hover:from-cyan-500/30 hover:to-blue-500/30 transition-all border border-cyan-500/30"
              >
                <Home className="h-5 w-5" />
                <span className="font-medium">Home</span>
              </button>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 flex items-center">
                <AlertOctagon className="h-4 w-4 mr-2 text-red-400" />
                CRITICAL FIXES
              </h3>
              <div className="space-y-2">
                {analysisResult.topFixes.map((fix: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleCategoryClick(fix.category)}
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-xl hover:bg-gray-700/50 transition-all border ${
                      selectedCategory === fix.category 
                        ? 'bg-gradient-to-r from-red-500/20 to-orange-500/20 border-red-500/30' 
                        : 'border-gray-700/50 hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-red-400">
                        {fix.icon}
                      </div>
                      <div className="text-sm text-gray-300">{fix.category}</div>
                    </div>
                    <div className="text-sm font-bold text-red-400">{fix.count}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-emerald-400" />
                OPTIMIZED
              </h3>
              <div className="space-y-2">
                {analysisResult.completed.map((item: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => toast.success(`${item.category} optimized successfully!`)}
                    className="w-full flex items-center justify-between py-3 px-4 rounded-xl hover:bg-emerald-500/10 transition-all border border-emerald-500/20"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-emerald-400">
                        {item.icon}
                      </div>
                      <div className="text-sm text-gray-300">{item.category}</div>
                    </div>
                    <div className="text-sm font-bold text-emerald-400">{item.count}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <button 
                onClick={handleShowMoreIssues}
                className="w-full flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 p-3 rounded-xl transition-all border border-cyan-500/30 hover:border-cyan-500/50"
              >
                <span className="text-sm font-medium">
                  {allIssuesVisible ? 'SHOW LESS' : '7 MORE ISSUES'}
                </span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6">
              <button 
                onClick={() => toast.info('Full neural report feature coming soon!')}
                className="w-full flex items-center justify-center space-x-2 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 p-3 rounded-xl transition-all border border-purple-500/30 hover:border-purple-500/50"
              >
                <Brain className="h-4 w-4" />
                <span className="text-sm font-medium">Unlock Neural Report</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            {/* Header */}
            <div className="mb-8">
              <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center space-x-3 mb-6">
                  <Brain className="h-8 w-8 text-cyan-400" />
                  <h1 className="text-3xl font-bold text-white">
                    Neural Analysis Results
                  </h1>
                </div>
                
                <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-6 mb-6">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Your resume scored <span className={`${getScoreColor(analysisResult.atsScore)} font-bold`}>{analysisResult.atsScore}</span> out of 100.
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Our neural network has analyzed your resume across 50+ optimization factors. 
                    While your resume shows strong potential, we've identified key areas for improvement 
                    that could increase your ATS compatibility by 20+ points and significantly boost your interview callback rate.
                  </p>
                  
                  <div className="bg-gray-900/50 rounded-xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-400">PERFORMANCE RANGE</span>
                      <span className="text-sm font-medium text-gray-400">TOP TIER RESUMES</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-4 relative overflow-hidden">
                      <div className="bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 h-4 rounded-full"></div>
                      <div 
                        className="absolute top-0 w-1 h-4 bg-white shadow-lg"
                        style={{ left: `${analysisResult.atsScore}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-2">
                      <span>0</span>
                      <span>50</span>
                      <span>100</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4">
                    <div className="flex items-start space-x-3">
                      <Lightbulb className="h-6 w-6 text-cyan-400 mt-0.5 animate-pulse" />
                      <div>
                        <h3 className="font-semibold text-cyan-300 mb-2">Neural Insight</h3>
                        <p className="text-sm text-cyan-100">
                          Your resume shows a +1 point improvement since last analysis. 
                          Our AI has identified specific optimizations that could boost your score to 85+ within the next iteration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps to Increase Score */}
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 mb-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Rocket className="h-6 w-6 text-purple-400" />
                <h2 className="text-2xl font-bold text-white">
                  Neural Optimization Recommendations
                </h2>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our AI has identified critical optimization opportunities. Each recommendation is ranked by impact 
                and includes specific examples to maximize your resume's performance.
              </p>

              <div className="space-y-6">
                {visibleSuggestions.map((suggestion: SuggestionItem, index: number) => (
                  <div key={index}>
                    <div className="border border-red-500/30 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-6 hover:from-red-500/15 hover:to-orange-500/15 transition-all">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 flex-1 min-w-0">
                          <div className="text-red-400 bg-red-500/20 p-3 rounded-xl">
                            {suggestion.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold text-white">{suggestion.category}</h3>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                suggestion.impact === 'high' 
                                  ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                                  : suggestion.impact === 'medium'
                                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                  : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                              }`}>
                                {suggestion.impact.toUpperCase()} IMPACT
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm">{suggestion.issue}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleFixSuggestion(suggestion, index)}
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
                        >
                          <span>OPTIMIZE</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    {/* Expanded suggestion details */}
                    <AnimatePresence>
                      {expandedSuggestion === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 bg-gray-900/50 backdrop-blur-xl border border-gray-600/50 rounded-xl p-6"
                        >
                          <div className="flex items-center space-x-3 mb-4">
                            <Wrench className="h-5 w-5 text-cyan-400" />
                            <h4 className="font-semibold text-white">Neural Optimization Guide</h4>
                          </div>
                          <p className="text-gray-300 mb-6 leading-relaxed">{suggestion.explanation}</p>
                          
                          {suggestion.currentExample && (
                            <div className="mb-6">
                              <h5 className="font-medium text-red-300 mb-3 flex items-center">
                                <XCircle className="h-4 w-4 mr-2" />
                                Current Implementation:
                              </h5>
                              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                                <code className="text-sm text-red-200">"{suggestion.currentExample}"</code>
                              </div>
                            </div>
                          )}
                          
                          <div>
                            <h5 className="font-medium text-emerald-300 mb-3 flex items-center">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              AI-Optimized Alternatives:
                            </h5>
                            <div className="space-y-3">
                              {suggestion.suggestedAlternatives.map((alt, altIndex) => (
                                <div key={altIndex} className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 hover:bg-emerald-500/15 transition-colors">
                                  <code className="text-sm text-emerald-200">"{alt}"</code>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button 
                  onClick={handleShowMoreIssues}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors bg-cyan-500/10 hover:bg-cyan-500/20 px-6 py-3 rounded-xl border border-cyan-500/30"
                >
                  <span>
                    {allIssuesVisible ? 'SHOW FEWER RECOMMENDATIONS' : 'SHOW ALL RECOMMENDATIONS'}
                  </span>
                  {allIssuesVisible ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* What You Did Well */}
            <div className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Award className="h-6 w-6 text-emerald-400" />
                <h2 className="text-2xl font-bold text-white">
                  Neural Validation Results
                </h2>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our AI performed 20+ comprehensive checks on your resume. Here are the key areas 
                where your resume excels and meets industry standards.
              </p>

              <div className="space-y-4">
                {analysisResult.analysisChecks.map((check: AnalysisCheck, index: number) => (
                  <div key={index} className="flex items-center space-x-4 p-6 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/30 rounded-xl hover:from-emerald-500/15 hover:to-green-500/15 transition-all">
                    <div className="text-emerald-400 bg-emerald-500/20 p-3 rounded-xl">
                      {check.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">{check.title}</h3>
                      <p className="text-gray-300 text-sm">{check.description}</p>
                    </div>
                    <div className="text-emerald-400 font-medium text-sm bg-emerald-500/20 px-3 py-1 rounded-full">
                      ✓ OPTIMIZED
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Enhanced Insights */}
        <div className="w-96 bg-gray-800/50 backdrop-blur-xl border-l border-gray-700/50 min-h-screen p-6 overflow-y-auto shadow-2xl">
          <div className="space-y-6">
            {/* AI Insights Header */}
            <div className="text-center pb-6 border-b border-gray-700/50">
              <div className="relative mb-4">
                <Brain className="h-16 w-16 text-cyan-400 mx-auto animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl"></div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Neural Intelligence Hub
              </h3>
              <p className="text-sm text-gray-300">
                AI-powered insights and optimization strategies
              </p>
            </div>

            {/* Analysis Summary */}
            <div className="bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-xl p-6 border border-gray-600/50">
              <div className="flex items-center space-x-3 mb-4">
                <Activity className="h-5 w-5 text-purple-400" />
                <h4 className="font-medium text-white">Analysis Summary</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Document:</span>
                  <span className="font-medium text-white truncate ml-2 max-w-32">{analysisResult.fileName}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Neural Score:</span>
                  <span className={`font-bold ${getScoreColor(analysisResult.atsScore)}`}>
                    {analysisResult.atsScore}/100
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Critical Issues:</span>
                  <span className="font-medium text-red-400">{analysisResult.detailedSuggestions.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Optimized Areas:</span>
                  <span className="font-medium text-emerald-400">{analysisResult.strengths.length}</span>
                </div>
              </div>
            </div>

            {/* Neural Optimization Tips */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Sparkles className="h-5 w-5 text-amber-400" />
                <h4 className="font-semibold text-white">Neural Optimization Tips</h4>
              </div>
              <div className="space-y-4">
                {insightTips.slice(0, 4).map((tip, index) => (
                  <div key={index} className={`bg-gradient-to-r ${tip.gradient}/10 border border-gray-600/50 rounded-xl p-4 hover:scale-105 transition-transform`}>
                    <div className="flex items-start space-x-3">
                      <div className={`text-white bg-gradient-to-r ${tip.gradient} p-2 rounded-lg mt-0.5`}>
                        {tip.icon}
                      </div>
                      <div>
                        <h5 className="font-medium text-white mb-1">{tip.title}</h5>
                        <p className="text-sm text-gray-300 mb-3">{tip.description}</p>
                        <div className={`bg-gradient-to-r ${tip.gradient}/20 rounded-lg p-2`}>
                          <p className="text-xs text-gray-200 font-medium">⚡ Action: {tip.actionable}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Keyword Intelligence */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Radar className="h-5 w-5 text-cyan-400" />
                <h4 className="font-semibold text-white">Keyword Intelligence</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-medium text-emerald-400 mb-3 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Neural-Detected Keywords
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {analysisResult.keywords.present.slice(0, 6).map((keyword: string, index: number) => (
                      <span key={index} className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs border border-emerald-500/30">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-medium text-amber-400 mb-3 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Missing Critical Keywords
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {analysisResult.keywords.missing.slice(0, 6).map((keyword: string, index: number) => (
                      <span key={index} className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs border border-amber-500/30">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Industry Intelligence */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="h-5 w-5 text-purple-400" />
                <h4 className="font-semibold text-white">Industry Intelligence</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Code className="h-4 w-4 text-purple-400" />
                    <h5 className="font-medium text-purple-300">Tech Sector Trends</h5>
                  </div>
                  <p className="text-sm text-purple-100">
                    Emphasize cloud-native technologies, DevOps practices, and AI/ML experience to align with 2024 market demands.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/30 rounded-xl p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="h-4 w-4 text-indigo-400" />
                    <h5 className="font-medium text-indigo-300">ATS Optimization</h5>
                  </div>
                  <p className="text-sm text-indigo-100">
                    Use standard section headers and avoid complex formatting to ensure 100% ATS parsing success.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Center */}
            <div className="space-y-3 pt-6 border-t border-gray-700/50">
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-4 rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25">
                <Download className="h-5 w-5" />
                <span className="font-medium">Download Neural Report</span>
              </button>
              <button 
                onClick={() => {
                  setAnalysisResult(null);
                  setJobDescription('');
                }}
                className="w-full border border-gray-600 text-gray-300 py-4 px-4 rounded-xl hover:bg-gray-700/50 hover:border-gray-500 transition-all flex items-center justify-center space-x-2"
              >
                <RefreshCw className="h-5 w-5" />
                <span className="font-medium">Analyze New Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;