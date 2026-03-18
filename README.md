# Rick & Morty Characters App

En mobilapp byggd med **React Native**, **Expo Router** och **TypeScript** som låter användare bläddra bland Rick and Morty-karaktärer, se detaljer, spara favoriter och söka/filtera karaktärer.

## Funktioner

- **Tabs-navigation:** Home, Search, Favourites  
- **Details-sida:** Öppnas ovanpå tabs (Stack), bakåt-knapp tar dig till samma tab du kom från  
- **Favoriter:** Sparas i global context samt i Async Storage  
- **Sök + filter:** Namn, Status, Species, Type, Gender (ett aktivt filter åt gången + sökfält)  
- **Återanvändbar Grid/FlatList** med infinite scroll

## API

All data hämtad från: https://rickandmortyapi.com/ 


## Installation

```bash
git clone <repo-url>
cd <repo-folder>
npm install
npx expo start
