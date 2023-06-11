import {createSlice, isRejectedWithValue, PayloadAction} from "@reduxjs/toolkit";
import {createAppAsyncThunk} from "../common/utils/create-app-async-thunk";
import {authApi} from "../features/auth/api/auth.api";
import {AxiosError} from "axios";

const slice = createSlice({
    // name должен быть уникальным
    // name будет использоваться в качетве приставки (redux ducks)
    name: "app",
    // Инициализационный стейт
    initialState: {
        error: null as string | null,
        isLoading: false,
        isAppInitialized: false,
    },
    // reducers состоит из подредьюсеров, каждый из которых эквивалентен одному оператору case в switch, как мы делали раньше (обычный redux)
    reducers: {
        setIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
            state.isLoading = action.payload.isLoading;
        },
    },
    extraReducers: builder => {
        // TODO loader поместить сюда

    }
});

const authMe = createAppAsyncThunk(
    "authMe",
    async (arg, thunkAPI) => {
        const {dispatch} = thunkAPI
        try {
            await authApi.authorization({})
        } catch (e) {
            isRejectedWithValue(e as AxiosError)
        }
    }
)

// Создаем reducer с помощью slice
export const appReducer = slice.reducer;
const appThunk = {authMe}
export const appActions = {...slice.actions, ...appThunk};


