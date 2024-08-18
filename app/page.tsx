import styles from '@/app/home.module.css';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <main className={styles.main}>
            {/* <div className={styles.shape}></div> */}
            <div className={styles.header_bar}>
                <AcmeLogo />
            </div>
            <div className={styles.content_container}>
                <div className={styles.content_sidebar}>
                    <div
                        className={styles.vercel_logo_css}
                    />
                    <p className={``}>
                        <strong>Welcome to Acme.</strong> This is the example for the{' '}
                        <a href="https://nextjs.org/learn/" className="text-blue-500">
                            Next.js Learn Course
                        </a>
                        , brought to you by Vercel.
                    </p>
                    <Link href="/login"
                        className={styles.btn}>
                        <span>Log in</span>
                        <ArrowRightIcon className="w-5 md:w-6" />
                    </Link>
                </div>
                <div className={styles.content_rightbar}>
                    {/* Add Hero Images Here */}
                    <Image
                        src="/hero-desktop.png"
                        width={1000}
                        height={760}
                        className="hidden md:block"
                        alt="Screenshots of the dashboard project showing desktop version"
                    />
                    <Image
                        src="/hero-mobile.png"
                        width={560}
                        height={620}
                        className="block md:hidden"
                        alt="Screenshot of the dashboard project showing mobile version"
                    />
                </div>
            </div>
        </main>
    );
}
