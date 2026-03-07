# Instrukcja konfiguracji Netlify Identity i CMS

Aby móc zarządzać zdjęciami na stronie Omega Drill przez panel administratora, należy skonfigurować usługę Netlify Identity. Poniżej znajduje się instrukcja krok po kroku.

## 1. Aktywacja Netlify Identity
1. Zaloguj się do swojego panelu sterowania na [Netlify](https://app.netlify.com/).
2. Wybierz swoją stronę (`omegadrill`).
3. Przejdź do zakładki **Site configuration** -> **Identity**.
4. Kliknij przycisk **Enable Identity**.

## 2. Konfiguracja rejestracji i logowania
1. W sekcji **Registration preferences** wybierz **Invite only** (zalecane, aby tylko osoby z zaproszeniem mogły edytować stronę).
2. W sekcji **External providers** możesz dodać logowanie przez Google lub GitHub, jeśli wolisz.
3. **Ważne:** Przewiń na dół do sekcji **Services** -> **Git Gateway** i kliknij **Enable Git Gateway**. To umożliwi CMS-owi zapisywanie zmian bezpośrednio w Twoim repozytorium GitHub.

## 3. Dodawanie użytkownika
1. Wróć do głównej zakładki **Identity** (na górnym pasku, obok Deploys).
2. Kliknij przycisk **Invite users**.
3. Wpisz swój adres e-mail. Otrzymasz wiadomość z linkiem do potwierdzenia konta i ustawienia hasła.

## 4. Logowanie do panelu administratora
1. Wejdź na swoją stronę pod adres: `https://twoja-domena.netlify.app/admin/`.
2. Kliknij przycisk **Login with Netlify Identity**.
3. Wpisz swoje dane logowania.
4. Po zalogowaniu zobaczysz panel **Decap CMS**, w którym możesz dodawać nowe realizacje do galerii.

## 5. Dodawanie zdjęć
1. W panelu wybierz kolekcję **Galeria**.
2. Kliknij **New Galeria**.
3. Wypełnij tytuł, datę i załącz zdjęcie.
4. Kliknij **Publish**. Netlify automatycznie przebuduje stronę i nowe zdjęcie pojawi się w galerii w ciągu 1-2 minut.
## Rozwiązywanie problemów

### Błąd: "Unable to access identity settings"
Jeśli widzisz ten błąd, upewnij się że:
1. **Identity** jest włączone w panelu Netlify (Site Settings -> Identity -> Enable Identity).
2. **Git Gateway** jest włączony (Site Settings -> Identity -> Services -> Git Gateway -> Enable).
3. Twoje repozytorium GitHub jest poprawnie połączone w ustawieniach **Git Gateway**.
4. W sekcji **Registration preferences** status usługi to "Open" lub "Invite only".
5. Jeśli strona jest na nowej domenie, upewnij się, że certyfikat SSL (HTTPS) jest aktywny.
