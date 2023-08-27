import React, { useCallback, useEffect, useState } from 'react'
import styles from "./TopNav.module.scss";
import logo from '@/assets/logo.svg'
import Image from 'next/image';
import { InputAdornment, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { setSearch } from '@/redux/slices/filtersSlicer';
import { debounce } from 'lodash';
import { getMovies } from '@/redux/slices/movieSlice';
import { Search } from "@mui/icons-material";

const TopNav = () => {
    const dispatch = useAppDispatch();
    const filters = useAppSelector((state) => {
        return state.filters;
    });

    const [searchValue, setSearchValue] = useState(filters.s)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value)), 500
    }

    const debouncedOnChanged = useCallback(
        debounce(
            handleChange, 500
        ),
        [],
    )

    useEffect(() => {
        dispatch(getMovies())

    }, [JSON.stringify(Object.values(filters))])


    return (
        <>
            <div className={styles.layout}>

                <Image className={styles.logo} src={logo} alt='' />
                <div className={styles.search} >
                    <TextField
                        variant="outlined"
                        placeholder="Search"
                        onChange={(e) => { setSearchValue(e.target.value) }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            ),
                            sx: (theme) => ({
                                backgroundColor: theme.palette.background.paper,
                            }),
                        }}
                        size="small"
                        value={searchValue}
                    />
                </div>

            </div>
        </>
    )
}

export default TopNav