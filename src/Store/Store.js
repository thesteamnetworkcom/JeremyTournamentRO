import { configureStore } from "@reduxjs/toolkit";
import PlayerReducer from "./Reducers/PlayerReducer";
import MatchReducer from "./Reducers/MatchReducer";
import StepsReducer from "./Reducers/StepsReducer";
import VanguardReducer from "./Reducers/VanguardReducer";

import PairMatch1 from "./Middleware/PairMatch1";
import PairRemainingMatches from "./Middleware/PairRemainingMatches";
import UpdateMatch from "./Middleware/UpdateMatch";
import thunk from "redux-thunk";

const middleware = [
	thunk,
	PairMatch1,
	PairRemainingMatches,
	UpdateMatch,
];

const Store = configureStore({
	reducer:{
		players:PlayerReducer,
		matches:MatchReducer,
		steps:StepsReducer,
		vanguards:VanguardReducer,
	},
	middleware,
})

export default Store;