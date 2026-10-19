/**
 * PulsoGen IT Academy - Interactive Core Script
 * Vanilla JavaScript for modern performance, responsiveness, and accessibility
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. DATA REPOSITORY (From Official Brochure) ---
  const salaryData = [
    // 1. Foundation Courses — Linux, SQL & Python
    {
      role: 'Linux Support Engineer',
      track: 'foundation',
      trackName: 'Foundation',
      fresherMin: 2.5,
      fresherMax: 4.5,
      expMin: 5.0,
      expMax: 10.0,
      skills: 'Linux CLI, Bash, File Permissions, System Troubleshooting'
    },
    {
      role: 'Technical Support Engineer',
      track: 'foundation',
      trackName: 'Foundation',
      fresherMin: 2.5,
      fresherMax: 4.5,
      expMin: 5.0,
      expMax: 9.0,
      skills: 'Linux, Networking Basics, SQL Diagnostics, Incident Mgt'
    },
    {
      role: 'SQL / Database Support Engineer',
      track: 'foundation',
      trackName: 'Foundation',
      fresherMin: 3.0,
      fresherMax: 5.0,
      expMin: 6.0,
      expMax: 12.0,
      skills: 'MySQL, PostgreSQL, Query Optimization, Backups, Indexing'
    },
    {
      role: 'Junior Python Developer',
      track: 'foundation',
      trackName: 'Foundation',
      fresherMin: 3.0,
      fresherMax: 6.0,
      expMin: 7.0,
      expMax: 15.0,
      skills: 'Python Core, OOPs, Data Structures, REST APIs, Automation'
    },
    {
      role: 'Junior Data Analyst',
      track: 'foundation',
      trackName: 'Foundation',
      fresherMin: 3.5,
      fresherMax: 6.0,
      expMin: 7.0,
      expMax: 12.0,
      skills: 'SQL Queries, Python Pandas, Matplotlib, Data Cleaning'
    },
    {
      role: 'Application Support Engineer',
      track: 'foundation',
      trackName: 'Foundation',
      fresherMin: 3.0,
      fresherMax: 5.0,
      expMin: 6.0,
      expMax: 12.0,
      skills: 'Linux Server Logs, SQL Debugging, Web Application Monitoring'
    },

    // 2. Foundation + Intermediate Courses — Linux, SQL, Python, Data Eng, DevOps, Analytics
    {
      role: 'Data Analyst',
      track: 'intermediate',
      trackName: 'Foundation + Intermediate',
      fresherMin: 3.5,
      fresherMax: 6.0,
      expMin: 7.0,
      expMax: 12.0,
      skills: 'SQL, Python, PowerBI / Tableau, Statistical Data Analysis'
    },
    {
      role: 'Business Intelligence (BI) Analyst',
      track: 'intermediate',
      trackName: 'Foundation + Intermediate',
      fresherMin: 4.0,
      fresherMax: 7.0,
      expMin: 8.0,
      expMax: 13.0,
      skills: 'Data Modeling, DAX, KPI Dashboards, SQL Data Warehousing'
    },
    {
      role: 'Junior Data Engineer',
      track: 'intermediate',
      trackName: 'Foundation + Intermediate',
      fresherMin: 4.0,
      fresherMax: 8.0,
      expMin: 11.0,
      expMax: 20.0,
      skills: 'Apache Spark, Airflow, Python, Data Warehousing, SQL Pipelines'
    },
    {
      role: 'Junior DevOps Engineer',
      track: 'intermediate',
      trackName: 'Foundation + Intermediate',
      fresherMin: 4.0,
      fresherMax: 7.0,
      expMin: 10.0,
      expMax: 20.0,
      skills: 'Docker, Kubernetes, Linux Admin, CI/CD Pipelines, Git'
    },
    {
      role: 'Python Automation Engineer',
      track: 'intermediate',
      trackName: 'Foundation + Intermediate',
      fresherMin: 3.5,
      fresherMax: 6.0,
      expMin: 7.0,
      expMax: 15.0,
      skills: 'Selenium, Requests, PyTest, Automated Web & API Testing'
    },
    {
      role: 'ETL Developer',
      track: 'intermediate',
      trackName: 'Foundation + Intermediate',
      fresherMin: 4.0,
      fresherMax: 7.0,
      expMin: 8.0,
      expMax: 16.0,
      skills: 'Batch & Stream Processing, SQL ETL, Data Staging, Spark'
    },
    {
      role: 'Generative AI Application Developer',
      track: 'intermediate',
      trackName: 'Foundation + Intermediate',
      fresherMin: 5.0,
      fresherMax: 10.0,
      expMin: 12.0,
      expMax: 25.0,
      skills: 'Python, OpenAI APIs, LangChain, Prompt Eng, Vector Stores'
    },
    {
      role: 'AI Agent Application Developer',
      track: 'intermediate',
      trackName: 'Foundation + Intermediate',
      fresherMin: 5.0,
      fresherMax: 10.0,
      expMin: 12.0,
      expMax: 25.0,
      skills: 'Agentic Workflows, Tool Calling, Autonomous Agent Architectures'
    },

    // 3. Advanced Courses — ML, Deep Learning, GenAI & Agentic AI, GCP
    {
      role: 'Machine Learning Engineer',
      track: 'advanced',
      trackName: 'Advanced',
      fresherMin: 6.0,
      fresherMax: 12.0,
      expMin: 12.0,
      expMax: 25.0,
      skills: 'Scikit-learn, Feature Engineering, Model Deployment, Python'
    },
    {
      role: 'Junior Data Scientist',
      track: 'advanced',
      trackName: 'Advanced',
      fresherMin: 5.0,
      fresherMax: 9.0,
      expMin: 12.0,
      expMax: 20.0,
      skills: 'Predictive Modeling, Statistical Inference, Python, ML'
    },
    {
      role: 'Deep Learning Engineer',
      track: 'advanced',
      trackName: 'Advanced',
      fresherMin: 5.0,
      fresherMax: 10.0,
      expMin: 12.0,
      expMax: 24.0,
      skills: 'PyTorch, TensorFlow, CNNs, RNNs, Transformers'
    },
    {
      role: 'NLP Engineer',
      track: 'advanced',
      trackName: 'Advanced',
      fresherMin: 5.0,
      fresherMax: 10.0,
      expMin: 12.0,
      expMax: 25.0,
      skills: 'HuggingFace, Tokenization, BERT, Embeddings, Text Mining'
    },
    {
      role: 'Computer Vision Engineer',
      track: 'advanced',
      trackName: 'Advanced',
      fresherMin: 5.0,
      fresherMax: 10.0,
      expMin: 12.0,
      expMax: 24.0,
      skills: 'OpenCV, YOLO, Object Detection, Image Segmentation'
    },
    {
      role: 'Generative AI Engineer',
      track: 'advanced',
      trackName: 'Advanced',
      fresherMin: 6.0,
      fresherMax: 12.0,
      expMin: 15.0,
      expMax: 30.0,
      skills: 'LLM Fine-Tuning, Advanced RAG, Quantization, vLLM, Evaluation'
    },
    {
      role: 'LLM Application Developer',
      track: 'advanced',
      trackName: 'Advanced',
      fresherMin: 6.0,
      fresherMax: 12.0,
      expMin: 12.0,
      expMax: 25.0,
      skills: 'LlamaIndex, LangChain, Pinecone, Hybrid Search, FastAPIs'
    },
    {
      role: 'AI Agent / Agentic AI Developer',
      track: 'advanced',
      trackName: 'Advanced',
      fresherMin: 5.0,
      fresherMax: 10.0,
      expMin: 12.0,
      expMax: 25.0,
      skills: 'Multi-Agent Frameworks (CrewAI/AutoGen/LangGraph), ReAct loop'
    },
    {
      role: 'MLOps Engineer',
      track: 'advanced',
      trackName: 'Advanced',
      fresherMin: 5.0,
      fresherMax: 10.0,
      expMin: 12.0,
      expMax: 25.0,
      skills: 'GCP Vertex AI, MLflow, Docker, CI/CD for ML, Model Monitoring'
    }
  ];

  // --- 2. HEADER SCROLL & PROGRESS BAR ---
  const header = document.querySelector('.site-header');
  const scrollProgress = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;

    if (scrollProgress) {
      scrollProgress.style.width = `${scrolled}%`;
    }

    if (scrollTop > 80) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (scrollTop > 500) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 3. MOBILE MENU TOGGLE ---
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileNavOverlay = document.getElementById('mobileNavOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    hamburgerBtn?.classList.add('active');
    hamburgerBtn?.setAttribute('aria-expanded', 'true');
    mobileNavDrawer?.classList.add('open');
    mobileNavOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    hamburgerBtn?.classList.remove('active');
    hamburgerBtn?.setAttribute('aria-expanded', 'false');
    mobileNavDrawer?.classList.remove('open');
    mobileNavOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburgerBtn?.addEventListener('click', () => {
    const isOpen = mobileNavDrawer?.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileNavOverlay?.addEventListener('click', closeMobileMenu);
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // --- 4. SCROLL SPY FOR NAV LINKS ---
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopNavLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => navObserver.observe(section));

  // --- 5. SALARY MATRIX: DYNAMIC FILTER & SEARCH ---
  const roleTableBody = document.getElementById('roleTableBody');
  const roleSearchInput = document.getElementById('roleSearchInput');
  const trackFilterButtons = document.querySelectorAll('.track-filter-btn');
  const currentTotalRoles = document.getElementById('currentTotalRoles');

  let activeTrack = 'all';
  let searchTerm = '';

  function renderSalaryTable() {
    if (!roleTableBody) return;

    const filtered = salaryData.filter(item => {
      const matchesTrack = activeTrack === 'all' || item.track === activeTrack;
      const matchesSearch = item.role.toLowerCase().includes(searchTerm) ||
                            item.skills.toLowerCase().includes(searchTerm) ||
                            item.trackName.toLowerCase().includes(searchTerm);
      return matchesTrack && matchesSearch;
    });

    if (currentTotalRoles) {
      currentTotalRoles.textContent = `${filtered.length} Roles Listed`;
    }

    if (filtered.length === 0) {
      roleTableBody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align: center; padding: 3rem 1rem; color: var(--slate-500);">
            <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍</div>
            <p style="font-weight: 700; color: var(--slate-800);">No job roles match your query.</p>
            <p style="font-size: 0.85rem;">Try searching for "DevOps", "Python", "SQL", "Cloud" or click "All Tracks".</p>
          </td>
        </tr>
      `;
      return;
    }

    // Maximum theoretical top salary in brochure is 30 LPA for percentage scaling
    const maxReferenceLPA = 30;

    roleTableBody.innerHTML = filtered.map(item => {
      const fresherPercent = (item.fresherMax / maxReferenceLPA) * 100;
      const expPercent = (item.expMax / maxReferenceLPA) * 100;
      
      let badgeClass = 'badge-sky';
      if (item.track === 'intermediate') badgeClass = 'badge-amber';
      if (item.track === 'advanced') badgeClass = 'badge-emerald';

      return `
        <tr>
          <td>
            <div class="role-title-cell">
              <span>${item.role}</span>
              <span class="role-badge-tag">${item.skills}</span>
            </div>
          </td>
          <td>
            <span class="badge ${badgeClass}">${item.trackName}</span>
          </td>
          <td>
            <span class="salary-range-badge" style="color: var(--sky-700);">
              ₹${item.fresherMin}–${item.fresherMax} LPA
            </span>
          </td>
          <td>
            <span class="salary-range-badge" style="color: var(--slate-900);">
              ₹${item.expMin}–${item.expMax} LPA
            </span>
          </td>
          <td>
            <div class="salary-bar-container">
              <div class="salary-bar-bg" title="Growth from ₹${item.fresherMin}L (Fresher) to ₹${item.expMax}L (3-5 Yrs)">
                <div class="salary-bar-fill" style="width: ${expPercent}%;"></div>
              </div>
              <div class="salary-bar-labels">
                <span>0 yr: ₹${item.fresherMin}L</span>
                <span>5 yrs: ₹${item.expMax}L</span>
              </div>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  // Event Listeners for Filters
  trackFilterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      trackFilterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTrack = btn.dataset.track;
      renderSalaryTable();
    });
  });

  if (roleSearchInput) {
    roleSearchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      renderSalaryTable();
    });
  }

  // Initial table render
  renderSalaryTable();

  // --- 6. INTERACTIVE CAREER ROI & CTC CALCULATOR ---
  const calcTrackInputs = document.querySelectorAll('input[name="calcTrack"]');
  const calcExpInputs = document.querySelectorAll('input[name="calcExp"]');
  const calcStartingCtc = document.getElementById('calcStartingCtc');
  const calcGrowthCtc = document.getElementById('calcGrowthCtc');
  const calcDuration = document.getElementById('calcDuration');
  const calcProjectsCount = document.getElementById('calcProjectsCount');
  const calcTrackPill = document.getElementById('calcTrackPill');

  const trackCalculatorData = {
    foundation: {
      title: 'Foundation Track (Linux, SQL & Python)',
      fresherStart: '₹2.5 – 6.0 LPA',
      fresherGrowth: '₹5.0 – 15.0 LPA in 3-5 Years',
      expStart: '₹4.5 – 7.5 LPA',
      expGrowth: '₹8.0 – 15.0 LPA in 3 Years',
      duration: '10 Weeks (Part-time / Weekend)',
      projects: '4 Real-World Capstones'
    },
    intermediate: {
      title: 'Foundation + Intermediate (Data Eng, DevOps, Analytics)',
      fresherStart: '₹3.5 – 10.0 LPA',
      fresherGrowth: '₹7.0 – 25.0 LPA in 3-5 Years',
      expStart: '₹7.0 – 14.0 LPA',
      expGrowth: '₹14.0 – 25.0 LPA in 3 Years',
      duration: '16 Weeks (Hands-on Labs & Cloud)',
      projects: '6 Production Cloud Pipelines'
    },
    advanced: {
      title: 'Advanced Track (ML, Deep Learning, GenAI & GCP)',
      fresherStart: '₹5.0 – 12.0 LPA',
      fresherGrowth: '₹12.0 – 30.0 LPA in 3-5 Years',
      expStart: '₹10.0 – 18.0 LPA',
      expGrowth: '₹18.0 – 30.0+ LPA in 3 Years',
      duration: '20 Weeks (Advanced Architecture Labs)',
      projects: '8 Enterprise GenAI & Agent Capstones'
    }
  };

  function updateCalculator() {
    const selectedTrack = document.querySelector('input[name="calcTrack"]:checked')?.value || 'intermediate';
    const selectedExp = document.querySelector('input[name="calcExp"]:checked')?.value || 'fresher';

    // Highlight radio cards
    document.querySelectorAll('.calc-radio-label').forEach(label => {
      const input = label.querySelector('input');
      if (input && input.checked) {
        label.classList.add('checked');
      } else {
        label.classList.remove('checked');
      }
    });

    const info = trackCalculatorData[selectedTrack];
    if (!info) return;

    if (calcTrackPill) calcTrackPill.textContent = info.title;
    if (selectedExp === 'fresher' || selectedExp === 'switcher') {
      if (calcStartingCtc) calcStartingCtc.textContent = info.fresherStart;
      if (calcGrowthCtc) calcGrowthCtc.textContent = `⚡ Projected: ${info.fresherGrowth}`;
    } else {
      if (calcStartingCtc) calcStartingCtc.textContent = info.expStart;
      if (calcGrowthCtc) calcGrowthCtc.textContent = `🚀 Projected: ${info.expGrowth}`;
    }

    if (calcDuration) calcDuration.textContent = info.duration;
    if (calcProjectsCount) calcProjectsCount.textContent = info.projects;
  }

  calcTrackInputs.forEach(input => input.addEventListener('change', updateCalculator));
  calcExpInputs.forEach(input => input.addEventListener('change', updateCalculator));
  updateCalculator();

  // --- 7. INTERACTIVE 3-STEP TRACK FINDER QUIZ ---
  const quizSteps = document.querySelectorAll('.quiz-step');
  const quizOptionBtns = document.querySelectorAll('.quiz-option-btn');
  const quizRestartBtn = document.getElementById('quizRestartBtn');
  const quizResultTitle = document.getElementById('quizResultTitle');
  const quizResultDesc = document.getElementById('quizResultDesc');
  const quizResultCta = document.getElementById('quizResultCta');

  let quizAnswers = { step1: '', step2: '', step3: '' };

  quizOptionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const step = parseInt(btn.dataset.step, 10);
      const val = btn.dataset.value;

      if (step === 1) quizAnswers.step1 = val;
      if (step === 2) quizAnswers.step2 = val;
      if (step === 3) quizAnswers.step3 = val;

      if (step < 3) {
        // Go to next step
        document.getElementById(`quizStep${step}`)?.classList.remove('active');
        document.getElementById(`quizStep${step + 1}`)?.classList.add('active');
      } else {
        // Calculate recommendation
        computeQuizResult();
      }
    });
  });

  function computeQuizResult() {
    document.getElementById('quizStep3')?.classList.remove('active');
    document.getElementById('quizStepResult')?.classList.add('active');

    // Logic: if they have programming and want GenAI/AI -> Advanced
    // If they want DevOps/Data Eng/Analytics -> Intermediate
    // If beginner/support -> Foundation
    let recommended = 'intermediate';

    if (quizAnswers.step1 === 'beginner' || quizAnswers.step2 === 'support') {
      recommended = 'foundation';
    } else if (quizAnswers.step2 === 'genai' || quizAnswers.step3 === 'agents' || quizAnswers.step1 === 'experienced') {
      recommended = 'advanced';
    } else {
      recommended = 'intermediate';
    }

    if (recommended === 'foundation') {
      if (quizResultTitle) quizResultTitle.textContent = 'Foundation Course: Linux, SQL & Python';
      if (quizResultDesc) {
        quizResultDesc.textContent = 'Ideal starting launchpad. Master operating system internals, structured data querying with SQL, and automated scripting in Python to qualify for Linux Support, SQL Support, and Junior Python Developer roles (₹2.5 – 6 LPA starting).';
      }
      if (quizResultCta) {
        quizResultCta.textContent = 'Enroll in Foundation Track';
        quizResultCta.setAttribute('href', '#courses');
      }
    } else if (recommended === 'intermediate') {
      if (quizResultTitle) quizResultTitle.textContent = 'Foundation + Intermediate Specialization';
      if (quizResultDesc) {
        quizResultDesc.textContent = 'The gold standard for high-growth tech careers. Master Data Engineering, Docker, Kubernetes, CI/CD, and basic GenAI app development to target Data Engineer, DevOps Engineer, and AI Developer positions (₹3.5 – 10 LPA starting; ₹7–25 LPA experienced).';
      }
      if (quizResultCta) {
        quizResultCta.textContent = 'Enroll in Intermediate Track';
        quizResultCta.setAttribute('href', '#courses');
      }
    } else {
      if (quizResultTitle) quizResultTitle.textContent = 'Advanced Track: ML, Deep Learning, GenAI & GCP';
      if (quizResultDesc) {
        quizResultDesc.textContent = 'Cutting-edge AI specialization. Build enterprise RAG, multi-agent frameworks (Agentic AI), LLM fine-tuning, and production MLOps on Google Cloud Platform to target GenAI Engineer and AI Agent Developer roles (₹5 – 12 LPA fresher; ₹12–30 LPA experienced).';
      }
      if (quizResultCta) {
        quizResultCta.textContent = 'Enroll in Advanced AI Track';
        quizResultCta.setAttribute('href', '#courses');
      }
    }
  }

  if (quizRestartBtn) {
    quizRestartBtn.addEventListener('click', () => {
      document.getElementById('quizStepResult')?.classList.remove('active');
      document.getElementById('quizStep1')?.classList.add('active');
      quizAnswers = { step1: '', step2: '', step3: '' };
    });
  }

  // --- 8. FAQ ACCORDION ---
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    const answerPanel = item.querySelector('.faq-answer-panel');

    questionBtn?.addEventListener('click', () => {
      const isExpanded = item.classList.contains('active');

      // Close all other accordions for clean UX
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          const otherPanel = otherItem.querySelector('.faq-answer-panel');
          otherBtn?.setAttribute('aria-expanded', 'false');
          if (otherPanel) otherPanel.style.maxHeight = '0px';
        }
      });

      if (isExpanded) {
        item.classList.remove('active');
        questionBtn.setAttribute('aria-expanded', 'false');
        if (answerPanel) answerPanel.style.maxHeight = '0px';
      } else {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
        if (answerPanel) answerPanel.style.maxHeight = `${answerPanel.scrollHeight}px`;
      }
    });
  });

  // Open first FAQ by default
  if (faqItems.length > 0) {
    const first = faqItems[0];
    const firstBtn = first.querySelector('.faq-question-btn');
    const firstPanel = first.querySelector('.faq-answer-panel');
    first.classList.add('active');
    firstBtn?.setAttribute('aria-expanded', 'true');
    if (firstPanel) firstPanel.style.maxHeight = `${firstPanel.scrollHeight}px`;
  }

  // --- 9. MODAL: SYLLABUS & BROCHURE DOWNLOAD ---
  const brochureModal = document.getElementById('brochureModal');
  const modalCloseBtns = document.querySelectorAll('.modal-close-trigger');
  const openModalBtns = document.querySelectorAll('.open-brochure-modal-btn');
  const brochureDownloadForm = document.getElementById('brochureDownloadForm');
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(msg, duration = 4500) {
    if (!toastNotice) return;
    if (toastMessage) toastMessage.textContent = msg;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, duration);
  }

  function openBrochureModal() {
    if (brochureModal) {
      brochureModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      const firstInput = brochureModal.querySelector('input');
      setTimeout(() => firstInput?.focus(), 100);
    }
  }

  function closeBrochureModal() {
    if (brochureModal) {
      brochureModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openBrochureModal();
    });
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', closeBrochureModal);
  });

  brochureModal?.addEventListener('click', (e) => {
    if (e.target === brochureModal) {
      closeBrochureModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && brochureModal?.classList.contains('open')) {
      closeBrochureModal();
    }
  });

  // Simulate Instant Brochure File Download
  function triggerClientBrochureDownload(studentName, track) {
    const brochureText = `=====================================================
PULSOGEN IT ACADEMY - OFFICIAL CAREER & SALARY BROCHURE
=====================================================
Prepared for: ${studentName}
Selected Track Interest: ${track}
Date: ${new Date().toLocaleDateString('en-IN')}

1. FOUNDATION COURSES (Linux, SQL & Python)
- Focus: System troubleshooting, query writing, python automation.
- Roles: Linux Support Engineer, SQL Support Engineer, Junior Python Developer.
- Starting CTC (Freshers): ₹2.5 - 6 LPA
- Experienced CTC (3-5 Years): ₹5 - 15 LPA

2. FOUNDATION + INTERMEDIATE COURSES (Data Eng, DevOps, Analytics)
- Focus: Spark, Airflow, Docker, Kubernetes, CI/CD, GenAI Apps.
- Roles: Data Analyst, BI Analyst, Jr Data Engineer, Jr DevOps Engineer.
- Starting CTC (Freshers): ₹3.5 - 10 LPA
- Experienced CTC (3-5 Years): ₹7 - 25 LPA

3. ADVANCED COURSES (ML, Deep Learning, GenAI, Agentic AI, GCP)
- Focus: LLMs, LangChain, Multi-Agent Systems, Vertex AI, MLOps.
- Roles: Machine Learning Engineer, Generative AI Engineer, AI Agent Developer.
- Starting CTC (Freshers): ₹5 - 12 LPA
- Experienced CTC (3-5 Years): ₹12 - 30 LPA

IMPORTANT NOTE ON SALARY & PLACEMENT:
Salary packages are indicative estimates for the Indian IT job market. Actual compensation depends on practical skills, projects, certifications, company, location, and interview performance. Training completion does not guarantee a specific salary or placement.

NEXT STEPS:
- Attend Free Live Demo Class & Hands-On Lab Walkthrough
- Schedule 1:1 Technical Roadmapping with Senior Tech Lead
- Official Learning Portal: https://pulsogenacademy.com
- Admissions & Student Support Desk: admissions@pulsogenacademy.com
=====================================================`;

    const blob = new Blob([brochureText], { type: 'text/plain;charset=utf-8' });
    const downloadUrl = URL.createObjectURL(blob);
    const downloadAnchor = document.createElement('a');
    downloadAnchor.href = downloadUrl;
    downloadAnchor.download = `PulsoGen_IT_Career_Brochure_${studentName.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);
    URL.revokeObjectURL(downloadUrl);
  }

  if (brochureDownloadForm) {
    brochureDownloadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('modalName')?.value || 'Student';
      const track = document.getElementById('modalTrack')?.value || 'Comprehensive IT Track';
      
      closeBrochureModal();
      triggerClientBrochureDownload(name, track);
      showToast(`📄 Career Brochure & Full Syllabus Downloaded Successfully! Check your downloads.`);
      brochureDownloadForm.reset();
    });
  }

  // --- 10. LEAD CAPTURE CONTACT FORM ---
  const leadEnrollForm = document.getElementById('leadEnrollForm');

  if (leadEnrollForm) {
    leadEnrollForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = leadEnrollForm.querySelector('button[type="submit"]');
      const originalText = submitBtn?.innerHTML || 'Book Free Demo Class';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Booking Your Seat...';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }

        const studentName = document.getElementById('leadName')?.value || 'Learner';
        showToast(`🎉 Congratulations ${studentName}! Your Free Demo Class seat is reserved. We sent confirmation details.`);
        leadEnrollForm.reset();
      }, 700);
    });
  }

  // --- 11. ANIMATED STATS COUNTER ---
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');
  let hasAnimatedStats = false;

  function runStatsCounter() {
    statNumbers.forEach(counter => {
      const target = parseFloat(counter.dataset.target);
      const prefix = counter.dataset.prefix || '';
      const suffix = counter.dataset.suffix || '';
      const isDecimal = target % 1 !== 0;
      let start = 0;
      const duration = 1600;
      const stepTime = 25;
      const steps = duration / stepTime;
      const increment = target / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          counter.textContent = `${prefix}${isDecimal ? target.toFixed(1) : Math.floor(target)}${suffix}`;
          clearInterval(timer);
        } else {
          counter.textContent = `${prefix}${isDecimal ? start.toFixed(1) : Math.floor(start)}${suffix}`;
        }
      }, stepTime);
    });
  }

  const heroStatsSection = document.querySelector('.hero-stats-row');
  if (heroStatsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimatedStats) {
        hasAnimatedStats = true;
        runStatsCounter();
      }
    }, { threshold: 0.3 });

    statsObserver.observe(heroStatsSection);
  }

  // --- 12. 3D ANTIGRAVITY ENGINE & PARTICLES SCENE ---
  function initAntigravityCanvas() {
    const canvas = document.getElementById('antigravity-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight || 600);

    window.addEventListener('resize', () => {
      if (canvas.parentElement) {
        width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
        height = canvas.height = canvas.parentElement.offsetHeight || 600;
      }
    });

    const particles = [];
    const count = Math.min(width < 768 ? 40 : 80, 95);
    const depth = 800;

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    for (let i = 0; i < count; i++) {
      const colorRoll = Math.random();
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * depth,
        radius: Math.random() * 2.2 + 1,
        color: colorRoll > 0.6 ? 'rgba(99, 102, 241, ' : colorRoll > 0.3 ? 'rgba(79, 70, 229, ' : 'rgba(6, 182, 212, ',
        alpha: Math.random() * 0.6 + 0.2,
        speedZ: Math.random() * 0.6 + 0.25,
        wobbleSpeed: Math.random() * 0.02 + 0.01,
        wobbleAmp: Math.random() * 25 + 10,
        phase: Math.random() * Math.PI * 2
      });
    }

    // Interactive mouse rotation for true 3D spatial parallax
    window.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
        const mouseX = (e.clientX - rect.left - width / 2) * 0.0008;
        const mouseY = (e.clientY - rect.top - height / 2) * 0.0008;
        targetRotY = mouseX * 24;
        targetRotX = -mouseY * 24;
      }
    }, { passive: true });

    let time = 0;

    function render() {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      const cosX = Math.cos((currentRotX * Math.PI) / 180);
      const sinX = Math.sin((currentRotX * Math.PI) / 180);
      const cosY = Math.cos((currentRotY * Math.PI) / 180);
      const sinY = Math.sin((currentRotY * Math.PI) / 180);

      const fov = 420;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.z -= p.speedZ;
        if (p.z <= 10) p.z = depth;

        const wobbleX = p.x + Math.sin(time * p.wobbleSpeed + p.phase) * p.wobbleAmp;
        const wobbleY = p.y + Math.cos(time * p.wobbleSpeed + p.phase) * (p.wobbleAmp * 0.8);

        const x1 = wobbleX * cosY + p.z * sinY;
        const z1 = -wobbleX * sinY + p.z * cosY;

        const y2 = wobbleY * cosX - z1 * sinX;
        const z2 = wobbleY * sinX + z1 * cosX + fov;

        if (z2 <= 20) continue;

        const scale = fov / z2;
        const projX = width / 2 + x1 * scale;
        const projY = height / 2 + y2 * scale;
        const projR = p.radius * scale;

        ctx.beginPath();
        ctx.arc(projX, projY, Math.max(0.6, projR), 0, Math.PI * 2);
        ctx.fillStyle = p.color + (p.alpha * Math.min(1, scale)).toFixed(2) + ')';
        ctx.shadowBlur = 8 * scale;
        ctx.shadowColor = 'rgba(99, 102, 241, 0.6)';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw zero-gravity constellation connections
        for (let j = i + 1; j < Math.min(i + 4, particles.length); j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dz = p.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < 120) {
            const alphaLine = (1 - dist / 120) * 0.16 * Math.min(1, scale);
            const scale2 = fov / (p2.z + fov);
            const projX2 = width / 2 + p2.x * scale2;
            const projY2 = height / 2 + p2.y * scale2;

            ctx.beginPath();
            ctx.moveTo(projX, projY);
            ctx.lineTo(projX2, projY2);
            ctx.strokeStyle = `rgba(99, 102, 241, ${alphaLine})`;
            ctx.lineWidth = 0.8 * scale;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(render);
    }

    render();
  }

  // --- 13. UNIVERSAL 3D CARD TILT & SPECULAR SHINE ---
  function init3DCardTilt() {
    const tiltCards = document.querySelectorAll(
      '.course-card, .salary-summary-card, .project-card, .calc-card, .pedagogy-feature-card, .testimonial-card'
    );

    tiltCards.forEach(card => {
      card.classList.add('tilt-card-3d');

      if (!card.querySelector('.card-3d-glare')) {
        const glare = document.createElement('div');
        glare.className = 'card-3d-glare';
        card.appendChild(glare);
      }

      const glareEl = card.querySelector('.card-3d-glare');

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const normX = (x / rect.width) * 2 - 1;
        const normY = (y / rect.height) * 2 - 1;

        const maxAngle = 9;
        const rotateX = (-normY * maxAngle).toFixed(2);
        const rotateY = (normX * maxAngle).toFixed(2);

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px) scale3d(1.015, 1.015, 1.015)`;

        if (glareEl) {
          const posX = ((x / rect.width) * 100).toFixed(1);
          const posY = ((y / rect.height) * 100).toFixed(1);
          glareEl.style.background = `radial-gradient(circle at ${posX}% ${posY}%, rgba(255, 255, 255, 0.42) 0%, rgba(56, 189, 248, 0.12) 40%, transparent 75%)`;
        }
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.4s cubic-bezier(0.2, 0, 0.2, 1), box-shadow 0.4s ease';
      });

      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease-out, box-shadow 0.2s ease';
      });
    });
  }

  // --- 14. 3D MOVING REVIEWS MARQUEE CONTROLS ---
  function initReviewsMarquee() {
    const toggleBtn = document.getElementById('toggleReviewsMarqueeBtn');
    const track1 = document.getElementById('reviewsTrack1');
    const track2 = document.getElementById('reviewsTrack2');
    const icon = document.getElementById('marqueeBtnIcon');
    const text = document.getElementById('marqueeBtnText');

    if (!toggleBtn || !track1 || !track2) return;

    let isPaused = false;

    toggleBtn.addEventListener('click', () => {
      isPaused = !isPaused;
      if (isPaused) {
        track1.classList.add('paused');
        track2.classList.add('paused');
        if (icon) icon.textContent = '▶';
        if (text) text.textContent = 'Resume Reviews Scroll';
      } else {
        track1.classList.remove('paused');
        track2.classList.remove('paused');
        if (icon) icon.textContent = '⏸';
        if (text) text.textContent = 'Pause Reviews Scroll';
      }
    });
  }

  // --- 15. WHATSAPP ADMISSIONS COUNSELLOR PROMPT BUBBLE ---
  function initWhatsAppBubble() {
    const bubble = document.getElementById('whatsappPromptBubble');
    const closeBtn = document.getElementById('closeWhatsAppBubble');

    if (!bubble) return;

    // Check if user previously dismissed in this session
    const isDismissed = sessionStorage.getItem('pulsogen_whatsapp_bubble_dismissed');

    if (!isDismissed) {
      // Display after 4.5 seconds of engaging with the page
      setTimeout(() => {
        bubble.classList.add('show');
      }, 4500);
    }

    closeBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      bubble.classList.remove('show');
      sessionStorage.setItem('pulsogen_whatsapp_bubble_dismissed', 'true');
    });
  }

  // Initialize 3D Engine & Features
  initAntigravityCanvas();
  init3DCardTilt();
  initReviewsMarquee();
  initWhatsAppBubble();
});




