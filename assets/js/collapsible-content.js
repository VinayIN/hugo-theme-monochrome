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
                newTitle.setAttribute('aria-expanded', 'false');
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
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
                    content.style.maxHeight = content.scrollHeight + 'px';
                    content.style.opacity = '1';
                    newTitle.setAttribute('aria-expanded', 'true');
                } else {
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
});
