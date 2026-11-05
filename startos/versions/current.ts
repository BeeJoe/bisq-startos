import { VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '1.10.11:0',
  releaseNotes: {
    en_US: `Updates Bisq to 1.10.11, required to continue trading. Adds Tor sandboxing, Tor 0.4.9.15 and Java security updates, and stronger protection for backups and private keys. If you use bridges with pluggable transports, enable “Allow pluggable transports in the Tor sandbox” in Bisq’s Tor network settings. Full release notes: https://github.com/bisq-network/bisq/releases/tag/v1.10.11`,
    es_ES: `Actualiza Bisq a 1.10.11, necesario para seguir operando. Añade aislamiento de Tor, Tor 0.4.9.15 y actualizaciones de seguridad de Java, y refuerza la protección de copias de seguridad y claves privadas. Si usas puentes con transportes conectables, permite estos transportes en el aislamiento de Tor desde la configuración de red Tor de Bisq. Notas completas: https://github.com/bisq-network/bisq/releases/tag/v1.10.11`,
    de_DE: `Aktualisiert Bisq auf 1.10.11, erforderlich für den weiteren Handel. Fügt eine Tor-Sandbox, Tor 0.4.9.15 und Java-Sicherheitsupdates sowie stärkeren Schutz für Sicherungen und private Schlüssel hinzu. Bei Bridges mit verschleiernden Transporten diese in den Tor-Netzwerkeinstellungen von Bisq für die Sandbox freigeben. Vollständige Versionshinweise: https://github.com/bisq-network/bisq/releases/tag/v1.10.11`,
    pl_PL: `Aktualizuje Bisq do wersji 1.10.11, wymaganej do dalszego handlu. Dodaje izolację Tora, Tor 0.4.9.15, aktualizacje zabezpieczeń Javy oraz lepszą ochronę kopii zapasowych i kluczy prywatnych. Jeśli używasz mostów z transportami wtykowymi, zezwól na nie w izolacji Tora w ustawieniach sieci Tor w Bisq. Pełne informacje: https://github.com/bisq-network/bisq/releases/tag/v1.10.11`,
    fr_FR: `Met à jour Bisq vers la version 1.10.11, requise pour continuer à trader. Ajoute une isolation de Tor, Tor 0.4.9.15 et des mises à jour de sécurité Java, et renforce la protection des sauvegardes et des clés privées. Si vous utilisez des ponts avec des transports enfichables, autorisez-les dans l’isolation de Tor depuis les paramètres réseau Tor de Bisq. Notes complètes : https://github.com/bisq-network/bisq/releases/tag/v1.10.11`,
  },
  migrations: {},
})
