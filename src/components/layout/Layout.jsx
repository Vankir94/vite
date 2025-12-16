import { useState, useRef, useEffect, useCallback } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonProgressBar, IonButton } from '@ionic/react';
import { useThemeContext } from '../themeContext/use-theme-context.js';

export function Layout({children}) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const contentRef = useRef(null);
    const {theme, toggleTheme} = useThemeContext();

    // Вынесенная функция для вычисления прогресса
    const calculateProgress = useCallback(async () => {
        const content = contentRef.current;
        if (!content) return;

        try {
            const scrollElement = await content.getScrollElement();
            if (!scrollElement) return;

            const scrollTop = scrollElement.scrollTop;
            const scrollHeight = scrollElement.scrollHeight;
            const clientHeight = scrollElement.clientHeight;
            
            const maxScroll = scrollHeight - clientHeight;
            const progress = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;
            
            setScrollProgress(progress);
        } catch (error) {
            console.error('Error calculating scroll progress:', error);
        }
    }, []);

    // Обработчик прокрутки
    const handleScroll = useCallback(() => {
        calculateProgress();
    }, [calculateProgress]);

    // Инициализация прогресса
    useEffect(() => {
        const content = contentRef.current;
        if (!content) return;
        calculateProgress();
    }, [children, calculateProgress]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Restaurant App</IonTitle>
                    <IonButton onClick={toggleTheme}>
                        Тема: {theme}
                    </IonButton>
                </IonToolbar>
                <IonProgressBar value={scrollProgress}></IonProgressBar>
            </IonHeader>
            <IonContent ref={contentRef} onIonScroll={handleScroll} scrollEvents={true}>
                {children}
            </IonContent>
        </IonPage>
    );
}