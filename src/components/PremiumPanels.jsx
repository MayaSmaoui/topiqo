// src/components/PremiumPanels.jsx
import { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import createRoadmapAnim from '../assets/creating_roadmap.json';
import './PremiumPanels.css';

// Import your video files - adjust paths as needed
const VIDEOS = {
  graphs: '/videos2/graphs.mp4',
  pronounciation: '/videos2/pronounciation.mp4',
  barchart: '/videos2/barchart.mp4',
  truefalse: '/videos2/truefalse.mp4',
  sentencetranslation: '/videos2/sentencetranslation.mp4',
  completethecode: '/videos2/completethecode.mp4',
  codequestion: '/videos2/codequestion.mp4',
  ordering: '/videos2/ordering.mp4',
  connectpairs: '/videos2/connectpairs.mp4',
};

const TEXTS = {
  fr: {
    // Panel 1: Features Slideshow
    adaptsTitle: "S'adapte à ce que tu veux apprendre",
    slides: {
      graphs: "Graphiques Interactifs",
      pronunciation: "Apprends à Prononcer",
      barchart: "Diagrammes Visuels",
      truefalse: "Quiz Vrai ou Faux",
      translation: "Traduction de Phrases",
      completecode: "Complète le Code",
      codequestion: "Questions de Code",
      ordering: "Remets dans l'Ordre",
      matchpairs: "Relie les Paires",
    },

    // Panel 2: Upload
    uploadTitle: "Importe tes cours, complète le parcours, réussis ton examen.",
    uploadValue: "Moins cher qu'un prof particulier, plus personnalisé que les autres apps.",

    // Panel 3: Roadmap
    roadmapTitle: "Ton parcours personnalisé",
    roadmapSubtitle: "Progresse étape par étape avec des leçons adaptées à toi",
    roadmapValue: "Moins cher qu'un prof particulier, plus personnalisé que les autres apps.",
    roadmapItems: [
      { title: "Introduction", subtitle: "Concepts de base" },
      { title: "Principes Clés", subtitle: "Fondations essentielles" },
      { title: "Pratique", subtitle: "Applique tes connaissances" },
      { title: "Avancé", subtitle: "Approfondissement" },
      { title: "Révision Finale", subtitle: "Préparation examen" },
    ],

    // Panel 4: Download
    downloadTitle: "Prêt à commencer ?",
    downloadSubtitle: "Télécharge Topiqo et commence à progresser dès aujourd'hui.",
    appStore: "App Store",
    playStore: "Play Store",
    webApp: "Web App",
    comingSoon: "Bientôt",
  },
  en: {
    // Panel 1: Features Slideshow
    adaptsTitle: "Adapts to what you want to learn",
    slides: {
      graphs: "Interactive Graphs",
      pronunciation: "Learn to Pronounce",
      barchart: "Visual Bar Charts",
      truefalse: "True or False Quizzes",
      translation: "Sentence Translation",
      completecode: "Complete the Code",
      codequestion: "Code Questions",
      ordering: "Put in Order",
      matchpairs: "Match Pairs",
    },

    // Panel 2: Upload
    uploadTitle: "Upload your notes, complete the roadmap, ace your exam.",
    uploadValue: "Cheaper than a private tutor, more personalised than other apps.",

    // Panel 3: Roadmap
    roadmapTitle: "Your personal learning path",
    roadmapSubtitle: "Progress step by step with lessons that adapt to you",
    roadmapValue: "Cheaper than a private tutor, more personalised than other apps.",
    roadmapItems: [
      { title: "Introduction", subtitle: "Basic concepts" },
      { title: "Key Principles", subtitle: "Core foundations" },
      { title: "Practice", subtitle: "Apply knowledge" },
      { title: "Advanced", subtitle: "Deep dive" },
      { title: "Final Review", subtitle: "Exam prep" },
    ],

    // Panel 4: Download
    downloadTitle: "Ready to get started?",
    downloadSubtitle: "Download Topiqo and start making progress today.",
    appStore: "App Store",
    playStore: "Play Store",
    webApp: "Web App",
    comingSoon: "Coming Soon",
  }
};

const SLIDESHOW_ITEMS = [
  { key: 'graphs', video: VIDEOS.graphs },
  { key: 'pronunciation', video: VIDEOS.pronounciation },
  { key: 'barchart', video: VIDEOS.barchart },
  { key: 'truefalse', video: VIDEOS.truefalse },
  { key: 'translation', video: VIDEOS.sentencetranslation },
  { key: 'completecode', video: VIDEOS.completethecode },
  { key: 'codequestion', video: VIDEOS.codequestion },
  { key: 'ordering', video: VIDEOS.ordering },
  { key: 'matchpairs', video: VIDEOS.connectpairs },
];

// Phone mockup with video
function PhoneVideo({ videoSrc, isActive }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive]);

  return (
    <div className="phone-mockup">
      <div className="phone-bezel">
        <div className="phone-notch">
          <div className="phone-speaker"></div>
          <div className="phone-camera"></div>
        </div>
        <div className="phone-screen">
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            loop
            className="phone-video"
          />
        </div>
        <div className="phone-home-indicator"></div>
      </div>
    </div>
  );
}

// Scroll indicator
function ScrollIndicator({ text }) {
  return (
    <div className="scroll-indicator">
      <span>{text}</span>
      <div className="scroll-chevron">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

// Panel 1: Features Slideshow
function FeaturesPanel({ t, visible }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const slideshowRef = useRef(null);

  useEffect(() => {
    if (!visible) return;
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % SLIDESHOW_ITEMS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [visible, currentSlide]);

  useEffect(() => {
    if (visible) setCurrentSlide(0);
  }, [visible]);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) setCurrentSlide(prev => (prev + 1) % SLIDESHOW_ITEMS.length);
      else setCurrentSlide(prev => (prev - 1 + SLIDESHOW_ITEMS.length) % SLIDESHOW_ITEMS.length);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const mouseStartX = useRef(null);
  const isDragging = useRef(false);
  const handleMouseDown = (e) => { mouseStartX.current = e.clientX; isDragging.current = true; };
  const handleMouseMove = () => {};
  const handleMouseUp = (e) => {
    if (!isDragging.current || mouseStartX.current === null) return;
    const diff = mouseStartX.current - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) setCurrentSlide(prev => (prev + 1) % SLIDESHOW_ITEMS.length);
      else setCurrentSlide(prev => (prev - 1 + SLIDESHOW_ITEMS.length) % SLIDESHOW_ITEMS.length);
    }
    mouseStartX.current = null;
    isDragging.current = false;
  };
  const handleMouseLeave = () => { isDragging.current = false; mouseStartX.current = null; };

  return (
    <section className={`premium-panel features-panel ${visible ? 'visible' : ''}`}>
      <div className="panel-bg-circles">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>
      
      <div className="panel-content">
        <h2 className="panel-title purple">{t.adaptsTitle}</h2>
        
        <div className="slide-title-container">
          {SLIDESHOW_ITEMS.map((item, index) => (
            <span 
              key={item.key}
              className={`slide-title ${currentSlide === index ? 'active' : ''}`}
            >
              {t.slides[item.key]}
            </span>
          ))}
        </div>
        
        <div 
          className="phone-slideshow"
          ref={slideshowRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: 'grab', userSelect: 'none' }}
        >
          {SLIDESHOW_ITEMS.map((item, index) => (
            <div 
              key={item.key}
              className={`slideshow-item ${currentSlide === index ? 'active' : ''}`}
            >
              <PhoneVideo videoSrc={item.video} isActive={currentSlide === index && visible} />
            </div>
          ))}
        </div>
        
        <div className="slideshow-dots">
          {SLIDESHOW_ITEMS.map((item, index) => (
            <button
              key={item.key}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Panel 2: Upload (Lottie + chips)
function UploadPanel({ t, visible }) {
  const [showChips, setShowChips] = useState(false);
  const [showValue, setShowValue] = useState(false);

  useEffect(() => {
    const timeouts = [];
    const clearAll = () => timeouts.forEach(clearTimeout);

    if (visible) {
      setShowChips(false);
      setShowValue(false);
      timeouts.push(setTimeout(() => setShowChips(true), 600));
      timeouts.push(setTimeout(() => setShowValue(true), 1000));
    } else {
      setShowChips(false);
      setShowValue(false);
    }

    return () => clearAll();
  }, [visible]);

  return (
    <section className={`premium-panel upload-panel ${visible ? 'visible' : ''}`}>
      <div className="panel-bg-circles">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
      </div>
      
      <div className="panel-content">
        <h2 className="panel-title purple">{t.uploadTitle}</h2>

        <div className="upload-lottie-wrapper">
          <Lottie
            animationData={createRoadmapAnim}
            loop={true}
            className="upload-lottie"
            aria-label="Create roadmap animation"
          />
        </div>

        <div className={`upload-chips ${showChips ? 'show' : ''}`}>
          <div className="upload-chip"><span>📷</span> Photos</div>
          <div className="upload-chip"><span>📄</span> PDFs</div>
          <div className="upload-chip"><span>🎤</span> Audio</div>
          <div className="upload-chip"><span>📊</span> PowerPoint</div>
          <div className="upload-chip"><span>📝</span> Word</div>
          <div className="upload-chip"><span>📈</span> Excel</div>
          <div className="upload-chip"><span>📃</span> Text</div>
          <div className="upload-chip"><span>💡</span> Just an idea</div>
        </div>

        <p className={`roadmap-value ${showValue ? 'show' : ''}`}>{t.uploadValue}</p>
      </div>
    </section>
  );
}

// Panel 3: Roadmap (nodes only)
function RoadmapPanel({ t, visible }) {
  const [visibleNodes, setVisibleNodes] = useState([]);
  const [showText, setShowText] = useState(false);

  const items = [
    { title: t.roadmapItems[0].title, subtitle: t.roadmapItems[0].subtitle, status: 'completed' },
    { title: t.roadmapItems[1].title, subtitle: t.roadmapItems[1].subtitle, status: 'completed' },
    { title: t.roadmapItems[2].title, subtitle: t.roadmapItems[2].subtitle, status: 'current' },
    { title: t.roadmapItems[3].title, subtitle: t.roadmapItems[3].subtitle, status: 'locked' },
    { title: t.roadmapItems[4].title, subtitle: t.roadmapItems[4].subtitle, status: 'locked' },
  ];

  const offsets = [0, 15, 25, 15, 0];

  useEffect(() => {
    const timeouts = [];
    const clearAll = () => timeouts.forEach(clearTimeout);

    if (visible) {
      setVisibleNodes([]);
      setShowText(false);
      
      items.forEach((_, index) => {
        timeouts.push(setTimeout(() => {
          setVisibleNodes(prev => [...prev, index]);
        }, 400 + index * 250));
      });

      timeouts.push(setTimeout(() => setShowText(true), 400 + items.length * 250 + 300));
    } else {
      setVisibleNodes([]);
      setShowText(false);
    }

    return () => clearAll();
  }, [visible]);

  return (
    <section className={`premium-panel roadmap-panel ${visible ? 'visible' : ''}`}>
      <div className="panel-bg-circles">
        <div className="bg-circle circle-roadmap"></div>
      </div>
      
      <div className="panel-content">
        <h2 className="panel-title purple">{t.roadmapTitle}</h2>
        <p className="panel-subtitle">{t.roadmapSubtitle}</p>
        
        <div className="roadmap-container">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`roadmap-node ${item.status} ${visibleNodes.includes(index) ? 'show' : ''}`}
              style={{ '--offset': `${offsets[index]}px` }}
            >
              <div className={`depth-button ${item.status}`}>
                <div className="depth-button-shadow"></div>
                <div className="depth-button-face">
                  {item.status === 'completed' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12L10 17L19 8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {item.status === 'current' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                    </svg>
                  )}
                  {item.status === 'locked' && (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <rect x="5" y="11" width="14" height="10" rx="2" stroke="white" strokeWidth="2"/>
                      <path d="M8 11V7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </div>
              </div>
              
              <div className="node-content">
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <p className={`roadmap-value ${showText ? 'show' : ''}`}>{t.roadmapValue}</p>
      </div>
    </section>
  );
}

// Panel 4: Download
function DownloadPanel({ t, visible }) {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showAppStore, setShowAppStore] = useState(false);
  const [showPlayStore, setShowPlayStore] = useState(false);
  const [showWebApp, setShowWebApp] = useState(false);

  useEffect(() => {
    const timeouts = [];
    const clearAll = () => timeouts.forEach(clearTimeout);

    if (visible) {
      setShowTitle(false);
      setShowSubtitle(false);
      setShowAppStore(false);
      setShowPlayStore(false);
      setShowWebApp(false);

      timeouts.push(setTimeout(() => setShowTitle(true), 200));
      timeouts.push(setTimeout(() => setShowSubtitle(true), 450));
      timeouts.push(setTimeout(() => setShowAppStore(true), 700));
      timeouts.push(setTimeout(() => setShowPlayStore(true), 950));
      timeouts.push(setTimeout(() => setShowWebApp(true), 1200));
    } else {
      setShowTitle(false);
      setShowSubtitle(false);
      setShowAppStore(false);
      setShowPlayStore(false);
      setShowWebApp(false);
    }

    return () => clearAll();
  }, [visible]);

  return (
    <section className={`premium-panel download-panel ${visible ? 'visible' : ''}`}>
      <div className="panel-content" style={{ opacity: 1, transform: 'none' }}>
        <h2 className={`panel-title purple download-anim ${showTitle ? 'show' : ''}`}>{t.downloadTitle}</h2>
        <p className={`panel-subtitle download-anim ${showSubtitle ? 'show' : ''}`}>{t.downloadSubtitle}</p>
        
        <div className="download-buttons-vertical">
          <a 
            href="https://apps.apple.com/us/app/topiqo/id6748356744" 
            className={`download-button-large download-anim ${showAppStore ? 'show' : ''}`} 
            target="_blank" 
            rel="noreferrer"
          >
            <svg className="store-icon-large" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            {t.appStore}
          </a>
          <div className={`download-button-large disabled download-anim ${showPlayStore ? 'show' : ''}`}>
            <svg className="store-icon-large" viewBox="0 0 24 24" fill="currentColor"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/></svg>
            {t.playStore}
            <span className="coming-soon-badge">{t.comingSoon}</span>
          </div>
          <div className={`download-button-large disabled download-anim ${showWebApp ? 'show' : ''}`}>
            <svg className="store-icon-large" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            {t.webApp}
            <span className="coming-soon-badge">{t.comingSoon}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main component
export default function PremiumPanels({ lang = 'fr' }) {
  const t = TEXTS[lang] || TEXTS.fr;
  const [visiblePanels, setVisiblePanels] = useState({
    upload: false,
    roadmap: false,
    features: false,
    download: false,
  });
  
  const panelRefs = {
    upload: useRef(null),
    roadmap: useRef(null),
    features: useRef(null),
    download: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const panelId = entry.target.dataset.panel;
          setVisiblePanels(prev => ({ ...prev, [panelId]: entry.isIntersecting }));
        });
      },
      { threshold: 0.2 }
    );

    Object.entries(panelRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.dataset.panel = key;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="premium-panels-container">
      <div ref={panelRefs.upload}>
        <UploadPanel t={t} visible={visiblePanels.upload} />
      </div>
      <div ref={panelRefs.roadmap}>
        <RoadmapPanel t={t} visible={visiblePanels.roadmap} />
      </div>
      <div ref={panelRefs.features}>
        <FeaturesPanel t={t} visible={visiblePanels.features} />
      </div>
      <div ref={panelRefs.download}>
        <DownloadPanel t={t} visible={visiblePanels.download} />
      </div>
    </div>
  );
}