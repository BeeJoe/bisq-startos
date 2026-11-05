import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.10.11:0',
  releaseNotes: {
    en_US: `Back up Bisq from StartOS before updating. Downgrades are blocked because Tor changes its data layout.

Updates Bisq to 1.10.11, required to continue trading, with sandboxed Tor 0.4.9.15, Java security updates, and stronger protection for backups and private keys.

- Configure Tor Sandbox keeps isolation enabled by default and lets you disable it explicitly if it prevents startup or your bridges cannot run inside it. Changing the setting restarts Bisq; disabling isolation exposes your wallet and keys to a compromised Tor process.
- For bridges with pluggable transports, enable "Allow pluggable transports in the Tor sandbox" in Bisq’s Tor network settings.
- The provided bridge list no longer includes obfs3, meek-amazon, or meek-azure; use a supported bridge instead.

Full release notes: https://github.com/bisq-network/bisq/releases/tag/v1.10.11`,
    es_ES: `Haz una copia de seguridad de Bisq desde StartOS antes de actualizar. Se bloquean las versiones anteriores porque Tor cambia la estructura de sus datos.

Actualiza Bisq a 1.10.11, necesario para seguir operando, con Tor 0.4.9.15 aislado, actualizaciones de seguridad de Java y mayor protección de copias de seguridad y claves privadas.

- Configurar aislamiento de Tor mantiene el aislamiento activado por defecto y permite desactivarlo explícitamente si impide iniciar Tor o usar tus puentes. El cambio reinicia Bisq; sin aislamiento, un proceso Tor comprometido puede acceder a tu monedero y tus claves.
- Para puentes con transportes conectables, activa "Allow pluggable transports in the Tor sandbox" en los ajustes de red Tor de Bisq.
- La lista de puentes proporcionados ya no incluye obfs3, meek-amazon ni meek-azure; usa un puente compatible.

Notas completas: https://github.com/bisq-network/bisq/releases/tag/v1.10.11`,
    de_DE: `Vor dem Update Bisq über StartOS sichern. Downgrades werden blockiert, da Tor seine Datenstruktur ändert.

Aktualisiert Bisq auf 1.10.11, erforderlich für den weiteren Handel, mit Tor 0.4.9.15 in einer Sandbox, Java-Sicherheitsupdates und stärkerem Schutz für Sicherungen und private Schlüssel.

- Tor-Sandbox konfigurieren lässt die Isolation standardmäßig aktiviert und ermöglicht die ausdrückliche Deaktivierung, wenn sie den Start oder die Nutzung Ihrer Bridges verhindert. Die Änderung startet Bisq neu; ohne Isolation kann ein kompromittierter Tor-Prozess auf Wallet und Schlüssel zugreifen.
- Bei Bridges mit verschleiernden Transporten "Allow pluggable transports in the Tor sandbox" in Bisqs Tor-Netzwerkeinstellungen aktivieren.
- Die bereitgestellte Bridge-Liste enthält obfs3, meek-amazon und meek-azure nicht mehr; verwenden Sie eine unterstützte Bridge.

Vollständige Versionshinweise: https://github.com/bisq-network/bisq/releases/tag/v1.10.11`,
    pl_PL: `Przed aktualizacją wykonaj kopię zapasową Bisq w StartOS. Powrót do starszych wersji jest zablokowany, ponieważ Tor zmienia układ danych.

Aktualizuje Bisq do wersji 1.10.11, wymaganej do dalszego handlu, z izolowanym Torem 0.4.9.15, aktualizacjami zabezpieczeń Javy oraz lepszą ochroną kopii zapasowych i kluczy prywatnych.

- Skonfiguruj izolację Tora domyślnie pozostawia izolację włączoną i pozwala ją jawnie wyłączyć, jeśli uniemożliwia uruchomienie lub działanie mostów. Zmiana uruchamia Bisq ponownie; bez izolacji przejęty proces Tora może uzyskać dostęp do portfela i kluczy.
- W przypadku mostów z transportami wtykowymi włącz "Allow pluggable transports in the Tor sandbox" w ustawieniach sieci Tor w Bisq.
- Dostarczana lista mostów nie zawiera już obfs3, meek-amazon ani meek-azure; użyj obsługiwanego mostu.

Pełne informacje: https://github.com/bisq-network/bisq/releases/tag/v1.10.11`,
    fr_FR: `Sauvegardez Bisq depuis StartOS avant la mise à jour. Le retour aux versions antérieures est bloqué, car Tor modifie l’organisation de ses données.

Met à jour Bisq vers la version 1.10.11, requise pour continuer à trader, avec Tor 0.4.9.15 isolé, des mises à jour de sécurité Java et une meilleure protection des sauvegardes et des clés privées.

- Configurer l’isolation de Tor maintient l’isolation activée par défaut et permet de la désactiver explicitement si elle empêche le démarrage ou le fonctionnement de vos ponts. Ce changement redémarre Bisq ; sans isolation, un processus Tor compromis peut accéder au portefeuille et aux clés.
- Pour les ponts utilisant des transports enfichables, activez "Allow pluggable transports in the Tor sandbox" dans les paramètres réseau Tor de Bisq.
- La liste de ponts fournie ne contient plus obfs3, meek-amazon ni meek-azure ; utilisez un pont pris en charge.

Notes complètes : https://github.com/bisq-network/bisq/releases/tag/v1.10.11`,
  },
  migrations: { down: IMPOSSIBLE },
})
