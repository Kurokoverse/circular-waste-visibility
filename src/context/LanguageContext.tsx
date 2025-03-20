
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Proje Hakkında',
    'nav.technology': 'Teknoloji',
    'nav.team': 'Ekip & Ortaklar',
    'nav.news': 'Haberler',
    'nav.contact': 'İletişim',
    
    // Hero Section
    'hero.title': 'Perakende Sektörü için Döngüsel Atık Yönetimi & İzlenebilirlik Sistemi',
    'hero.subtitle': 'TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı kapsamında desteklenen yenilikçi atık yönetimi projesi',
    'hero.cta': 'Daha Fazla Bilgi',
    
    // About
    'about.title': 'Proje Hakkında',
    'about.overview.title': 'Genel Bakış',
    'about.overview.text': 'Bu proje, perakende sektöründe döngüsel atık yönetimi ve izlenebilirlik sistemleri geliştirerek sürdürülebilir ve çevre dostu bir yaklaşım sunmayı amaçlamaktadır.',
    'about.importance.title': 'Neden Önemli?',
    'about.importance.text': 'Perakende sektöründe üretilen atıkların etkin yönetimi, hem çevresel sürdürülebilirlik açısından hem de ekonomik değer yaratma potansiyeli bakımından büyük önem taşımaktadır.',
    'about.funding.title': 'TÜBİTAK Desteği',
    'about.funding.text': 'Projemiz, TÜBİTAK 1832 Sanayide Yeşil Dönüşüm Çağrısı kapsamında desteklenmektedir.',
    
    // Technology
    'tech.title': 'Teknoloji & Yenilik',
    'tech.tracking.title': 'Akıllı Atık Takibi',
    'tech.tracking.text': 'Yapay zeka ve Nesnelerin İnterneti teknolojileri kullanılarak geliştirilen sistemimiz, atıkların kaynaktan nihai işlemeye kadar tüm süreçlerini izleme imkanı sunmaktadır.',
    'tech.blockchain.title': 'Blokzincir Teknolojisi',
    'tech.blockchain.text': 'Çözümümüz, atık toplama, işleme ve geri dönüşüm faaliyetlerinin değiştirilemez bir kaydını oluşturmak için blokzincir kullanır.',
    'tech.circular.title': 'Kompostlama & Döngüsel Ekonomi',
    'tech.circular.text': 'Organik atıkların yararlı kaynaklara dönüştürülmesi süreçleri, döngüsel ekonomi prensipleri çerçevesinde tasarlanmıştır.',
    'tech.analytics.title': 'Tahmine Dayalı Analitik',
    'tech.analytics.text': 'Makine öğrenimi algoritmaları, atık üretim modellerini tahmin etmeye ve toplama rotalarını optimize etmeye yardımcı olur.',
    'tech.dashboard.title': 'Gerçek Zamanlı Gösterge Paneli',
    'tech.dashboard.text': 'Entegre gösterge panelimiz, paydaşlara atık yönetimi performansı hakkında uygulanabilir içgörüler sağlar.',
    'tech.goals.title': 'Sürdürülebilirlik Hedefleri',
    'tech.goals.text': 'Projemiz, global yeşil girişimlerle uyumlu olarak sürdürülebilir kalkınma hedeflerine katkıda bulunmaktadır.',
    'tech.pipeline.title': 'İnovasyon Süreci',
    'tech.pipeline.description': 'Sürekli geliştirme sürecimiz, atık yönetimi teknolojisinin en ileri noktasında kalmamızı sağlar.',
    'tech.phase1.title': 'Aşama 1: Veri Toplama',
    'tech.phase1.description': 'Perakende kaynaklarından atık verilerini toplamak için IoT sensörleri ve mobil uygulamalar.',
    'tech.phase1.status': 'Tamamlandı: Q2 2023',
    'tech.phase2.title': 'Aşama 2: İzlenebilirlik Platformu',
    'tech.phase2.description': 'Atık takibi için blokzincir tabanlı izlenebilirlik platformunun geliştirilmesi.',
    'tech.phase2.status': 'Devam Ediyor: Q3 2024',
    'tech.phase3.title': 'Aşama 3: Döngüsel Ekonomi Entegrasyonu',
    'tech.phase3.description': 'Döngüyü kapatmak için atık üreticilerini geri dönüştürücüler ve kompostlayıcılarla bağlayın.',
    'tech.phase3.status': 'Planlanan: Q1 2025',
    'tech.phase4.title': 'Aşama 4: Gelişmiş Analitikler',
    'tech.phase4.description': 'Atık azaltma önerileri için makine öğreniminin uygulanması.',
    'tech.phase4.status': 'Planlanan: Q3 2025',
    
    // Team
    'team.title': 'Ekip & Ortaklar',
    'team.contributors.title': 'Proje Ekibi',
    'team.contributors.text': 'Alanında uzman akademisyenler, mühendisler ve araştırmacılardan oluşan ekibimiz.',
    'team.partners.title': 'Kurumsal Ortaklar',
    'team.partners.text': 'TÜBİTAK, Onursal Tarım, üniversiteler ve diğer paydaşlar.',
    
    // News
    'news.title': 'Haberler & Güncellemeler',
    'news.blog.title': 'Proje Blogu',
    'news.blog.text': 'Araştırma güncellemeleri, bulgular ve vaka çalışmaları.',
    'news.media.title': 'Medya Haberleri',
    'news.media.text': 'Basın yayınları ve bilimsel makaleler.',
    
    // Contact
    'contact.title': 'İletişim',
    'contact.form.title': 'Bize Ulaşın',
    'contact.form.name': 'İsim',
    'contact.form.email': 'E-posta',
    'contact.form.message': 'Mesaj',
    'contact.form.submit': 'Gönder',
    'contact.form.success': 'Mesajınız başarıyla gönderildi.',
    'contact.form.error': 'Bir hata oluştu. Lütfen tekrar deneyin.',
    
    // Footer
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Kullanım Şartları',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About the Project',
    'nav.technology': 'Technology',
    'nav.team': 'Team & Partners',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Circular Waste Management & Traceability System for Retail Sector',
    'hero.subtitle': 'An innovative waste management project supported under TÜBİTAK 1832 Green Transformation in Industry Call',
    'hero.cta': 'Learn More',
    
    // About
    'about.title': 'About the Project',
    'about.overview.title': 'Overview',
    'about.overview.text': 'This project aims to provide a sustainable and environmentally friendly approach by developing circular waste management and traceability systems in the retail sector.',
    'about.importance.title': 'Why It Matters',
    'about.importance.text': 'Effective management of waste generated in the retail sector is of great importance both in terms of environmental sustainability and potential for creating economic value.',
    'about.funding.title': 'TÜBİTAK Support',
    'about.funding.text': 'Our project is supported under the TÜBİTAK 1832 Green Transformation in Industry Call.',
    
    // Technology
    'tech.title': 'Technology & Innovation',
    'tech.tracking.title': 'Smart Waste Tracking',
    'tech.tracking.text': 'Our system, developed using artificial intelligence and Internet of Things technologies, provides the ability to track all processes of waste from source to final processing.',
    'tech.blockchain.title': 'Blockchain Technology',
    'tech.blockchain.text': 'Our solution uses blockchain to create an immutable record of waste collection, processing, and recycling activities.',
    'tech.circular.title': 'Composting & Circular Economy',
    'tech.circular.text': 'The processes of converting organic waste into useful resources are designed within the framework of circular economy principles.',
    'tech.analytics.title': 'Predictive Analytics',
    'tech.analytics.text': 'Machine learning algorithms help predict waste generation patterns and optimize collection routes.',
    'tech.dashboard.title': 'Real-time Dashboard',
    'tech.dashboard.text': 'Our integrated dashboard provides stakeholders with actionable insights about waste management performance.',
    'tech.goals.title': 'Sustainability Goals',
    'tech.goals.text': 'Our project contributes to sustainable development goals in line with global green initiatives.',
    'tech.pipeline.title': 'Innovation Pipeline',
    'tech.pipeline.description': 'Our continuous development process ensures that we stay at the cutting edge of waste management technology.',
    'tech.phase1.title': 'Phase 1: Data Collection',
    'tech.phase1.description': 'IoT sensors and mobile apps to collect waste data from retail sources.',
    'tech.phase1.status': 'Completed: Q2 2023',
    'tech.phase2.title': 'Phase 2: Traceability Platform',
    'tech.phase2.description': 'Development of blockchain-based traceability platform for waste tracking.',
    'tech.phase2.status': 'In Progress: Q3 2024',
    'tech.phase3.title': 'Phase 3: Circular Economy Integration',
    'tech.phase3.description': 'Connect waste producers with recyclers and composters to close the loop.',
    'tech.phase3.status': 'Planned: Q1 2025',
    'tech.phase4.title': 'Phase 4: Advanced Analytics',
    'tech.phase4.description': 'Implementation of machine learning for waste reduction recommendations.',
    'tech.phase4.status': 'Planned: Q3 2025',
    
    // Team
    'team.title': 'Team & Partners',
    'team.contributors.title': 'Project Team',
    'team.contributors.text': 'Our team consists of academics, engineers, and researchers who are experts in their fields.',
    'team.partners.title': 'Institutional Partners',
    'team.partners.text': 'TÜBİTAK, Onursal Tarım, universities, and other stakeholders.',
    
    // News
    'news.title': 'News & Updates',
    'news.blog.title': 'Project Blog',
    'news.blog.text': 'Research updates, findings, and case studies.',
    'news.media.title': 'Media Coverage',
    'news.media.text': 'Press releases and scientific articles.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.form.title': 'Get in Touch',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Submit',
    'contact.form.success': 'Your message has been sent successfully.',
    'contact.form.error': 'An error occurred. Please try again.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('tr');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
