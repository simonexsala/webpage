---
coverImage: /progetti/dotfiles.jpg
year: 2022
title: .dotfiles
description: I file di configurazione del mio sistema Linux con i3, un gestore di finestre affiancate. Diversi componenti sono stati scritti in shell script da me o personalizzati secondo i miei criteri estetici
addedDate: 2022/10/22
field: Informatica
tags: dotfiles, ., linux, informatica
---

# .dotfiles


I file di configurazione del mio sistema Linux con i3, un gestore di finestre affiancate. Diversi componenti sono stati scritti in shell script da me o personalizzati secondo i miei criteri estetici e le mie necessità. Buona parte del codice è indipendente e può dunque essere riutilizzato in qualsiasi altro ambiente, ma è stato sviluppato per la mia macchina che monta Linux Manjaro.

Il compositor implementa le animazioni. Rofi è stato integrato con Polybar e sono disponibili diverse applicazioni, tra cui un riassunto del meteo (i dati provengono da [wttr.in](https://wttr.in)) e dei mercati di criptovalute ([rate.sx](http://rate.sx/)). Per entrambe queste applet Polybar esegue periodicamente uno script che aggiorna i dati salvandoli in memoria, Rofi legge poi da lì per popolare i campi. Sono presenti anche altre applicazioni di Rofi integrate tra cui un menù per l'accensione e lo spegnimento, un navigatore di applicazioni, uno strumento per screenshot e un timer. Oltre a un gestore dei dispositivi bluetooth, delle connessioni wifi, delle interfacce audio e delle periferiche esterne. Questi programmi non contengono tutte le funzionalità e dipendono da altri, ma sono un'interfaccia esteticamente omogenea, pulita e leggera per accedere velocemente alle funzioni più comuni. Per le funzioni estese consiglio gli strumenti a riga di comando su cui ciò che ho scritto io è basato.
Il tema dei colori è Catppuccin Mocha. La totalità del codice è libera e senza alcuna restrizione o sotto alcun tipo di licenza. 

L'intera configurazione è disponibile su [github](https://duckduckgo.com) con altre immagini.

|                       |                  |
|-----------------------|------------------|
| *Gestore di finestre* | i3               |
| *Compositor*          | Picom-Pijulius   |
| *Barra*               | Polybar          |
| *Terminal*            | Alacritty        |
| *Editor*              | Lunar Vim        |
| *Browser*             | Firefox          |
| *Launcher*            | Rofi             |
| *Notifiche*           | Dunst            |
| *Lockscreen*          | BetterLockscreen |
| *Lettore PDF*         | Zathura          |



