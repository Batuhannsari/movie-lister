import CustomModal from '@/components/atoms/CustomModal';
import { setImdbID } from '@/redux/slices/movieOrSeriesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { CloseRounded } from '@mui/icons-material';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/router';

function SeriesDetailModal() {

    const router = useRouter()
    const dispatch = useAppDispatch()
    const movie = useAppSelector((state) => {
        return state.movies.movie;
    });
    const series = useAppSelector((state) => {
        return state.movies.series;
    });

    console.log('movie', movie)
    console.log('series', series)


    return (


        <CustomModal
            title={"dizi modalı"}
            open={true}
            onClose={() => {
                router.replace({ query: {} })
            }}
        /* buttons={[
            {
                children: "Kaydet",
                variant: "contained",
                color: "secondary",
                type: "submit",
            },
        ]} */
        >

        </CustomModal>
    );
}

export default SeriesDetailModal