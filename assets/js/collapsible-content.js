document.addEventListener('DOMContentLoaded', function() {
    const collapsibleContents = document.querySelectorAll('.collapsible-content');
    
    collapsibleContents.forEach(function(container) {
        const title = container.querySelector('.collapsible-content-title');
        const content = container.querySelector('.collapsible-content-body');
        
        if (title && content) {
            // Handle initial state based on classes
            if (container.classList.contains('collapsed')) {
                content.style.maxHeight = '0';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
            
            title.addEventListener('click', function() {
                // Toggle state
                container.classList.toggle('collapsed');
                container.classList.toggle('expanded');
                
                // Animate the max-height property for smooth transition
                if (container.classList.contains('expanded')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = '0';
                }
            });
            
            // Add keyboard accessibility
            title.setAttribute('tabindex', '0');
            title.setAttribute('role', 'button');
            title.setAttribute('aria-expanded', !container.classList.contains('collapsed'));
            
            title.addEventListener('keydown', function(e) {
                // Toggle on Enter or Space key
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    title.click();
                    
                    title.setAttribute('aria-expanded', !container.classList.contains('collapsed'));
                }
            });
        }
    });
});
