# T-Codes utili
- `SE80` Object navigator: permette di sfogliare il contenuto dei packages.

## ABAP
- `SE38`: crea/modifica un programma ABAP.
- `SE24`: editor classi ABAP.
- `ST22`: elenco errori runtime
- `SE37`: si può usare per testare l'esecuzione di BAPI

## Tabelle
- `SE11`: crea/modifica struttura tabella
- `SE14`: manutenzione tabella
- `SE16`/`SE16`: visualizza contenuto tabella
- `SE54`: crea/modifica una maintenance view.
- `SM30`: richiama una maintenance view.
- `SM34`: cluster maintenance view.

## Gestione CR
- `SE10`: visualizza/crea CR
- `STMS`: gestione code CR
- `SE03`: transport request tools

## Utenti/permessi
- `SU01`: gestione utenti
- `PFCG`: gestione ruoli
- `SUIM`: ricerca utenti/permessi/ruoli/ecc.
- `SU53`: visualizza log errori autorizzativi

## Servizi web e app fiori
- `SICF`: gestione servizi (per abilitare le app fiori dopo trasporto)
- `SEGW`: costruzione servizi custom gateway
- `/iwfnd/maint_service`: gestione servizi gateway
- `/iwbep/reg_service`: gestione manuale servizi gateway
- `/n/ui2/flp`: apre fiori launchpad nel browser
- `/n/ui2/flpd_conf`: apre fiori launchpad defigner nel browser
- `EXTID_DN`: associazione user cloud e utente SAP (principal propagation)

## Inbox
- `SBWP`: apre la inbox (SAP Business Workplace)

## Workflow
- `SWDD`: workflow editor
- `SWIA`: workflow log

## Workitem
- `SWI1`: visualizza workitem

## Sistema
- `SM50`: task manager
- `SM59`: connessioni (RFC, ...)
- `AL11`: per sfogliare le cartelle accessibili da SAP
- `SM37`: log job
- `SPAD`: gestione stampanti
- `ST05`: trace SQL/HTTP/ecc.
- `SHDB` Analizzare transazioni per vedere i nomi tecnici dei parametri
- `CG3Y`/`CG3Z`: download/upload file dalla macchina SAP

## Documentale
- `OAC0`: per configurare le connessioni esterne (es. Alink)
- `OAC3`: assegnazione tipo oggetto - repository esterno
- `OAWD`: carica documento

## Coda eventi
- `SWELS`: abilita/disabilita trace eventi
- `SWEL`: mostra trace eventi
- `SWE2`: associa handler a eventi
- `SWEQADM`: gestione coda eventi
- `SWU2`: simula evento

## VIM
- `/n/opt/vim`: menu principale VIM
- `/N/OPT/VIM_WP`: VIM Workplace

## EDocument
- `EDOC_COCKPIT`: coockpit e-document

## Email
- `SOIN`: email in ingresso su server SMTP
- `SCOT`: configurazione (Settings->Inbound Processing)

## Stampe
- `NACE`: visualizza messaggi di stampa (MM/SD)
- `SFP`: smartforms 

## IDOC
- `WE05`: log IDOC inviati/ricevuti
- `WE14`: invio IDOC in coda di uscita
- `WE19`: test tool / reinvio IDOC
- `WE60`: documentazione struttura IDOC
- `IDOC`: tool di analisi struttura e verifica contenuto IDOC

---

## Prefissi

- `/n` per richiamare un t-code dall'interno di un programma in esecuzione (anzichè dover prima tornare alla schermata iniziale).
- `/o` per aprire il nuovo comando in una nuova finestra del client.

--- 

# Transazioni funzionali

- `me22n`: visualizza ordini di acquisto OdA
- `me52n`: visualizza richieste di acquisto RdA
- `me42`: visualizza richieste di offerta RdO
- `mm02`: visualizza anagrafica materiali

--- 

# Report importanti (da se38)
- `RS_ABAP_SOURCE_SCAN`: permette di cercare del testo in tutti i sorgenti del sistema.