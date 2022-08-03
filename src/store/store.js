import { configureStore } from "@reduxjs/toolkit";

import gameState from "./gameState";

export const store = configureStore({
  reducer: {
    gameState,
  },
});
