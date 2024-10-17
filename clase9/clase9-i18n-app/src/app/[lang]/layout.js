export async function getStaticParams(){
    return [{lang: 'en'}, {lang: 'es'}, {lang: 'de'}];
}

export default function RootLayout({children,params}) {
    return(
        <html>
            {children}
        </html>
    );
}