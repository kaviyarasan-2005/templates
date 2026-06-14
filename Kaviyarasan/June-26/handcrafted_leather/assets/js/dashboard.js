/**
 * BIND - Dashboard JavaScript
 * Contains logic for sidebar collapse and custom SVG charts.
 */

document.addEventListener('DOMContentLoaded', () => {
    initDashboardSidebar();
    
    // Check which dashboard we're on and render appropriate charts
    if (document.getElementById('admin-revenue-chart')) {
        renderAdminCharts();
    }
    
    if (document.getElementById('user-timeline-chart')) {
        renderUserCharts();
    }
});

/**
 * Sidebar Logic
 */
function initDashboardSidebar() {
    const toggleBtn = document.querySelector('.js-sidebar-toggle');
    const sidebar = document.querySelector('.dashboard-sidebar');
    
    if (!toggleBtn || !sidebar) return;
    
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });
}

/**
 * SVG Chart Utility Functions
 */
const ChartUtils = {
    createSVG(width, height) {
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        return svg;
    },
    
    createPath(d, stroke, strokeWidth, fill = 'none') {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('stroke', stroke);
        path.setAttribute('stroke-width', strokeWidth);
        path.setAttribute('fill', fill);
        return path;
    },
    
    createRect(x, y, width, height, fill, rx = 0) {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        rect.setAttribute('fill', fill);
        rect.setAttribute('rx', rx);
        return rect;
    },

    createText(x, y, content, fill, fontSize, textAnchor = 'middle') {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x);
        text.setAttribute('y', y);
        text.setAttribute('fill', fill);
        text.setAttribute('font-size', fontSize);
        text.setAttribute('text-anchor', textAnchor);
        text.setAttribute('font-family', 'var(--font-body)');
        text.textContent = content;
        return text;
    },
    
    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    },

    describeArc(x, y, radius, startAngle, endAngle) {
        const start = this.polarToCartesian(x, y, radius, endAngle);
        const end = this.polarToCartesian(x, y, radius, startAngle);
        const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        return [
            "M", start.x, start.y, 
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");
    }
};

/**
 * Admin Dashboard Charts
 */
function renderAdminCharts() {
    renderLineChart('admin-revenue-chart', [1200, 1900, 1500, 2200, 2800, 2400, 3100], 'var(--color-accent)');
    renderPieChart('admin-product-mix', [45, 25, 20, 10], ['var(--color-primary)', 'var(--color-accent)', 'var(--color-secondary)', 'var(--color-text-secondary)']);
    renderBarChart('admin-commission-status', [15, 8, 22, 45], ['#B71C1C', '#C5A059', '#3E2723', '#2E7D32']); // Error, Accent, Primary, Success
    renderFunnelChart('admin-funnel-chart', [100, 60, 30, 15]);
}

/**
 * User Dashboard Charts
 */
function renderUserCharts() {
    renderLineChart('user-timeline-chart', [1, 1, 2, 3, 5, 4, 8], 'var(--color-primary)');
    renderGroupedBarChart('user-spending', [120, 45, 80, 200], ['var(--color-accent)']);
    renderLineChart('user-wishlist', [2, 4, 5, 8, 12, 15], 'var(--color-secondary)');
    renderDoughnutChart('user-status', [1, 2, 5], ['#C5A059', '#3E2723', '#2E7D32']); 
}

/**
 * Chart Implementations
 */

// 1. Line Chart
function renderLineChart(containerId, data, color) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const width = 600;
    const height = 300;
    const svg = ChartUtils.createSVG(width, height);
    
    const maxVal = Math.max(...data) * 1.1; // Add 10% padding
    const stepX = width / (data.length - 1);
    
    let pathD = `M 0 ${height - (data[0] / maxVal) * height}`;
    
    data.forEach((val, i) => {
        if (i === 0) return;
        pathD += ` L ${i * stepX} ${height - (val / maxVal) * height}`;
    });
    
    const path = ChartUtils.createPath(pathD, color, 4);
    
    // Animation setup
    const length = 2000; // rough estimate, or calculate proper length
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    path.style.animation = 'drawIn 1.5s ease forwards';
    
    svg.appendChild(path);
    
    // Add gradient fill under the line
    const fillPathD = pathD + ` L ${width} ${height} L 0 ${height} Z`;
    const fillPath = ChartUtils.createPath(fillPathD, 'none', 0, color);
    fillPath.style.opacity = '0.1';
    svg.appendChild(fillPath);
    
    container.appendChild(svg);
}

// 2. Pie Chart
function renderPieChart(containerId, data, colors) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const width = 300;
    const height = 300;
    const cx = width / 2;
    const cy = height / 2;
    const radius = 120;
    
    const svg = ChartUtils.createSVG(width, height);
    
    const total = data.reduce((sum, val) => sum + val, 0);
    let currentAngle = 0;
    
    data.forEach((val, i) => {
        const sliceAngle = (val / total) * 360;
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const d = [
            `M ${cx} ${cy}`,
            `L ${ChartUtils.polarToCartesian(cx, cy, radius, currentAngle).x} ${ChartUtils.polarToCartesian(cx, cy, radius, currentAngle).y}`,
            `A ${radius} ${radius} 0 ${sliceAngle > 180 ? 1 : 0} 1 ${ChartUtils.polarToCartesian(cx, cy, radius, currentAngle + sliceAngle).x} ${ChartUtils.polarToCartesian(cx, cy, radius, currentAngle + sliceAngle).y}`,
            'Z'
        ].join(' ');
        
        path.setAttribute('d', d);
        path.setAttribute('fill', colors[i % colors.length]);
        
        // Staggered reveal
        path.style.opacity = '0';
        path.style.transformOrigin = 'center';
        path.style.transform = 'scale(0)';
        setTimeout(() => {
            path.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.5s';
            path.style.opacity = '1';
            path.style.transform = 'scale(1)';
        }, i * 150);
        
        svg.appendChild(path);
        currentAngle += sliceAngle;
    });
    
    container.appendChild(svg);
}

// 3. Bar Chart
function renderBarChart(containerId, data, colors) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const width = 500;
    const height = 300;
    const svg = ChartUtils.createSVG(width, height);
    
    const maxVal = Math.max(...data) * 1.1;
    const barWidth = (width / data.length) * 0.6;
    const gap = (width / data.length) * 0.4;
    
    data.forEach((val, i) => {
        const barHeight = (val / maxVal) * height;
        const x = i * (barWidth + gap) + gap/2;
        const y = height - barHeight;
        
        const rect = ChartUtils.createRect(x, y, barWidth, barHeight, colors[i % colors.length], 4);
        
        // Animation
        rect.style.transformOrigin = 'bottom';
        rect.style.transform = 'scaleY(0)';
        setTimeout(() => {
            rect.style.transition = 'transform 0.5s ease-out';
            rect.style.transform = 'scaleY(1)';
        }, i * 100);
        
        svg.appendChild(rect);
    });
    
    container.appendChild(svg);
}

// 4. Funnel Chart
function renderFunnelChart(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const width = 600;
    const height = 300;
    const svg = ChartUtils.createSVG(width, height);
    
    const maxVal = data[0];
    const stepY = height / data.length;
    const colors = ['#3E2723', '#5D4037', '#8D8D7A', '#C5A059'];
    
    data.forEach((val, i) => {
        const topWidth = i === 0 ? width : (data[i-1] / maxVal) * width;
        const bottomWidth = (val / maxVal) * width;
        
        const topLeft = (width - topWidth) / 2;
        const topRight = width - topLeft;
        const bottomLeft = (width - bottomWidth) / 2;
        const bottomRight = width - bottomLeft;
        
        const yTop = i * stepY;
        const yBottom = (i + 1) * stepY - 4; // 4px gap
        
        const d = `M ${topLeft} ${yTop} L ${topRight} ${yTop} L ${bottomRight} ${yBottom} L ${bottomLeft} ${yBottom} Z`;
        
        const path = ChartUtils.createPath(d, 'none', 0, colors[i % colors.length]);
        
        // Animation
        path.style.opacity = '0';
        path.style.transform = 'translateX(-20px)';
        setTimeout(() => {
            path.style.transition = 'all 0.5s ease-out';
            path.style.opacity = '1';
            path.style.transform = 'translateX(0)';
        }, i * 200);
        
        svg.appendChild(path);
    });
    
    container.appendChild(svg);
}

// 5. Grouped Bar Chart (simplified to single for now, can extend later)
function renderGroupedBarChart(containerId, data, colors) {
    renderBarChart(containerId, data, colors); // Using same logic for simplicity in this demo
}

// 6. Doughnut Chart
function renderDoughnutChart(containerId, data, colors) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const width = 300;
    const height = 300;
    const cx = width / 2;
    const cy = height / 2;
    const radius = 120;
    const innerRadius = 80;
    
    const svg = ChartUtils.createSVG(width, height);
    
    const total = data.reduce((sum, val) => sum + val, 0);
    let currentAngle = 0;
    
    data.forEach((val, i) => {
        const sliceAngle = (val / total) * 360;
        
        // Outer arc
        const outerArc = ChartUtils.describeArc(cx, cy, radius, currentAngle, currentAngle + sliceAngle);
        // Inner arc (reverse direction)
        const innerArc = ChartUtils.describeArc(cx, cy, innerRadius, currentAngle + sliceAngle, currentAngle);
        
        const d = `${outerArc} L ${ChartUtils.polarToCartesian(cx, cy, innerRadius, currentAngle + sliceAngle).x} ${ChartUtils.polarToCartesian(cx, cy, innerRadius, currentAngle + sliceAngle).y} ${innerArc} Z`;
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('fill', colors[i % colors.length]);
        
        // Animation
        path.style.opacity = '0';
        setTimeout(() => {
            path.style.transition = 'opacity 0.8s ease-in';
            path.style.opacity = '1';
        }, i * 200);
        
        svg.appendChild(path);
        currentAngle += sliceAngle;
    });
    
    container.appendChild(svg);
}
