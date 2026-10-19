# Worm Server Pack (Packwiz)

Збірка Minecraft для сервера та клієнтів з автоматичним оновленням через **packwiz**.

## Інформація про збірку
- **Minecraft:** `1.21.1`
- **Завантажувач (Mod Loader):** NeoForge `21.1.262`
- **Packwiz Raw URL:** `https://raw.githubusercontent.com/dapenp/wormserverpack/main/pack.toml`

---

## Автоматичне встановлення та оновлення на клієнті (Prism Launcher / MultiMC)

1. Створіть екземпляр Minecraft:
   - Версія гри: **1.21.1**
   - Завантажувач: **NeoForge 21.1.262**
2. Завантажте [packwiz-installer-bootstrap.jar](https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest) та покладіть його в кореневу папку екземпляра (папку Minecraft).
3. У налаштуваннях екземпляра в розділі **Команди (Custom Commands)** увімкніть **Перед запуском (Pre-launch command)** і вкажіть:
   ```bash
   "$INST_JAVA" -jar packwiz-installer-bootstrap.jar https://raw.githubusercontent.com/dapenp/wormserverpack/main/pack.toml
   ```
4. Тепер при кожному запуску гри клієнт буде автоматично перевіряти оновлення в репозиторії та завантажувати нові моди, видаляючи старі. Клієнтські моди будуть завантажені автоматично.

---

## Автоматичне встановлення та оновлення на сервері

Для сервера використовуйте прапорець `-s server` (або `--side server`), щоб сервер **не завантажував** виключно клієнтські моди:

```bash
java -jar packwiz-installer-bootstrap.jar -s server https://raw.githubusercontent.com/dapenp/wormserverpack/main/pack.toml
```
 дапеноп какашка
