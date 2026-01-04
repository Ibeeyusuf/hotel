let revenueChart = null;
let occupancyChart = null;
let roomStatusChart = null;
let demographicsChart = null;

function initRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;
    
    if (revenueChart) revenueChart.destroy();
    
    revenueChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Revenue',
                data: [45000, 52000, 48000, 61000, 58000, 65000, 72000, 68000, 75000, 82000, 78000, 85000],
                borderColor: '#d4af37',
                backgroundColor: 'rgba(212, 175, 55, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { 
                legend: { display: false } 
            },
            scales: {
                y: { 
                    beginAtZero: true, 
                    ticks: { 
                        callback: value => '$' + value/1000 + 'K' 
                    } 
                }
            }
        }
    });
}

function initOccupancyChart() {
    const ctx = document.getElementById('occupancyChart');
    if (!ctx) return;
    
    if (occupancyChart) occupancyChart.destroy();
    
    occupancyChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Occupancy Rate',
                data: [75, 82, 78, 85, 92, 95, 88],
                backgroundColor: '#1e3a5f'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { 
                legend: { display: false } 
            },
            scales: {
                y: { 
                    beginAtZero: true, 
                    max: 100, 
                    ticks: { 
                        callback: value => value + '%' 
                    } 
                }
            }
        }
    });
}

function initRoomStatusChart() {
    const ctx = document.getElementById('roomStatusChart');
    if (!ctx) return;
    
    if (roomStatusChart) roomStatusChart.destroy();
    
    roomStatusChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Occupied', 'Available', 'Reserved', 'Cleaning'],
            datasets: [{
                data: [45, 28, 15, 12],
                backgroundColor: ['#1e3a5f', '#10b981', '#d4af37', '#f59e0b']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { 
                    position: 'bottom' 
                }
            }
        }
    });
}

function initDemographicsChart() {
    const ctx = document.getElementById('demographicsChart');
    if (!ctx) return;
    
    if (demographicsChart) demographicsChart.destroy();
    
    demographicsChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Business', 'Leisure', 'Events', 'Other'],
            datasets: [{
                data: [42, 35, 18, 5],
                backgroundColor: ['#1e3a5f', '#d4af37', '#10b981', '#6b7280']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { 
                    position: 'bottom' 
                }
            }
        }
    });
}

window.initRevenueChart = initRevenueChart;
window.initOccupancyChart = initOccupancyChart;
window.initRoomStatusChart = initRoomStatusChart;
window.initDemographicsChart = initDemographicsChart;