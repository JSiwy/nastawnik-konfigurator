// Plik konfiguracyjny - tutaj zmieniasz ceny
const PRICING = {
    // Koszty stałe (zawsze wliczane)
    fixedItems: {
        "Artykuły metalowe (śruby, wkładki, nakrętki itp.)": [6.50, 1],
        "Łożyska": [1.50, 2],
        "Tłoczek sprężynowy 3mm": [1.00, 1],
        "Potencjometr 10kOhm": [1.50, 1],
        "Pozostałe (przewody, cyna itp.)": [5.00, 1]
    },
    
    // Koszty ruchome / opcjonalne
    options: {
        // Robocizna
        labor_base: 25.00,          // Robocizna dla Wersji Minimum
        labor_base_plus: 35.00,     // Robocizna dla Wersji Plus
        labor_standard: 50.00,      // Robocizna dla wyższych wersji
        
        // Filament (Obudowa)
        filament_base: 25.00,       // Filament dla Wersji Minimum
        filament_standard: 40.00,   // Filament dla wyższych wersji

        // --- PŁYTY GŁÓWNE ---
        wemos_d1_mini: 8.00,           // Brak baterii, brak klawiatury (Minimum)
        esp32_c3_super_mini: 10.00,    // Z baterią, brak klawiatury
        esp32_s2_mini_keyboard: 12.00, // Z klawiaturą (wymaga więcej pinów)
        
        // Klawiatura
        keyboard_small: 8.00,
        keyboard_large: 12.00, 
        
        // Wyświetlacz
        screen_oled: 7.00,
        
        // Zasilanie
        charging_module: 4.00, 
        battery_cell: 8.00,    
        battery_holder: 1.50,  
        
        // Dodatki
        lanyard: 8.00,
        cable_usbc: 4.00       
    }
};
