import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { LoginButton } from '@/components/LoginButton';
import { Layout } from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <LoginButton />
    </Layout>
  );
}
