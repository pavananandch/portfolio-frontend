import { Injectable } from '@angular/core';

declare let gtag: Function;

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  trackEvent(eventName: string, params?: { [key: string]: any }) {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params || {});
    }
  }
}
