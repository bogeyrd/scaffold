import { defineChain } from "viem";

export const baseSepolia = defineChain({
  id: 84531, // Asegúrate de usar el ID correcto para Sepolia
  name: "Base Sepolia",
  nativeCurrency: { name: "Base Sepolia", symbol: "ETH", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://sepolia.base.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "Basescan Sepolia",
      url: "https://sepolia.basescan.org",
    },
  },
});
