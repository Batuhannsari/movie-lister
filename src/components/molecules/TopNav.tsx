import React, { useCallback, useEffect, useState } from 'react'
import styles from "./TopNav.module.scss";
import logo from '@/assets/logo.svg'
import Image from 'next/image';
import { Autocomplete, Button, ButtonGroup, InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { setSearch, setType, setYear } from '@/redux/slices/filtersSlicer';
import { debounce } from 'lodash';
import { getMovies } from '@/redux/slices/movieOrSeriesSlice';
import { Search } from "@mui/icons-material";
import Link from 'next/link';

const TopNav = () => {
    const dispatch = useAppDispatch();
    const filters = useAppSelector((state) => {
        return state.filters;
    });

    const [filtersStates, setFiltersStates] = useState({
        searchValue: filters.s,
        type: filters.type,
        year: filters.y
    })

    function years() {
        const currentYear = new Date().getFullYear()
        const list = [];
        for (let i = currentYear; i >= currentYear - 199; i--) {
            list.push(i);
        }
        return list;
    }

    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value))
    }

    const debouncedOnChangedSearch = useCallback(
        debounce(
            handleChangeSearch, 500
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
                        onChange={(e) => {
                            debouncedOnChangedSearch(e as React.ChangeEvent<HTMLInputElement>)
                            setFiltersStates((prev) => ({ ...prev, searchValue: e.target.value }))
                        }}
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
                        value={filtersStates.searchValue}
                    />
                    <ButtonGroup size="large" aria-label="small button group">
                        <Button onClick={(e) => {
                            setFiltersStates((prev) => ({ ...prev, type: "movie" }))
                            dispatch(setType("movie"))
                        }} variant={`${filtersStates.type === "movie" ? "contained" : "outlined"}`} color={'secondary'} key="movie">
                            Filmler
                        </Button>
                        <Button onClick={() => {
                            dispatch(setType("series"))
                            setFiltersStates((prev) => ({ ...prev, type: "series" }))
                        }} variant={`${filtersStates.type === "series" ? "contained" : "outlined"}`} color={'secondary'} key="series">
                            Diziler
                        </Button>
                       {/*  <Button onClick={() => {
                            dispatch(setType("episode"))
                            setFiltersStates((prev) => ({ ...prev, type: "episode" }))
                        }} variant={`${filtersStates.type === "episode" ? "contained" : "outlined"}`} color={'secondary'} key="episode">
                            Dizi Bölümleri
                        </Button> */}
                    </ButtonGroup>

                    <Autocomplete
                        options={years()}
                        value={filtersStates.year}
                        onInputChange={(event, newInputValue) => {
                            setFiltersStates((prev) => ({ ...prev, year: newInputValue }))
                            dispatch(setYear(newInputValue))
                        }}
                        isOptionEqualToValue={(option, value) => option === Number(value)}
                        renderInput={(params) => <TextField color='secondary' {...params} label="Yıl" />}
                        clearIcon={false}
                        className={styles.year}
                        getOptionLabel={(option) => option.toString()}
                    />
                </div>

                <Link href={''} >
                    <Button variant='text' color='secondary' >Sign in</Button>
                </Link>

            </div>
        </>
    )
}

export default TopNav