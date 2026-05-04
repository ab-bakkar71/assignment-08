#  Tiles Gallery Website

A modern and responsive **Tiles Gallery Web Application** built with Next.js. This project allows users to explore, search, and view detailed information about different types of tiles with authentication features.

---

## 🌐 Live Website

🔗 [https://the-tiles-gallery.vercel.app/](https://the-tiles-gallery.vercel.app/)

---

## 📌 Project Purpose

This project is designed to showcase a collection of tiles in a visually appealing way. Users can browse tiles, search by title, and view detailed information about each tile.

---

## 🚀 Key Features

### 🏠 Home Page
* **Banner:** "Discover Your Perfect Aesthetic"
* **Marquee:** Scrolling updates on latest arrivals.
* **Featured Tiles:** Showcasing the top 4 tiles.

### 🖼️ All Tiles Page
* **Dynamic Listing:** Fetches tile data from a JSON source.
* **🔍 Search Functionality:** Real-time search by tile title.
* **Responsive Layout:** Clean grid design for all screen sizes.
* **"View Details":** Quick navigation to individual tile pages.

### 🔍 Tile Details Page
* **Visuals:** Large high-resolution image preview.
* **Information:** Detailed title, description, category, and price.
* **Tags:** Categorized labels (e.g., Minimalist, Blue, Ceramic).

### 🔐 Authentication
* **Standard Login:** Email & Password authentication.
* **Social Login:** Google Authentication integrated.
* **Registration:** User sign-up system.
* **Feedback:** Error and success handling via toast notifications.

---

## 🛠️ Technologies Used

* ⚛️ **Next.js** (App Router)
* 🎨 **Tailwind CSS** + **HeroUI / DaisyUI**
* 🔐 **BetterAuth**
* 🗄️ **MongoDB**
* 🔔 **React Hot Toast**
* 🎞️ **Animate.css**

---



---

## 📱 Responsiveness

* ✅ **Mobile Friendly**
* ✅ **Tablet Friendly**
* ✅ **Desktop Optimized**

---

## 🔒 Route Permissions

### 🌍 Public Routes
* `/` (Home)
* `/all-tiles`
* `/login`
* `/register`

### 🔐 Private Routes
* `/tile/[id]` (Details Page)
* `/my-profile`

---

## ✨ Additional Features

* **Loading States:** Smooth loaders during data fetching.
* **404 Page:** Custom "Not Found" page for broken links.
* **Animations:** Integrated Animate.css for a polished feel.
* **Modern UI:** Clean, minimalist design focused on imagery.
