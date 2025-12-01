// globals.d.ts (YAHAN CHANGE KAREIN)

interface Window {
    // Return type boolean hona chahiye kyunki JavaScript function 'return false;' karta hai
    gtag_report_conversion: (url: string) => boolean; 
    gtagSendEvent: (url: string) => boolean; // <--- FIX 1: Type changed to boolean
    
    gtag: (...args: any[]) => void;
}