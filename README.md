# HairRanch – Véleményoldal | Kecskemét

Üdvözlünk a **HairRanch** hivatalos véleményoldalán!  
Ez a webalkalmazás lehetővé teszi a vendégek számára, hogy visszajelzést írjanak, értékeljenek, és megosszák élményeiket a kecskeméti HairRanch fodrászszalonnal kapcsolatban.

![image](https://github.com/user-attachments/assets/dbaa7aa7-6250-40af-ad55-b0369a1f48fa)


## Funkciók

- Vendégvélemények beküldése (név, email, értékelés, szöveges visszajelzés)
- Csillagos értékelés (1–5)
- Vélemény törlése (csak frontend listából, azonosító alapján)
- Dinamikusan váltakozó háttérképek
- Véletlenszerű hangulat ikon minden véleményhez
- Egyedi stílusú, barna színű vékony görgetősáv

---

## 🛠 Technológiák

- **Frontend**: React, TailwindCSS
- **Backend**: Express.js
- **Adattárolás**: Memóriában (`reviews[]` tömb – nem tartós, újraindításkor törlődik)
- **Portok**:
  - Backend: `http://localhost:88`
  - Frontend: saját React szerver vagy beépített build

---

![image](https://github.com/user-attachments/assets/19213a4b-cdc6-402c-a4c5-71c1f8d79515)


## Telepítés & Futatás

### 1. Backend (Express)

```bash
cd backend
npm install
node index.js
