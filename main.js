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
                        date: '15:30',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '15:50',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '16:15',
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
                        date: '16:30',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '16:30',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '16:35',
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
                        date: '10:10',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '10:20',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '16:15',
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
                        date: '15:30',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '15:40',
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
                        date: '15:30',
                        message: 'Vieni con me a correre al parco?',
                        status: 'sent'
                    },
                    {
                        date: '15:35',
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
                        date: '17:30',
                        message: 'Giochiamo ai videogiochi?',
                        status: 'sent'
                    },
                    {
                        date: '17:37',
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
        // Funzione per orario corrente che va nell'ultimo messaggio
        orario() {
            return moment().format("HH:mm");
        },
        // Funzione per prendere l'ora dell'ultimo messaggio inviato
        getFormattedtime(chat) {

            var time = chat.messages[chat.messages.length - 1].date;

            console.log(time);

            return moment(time,"HH:mm").format('HH:mm');
        }


    }

});
