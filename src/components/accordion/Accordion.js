import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { spacing } from '@mui/system/spacing';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ImageIcon from '@mui/icons-material/Image';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='index-accordion'>
            <Accordion sx={{background: 'white', border: 0}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Структура</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='accordion-content'>
                        <ArrowDownwardIcon sx={{ mr: 1 }} />
                        <a href="resourses/ustav.tiff" download>Устав компании</a><br /><br />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{background: 'white', border: 0}}expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>История</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className='history'>
                        <ImageIcon /> <a href="resourses/gramota.jpg" target="_blank">Грамота</a><br />
                        <ImageIcon />  <a href="resourses/luchshee-predpriiatie.jpg" target="_blank">Лучшее предприятие</a><br />
                        <ImageIcon />  <a href="resourses/luchshii-straxovatel.jpg" target="_blank">Лучший предприятие страхователь</a>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{background: 'white', border: 0}}expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Сегодняшний день</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        В стадии разработки
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{background: 'white', border: 0}}expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Социальная ответственность</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        В стадии разработки
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{background: 'white', border: 0}}expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                    <Typography>Менеджмент</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        В стадии разработки
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className="info" sx={{background: 'white', border: 0}}expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                    <Typography>Контактная информация</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography>
                        <p><strong> Наименование организации: </strong> Общество с ограниченной ответственностью «Луч»</p>


                        <p><strong>Юридический адрес:</strong>
                            692962, Приморский край, Партизанский район, с. Владимиро – Александровское, ул. Лазо 125</p>


                        <p> <strong>Почтовый адрес:</strong>692962, Приморский край, Партизанский район, <br />с. Владимиро –
                            Александровское,
                            ул. Лазо 125 </p>
                        <p><strong>Контактные телефоны: </strong> 8(42365) 22-7-39</p>

                        <p><strong>Электронный адрес: </strong>
                            ooo_luch_25@mail.ru </p>
                        <p><strong>В статистическом реестре хозяйствующих субъектов Территориального органа федеральной
                            службы
                            государственной статистики по Приморскому краю имеют следующие коды:</strong><br />
                            ОКТМО – 05630402<br />
                            ОКПО – 33625979<br />
                            ОКАТО – 05230000001<br />
                            ИНН – 2524003651<br />
                            КПП – 252401001<br />
                            ОГРН – 1022501025744 от 07.12.2002<br />
                            ОКОГУ – 49013<br />
                            ОКФС – 16<br />
                            ОКОПФ – 65<br />
                            Основной ОКВЭД - 41.20</p >
                    </Typography>
                </AccordionDetails >
            </Accordion >
        </div>
    );
}