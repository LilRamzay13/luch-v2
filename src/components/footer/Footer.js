import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';



const Footer = () => {
    return (
        <footer>
            <div className="contact__me">
                <h2 >Оставьте данные и мы с вами свяжемся!</h2>
                <form action="mail.php" method="POST">

                    <div className="application-input" >
                        <TextField sx={{ mr: 2}} className="form-control" size='small' name="user_name" id="" label="Тема вопроса" variant="filled" />
                        <TextField sx={{ mr: 2}} className="form-control" size='small' name="user_phone" id="" label="Номер телефона" variant="filled" />

                    </div>

                    <div className="application-button">
                        <Button type="submit" className="btn btn-primary" variant="contained" endIcon={<PhoneCallbackIcon />}>
                            Перезвоните мне
                        </Button>
                    </div>
                </form>
            </div>
            <div className="footer-contacts">
                <p><strong>Адрес:</strong><br />692962, Приморский край, Партизанский район, с. Владимиро –
                    Александровское, ул. Лазо 125</p>
                <p><strong>Номер телефона:</strong><br />8(42365) 22-7-39</p>
                <p><small>© 1996-2023 ООО "ЛУЧ"</small></p>
            </div>
        </footer>
    );
}

export default Footer;