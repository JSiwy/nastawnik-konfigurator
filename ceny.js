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
        labor_standard: 50.00,      // Robocizna dla wyższych wersji
        
        // Filament (Obudowa)
        filament_base: 40.00,       // Filament dla Wersji Minimum
        filament_standard: 38.10,   // Filament dla wyższych wersji

        // Płyta główna
        esp32_base: 8.00,
        esp32_with_keyboard: 12.00,
        
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
        lanyard: 3.50,         
        cable_usbc: 4.00       
    }
};
