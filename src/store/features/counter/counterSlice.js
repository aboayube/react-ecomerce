import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0, // count of all items in cart
        productItem: [], // selected items to show in cart
        pecies: [] // to merge product that have more than one peice

    },
    reducers: {

        // Add to productItem array if not exist or update
        increament(state, { payload }) {

            // check if exist (edit qty) if not (add new)
            const exist = state.productItem.find((x) => x.id === payload.id);
            if (exist) {
                state.pecies.map((x) => x.id === payload.id ? x.qty += 1 : x)

            } else {
                state.productItem.push(payload);
                state.pecies.push({ id: payload.id, qty: 1 })
            }

            state.value += 1

        },

        decreament(state, { payload }) {


            var removeIndex = state.pecies.map((item) => item.id).indexOf(payload)

            state.pecies.map((item) => {
                if (item.id == payload) {
                    if (item.qty == 1) {
                        state.pecies.splice(removeIndex, 1);
                        state.productItem.splice(removeIndex, 1);
                        state.value -= 1;
                    } else {
                        item.qty -= 1;
                        state.value -= 1;
                    }
                }
            })

        },
        // delete product from items and pecies arrays
        deleteItem(state, { payload }) {

            var result = window.confirm("Do you want to DELETE this item?")
            if (result) {
                var removeIndex = state.productItem.map((item) => item.id).indexOf(payload)
                state.productItem.splice(removeIndex, 1)

                state.pecies.map((item) => {
                    if (item.id === payload) {
                        state.value -= item.qty

                        state.pecies.splice(removeIndex, 1)
                    }
                })
            }

        }
    },
})

export const { increament, decreament, deleteItem } = counterSlice.actions
export default counterSlice