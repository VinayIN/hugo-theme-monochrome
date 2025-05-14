function initCollapsibleContent() {
    console.log('Initializing collapsible content');
    const collapsibleContents = document.querySelectorAll('.collapsible-content');
    console.log('Found collapsible content elements:', collapsibleContents.length);
    
    collapsibleContents.forEach(function(container) {
        const title = container.querySelector('.collapsible-content-title');
        const content = container.querySelector('.collapsible-content-body');
        
        if (title && content) {
            console.log('Processing collapsible content with title:', title.textContent.trim());
            
            // Remove any existing click event handlers
            const newTitle = title.cloneNode(true);
            title.parentNode.replaceChild(newTitle, title);
            
            // Handle initial state based on classes
            if (container.classList.contains('collapsed')) {
                content.style.maxHeight = '0px';
                content.style.opacity = '0';
                content.style.overflow = 'hidden';
                newTitle.setAttribute('aria-expanded', 'false');
            } else {
                content.style.maxHeight = 'none'; // Allow full height when initially expanded
                content.style.opacity = '1';
                content.style.overflow = 'visible';
                newTitle.setAttribute('aria-expanded', 'true');
            }
            
            // Add click event handler
            newTitle.addEventListener('click', function(event) {
                console.log('Collapsible title clicked');
                event.preventDefault();
                event.stopPropagation();
                
                // Toggle state
                container.classList.toggle('collapsed');
                container.classList.toggle('expanded');
                
                console.log('New state:', container.classList.contains('expanded') ? 'expanded' : 'collapsed');
                
                // Animate the max-height property for smooth transition
                if (container.classList.contains('expanded')) {
                    // First ensure content is visible for calculation
                    content.style.display = 'block';
                    content.style.width = '100%';
                    content.style.overflow = 'hidden'; // Keep overflow hidden during animation
                    
                    // Reset to 0 before animation to ensure proper transition
                    content.style.maxHeight = '0px';
                    
                    // Force a reflow
                    void content.offsetHeight;
                    
                    // Get actual dimensions
                    const actualHeight = content.scrollHeight;
                    
                    // Use calculated height for animation (with extra padding to avoid truncation)
                    content.style.maxHeight = (actualHeight + 100) + 'px';
                    content.style.opacity = '1';
                    newTitle.setAttribute('aria-expanded', 'true');
                    
                    // After transition completes, set to 'none' to ensure all content is visible
                    setTimeout(function() {
                        content.style.maxHeight = 'none';
                        content.style.overflow = 'visible'; // Allow overflow after animation
                    }, 350); // Wait slightly longer than the transition time (300ms)
                } else {
                    content.style.overflow = 'hidden';
                    content.style.maxHeight = '0px';
                    content.style.opacity = '0';
                    newTitle.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Add keyboard accessibility for buttons that aren't already keyboard accessible
            if (newTitle.tagName.toLowerCase() !== 'button') {
                newTitle.setAttribute('tabindex', '0');
                newTitle.setAttribute('role', 'button');
                
                newTitle.addEventListener('keydown', function(e) {
                    // Toggle on Enter or Space key
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        newTitle.click();
                    }
                });
            }
        }
    });
}

// Debug helper function
function logDOM() {
    const collapsibles = document.querySelectorAll('.collapsible-content');
    console.log(`Found ${collapsibles.length} collapsible elements`);
    collapsibles.forEach((el, i) => {
        console.log(`Collapsible #${i+1}:`, el);
        console.log(`- Title:`, el.querySelector('.collapsible-content-title'));
        console.log(`- Content:`, el.querySelector('.collapsible-content-body'));
    });
}

// Handle window resize events to update maxHeight for expanded collapsible content
function handleResize() {
    const expandedContents = document.querySelectorAll('.collapsible-content.expanded .collapsible-content-body');
    expandedContents.forEach(function(content) {
        // Ensure expanded content is always fully visible
        content.style.maxHeight = 'none';
        content.style.overflow = 'visible';
    });
}

// Run on initial load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - initializing collapsible content');
    // Allow a small delay for content to render properly
    setTimeout(function() {
        initCollapsibleContent();
        logDOM();
    }, 100);
});

// Run after window is fully loaded (for any delayed content)
window.addEventListener('load', function() {
    console.log('Window Loaded - reinitializing collapsible content');
    setTimeout(function() {
        initCollapsibleContent();
        logDOM();
    }, 100);
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
});
