// Clock Application - AI Template Lab Demo
// Created: 2025-07-31 22:20:04 JST

class ClockApp {
    constructor() {
        this.currentTime = new Date();
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        this.updateTime();
        console.log('Clock started at', this.formatTime());
    }

    updateTime() {
        if (this.isRunning) {
            this.currentTime = new Date();
            setTimeout(() => this.updateTime(), 1000);
        }
    }

    formatTime() {
        return this.currentTime.toLocaleString('ja-JP', {
            timeZone: 'Asia/Tokyo',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }

    getJSTTime() {
        return this.formatTime() + ' JST';
    }
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ClockApp;
}

// Demo usage
if (typeof window === 'undefined') {
    const clock = new ClockApp();
    clock.start();
    console.log('Current JST Time:', clock.getJSTTime());
}