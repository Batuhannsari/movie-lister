import CustomModal from '@/components/atoms/CustomModal';
import { setImdbID } from '@/redux/slices/movieOrSeriesSlice';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { CloseRounded } from '@mui/icons-material';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import styles from "./SeriesDetailModal.module.scss";

function SeriesDetailModal() {

    const router = useRouter()
    const dispatch = useAppDispatch()
    const series = useAppSelector((state) => {
        return state.movies.series;
    });


    return (


        <CustomModal
            title={series.Title}
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
            <div className={styles.layout}>
                asd
            </div>
        </CustomModal>
    );
}

export default SeriesDetailModal