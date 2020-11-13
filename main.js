var app = new Vue({
    el: "#root",
    data: {
        contactactive: 0,
        nuovomessaggio: "",
        filterText: "",
        contacts: [
            {
                name: 'Michele',
                avatar: 'https://boolzap.netlify.app/img/Harry.svg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Fabio',
                avatar: 'https://boolzap.netlify.app/img/Luca.svg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Samuele',
                avatar: 'https://boolzap.netlify.app/img/Marco.svg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Luisa',
                avatar: 'https://boolzap.netlify.app/img/Martina.svg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:40:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Francesca',
                avatar: 'https://boolzap.netlify.app/img/Francesca.svg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Vieni con me a correre al parco?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:35:00',
                        message: 'Ok ci vediamo li alle 17.00',
                        status: 'received'
                    },
                ]
            },
            {
                name: 'Roberto',
                avatar: 'https://boolzap.netlify.app/img/Roberto.svg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 17:30:55',
                        message: 'Giochiamo ai videogiochi?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 17:37:00',
                        message: 'No, non posso devo studiare',
                        status: 'received'
                    },
                ]
            }
        ]
    },
    methods: {
        // Mi permette di aprire la chat dove clicco
        clickchat(index){
            this.contactactive = index;
        },
        addmessage(newmessage){

            // Creo una un oggetto per inserire il nuovo messaggio
            var newmessage = {
                date: this.orario(),
                message: '',
                status: 'sent'
            }

            // inserisco il valore dell'intup netro message della nuova varibile
            newmessage.message = this.nuovomessaggio;

            // console.log(newmessage);

            // All'interno dell'array contact, nel conttatto corrente in messaggi faccio push del nuovo oggetto creato prima
            this.contacts[this.contactactive].messages.push(newmessage);

            // Ripulisco la stringa del input
            this.nuovomessaggio = "";

            // console.log(this.contacts[this.contactactive]);

            setTimeout(() => {
                // Creo un oggetto per la risposta
                var newmrisp = {
                    date: this.orario(),
                    message: 'ok',
                    status: 'received'
                }

                // Stesso procedimento riga 145
                this.contacts[this.contactactive].messages.push(newmrisp);
            },1000);

        },
        filtrochat(){

            // Creo una variabile per salvare il valore scritto nell'input
            var ricerca_utente = this.filterText.toLowerCase();

            console.log(ricerca_utente);

            // Scorro l'array contacts
            this.contacts.forEach((item) => {

                // Se il nome del contatto corrente (nimuscolo) è incluso nella varibiale dove c'è il valore dell'input
                if (item.name.toLowerCase().includes(ricerca_utente)) {
                    // stampo in pagina se è vero
                    item.visible = true;
                } else {
                    // non stampo in pagina se è falso
                    item.visible = false;
                }
            });

        },
        // Funzione per orario corrente che va al messaggio inviato
        orario() {
            return moment().format("HH:mm");
        },
        // Funzione per prendere l'ora dell'ultimo messaggio
        getFormattedtime(chat) {

            var date = chat.messages[chat.messages.length - 1].date;

            console.log(date);

            return moment(date, "DD/MM/YYYY HH:mm:ss").format('HH:mm');
        }
    }

});
