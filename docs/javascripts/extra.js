// Custom JavaScript for MFitHou Documentation

// Add copy button feedback
document.addEventListener('DOMContentLoaded', function() {
  // Enhance code copy buttons
  const codeBlocks = document.querySelectorAll('pre > code');
  
  codeBlocks.forEach(function(codeBlock) {
    const button = codeBlock.parentElement.querySelector('.md-clipboard');
    if (button) {
      button.addEventListener('click', function() {
        // Visual feedback
        button.textContent = '✓ Copied!';
        setTimeout(function() {
          button.innerHTML = '<svg>...</svg>'; // Reset icon
        }, 2000);
      });
    }
  });
  
  // External link icons
  const links = document.querySelectorAll('a[href^="http"]');
  links.forEach(function(link) {
    if (!link.hostname.includes('mfithou.github.io')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
});

// Analytics helper (if enabled)
if (window.gtag) {
  // Track outbound links
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.hostname !== window.location.hostname) {
      gtag('event', 'click', {
        'event_category': 'outbound',
        'event_label': link.href,
        'transport_type': 'beacon'
      });
    }
  });
}
