import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Zap, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle,
  Brain,
  Sparkles,
  Target,
  TrendingUp,
  Shield,
  Cpu,
  Activity,
  Eye,
  Layers
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Neural AI Analysis",
      description: "Advanced machine learning algorithms analyze 50+ resume factors for maximum ATS compatibility and recruiter appeal.",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Smart Resume Builder",
      description: "AI-guided step-by-step builder with industry-specific templates and real-time optimization suggestions.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precision Job Matching",
      description: "Intelligent keyword analysis and role-specific optimization to increase your interview callback rate by 95%.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Future-Ready Templates",
      description: "Cutting-edge designs optimized for both ATS systems and human recruiters across all industries.",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const benefits = [
    "95% higher callback rate",
    "ATS-optimized formatting",
    "AI-powered suggestions",
    "Real-time optimization",
    "Industry-specific keywords",
    "Neural network analysis"
  ];

  const stats = [
    { number: "50K+", label: "Resumes Optimized", icon: <FileText className="h-6 w-6" /> },
    { number: "95%", label: "Success Rate", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "2.3x", label: "More Interviews", icon: <Users className="h-6 w-6" /> },
    { number: "24/7", label: "AI Available", icon: <Activity className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-10"></div>
      <div className="absolute inset-0 bg-neural-network"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              {/* AI Badge */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-3 mb-8"
              >
                <Brain className="h-5 w-5 text-cyan-400 animate-pulse" />
                <span className="text-cyan-300 font-medium">Powered by Advanced AI</span>
                <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
              </motion.div>

              <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                  Future of
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  Resume Intelligence
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                Harness the power of <span className="text-cyan-400 font-semibold">neural networks</span> and 
                <span className="text-purple-400 font-semibold"> machine learning</span> to create resumes that 
                don't just pass ATS systems—they <span className="text-emerald-400 font-semibold">dominate</span> them.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link
                  to="/register"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-3"
                >
                  <span>Start AI Analysis</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/analyze"
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <Eye className="h-5 w-5" />
                  <span>Try Demo</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    className="text-center"
                  >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="text-cyan-400 mb-2 flex justify-center">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
                <Cpu className="h-5 w-5 text-purple-400" />
                <span className="text-purple-300 font-medium">Advanced Technology</span>
              </div>
              
              <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                Next-Generation Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered platform combines cutting-edge technology with deep industry insights 
                to revolutionize how resumes are created and optimized.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                >
                  <div className={`bg-gradient-to-r ${feature.gradient} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full px-6 py-2 mb-6">
                  <Shield className="h-5 w-5 text-emerald-400" />
                  <span className="text-emerald-300 font-medium">Proven Results</span>
                </div>
                
                <h2 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8">
                  Why Choose Our AI Platform?
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join thousands of professionals who have transformed their careers with our 
                  revolutionary AI-powered resume optimization technology.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                    >
                      <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
                  
                  <div className="relative">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-bold text-white">AI Analysis Score</h3>
                      <div className="text-5xl font-bold text-emerald-400 animate-pulse">94</div>
                    </div>
                    
                    <div className="relative mb-8">
                      <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '94%' }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 h-4 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                        </motion.div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-gray-300">Neural keyword optimization</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-gray-300">ATS compatibility verified</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-gray-300">Industry-specific formatting</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-400" />
                        <span className="text-gray-300">Impact metrics enhanced</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2 mb-8">
                <Layers className="h-5 w-5 text-cyan-400" />
                <span className="text-cyan-300 font-medium">Ready to Transform?</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-8">
                Launch Your Career Into the Future
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join the revolution of AI-powered career advancement. Transform your resume 
                from ordinary to extraordinary with our cutting-edge neural analysis technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/register"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-6 rounded-2xl text-xl font-bold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-3"
                >
                  <Brain className="h-6 w-6 group-hover:animate-pulse" />
                  <span>Start AI Analysis Free</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <p className="text-gray-400 mt-6">
                No credit card required • 50+ optimization factors • Instant results
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;