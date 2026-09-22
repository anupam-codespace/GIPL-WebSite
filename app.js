/**
 * GLOBIZHUB.COM — CORE APPLICATION SCRIPT
 * High-performance, accessible, and reactive interactions.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. STICKY HEADER SCROLL LISTENER
     -------------------------------------------------------------------------- */
  const siteHeader = document.getElementById('siteHeader');
  
  const handleScroll = () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();


  /* --------------------------------------------------------------------------
     2. STRATEGIC PATHWAY SWITCHER (Appventurez Benchmark)
     -------------------------------------------------------------------------- */
  const pathButtons = document.querySelectorAll('.path-nav__item[data-target]');
  const pathCards = document.querySelectorAll('.path-card');

  pathButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = `path-${btn.getAttribute('data-target')}`;

      // Update nav buttons
      pathButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update cards
      pathCards.forEach(card => {
        if (card.id === targetId) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    });
  });


  /* --------------------------------------------------------------------------
     3. SERVICE MATRIX TAB SWITCHER
     -------------------------------------------------------------------------- */
  const matrixNavBtns = document.querySelectorAll('.matrix-nav__btn');
  const matrixPanels = document.querySelectorAll('.matrix-content-panel');

  matrixNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const panelId = btn.getAttribute('data-panel');

      matrixNavBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      matrixPanels.forEach(panel => {
        if (panel.id === panelId) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });


  /* --------------------------------------------------------------------------
     4. TECHNOLOGY RADAR FILTERING
     -------------------------------------------------------------------------- */
  const techTabs = document.querySelectorAll('.tech-tab-btn');
  const techCards = document.querySelectorAll('.tech-card');

  techTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.getAttribute('data-tech');

      techTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      techCards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-cat') === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  /* --------------------------------------------------------------------------
     5. INTERACTIVE 5-STEP PROPOSAL WIZARD
     -------------------------------------------------------------------------- */
  let currentStep = 1;
  const totalSteps = 5;

  const wizardBar = document.getElementById('wizardBar');
  const stepNodes = document.querySelectorAll('.wizard-step-node');
  const formSteps = document.querySelectorAll('.wizard-form-step');
  const prevStepBtn = document.getElementById('prevStepBtn');
  const nextStepBtn = document.getElementById('nextStepBtn');
  const wizardActions = document.getElementById('wizardActions');
  const summaryBox = document.getElementById('proposalSummaryBox');

  // Radio card active highlight sync
  const optionCards = document.querySelectorAll('.wizard-option-card');
  optionCards.forEach(card => {
    const input = card.querySelector('input[type="radio"], input[type="checkbox"]');
    if (input) {
      input.addEventListener('change', () => {
        if (input.type === 'radio') {
          // Deselect all cards with the same name
          document.querySelectorAll(`input[name="${input.name}"]`).forEach(r => {
            r.closest('.wizard-option-card').classList.remove('selected');
          });
          card.classList.add('selected');
        } else if (input.type === 'checkbox') {
          card.classList.toggle('selected', input.checked);
        }
      });
    }
  });

  const updateWizardUI = () => {
    // Update progress bar width
    const progressPercent = ((currentStep - 1) / (totalSteps - 1)) * 100;
    wizardBar.style.width = `${Math.max(10, progressPercent)}%`;

    // Update node states
    stepNodes.forEach(node => {
      const stepNum = parseInt(node.getAttribute('data-step'), 10);
      node.classList.remove('active', 'completed');
      if (stepNum === currentStep) {
        node.classList.add('active');
      } else if (stepNum < currentStep) {
        node.classList.add('completed');
      }
    });

    // Update form steps
    formSteps.forEach((step, idx) => {
      if (idx + 1 === currentStep) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    // Update Back button visibility
    if (currentStep === 1 || currentStep === 5) {
      prevStepBtn.style.visibility = 'hidden';
    } else {
      prevStepBtn.style.visibility = 'visible';
    }

    // Update Next button label
    if (currentStep === 4) {
      nextStepBtn.innerHTML = `<span>Submit & Schedule Call</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
    } else if (currentStep === 5) {
      wizardActions.style.display = 'none';
    } else {
      nextStepBtn.innerHTML = `<span>Continue</span> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
    }
  };

  const validateStep = (step) => {
    if (step === 4) {
      const name = document.getElementById('contactName');
      const email = document.getElementById('contactEmail');
      const company = document.getElementById('contactCompany');

      if (!name.value.trim()) {
        name.focus();
        showToast('Please enter your full name.');
        return false;
      }
      if (!email.value.trim() || !email.value.includes('@')) {
        email.focus();
        showToast('Please enter a valid work email.');
        return false;
      }
      if (!company.value.trim()) {
        company.focus();
        showToast('Please enter your company name.');
        return false;
      }
    }
    return true;
  };

  const populateSummary = () => {
    const objective = document.querySelector('input[name="objective"]:checked')?.value || 'Custom Platform';
    const scope = document.querySelector('input[name="scope"]:checked')?.value || 'Greenfield';
    const budget = document.querySelector('input[name="budget"]:checked')?.value || '$50k - $100k';
    const timeline = document.getElementById('timelineInput')?.value || 'Immediate';
    const name = document.getElementById('contactName')?.value || 'Client';
    const email = document.getElementById('contactEmail')?.value || 'user@example.com';
    const company = document.getElementById('contactCompany')?.value || 'Enterprise';

    summaryBox.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 12px;">
        <div><strong style="color: #718096; font-family: 'IBM Plex Mono'; font-size: 11px;">OBJECTIVE:</strong><br><span style="color: #20E3D2; font-weight: 600;">${objective}</span></div>
        <div><strong style="color: #718096; font-family: 'IBM Plex Mono'; font-size: 11px;">SCOPE:</strong><br><span style="color: #fff;">${scope}</span></div>
        <div><strong style="color: #718096; font-family: 'IBM Plex Mono'; font-size: 11px;">EST. BUDGET:</strong><br><span style="color: #B9F227;">${budget}</span></div>
        <div><strong style="color: #718096; font-family: 'IBM Plex Mono'; font-size: 11px;">KICKOFF:</strong><br><span style="color: #fff;">${timeline}</span></div>
      </div>
      <div style="border-top: 1px solid rgba(184, 196, 210, 0.15); padding-top: 10px;">
        <strong style="color: #718096; font-family: 'IBM Plex Mono'; font-size: 11px;">CONTACT:</strong><br>
        <span style="color: #fff;">${name} (${company})</span> &bull; <span style="color: #8B5CF6;">${email}</span>
      </div>
    `;
  };

  nextStepBtn.addEventListener('click', () => {
    if (!validateStep(currentStep)) return;

    if (currentStep < totalSteps) {
      currentStep++;
      if (currentStep === 5) {
        populateSummary();
      }
      updateWizardUI();
    }
  });

  prevStepBtn.addEventListener('click', () => {
    if (currentStep > 1) {
      currentStep--;
      updateWizardUI();
    }
  });


  /* --------------------------------------------------------------------------
     5.5 ENTERPRISE FAQ ACCORDION
     -------------------------------------------------------------------------- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });


  /* --------------------------------------------------------------------------
     6. COMMAND-K SEARCH MODAL
     -------------------------------------------------------------------------- */
  const cmdSearchBtn = document.getElementById('cmdSearchBtn');
  const cmdBackdrop = document.getElementById('cmdModalBackdrop');
  const cmdInput = document.getElementById('cmdInput');
  const cmdResults = document.getElementById('cmdResults');

  const openCmdModal = () => {
    cmdBackdrop.classList.add('open');
    cmdInput.value = '';
    cmdInput.focus();
    filterCmdResults('');
  };

  const closeCmdModal = () => {
    cmdBackdrop.classList.remove('open');
  };

  cmdSearchBtn.addEventListener('click', openCmdModal);

  cmdBackdrop.addEventListener('click', (e) => {
    if (e.target === cmdBackdrop) {
      closeCmdModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    // ⌘K or Ctrl+K
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdBackdrop.classList.contains('open')) {
        closeCmdModal();
      } else {
        openCmdModal();
      }
    }
    // ESC
    if (e.key === 'Escape' && cmdBackdrop.classList.contains('open')) {
      closeCmdModal();
    }
  });

  // Filter items in modal
  const cmdItems = document.querySelectorAll('.cmd-item');
  const filterCmdResults = (query) => {
    const q = query.toLowerCase().trim();
    cmdItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (!q || text.includes(q)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  };

  cmdInput.addEventListener('input', (e) => {
    filterCmdResults(e.target.value);
  });

  // Click on result item
  cmdItems.forEach(item => {
    item.addEventListener('click', () => {
      const action = item.getAttribute('data-action');
      closeCmdModal();
      if (action) {
        const targetElement = document.querySelector(action);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });


  /* --------------------------------------------------------------------------
     7. TOAST NOTIFICATION UTILITY
     -------------------------------------------------------------------------- */
  const showToast = (message) => {
    const existing = document.querySelector('.globiz-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'globiz-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: rgba(12, 17, 26, 0.95);
      border: 1px solid var(--color-cyan-500);
      color: #fff;
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 13px;
      font-family: var(--font-mono);
      box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 20px rgba(32, 227, 210, 0.3);
      z-index: 9999;
      animation: fadeIn 0.2s ease-out;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };


  /* --------------------------------------------------------------------------
     8. INTERACTIVE CANVAS HOVER TELEMETRY
     -------------------------------------------------------------------------- */
  const canvasNodes = document.querySelectorAll('#nodesGroup circle');
  const hudLatency = document.querySelector('.hud-stat__value');

  if (canvasNodes.length && hudLatency) {
    canvasNodes.forEach(node => {
      node.style.cursor = 'pointer';
      node.addEventListener('mouseenter', () => {
        const randLatency = (12 + Math.random() * 8).toFixed(1);
        hudLatency.textContent = `${randLatency}ms (OPTIMAL)`;
        hudLatency.style.color = '#20E3D2';
      });
      node.addEventListener('mouseleave', () => {
        hudLatency.textContent = '18.4ms';
        hudLatency.style.color = 'var(--color-cyan-400)';
      });
    });
  }

});
