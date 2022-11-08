import { createSlice } from "@reduxjs/toolkit";
import exploreitems from '../data/exploreitems.json';

const tuitsSlice = createSlice({
 name: 'exploreitems',
 initialState: exploreitems
});

export default tuitsSlice.reducer;