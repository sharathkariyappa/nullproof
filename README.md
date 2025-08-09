# 🚀 Nullproof

**Nullproof** is a **ZK-powered decentralized identity agent** that classifies users as **Founders**, **Investors**, or **Contributors** — all while keeping their sensitive data private.

Powered by AI/ML and Zero-Knowledge Proofs, Nullproof leverages both **on-chain** and **off-chain** signals to create **verifiable, privacy-preserving role credentials**.

> 🧠 *Prove who you are — without revealing how.*

---

## 🔧 Tech Stack

|      Layer       |      Stack & Tools         | 
|------------------|----------------------------|
| **Frontend**     | React + TypeScript + Vite  |
| **AI/ML Model**  | Python + Flask             |
| **Backend**      | Node.js + Express          |
| **ZK Proofs**    | Circom + SnarkJS           |
| **Blockchain**   | ethers.js + Infura/Alchemy |
| **Identity**     | ethrDID                    |
| **VC Storage**   | IPFS                       |

---

## ⚙️ Getting Started

### 🔵 Frontend Setup

```bash
# 1. Clone the repository
git clone https://github.com/sharathkariyappa/nullproof.git

# 2. Navigate to the frontend
cd nullproof/client

# 3. Install dependencies
npm install

# 4. Add environment variables
touch .env
```

`.env`:
```env
VITE_GITHUB_CLIENT_ID=your_github_client_id
VITE_GITHUB_SECRET_KEY=your_github_secret_key
VITE_CERAMIC_KEY=your_ceramic_key
```

```bash
# 5. Start the dev server
npm run dev
```

---

### 🟢 Backend Setup

```bash
# 1. Navigate to the backend
cd ../backend

# 2. Install dependencies
npm install

# 3. Add environment variables
touch .env
```

`.env`:
```env
INFURA_KEY=your_infura_project_id
ALCHEMY_KEY=your_alchemy_key
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_SECRET_KEY=your_github_secret_key
```

```bash
# 4. Run the server
node index.js
```

---

### 🤖 AI Model Setup (Flask API)

The machine learning model is written in Python and deployed using Flask. It analyzes:

- GitHub data: PRs, commits, issues
- Blockchain data: token holdings, transaction volume, contract interactions

Based on this data, the model generates a **role classification score**, which is used in the ZK proof.

> 📍 **Note:** Instructions for running the ML model locally or deploying it to cloud platforms (like Hugging Face Spaces or Render) will be available in `/ml/README.md`.

---

### 🛡️ Zero-Knowledge Setup (Circom + SnarkJS)

Nullproof uses Circom circuits and SnarkJS to:

- Convert ML outputs into ZK-friendly inputs
- Generate and verify zk-SNARK proofs
- Prove role identity without exposing the raw score

```bash
# Example commands (inside zk/ directory)
circom role_verification.circom --r1cs --wasm --sym
snarkjs groth16 setup role_verification.r1cs powersOfTau28_hez_final_10.ptau role_verification.zkey
snarkjs zkey export verificationkey role_verification.zkey verification_key.json
```

---

## 🧠 How It Works

1. **User connects wallet + GitHub**
2. **Backend pulls user’s GitHub & on-chain metrics**
3. **ML model predicts a role score**
4. **ZK circuit generates a proof of role (no raw data exposed)**
5. **User gets a verifiable, private role credential (VC + DID)**

---

## 🔮 Roadmap

- ✅ GitHub + Wallet linking  
- ✅ AI-powered role classification  
- ✅ ZK circuit for private role proof  
- 🚧 **On-chain verifier contract**  
- 🚧 **Reputation layer (on-chain/off-chain)**  
- 🚧 **DAO Integration**  
- 🚧 **Premium Profiles**  
- 🚧 **Solana Chain Support**  
- 🚧 **AI Suggestions for Score Improvement**  

---

## 🤝 Contributing

We welcome contributions from the community!

- Submit feature requests
- Report issues
- Open PRs for improvements
- Suggest integrations or DAO proposals

> ⭐ Star the repo to support the project!

---

## 📄 License

This project is licensed under the **MIT License**.