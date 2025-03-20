
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsItem: React.FC<{ 
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  index: number;
}> = ({ title, excerpt, date, author, image, index }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-border/50 animate-fade-in opacity-0"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-foreground/60 mb-3">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-foreground/70 mb-4">{excerpt}</p>
        <Link 
          to="#" 
          className="inline-flex items-center text-primary font-medium hover:underline"
        >
          Read More <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

const News = () => {
  const { t } = useLanguage();
  
  const blogPosts = [
    {
      title: "New Waste Tracking Technology Deployed",
      excerpt: "Our team has successfully deployed IoT sensors in 15 retail locations to track waste in real-time.",
      date: "June 15, 2024",
      author: "Dr. Zeynep Kaya",
      image: "https://via.placeholder.com/600x400?text=Waste+Tracking"
    },
    {
      title: "Research Paper Published in Sustainability Journal",
      excerpt: "Our findings on circular waste management have been published in the International Journal of Sustainability.",
      date: "May 28, 2024",
      author: "Dr. Ahmet Yılmaz",
      image: "https://via.placeholder.com/600x400?text=Research+Paper"
    },
    {
      title: "Partnership with Local Municipalities Announced",
      excerpt: "We're excited to announce a new partnership with three municipalities to implement our waste traceability system.",
      date: "May 10, 2024",
      author: "Mustafa Can",
      image: "https://via.placeholder.com/600x400?text=Partnership"
    },
    {
      title: "AI Model Improves Waste Sorting Efficiency",
      excerpt: "Our machine learning algorithm has increased sorting efficiency by 35% in preliminary tests.",
      date: "April 22, 2024",
      author: "Ozan Yıldız",
      image: "https://via.placeholder.com/600x400?text=AI+Model"
    },
    {
      title: "Composting Workshop for Retail Partners",
      excerpt: "We conducted a workshop for our retail partners on implementing composting systems in their operations.",
      date: "April 5, 2024",
      author: "Elif Şahin",
      image: "https://via.placeholder.com/600x400?text=Composting+Workshop"
    },
    {
      title: "Project Featured in National Science Magazine",
      excerpt: "Our circular waste management project was featured in Turkey's leading science and technology magazine.",
      date: "March 18, 2024",
      author: "Selin Arslan",
      image: "https://via.placeholder.com/600x400?text=Magazine+Feature"
    },
  ];
  
  const mediaItems = [
    {
      title: "Project Announcement in National Press",
      source: "Daily News",
      date: "February 10, 2024",
      link: "#"
    },
    {
      title: "Interview with Project Director on Sustainability Channel",
      source: "EcoTalk TV",
      date: "March 5, 2024",
      link: "#"
    },
    {
      title: "Feature Article in Agricultural Technology Magazine",
      source: "AgriTech Monthly",
      date: "April 12, 2024",
      link: "#"
    },
    {
      title: "Radio Interview About Circular Economy",
      source: "Science Radio",
      date: "May 20, 2024",
      link: "#"
    }
  ];
  
  return (
    <AnimatedTransition>
      <div className="section-container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('news.title')}</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            {t('news.blog.text')}
          </p>
        </div>
        
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {t('news.blog.title')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <NewsItem 
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                author={post.author}
                image={post.image}
                index={index}
              />
            ))}
          </div>
        </div>
        
        <div className="bg-secondary/30 rounded-xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            {t('news.media.title')}
          </h2>
          
          <div className="space-y-4">
            {mediaItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 border border-border/50 animate-fade-in opacity-0"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium mb-1">{item.title}</h3>
                    <div className="flex items-center text-sm text-foreground/60">
                      <span className="mr-2">{item.source}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <Link 
                    to={item.link}
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedTransition>
  );
};

export default News;
