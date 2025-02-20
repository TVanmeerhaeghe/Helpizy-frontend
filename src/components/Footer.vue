<template>
    <footer>
        <AppReconfort />
        <section class="footer">
            <div class="footer-logo">
                <img src="../assets/logo.png" alt="logo">
                <p>Helpizy t’accompagne avec plus de 1 000 de tutoriels sur des tâches de la vie quotidienne.</p>
            </div>
            <div class="nav-footer">
                <div>
                    <p class="title-footer">Produit</p>
                    <ul>
                        <li><a href="#">Thèmes</a></li>
                        <li><a href="#">Abonnement</a></li>
                        <li><a href="#">Contribuer</a></li>
                    </ul>
                </div>
                <div>
                    <p class="title-footer">Ressources</p>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Newsletter</a></li>
                        <li><a href="#">Nous contacter</a></li>
                        <li><a href="#">A propose de helpizy</a></li>
                    </ul>
                </div>
            </div>
            <div class="newsletter-container">
                <p class="newsletter-text">Reste informé(e) de nos derniers conseils !</p>
                <div class="newsletter-form">
                    <input type="email" placeholder="Entrer mon adresse email" class="newsletter-input" />
                    <button class="news-btn">S'inscrire</button>
                </div>
            </div>

        </section>
    </footer>
</template>

<script>

import AppReconfort from '@/features/Reconfort.vue'
export default {
    name: 'AppFooter',
    components: {
        AppReconfort
    },
};
</script>

<style scoped>
footer {
    margin-top: 80px;
}

.footer {
    padding: 60px 30px;
    display: flex;
    justify-content: space-evenly;
    max-width: 1200px;
    margin: 0 auto;
    gap: 70px;
}

.footer-logo {
    width: 270px;
}

.nav-footer {
    display: flex;
    gap: 100px;
}

.nav-footer p {
    font-weight: 600;
    color: #101828;
}

.nav-footer ul {
    padding-left: unset;
}

.nav-footer ul li {
    color: #53B1FD;
    margin-top: 12px;
}

.newsletter-text {
    color: #101828;
    font-size: 14px;
    font-weight: 600;
}

.newsletter-input {
    padding: 10px;
    font-size: 14px;
    border: 1px solid #D0D5DD;
    border-radius: 10px;
    outline: none;
    transition: border-color 0.3s ease;
    width: 226px;
}

input::placeholder {
    font-size: 14px;
    color: #667085;
    font-weight: 400;
}

.newsletter-container button {
    margin-left: 15px;
    width: 100px;
    cursor: pointer;
}

.title-footer {
    font-weight: 700;
}

.news-btn {
    background-color: #FFA500;
}

@media screen and (max-width:1080px) {
    .footer {
        max-width: unset;
        flex-direction: column;
        align-items: center;
    }

    .footer-logo {
        width: unset;
    }
}

@media screen and (max-width:760px) {
    .newsletter-input {
        width: unset;
    }

    .newsletter-container {
        width: unset;
    }
}
</style>