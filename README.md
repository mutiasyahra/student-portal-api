# Travel App - Session 2

A React Native travel application with bottom tab navigation, reusable destination cards, and detail screen with parameter passing.

## 📱 Features

- **Bottom Tab Navigation** with 3 tabs: Home, Explore, and Profile
- **Reusable DestinationCard Component** with favorite functionality
- **Data Passing** from card to Detail Screen via navigation params
- **Clean UI** with rounded corners, proper spacing, and vector icons

## 🚀 How to Run

### Prerequisites

- Node.js (v14 or higher)
- React Native CLI
- Android Studio (for Android) or Xcode (for iOS)

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd travel-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Install vector icons:

```bash
npm install react-native-vector-icons
```

4. For Android, add this to `android/app/build.gradle`:

```gradle
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

5. For iOS:

```bash
cd ios && pod install && cd ..
```

### Run the App

For Android:

```bash
npx react-native run-android
```

For iOS:

```bash
npx react-native run-ios
```

## 📦 React Native Version

- **React Native:** 0.72.x or higher
- **React Navigation:** 6.x
- **react-native-vector-icons:** 10.x

## 🗂️ Navigation Structure

```
AppNavigation (Stack Navigator)
├── Onboarding
├── Root (Bottom Tab Navigator)
│   ├── Home
│   ├── Explore
│   └── Profile
└── Detail
```

## 📋 Parameter Types

### Navigation to Detail Screen

When navigating from DestinationCard to Detail Screen, the following parameters are passed:

```typescript
{
  id: string;              // Unique identifier
  title: string;           // Destination name
  country: string;         // Country name
  imageUrl: ImageSourcePropType; // Image source
  rating: number;          // Rating (0-5)
  price: number;           // Price per person
  description?: string;    // Optional description
  coordinates?: {          // Optional coordinates
    lat: number;
    lng: number;
  }
}
```

## 📁 Project Structure

```
src/
├── assets/
│   ├── icons/
│   └── images/
├── components/
│   ├── BottomBar.tsx          # Custom bottom tab bar
│   ├── DestinationCard.tsx    # Reusable destination card
│   └── Header.tsx
├── navigation/
│   ├── AppNavigation.tsx      # Stack navigator
│   └── BottomTabs.tsx         # Bottom tab navigator
├── screens/
│   ├── HomeScreen.tsx         # Home with destination cards
│   ├── ExploreScreen.tsx      # Simple explore screen
│   ├── ProfileScreen.tsx      # Simple profile screen
│   ├── DetailScreen.tsx       # Detail with params
│   └── OnboardingScreen.tsx
├── theme/
│   ├── color.ts               # Color palette
│   └── font.ts
└── utils/
    └── dummyData.ts           # Local destination data
```

## 🎨 UI Components

### DestinationCard Props

```typescript
{
  id: string;
  title: string;
  country: string;
  imageUrl: ImageSourcePropType;
  rating: number;
  price: number;
  description?: string;
  coordinates?: { lat: number; lng: number };
  onPress?: () => void;
}
```

### Features

- ✅ Image with overlay
- ✅ Country badge with location icon
- ✅ Star rating badge
- ✅ Favorite (heart) icon with toggle
- ✅ Price per pax display
- ✅ Pressed state animation

## 🎯 Requirements Met

- [x] Bottom Tab Navigation (Home, Explore, Profile)
- [x] Active/Inactive tab icons
- [x] Rounded tab bar design
- [x] Greeting header on Home
- [x] CTA Banner
- [x] Search bar (UI only)
- [x] Popular Destination section
- [x] Minimum 2 DestinationCards
- [x] Reusable DestinationCard component
- [x] All required card elements (image, country, title, rating, price, favorite)
- [x] Navigation to Detail Screen with params
- [x] Detail Screen renders all data from params
- [x] Clean UI (spacing, rounded corners, icons)
- [x] TypeScript implementation
- [x] Local data (no API)

## 🎁 Bonus Features

- [x] Pressed state on cards
- [x] Favorite toggle functionality
- [x] Vector icons for professional look
- [x] Smooth animations
- [x] Extra UI polish (shadows, gradients)

## 📸 Screenshots

[Add your screenshots here]

## 👨‍💻 Author

**Haikal**

## 📄 License

MIT License
