// Plik konfiguracyjny - tutaj zmieniasz ceny
const PRICING = {
    // Koszty stałe (zawsze wliczane)
    fixedItems: {
        "Łożyska": [1.50, 2],
        "Wkładka M3 gwint": [0.25, 16],
        "Śruba M3 12mm": [0.15, 12],
        "Kołek gwintowany M3 8mm": [0.05, 2],
        "Podkładka M3": [0.10, 4],
        "Nakrętka M3": [0.10, 2],
        "Tłoczek sprężynowy 3mm": [1.00, 1],
        "Potencjometr 10kOhm": [1.50, 1],
        "Filament": [60.00, 0.635],
        "Pozostałe": [10.00, 1]
        // Robocizna została przeniesiona do opcji poniżej!
    },
    
    // Koszty ruchome / opcjonalne
    options: {
        // Robocizna
        labor_base: 45.00,       // Koszt pracy dla wersji bez klawiatury
        labor_keyboard: 70.00,   // Koszt pracy dla wersji z klawiaturą (zmień wg uznania)

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
        lanyard: 8.00,         
        cable_usbc: 4.00       
    }
};
