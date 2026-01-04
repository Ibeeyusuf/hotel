const dashboardData = {
    currentPage: 'dashboard',
    sidebarOpen: true,
    userRole: 'admin',
    
    stats: {
        totalRevenue: 245680,
        totalBookings: 1234,
        occupancyRate: 87,
        activeGuests: 156
    },
    
    recentBookings: [],
    guests: [],
    rooms: [],
    staff: [],
    transactions: [],
    services: [],
    chefOrders: [],
    chefInventory: [],
    chefMenu: [],
    waiterTables: [],
    waiterOrders: [],
    waiterMenuItems: [],
    laundryJobs: [],
    laundryInventory: [],
    laundryMachines: [],
    
    init() {
        this.loadSampleData();
    },
    
    loadSampleData() {
        this.recentBookings = [
            { id: 'BK12345', guest: 'Sarah Johnson', room: '305', checkin: '2024-12-15', checkout: '2024-12-20', status: 'active', amount: 1250 },
            { id: 'BK12346', guest: 'Michael Chen', room: '412', checkin: '2024-12-16', checkout: '2024-12-18', status: 'confirmed', amount: 900 },
            { id: 'BK12347', guest: 'Emma Wilson', room: '208', checkin: '2024-12-14', checkout: '2024-12-19', status: 'active', amount: 1500 },
            { id: 'BK12348', guest: 'James Brown', room: '501', checkin: '2024-12-17', checkout: '2024-12-22', status: 'pending', amount: 2100 },
            { id: 'BK12349', guest: 'Lisa Anderson', room: '315', checkin: '2024-12-13', checkout: '2024-12-16', status: 'completed', amount: 750 }
        ];
        
        this.guests = [
            { id: 1, name: 'Sarah Johnson', email: 'sarah.j@email.com', phone: '+1 555-0101', room: '305', checkin: '2024-12-15', status: 'checked-in', tier: 'Gold' },
            { id: 2, name: 'Michael Chen', email: 'mchen@email.com', phone: '+1 555-0102', room: '412', checkin: '2024-12-16', status: 'confirmed', tier: 'Silver' },
            { id: 3, name: 'Emma Wilson', email: 'emma.w@email.com', phone: '+1 555-0103', room: '208', checkin: '2024-12-14', status: 'checked-in', tier: 'Platinum' },
            { id: 4, name: 'James Brown', email: 'jbrown@email.com', phone: '+1 555-0104', room: '501', checkin: '2024-12-17', status: 'pending', tier: 'Gold' }
        ];
        
        this.rooms = [
            { id: 1, number: '305', type: 'Deluxe King', status: 'occupied', guest: 'Sarah Johnson', price: 250, floor: 3 },
            { id: 2, number: '412', type: 'Executive Suite', status: 'reserved', guest: 'Michael Chen', price: 450, floor: 4 },
            { id: 3, number: '208', type: 'Deluxe King', status: 'occupied', guest: 'Emma Wilson', price: 250, floor: 2 },
            { id: 4, number: '501', type: 'Presidential Suite', status: 'available', guest: null, price: 850, floor: 5 },
            { id: 5, number: '315', type: 'Deluxe King', status: 'cleaning', guest: null, price: 250, floor: 3 },
            { id: 6, number: '210', type: 'Deluxe King', status: 'available', guest: null, price: 250, floor: 2 }
        ];
        
        this.staff = [
            { id: 1, name: 'John Smith', role: 'Receptionist', department: 'Front Desk', status: 'active', shift: 'Morning', performance: 95 },
            { id: 2, name: 'Maria Garcia', role: 'Housekeeper', department: 'Housekeeping', status: 'active', shift: 'Morning', performance: 92 },
            { id: 3, name: 'David Lee', role: 'Chef', department: 'Kitchen', status: 'active', shift: 'Evening', performance: 98 },
            { id: 4, name: 'Anna Martinez', role: 'Waiter', department: 'Restaurant', status: 'active', shift: 'Evening', performance: 88 },
            { id: 5, name: 'Robert Taylor', role: 'Maintenance', department: 'Maintenance', status: 'active', shift: 'Morning', performance: 90 }
        ];
        
        this.transactions = [
            { id: 'TX12345', type: 'Room Booking', guest: 'Sarah Johnson', amount: 1250, method: 'Wallet', status: 'completed', date: '2024-12-15' },
            { id: 'TX12346', type: 'Food Order', guest: 'Michael Chen', amount: 85, method: 'Card', status: 'completed', date: '2024-12-16' },
            { id: 'TX12347', type: 'Spa Service', guest: 'Emma Wilson', amount: 120, method: 'Wallet', status: 'completed', date: '2024-12-16' },
            { id: 'TX12348', type: 'Room Booking', guest: 'James Brown', amount: 2100, method: 'Card', status: 'pending', date: '2024-12-17' },
            { id: 'TX12349', type: 'Laundry Service', guest: 'Lisa Anderson', amount: 30, method: 'Wallet', status: 'completed', date: '2024-12-15' }
        ];
        
        this.services = [
            { id: 1, name: 'Housekeeping', requests: 45, completed: 42, pending: 3, avgTime: '25 min' },
            { id: 2, name: 'Room Service', requests: 128, completed: 125, pending: 3, avgTime: '18 min' },
            { id: 3, name: 'Maintenance', requests: 12, completed: 10, pending: 2, avgTime: '35 min' },
            { id: 4, name: 'Spa & Massage', requests: 34, completed: 32, pending: 2, avgTime: '90 min' },
            { id: 5, name: 'Laundry', requests: 67, completed: 65, pending: 2, avgTime: '24 hrs' }
        ];
        
        this.chefOrders = [
            { id: 'ORD001', room: '305', guest: 'Sarah Johnson', items: 'Grilled Salmon, Caesar Salad', priority: 'High', status: 'Cooking', time: '15 min' },
            { id: 'ORD002', room: '412', guest: 'Michael Chen', items: 'Steak, Mashed Potatoes', priority: 'Normal', status: 'Pending', time: '25 min' },
            { id: 'ORD003', room: '208', guest: 'Emma Wilson', items: 'Vegetable Pasta, Garlic Bread', priority: 'Low', status: 'Ready', time: '0 min' },
            { id: 'ORD004', room: '501', guest: 'James Brown', items: 'Chicken Curry, Rice', priority: 'High', status: 'Cooking', time: '10 min' }
        ];
        
        this.chefInventory = [
            { item: 'Chicken Breast', quantity: 25, unit: 'kg', lowStock: false },
            { item: 'Salmon', quantity: 12, unit: 'kg', lowStock: true },
            { item: 'Beef', quantity: 30, unit: 'kg', lowStock: false },
            { item: 'Vegetables', quantity: 45, unit: 'kg', lowStock: false },
            { item: 'Rice', quantity: 50, unit: 'kg', lowStock: false },
            { item: 'Spices', quantity: 15, unit: 'packs', lowStock: true }
        ];
        
        this.chefMenu = [
            { id: 1, name: 'Grilled Salmon', category: 'Main Course', price: 28, status: 'Available', prepTime: '20 min' },
            { id: 2, name: 'Beef Steak', category: 'Main Course', price: 35, status: 'Available', prepTime: '25 min' },
            { id: 3, name: 'Vegetable Pasta', category: 'Main Course', price: 22, status: 'Available', prepTime: '15 min' },
            { id: 4, name: 'Caesar Salad', category: 'Appetizer', price: 12, status: 'Available', prepTime: '10 min' },
            { id: 5, name: 'Chocolate Cake', category: 'Dessert', price: 10, status: 'Out of Stock', prepTime: '5 min' }
        ];
        
        this.waiterTables = [
            { table: 'T01', guests: 2, status: 'Occupied', order: 'Pending', time: '20 min' },
            { table: 'T02', guests: 4, status: 'Occupied', order: 'Served', time: '45 min' },
            { table: 'T03', guests: 0, status: 'Available', order: 'None', time: '0 min' },
            { table: 'T04', guests: 3, status: 'Occupied', order: 'Ready', time: '5 min' },
            { table: 'T05', guests: 2, status: 'Reserved', order: 'None', time: '30 min' },
            { table: 'T06', guests: 6, status: 'Occupied', order: 'Cooking', time: '15 min' }
        ];
        
        this.waiterOrders = [
            { id: 'WO001', table: 'T01', items: '2x Burger, Fries', status: 'Pending', amount: 45 },
            { id: 'WO002', table: 'T02', items: 'Pasta, Salad, Wine', status: 'Served', amount: 85 },
            { id: 'WO003', table: 'T04', items: 'Soup, Steak, Dessert', status: 'Ready', amount: 120 }
        ];
        
        this.waiterMenuItems = [
            { id: 1, name: 'Burger', category: 'Main', price: 18, available: true },
            { id: 2, name: 'Pasta', category: 'Main', price: 22, available: true },
            { id: 3, name: 'Steak', category: 'Main', price: 35, available: true },
            { id: 4, name: 'Salad', category: 'Appetizer', price: 12, available: true },
            { id: 5, name: 'Soup', category: 'Appetizer', price: 10, available: true },
            { id: 6, name: 'Wine', category: 'Beverage', price: 25, available: true }
        ];
        
        this.laundryJobs = [
            { id: 'LJ001', room: '305', guest: 'Sarah Johnson', items: '3 Shirts, 2 Pants', type: 'Wash & Iron', status: 'Processing', pickup: '10:00 AM', delivery: '4:00 PM' },
            { id: 'LJ002', room: '412', guest: 'Michael Chen', items: '1 Suit, 4 Shirts', type: 'Dry Clean', status: 'Ready', pickup: '9:00 AM', delivery: '3:00 PM' },
            { id: 'LJ003', room: '208', guest: 'Emma Wilson', items: '5 Dresses', type: 'Wash & Fold', status: 'Delivered', pickup: '8:00 AM', delivery: '2:00 PM' },
            { id: 'LJ004', room: '315', guest: 'Previous Guest', items: 'Bed Sheets, Towels', type: 'Hotel Linen', status: 'Processing', pickup: '11:00 AM', delivery: '6:00 PM' }
        ];
        
        this.laundryInventory = [
            { item: 'Detergent', quantity: 15, unit: 'liters', status: 'Good' },
            { item: 'Fabric Softener', quantity: 8, unit: 'liters', status: 'Low' },
            { item: 'Bleach', quantity: 12, unit: 'liters', status: 'Good' },
            { item: 'Starch', quantity: 5, unit: 'liters', status: 'Low' },
            { item: 'Plastic Covers', quantity: 200, unit: 'pieces', status: 'Good' }
        ];
        
        this.laundryMachines = [
            { id: 'WM01', type: 'Washing Machine', status: 'Running', cycle: '45 min', capacity: '10 kg' },
            { id: 'WM02', type: 'Washing Machine', status: 'Idle', cycle: '0 min', capacity: '8 kg' },
            { id: 'DR01', type: 'Dryer', status: 'Running', cycle: '60 min', capacity: '12 kg' },
            { id: 'IR01', type: 'Iron', status: 'Available', cycle: 'N/A', capacity: 'N/A' }
        ];
    },
    
    getRoleDisplayName() {
        const roleMap = {
            'admin': 'Admin User',
            'chef': 'Head Chef',
            'waiter': 'Senior Waiter',
            'laundry': 'Laundry Manager'
        };
        return roleMap[this.userRole] || 'User';
    },
    
    getRoleTitle() {
        return this.userRole.charAt(0).toUpperCase() + this.userRole.slice(1);
    },
    
    switchRole() {
        const roles = ['admin', 'chef', 'waiter', 'laundry'];
        const currentIndex = roles.indexOf(this.userRole);
        const nextIndex = (currentIndex + 1) % roles.length;
        this.userRole = roles[nextIndex];
    },
    
    formatPageTitle() {
        return this.currentPage.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    },
    
    getNewButtonText() {
        const textMap = {
            'admin': 'New Booking',
            'chef': 'New Recipe',
            'waiter': 'New Order',
            'laundry': 'New Job'
        };
        return textMap[this.userRole] || 'New';
    },
    
    initCharts() {
        setTimeout(() => {
            if (typeof window.initRevenueChart === 'function') window.initRevenueChart();
            if (typeof window.initOccupancyChart === 'function') window.initOccupancyChart();
            if (typeof window.initRoomStatusChart === 'function') window.initRoomStatusChart();
            if (typeof window.initDemographicsChart === 'function') window.initDemographicsChart();
        }, 100);
    }
};

document.addEventListener('alpine:init', () => {
    Alpine.data('dashboardData', () => dashboardData);
});

document.addEventListener('DOMContentLoaded', function() {
    dashboardData.init();
});